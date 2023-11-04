import React from 'react'
import { useState } from 'react'

function TakermultstepForm({steps}) {
    const [currentStepindex,setcurrentStepindx]=useState(0)

    if (!steps) {
        return null;
      }

    const Next=()=>{
        setcurrentStepindx(i=>{
            if(i>=steps.length-1){
                return i;
            }
            return i+1
        })
    }

    const Prev=()=>{
        setcurrentStepindx(i=>{
            if(i<=0){
                return i
            }
            return i - 1
        })
    }

    const goTo=(index)=>{
        setcurrentStepindx(index)

    }

    


  return {
    currentStepindex,
    step:steps[currentStepindex],
    goTo,
    Prev,
    Next,
    steps,

  };
    

  
}
export default TakermultstepForm

