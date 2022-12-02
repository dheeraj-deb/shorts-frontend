import React from 'react'

function StepperControl({ handleClick, currentStep, steps }) {
    return (
        <div className='container flex justify-around mt-2 mb-8'>
            <button
                onClick={() => handleClick()} className={`bg-white text-blue-400 uppercase py-2 px-4 rounded-xl font-poppins cursor-pointer border-2 border-blue-300
            hover:bg-blue-700 hover:text-white transition duration-200 ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                Back
            </button>
            <button
                onClick={() => handleClick("next")}
                className='bg-green-600 text-white uppercase py-2 px-4 rounded-xl font-poppins cursor-pointer
            hover:bg-green-700 hover:text-white transition duration-200'>
                {currentStep === steps?.length - 1 ? "Submit" : "Next"}
            </button>
        </div>
    )
}

export default StepperControl