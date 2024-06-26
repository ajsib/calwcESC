/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ManageShortcutsModal from './EditShortCuts';
import { NavigationTabProps } from '../Types'; 

const tabsStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const rowStyle = css`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  height: calc(50%);
  @media (max-width: 768px) {
      flex-wrap: wrap;
  }
`;

const tabStyle = css`
border: 1px solid #ccc;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
cursor: pointer; // Pointer on hover
padding: 2rem;
flex-grow: 1;
transition: transform 0.2s ease; // Smooth transition for hover effects
&:hover {
  transform: translateY(-1px);
}
@media (max-width: 768px) {
    padding: 10px;
    flex-basis: 100%; // Make each tab full width on smaller screens
    justify-content: center;
  }
`;

const getProportionalWidth = (widthPercentage: number) => css`
  width: ${widthPercentage}%;
`;

const NavigationTabs = ({isOpen, close, shortcuts, handleManageShortcutsClick, addShortcut, deleteShortcut, newShortcut, setNewShortcut} : NavigationTabProps) => {


    const manageShortcutsWidth = 60;
    const shortcut1Width = 20;
    const shortcut2Width = 20;
    const shortcut3Width = 25;
    const shortcut4Width = 25;
    const shortcut5Width = 50;

    return (
        <div css={tabsStyle}>
            <div css={rowStyle}>
                <div css={[tabStyle, getProportionalWidth(manageShortcutsWidth)]} onClick={handleManageShortcutsClick}>Manage Shortcuts</div>
                <div css={[tabStyle, getProportionalWidth(shortcut1Width)]}>Shortcut 1</div>
                <div css={[tabStyle, getProportionalWidth(shortcut2Width)]}>Shortcut 2</div>
            </div>
            <div css={rowStyle}>
                <div css={[tabStyle, getProportionalWidth(shortcut3Width)]}>Shortcut 3</div>
                <div css={[tabStyle, getProportionalWidth(shortcut4Width)]}>Shortcut 4</div>
                <div css={[tabStyle, getProportionalWidth(shortcut5Width)]}>Shortcut 5</div>
            </div>

            <ManageShortcutsModal isOpen={isOpen} close={close} shortcuts={shortcuts} addShortcut={addShortcut} deleteShortcut={deleteShortcut} 
            newShortcut={newShortcut} setNewShortcut={setNewShortcut}
            />
        </div>
    );
};

export default NavigationTabs;
