import React,{useState,useEffect} from 'react'
import QuestionJson from '../../../Question.json'
import QuestionCard from './QuestionCard';

function QuestionSec() {

    let [data,setData]=useState([]);

    useEffect(()=>{
        setData(QuestionJson);        
    },[])    


  return (
    <div className='w-full bg-black min-h-[80vh] py-5 border-b-8 border-[#616161]'>
        <div className="container mx-auto">
            <div className="heading">
                <h1 className='text-white text-3xl font-bold text-center'>Frequently Asked Questions</h1>
            </div>
            <div className="question-sec my-10 p-3 md:p-6">
                
            </div>
            <div className="email-sec md:px-16 lg:px-28 xl:px-36 2xl:px-56">
                {
                    data.map((item,key)=>{
                        return(
                            <QuestionCard item={item} key={key}></QuestionCard>
                        )
                    })
                }
            </div>
        </div>      
    </div>
  )
}

export default QuestionSec

