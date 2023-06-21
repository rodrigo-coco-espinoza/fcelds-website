import React from 'react'
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from '../components/GetStarted';
import { description } from '../constants';

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Elementos lado izquierda */}
      <div className={`flex-1 basis-1/5 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Título */}
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold '>
            <span className='text-secondary ss:text-[42px] text-[42px]'>Fundación <br /></span> <span className='text-rojo ss:text-[52px] text-[52px] ss:leading-[60px] leading-[75px]'>Colonias Escolares</span>
          </h1>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[52px] text-[52px] text-amarillo ss:leading-[60x] leading-[75px] w-full'>
          Luis Dinamarca Santibáñez
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {description}
        </p>    
      </div>
      {/* Elementos lado derecho */}
      <div className={`flex-1 flex md:my-0 my-10 relative`}>
        {/* Imagen */}
        <img src={robot} alt="biling" className='w-[70%] h-[70%] relative z-[5]'/>
        {/* Color gradients 
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
        */}
      </div>
  



    </section>
  );


export default Hero