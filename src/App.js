import React, { Fragment, useState } from 'react'
import Words from './components/Words';
import InputAndBtns from './components/InputAndBtns';
import Navbar from './components/Navbar';
import Confetti from 'react-confetti'
import Footer from './components/Footer';

const App = () => {
  let [currentInput,setCurrentInput] = useState('');
  let [time,setTime] = useState(60);
  let [willRestart,setWillRestart] = useState(false);
  let [showResult,setShowResult] = useState(false);

  let [correctIncorrectWords,setCorrectIncorrectWords] = useState({
    'correct':0,
    'incorrect':0,
    'keystrokeCorrect':0,
    'keystrokeIncorrect':0,
  })
  
  return (
    <Fragment>
      {showResult && <Confetti />}
      <div className='wrapper d-flex flex-column justify-content-center bg-dark'>
        <Navbar />
        <Words  setCorrectIncorrectWords={setCorrectIncorrectWords} setShowResult={setShowResult}
        currentInput={currentInput} time={time} setTime={setTime} 
        setWillRestart={setWillRestart} willRestart={willRestart} />
        <InputAndBtns correctIncorrectWords={correctIncorrectWords} showResult={showResult}
        setCurrentInput={setCurrentInput} time={time} setTime={setTime} setWillRestart={setWillRestart} />
        <Footer />
      </div>
    </Fragment>
  )
}

export default App