/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const modalStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const buttonStyle = css`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #4287f5;
  color: white;
  cursor: pointer;
`;

// Props interface if needed
interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div css={overlayStyle} onClick={close} />
      <div css={modalStyle}>
        {children}
        <button css={buttonStyle} onClick={close}>Close</button>
      </div>
    </>
  );
};

export default Modal;
