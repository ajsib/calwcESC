/** @jsxImportSource @emotion/react */
import Modal from '@/components/modules/shared/Modal';
import { css } from '@emotion/react';
import { ManageShortcutsModalProps } from '../Types';

const formStyle = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #f3f3f3;
`;

const inputStyle = css`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  background-color: #f3f3f3;
  transition: border-color 0.3s ease-in-out;
`;

const buttonStyle = css`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const listItemStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ManageShortcutsModal: React.FC<ManageShortcutsModalProps> = ({
  isOpen,
  close,
  shortcuts,
  addShortcut,
  deleteShortcut,
  newShortcut,
  setNewShortcut,
}) => {

  return (
    <Modal isOpen={isOpen} close={close}>
      <form css={formStyle} onSubmit={(e) => e.preventDefault()}>
        <input
          css={inputStyle}
          type="text"
          placeholder="Add new shortcut"
          value={newShortcut}
          onChange={(e) => setNewShortcut(e.target.value)}
        />
        <button css={buttonStyle} onClick={() => addShortcut(newShortcut)}>Add Shortcut</button>
      </form>
      <div>
        {shortcuts.map(shortcut => (
          <div key={shortcut} css={listItemStyle}>
            <span>{shortcut}</span>
            <button css={buttonStyle} onClick={() => deleteShortcut(shortcut)}>Delete</button>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ManageShortcutsModal;
