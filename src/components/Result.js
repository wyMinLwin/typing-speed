import React, { Fragment } from 'react'

const Result = ({correctIncorrectWords}) => {
  return (
    <Fragment>
        <div className='ms-3 card'>
            <div className='card-header'>
            <div className='card-title fw-semibold fs-5 text-center'>{correctIncorrectWords.correct} WPM</div>
            </div>
            <div className='card-body'>
                <div className='card-text d-flex justify-content-between border-bottom p-2 align-items-center'>
                    <span className='pe-3'>Keystrokes</span><span className='ps-3 d-flex align-items-center'>
                        <span className=' fs-5 text-success me-2'>{correctIncorrectWords.keystrokeCorrect}</span> 
                        <span>|</span> 
                        <span className=' fs-5 text-danger ms-2'>{correctIncorrectWords.keystrokeIncorrect}</span>                         
                    </span>
                </div>
                <div className='card-text d-flex justify-content-between border-bottom p-2'>
                    <span className='pe-3'>Accuracy</span><span className='ps-3'>
                        {correctIncorrectWords.keystrokeCorrect > 0 
                        ? (correctIncorrectWords.keystrokeCorrect/(correctIncorrectWords.keystrokeCorrect+correctIncorrectWords.keystrokeIncorrect)).toFixed(2) *100 
                        : 0}%
                    </span>
                </div>
                <div className='card-text d-flex justify-content-between border-bottom p-2'>
                    <span className='pe-3'>Correct words</span><span className='ps-3'>{correctIncorrectWords.correct}</span>
                </div>
                <div className='card-text d-flex justify-content-between p-2'>
                    <span className='pe-3'>Incorrect words</span><span className='ps-3'>{correctIncorrectWords.incorrect}</span>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Result