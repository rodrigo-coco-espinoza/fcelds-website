import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[80px] h-[80px] rounded-full bg-blue-gradient p-[2px] pointer-cursor`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-sky-600'>Hazte</span>     
        </p>
      </div>
      <p className='font-poppins font-medium text-center text-[18px] leading-[23px]'>
          <span className='text-sky-600'>socio</span>
      </p>
    </div>
  </div>
)


export default GetStarted