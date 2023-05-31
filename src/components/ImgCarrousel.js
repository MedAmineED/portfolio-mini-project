/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

const ImgCarrousel = ({ carrouselEl }) => {
    const [carrouselPosition, setCarrouselPosition] = useState(0)


    const handleClick = (e)=> {
        const right = e.target.value === "right"
        const imgLength =  (100 / carrouselEl.length)
        const sliderBarLength = imgLength * carrouselEl.length

        let newPos = right? carrouselPosition - imgLength : carrouselPosition + imgLength

        if(Math.abs(newPos) >= sliderBarLength){
            newPos = 0
        }
        else if(newPos > 0) {
            newPos = - sliderBarLength + imgLength
        }
        setCarrouselPosition(newPos)
    }

    
  return (
    <div className='img-carrousel'>
        <div className='img-slider'
             style={{ 
                width : `${100 * (carrouselEl.length)}%`,
                transform : `translateX(${carrouselPosition}%)` }}>
            {
                carrouselEl.map((el, index)=>{
                        return  <div key={`cn-${index}`} 
                                        className='img-container' 
                                        style={{ width : `${100 / carrouselEl.length}%` }}>
                                    <img src= {el.src} />
                                </div>
                        })
            }
        </div>
        <div className='crTransform'>
            <button 
                    value= "left" 
                    className='translate-img left-tr'
                    onClick={(e)=>{handleClick(e)}}> {'<'} </button>
            <div className='pos'>
                {carrouselEl.map((el, index)=> {
                    return <div className='ch-pos' key={`ch-pos-${index}`}></div>
                })}
            </div>
            <button
             value= "right"
             className='translate-img right-tr'
             onClick={(e)=>{handleClick(e)}}> {'>'} </button>
        </div>
    </div>
  )
}

export default ImgCarrousel
