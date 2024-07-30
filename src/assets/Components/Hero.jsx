import React from 'react'
 

function Hero({ title='Become a React Dev', subtitle='Find the React job that fits your skill set' }) {
  return (
    
    <>
        <div className="hero-section bg-dark py-5">
            <div className="container py-3 bg-dark text-center">
                <h1 className='text-white fw-bold'>{title}</h1>
                <p className='text-white'>{subtitle}</p>
            </div>
        </div>
    </>
  )
}

export default Hero