/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { useEffect, useState } from 'react';

// Keyframes for slide-in and slide-out animations
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const modalStyle = css`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 600px;
  background: white;
  border: 0px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
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
  margin-top: 0px;
  padding: 10px 20px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
    height: 68px;
    width: 100%;
`;

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, close, children }) => {
  const [animationDirection, setAnimationDirection] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (isOpen) {
      setAnimationDirection('in'); // Set animation direction to 'in' when modal opens
    } else {
      setAnimationDirection('out'); // Set animation direction to 'out' when modal closes off screen
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <div css={overlayStyle} onClick={close} />}
        <div
            css={[
                modalStyle,
                animationDirection === 'out' ? css`animation-name: ${slideOut};` : css`animation-name: ${slideIn};`,
            ]}
        >
            <button css={buttonStyle} onClick={close}>Close</button>
            {children}
        </div>
    </>
  );
};

export default Modal;