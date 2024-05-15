export interface ManageShortcutsModalProps {
    isOpen: boolean;
    close: () => void;
    shortcuts: string[];
    addShortcut: (shortcut: string) => void; // Updated type definition
    deleteShortcut: (shortcut: string) => void; // Updated type definition
    newShortcut: string;
    setNewShortcut: (value: string) => void;
  }

export interface NavigationTabProps {
    isOpen: boolean;
    close: () => void;
    shortcuts: string[];
    handleManageShortcutsClick: () => void;
    addShortcut: (shortcut: string) => void;
    deleteShortcut: (shortcut: string) => void;
    newShortcut: string;
    setNewShortcut: (newShortcut: string) => void;
}