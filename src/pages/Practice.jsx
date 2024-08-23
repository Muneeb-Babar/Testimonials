

import React from 'react'
import ModalForm from '../components/Modal/Modal'
import CustomBtn from '../components/CustomBtn'

const Practice = () => {

    const values=[
        {
            label:'Enter Your Name',
            type:'text',
        },
        {
            label:'Enter Your password',
            type:'password',
        },
        {
            label:'Enter Your Email',
            type:'text',
        },
        {
            
            type:'file',
        }
    ]


  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      {/* <ModalButton btnName={'Open form'}/> */}
      <ModalForm allInputs={values} heading={'My Carware'} btn={<CustomBtn/>}/>
    </div>
  )
}

export default Practice
