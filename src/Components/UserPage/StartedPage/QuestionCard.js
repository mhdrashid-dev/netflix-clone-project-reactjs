import React,{useState} from 'react'

function QuestionCard({item}) {

    let [active,setActive]=useState(false);

  return (
    <div className="card px-2">
        <div className="question bg-[rgba(128,126,126,0.3)] hover:bg-[rgba(128,126,126,.5)] px-4 py-2 rounded-md min-h-[8vh] flex justify-between items-center mt-3">
            <h1 className='text-white xl:text-lg 2xl:text-2xl'>{item.question}</h1>
            <button className='text-white text-2xl 2xl:text-3xl' onClick={()=>{setActive(!active)}} >+</button>
        </div>
        <div className={`answer-sec bg-[rgba(128,126,126,0.3)] my-1 duration-200 rounded-md px-4 py-2 text-white text-sm xl:text-base ${active===false ? 'hidden opacity-0' : 'block opacity-100'} mb-3`}>
            <h1>{item.answer}</h1>
        </div>
    </div>
  )
}

export default QuestionCard
