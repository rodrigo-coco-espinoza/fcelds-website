import React from 'react'
import { apple, bill, google, trabajo } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
    <section id="trabajo" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={trabajo} alt="billing" className='w-[75%] h-[75%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Trabajo <br className='sm:block hidden' />trabajo trabajo.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Meuris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttior integer platea placerat.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="app_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )


export default Billing