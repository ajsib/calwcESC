import React from "react";
import styled from "@emotion/styled";
import SideMenuContent from "./SideMenuContent";
import RightWedgeBold from "@/components/UI/arrows/RightWedgeMedium";

type MenuProps = {
  isOpen: boolean;
};

const Overlay = styled.div<MenuProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // Dark overlay
  z-index: 999; // Overlay should be below the side menu but above other content
`;

const Menu = styled.div<MenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? "364px" : "0")};
  height: 100%;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: width 0.3s ease;
  overflow-x: hidden;
  z-index: 1000; // Make sure the menu is above the overlay
`;

const WedgeContainer = styled.div<MenuProps>`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 100000;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")}; // Corrected here
  transition: transform 0.1s ease-in;
`;

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <Overlay isOpen={isOpen} onClick={onClose} />}
      <Menu isOpen={isOpen}>
        <WedgeContainer isOpen={isOpen} onClick={onClose}>
          <RightWedgeBold size={27} fillColor="#FFFFFF" />
        </WedgeContainer>
        <SideMenuContent />
      </Menu>
    </>
  );
};

export default SideMenu;
