import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 700px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 9999;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #ccc;
`;

export const ModalContent = styled.div`
  padding: 20px;
`;

export const ModalDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ModalLogo = styled.img`
  width: 100px;
  height: auto;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;
