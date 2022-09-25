import React from 'react'
import { Modal } from './Modalstyle'
import Logo from '../../../assets/Success.svg'

const Mymodal = () => {
  return (
    <Modal>
         <div className="mymodal">
           <img src={Logo} alt="Success" className='correct'/>
            <div className='acctsuccess'>
                <p className='sucestext'>Bank Account Successful</p>
                <p className='createdtext'>Your bank account has been added successfully</p>
            </div>
            <button className='done'>Done</button>

         </div>

    </Modal>
  )
}

export default Mymodal