import React, { Fragment, useState , useEffect} from 'react'
import Result from './Result'


const InputAndBtns = ({setCurrentInput,time,setTime,setWillRestart,correctIncorrectWords,showResult}) => {
  let id;
  let [firstTime,setFirstTime] = useState(true);
  // let [time,setTime] = useState(60);
  let [isTyping,setIsTyping] = useState(false);
  
  useEffect(() => {
    if (isTyping ) {
      id = setInterval(() => {
        setTime(prevTime => prevTime-1)
      },1000);
      return () => clearInterval(id);
    }
  },[isTyping]);

  useEffect(() => {
    if( time <= 0 ){
      document.querySelector('input').value='';
      document.querySelector('input').blur();
      setFirstTime(prevFirstTime => !prevFirstTime);
      setIsTyping(prevIsTyping => !prevIsTyping)
      clearInterval(id);
    }
  },[time]);
  
  return (
    <Fragment>
        <div className='container d-flex justify-content-center align-items-center my-auto'>
            <input className='form-control-lg' autoFocus
            onChange={
              
              firstTime
              ? (e) => {
                
                setIsTyping(prevIsTyping => !prevIsTyping);
                setFirstTime(prevFirstTime => !prevFirstTime);
                //setCurrentInput(e.target.value);

              }
              : (e) => {
                let input = e.target.value;
                setCurrentInput(e.target.value);
                if (input.charAt(input.length-1) === ' '){
                  e.target.value='';
                };
              }
            }

            >
            </input>
            <div className='ms-3 btn btn-primary' dataToggle="tooltip" dataPlacement="top" title="Restart"
            onClick={() => {
              setWillRestart(true);
              setTime(60);
              setIsTyping(false)
              setFirstTime(true);
            }}>
              <i className="fa-solid fa-arrows-rotate"></i>
            </div>
            <div className='ms-3 time fw-bold fs-4 text-white'>{time === 60 ? '1:00' : time < 10 ? `0:0${time}` : `0:${time}`}</div>
            {showResult && <Result correctIncorrectWords={correctIncorrectWords} />}
        </div>
    </Fragment>
  )
}

export default InputAndBtns