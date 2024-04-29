// AppModal.js
import React from 'react';
import { Modal } from 'antd';

const AppModal = ({ visible, onClose, name, price }) => {
  return (
    <Modal
      title={name}
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <p>Price: {price}</p>
      
    </Modal>
  );
};

export default AppModal;
