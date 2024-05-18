import React, {useRef} from 'react'
import './Hero.css'
import { Carousel } from 'antd'
import Ai from '../ai/Ai'
import HeroAi from '../heroai/HeroAi'
import HeroAis from '../heroAis/HeroAis'



const Hero = () => {
  const ref = useRef()

  return (
    <div className='hero'>
        <div className='hero__carousel' >
          <Carousel autoplay
            draggable
            pauseOnDotsHover
           pauseOnHover

          ref={ref}
        >
            <Ai />
            <HeroAi />
            <HeroAis />
          </Carousel>
        </div>
        <div className='hero__button'>
          <button onClick={() => {ref.current.prev()}}>Prev</button>
          <button onClick={() => {ref.current.goTo(0)}}>Reset</button>
          <button onClick={() => {ref.current.next()}}>Next</button>
        </div>

    </div>
  )
}

export default Hero