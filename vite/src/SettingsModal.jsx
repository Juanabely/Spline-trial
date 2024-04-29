import React from 'react'
import {  Modal } from 'antd';
import './modal.css'

import { Link } from 'react-router-dom';

function SettingsModal({visible, onClose}) {
  return (
    <Modal
    
    style={{
            borderRadius:'12px',
            
            

}}
className="custom-modal"
wrapClassName="custom-overlay"
    

    title={name}
    visible={visible}
    onCancel={onClose}
    footer={null}
  >
    <Link to='/downloads' className='button-wrap'><button className='button--download' >Download</button></Link>
   
    
  </Modal>
  )
}

export default SettingsModal