/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import CloseIcon from '@/components/UI/icons/CloseIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
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
    transform: translateX(-100%);
  }
`;

const sideMenuStyle = (isOpen: boolean) => css`
  background-color: #fff;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  border-right: 1px solid #ccc; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const closeIconStyle = css`
  position: absolute;
  top: 16px;
  right: 12px;
  cursor: pointer;
`;

const menuItemStyle = css`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const titleStyle = css`
  font-size: 20px;
  text-align: center;
  margin: 20px 0;
`;

const bottomButtonStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
`;

const buttonStyle = css`
  background: #eee;
  padding: 10px;
  width: 120px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { locale, asPath } = router;
  const toggleLocale = locale === 'en' ? 'fr' : 'en';
  const languageLabel = locale === 'en' ? 'Français' : 'English';

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <div css={sideMenuStyle(isOpen)}>
      <div>
        <div css={closeIconStyle} onClick={onClose}>
          <CloseIcon />
        </div>
        <div css={titleStyle}>Menu</div>
        <div css={menuItemStyle} onClick={() => handleNavigation('/dashboard')}>Dashboard</div>
        <div css={menuItemStyle} onClick={() => handleNavigation('/dashboard/tickets')}>Tickets</div>
        <div css={menuItemStyle} onClick={() => handleNavigation('/project-management')}>Project Management</div>
        <div css={menuItemStyle} onClick={() => handleNavigation('/files')}>Files</div>
        <div css={menuItemStyle} onClick={() => handleNavigation('/team')}>Team</div>
      </div>
      <div css={bottomButtonStyle}>
        <div css={buttonStyle} onClick={onClose}>Sign Out</div>
        <div css={buttonStyle} onClick={() => router.push(asPath, asPath, { locale: toggleLocale })}>{languageLabel}</div>
      </div>
    </div>
  );
};

export default SideMenu;
