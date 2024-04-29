import React from 'react'
import { Button, Modal } from 'antd';
import './modal.css'
import { background } from '@chakra-ui/react';
import { blue } from '@mui/material/colors';
import { Content } from 'antd/es/layout/layout';
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