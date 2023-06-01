/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight)

const ImgCarrousel = ({ carrouselEl }) => {
    const [carrouselPosition, setCarrouselPosition] = useState(0)
    const [imgNum, setImgNum] = useState(0)

    const handelJumpStepsClick = (index)=> {
        const imgLength =  (100 / carrouselEl.length);
        setCarrouselPosition(()=>{
            return -index * imgLength
        })
        setImgNum(index)
    }

    const handleClick = (dir)=> {
        const right = dir === "right"
        const imgLength =  (100 / carrouselEl.length)
        const sliderBarLength = imgLength * carrouselEl.length

        console.log(dir)

        let newPos = right? carrouselPosition - imgLength : carrouselPosition + imgLength
        let newImgNum = right? imgNum + 1 : imgNum - 1

        if(Math.abs(newPos) >= sliderBarLength){
            newPos = 0
            newImgNum = 0
        }
        else if(newPos > 0) {
            newPos = - sliderBarLength + imgLength
            newImgNum = carrouselEl.length - 1
        }
        setCarrouselPosition(newPos)
        setImgNum(newImgNum)
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
                    className='translate-img left-tr'
                    onClick={()=>{handleClick("left")}}> 
                            <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> 
            </button>
            <div className='pos'>
                {carrouselEl.map((el, index)=> {
                    return <div 
                                className= {`ch-pos ${imgNum === index? "isActiveImg" : null}`} 
                                onClick={()=>{handelJumpStepsClick(index)}}
                                key={`ch-pos-${index}`}>
                            </div>
                })}
            </div>
            <button
             className='translate-img right-tr'
             onClick={()=>{handleClick("right")}}> 
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> 
            </button>
        </div>
    </div>
  )
}

export default ImgCarrousel
