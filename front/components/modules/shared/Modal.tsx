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
  padding: 20px;
  border: 1px solid #ccc;
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
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, close, children }) => {
  const [animationDirection, setAnimationDirection] = useState<'in' | 'out'>(isOpen ? 'in' : 'out');
  const [isFullyClosed, setIsFullyClosed] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsFullyClosed(false);
      setAnimationDirection('in');
    } else {
      setAnimationDirection('out');
      setTimeout(() => {
        setIsFullyClosed(true);
      }, 300); // Match this duration with your animation duration
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <div css={overlayStyle} onClick={close} />}
      {!isFullyClosed && (
        <div
          css={[
            modalStyle,
            animationDirection === 'out' ? css`animation-name: ${slideOut};` : css`animation-name: ${slideIn};`,
          ]}
        >
          {children}
          <button css={buttonStyle} onClick={close}>Close</button>
        </div>
      )}
    </>
  );
};

export default Modal;
