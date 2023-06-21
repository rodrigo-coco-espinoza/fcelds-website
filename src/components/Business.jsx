import React from 'react'
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from "./Button";

import { star } from "../assets"

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-g rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-rojo`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-amarillo text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins font-normal text-cyan-600 text-[16px] leading-[24px] mb-1'>{content}</p>
      </div>

    </div>
  )
};


const Business = () => {
  return (
    <section id="nosotros" className={layout.section}>
      {/* Contenido lado izquierdo */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>FCELDS, <br className='sm:block hidden' /> principios y valores.</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh ipsum, eleifend et vestibulum vitae, gravida a elit. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
        <Button styles="mt-10" />
      </div>
      {/* Contenido lado derecho */}
      <div className={`${layout.sectionImg} flex-col`}>    
        {features.map((feature, index) => {
          return (
            <FeatureCard 
              key={feature.id}
              {...feature}
              index={index}
          />)
        })}
      
      
        

        
      </div>
    </section>
  )
}

export default Business;