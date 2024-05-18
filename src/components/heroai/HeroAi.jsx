import React from 'react'
import './HeroAi.css'

const HeroAi = () => {
  return (
    <div className='heroai'>
      <div className='heroai__container'>
        <div className='heroai__title'>
          <h1>Artificial</h1>
          <h1>INTELLIGENCE</h1>
          <h1>SYSTEM</h1>
        </div>

        <div className='heroai__lorem'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare, ipsum a faucibus dictum, dolor massa varius quam, et ornare lorem dui at ligula. Cras posuere congue neque, vel tincidunt magna suscipit sit amet. Praesent elementum condimentum erat. Morbi in ante in lacus fringilla tempor at at odio. Quisque et congue dui. Sed commodo mi quis dui hendrerit blandit. Vestibulum et felis quis mauris porttitor facilisis et et magna. In sed metus dolor.
          </p>
        </div>

        <div className='heroai__button'>
          <button>read more</button>
        </div>
      </div>
    </div>
  )
}

export default HeroAi