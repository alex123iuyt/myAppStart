import React from "react";

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalLogo,
} from "../modal/styled-components";

const Modal = ({ item, onClose, logos }) => {
  const { title, description, logo } = item;

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        </ModalHeader>
        <ModalContent>
          <ModalDescription>{description}</ModalDescription>
          <ModalLogo src={logos[logo]} alt="Company Logo" />
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
