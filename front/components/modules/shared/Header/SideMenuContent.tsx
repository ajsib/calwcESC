import React from "react";
import styled from "@emotion/styled";
import LogoTag from "../../../landing/shared/Header/LogoTag";
import { useRouter } from 'next/router';
import { useAuth } from '@/globalContexts/authContext';

const MenuContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 364px;
  background-color: #ffffff;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  background-color: #364132;
`;

const Logo = () => {
  return <LogoTag disabled={true} />;
};

const MenuOption = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 32px;
  cursor: pointer;
  height: 4rem;
  font-size: 1rem;
  border-left: 4px solid transparent;
  transition: border-color 0.3s ease;
  color: inherit; /* Inherit color from parent */

  &:hover {
    background-color: #f2f2f2;
    border-left-color: #364132;
  }
 
`;


const Button = styled.div`
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  padding: 0;
  width: 50%;
  background-color: #323232;
  border: none;
  height: 68px;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #585858;
  }
`;


const BottomSection = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 68px;
`;

const SideMenuContent: React.FC = () => {
  const router = useRouter();

  const { logout } = useAuth();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <MenuContentContainer>
      <TopSection>
        <Logo />
      </TopSection>
      <MenuOption className="caption" onClick={() => handleNavigation("/dashboard")}>Dashboard</MenuOption>
      <MenuOption className="caption" onClick={() => handleNavigation("/dashboard/tickets")}>Tickets</MenuOption>
      <MenuOption className="caption" onClick={() => handleNavigation("/project-management")}>Project Management</MenuOption>
      <MenuOption className="caption" onClick={() => handleNavigation("/files")}>Files</MenuOption>
      <MenuOption className="caption" onClick={() => handleNavigation("/team")}>Team</MenuOption>
      <BottomSection>
        <Button className="caption" onClick={() => {logout(); handleNavigation("/")}}>Sign out</Button>
        <Button className="caption">Français</Button>
      </BottomSection>
    </MenuContentContainer>
  );
};

export default SideMenuContent;
