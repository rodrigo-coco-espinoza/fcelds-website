import React from 'react'
import Button from './Button'
import styles from '../style'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>¡Conviértete en socio!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Con tu ayuda podemos alcanzar a más niños y niñas de todo el país.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0  mt-10`}>
      <Button />  
    </div>
  </section>
)

export default CTA