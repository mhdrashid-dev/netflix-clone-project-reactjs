import React,{useState,useEffect} from 'react'
import QuestionJson from '../../../Question.json'
import QuestionCard from './QuestionCard';

function QuestionSec() {

    let [data,setData]=useState([]);

    useEffect(()=>{
        setData(QuestionJson);        
    },[])
    
    console.log(data);

  return (
    <div className='w-full bg-black min-h-[60vh] py-5'>
        <div className="container mx-auto">
            <div className="heading">
                <h1 className='text-white text-3xl font-bold text-center'>Frequently Asked Questions</h1>
            </div>
            <div className="question-sec my-10 p-3 md:p-6">
                
            </div>
            <div className="email-sec md:px-16 lg:px-28 xl:px-36 2xl:px-56">
                {
                    data.map((item)=>{
                        return(
                            <QuestionCard item={item} ></QuestionCard>
                        )
                    })
                }
            </div>
        </div>      
    </div>
  )
}

export default QuestionSec

