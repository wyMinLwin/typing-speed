import React, { Fragment, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import randomWords from 'random-words';
import '@fortawesome/fontawesome-free/css/all.min.css'



const Words = ({currentInput,time,willRestart,setWillRestart,setCorrectIncorrectWords,setShowResult}) => {

  let [words,setWords] = useState(randomWords(20));
  let [wordsData,setWordsData] = useState([]);
  
  useEffect(() => {
    setWordsData(words.map(word => {
      return {
        id:nanoid(),
        word : word,
      }
    }))
  },[words]);
  useEffect(() => {
    if(time <= 0 ){
      setWordsData([]);
      setShowResult(true);
    }
    if (time === 60){
      setWords(randomWords(20));
      setCurrentIndex(0);
      setCorrectIncorrectWords({
        'correct':0,
        'incorrect':0,
        'keystrokeCorrect':0,
        'keystrokeIncorrect':0,
      })
      setShowResult(false);
      
    }
  },[time])

  let [trueFalseTheme,setTrueFalseTheme] = useState(null);
  let activeTheme = 'bg-dark bg-opacity-25';
  let [currentIndex,setCurrentIndex] = useState(() => 0);
  
  useEffect(() => {
    if (willRestart) {
      //setWordsData([]);
      setWords(randomWords(20))
      setWillRestart(prevWillRestart => !prevWillRestart);
    }
  },[willRestart])

  useEffect(() => {
    
    if (currentInput.charAt(currentInput.length -1)  === ' '){  
      if(currentIndex < wordsData.length -1){
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex+1);
      } else {
        setWords(randomWords(20));
        setCurrentIndex(()=> 0);
      }

      if (currentInput.trim() === words[currentIndex]) {
        setCorrectIncorrectWords(prevCorrectIncorrectWords => (
          {
            ...prevCorrectIncorrectWords,
            correct : prevCorrectIncorrectWords.correct + 1,
            keystrokeCorrect : prevCorrectIncorrectWords.keystrokeCorrect + words[currentIndex].length,
          }
        ));
        const newState = wordsData.map((word,index) => {
          if (currentIndex === index){
            return {
              ...word,
             'checkedColor':' text-primary '
            }
          }
          return  word;
        })     
        setWordsData(newState);
      }
      if (currentInput.trim() !== words[currentIndex]){
        setCorrectIncorrectWords(prevCorrectIncorrectWords => (
          {
            ...prevCorrectIncorrectWords,
            incorrect : prevCorrectIncorrectWords.incorrect + 1,
            keystrokeIncorrect : prevCorrectIncorrectWords.keystrokeIncorrect + words[currentIndex].length,
          }));
        const newState = wordsData.map((word,index) => {
        if (currentIndex === index){
          return {
            ...word,
           'checkedColor':' text-danger '
          }
        }
        return  word;
      })      
      setWordsData(newState);
      }
    }

    if(words[currentIndex].indexOf(currentInput.trim()) > -1){
      setTrueFalseTheme('text-dark');
    } else {
      setTrueFalseTheme('text-danger');
    }
    
  },[currentInput])

  // useEffect(() => {
  //   if(checkedWord.prop) {
  //     setCorrectIncorrectWords(correctIncorrectWords.correct + 1);
  //   } else {
  //     setCorrectIncorrectWords(correctIncorrectWords.incorrect + 1);
  //   }
  // },[checkedWord])
  
  return (
    <Fragment>
      {
        wordsData.length > 0
        ?
        <div className='container d-flex flex-wrap my-auto bg-white rounded-1 py-2' >
             {wordsData.map((word,index) => <span className={`${currentIndex === index && activeTheme}  ${currentIndex === index && trueFalseTheme} col fs-4 mx-1 fw-semibold me-3 rounded-2 text-center ${word.checkedColor}`} key={word.id}>{word.word}</span>) }
        </div>
        :
        <div className='container d-flex text-center h5 fw-semibold text-white justify-content-center align-items-center my-auto rounded-1 py-2' >
          Click restart button to start the game again!
        </div>
      }
    </Fragment>
  )
}

export default Words

//${currentIndex === index && activeTheme}  ${currentIndex === index && trueFalseTheme}