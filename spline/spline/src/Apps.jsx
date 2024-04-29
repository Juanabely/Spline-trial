// Apps.js
import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex } from 'antd';
import AppModal from './AppModal'; // Import your modal component
import './apps.css';
import SettingsModal from './SettingsModal';

const { Meta } = Card;

const Apps = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

   const openSettingsModal = () => setShowSettingsModal(true);
  const closeSettingsModal = () => setShowSettingsModal(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className='cards'>
        <Flex justify='middle'>
          <Card
            style={{
              width: 300,
              backdropFilter: 'blur(5px)',
              
            }}
            cover={<img alt="example" src={props.url} />}
            actions={[
              <SettingOutlined key="setting" onClick={openSettingsModal}
               />,
              <EditOutlined key="edit" onClick={showModal} />,
              <EllipsisOutlined key="ellipsis" onClick={showModal} />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title={props.name}
              description={props.discription}
            />
          </Card>
        </Flex>
      </div>
      <AppModal
        visible={modalVisible}
        onClose={hideModal}
        name={props.name}
        price={props.price}
      />
      <SettingsModal
      visible={showSettingsModal}
      onClose={closeSettingsModal}
      />
    </>
  );
};

export default Apps;
