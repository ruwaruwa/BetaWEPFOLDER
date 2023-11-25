import React from 'react'
 //import React,{ Component } from 'react';
import { TypeAnimation } from 'react-type-animation';

export const  Typedanimations=() =>{

  return (
    <div>
<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce Quickly ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Quickly bring your  ',
        1000,
        'We Quickly bring your   ',
        1000,
        'We Quickly bring your ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

    </div>
  )
}
