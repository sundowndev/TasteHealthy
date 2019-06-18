import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type Props = {
  isOpen: boolean,
};

const ModalElement = (props: Props) => {
  const [modalIsOpen, toggleModal] = useState(props.isOpen);
  const afterOpenModal = () => {};

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => toggleModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button type="button" onClick={() => toggleModal(false)}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default ModalElement;
