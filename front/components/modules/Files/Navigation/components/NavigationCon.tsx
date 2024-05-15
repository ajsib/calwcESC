import { useState } from 'react';
import NavigatonTabs from './NavigationTabs';

const NavigationTabsCon = () => {
    const [isManageShortcutsModalOpen, setIsManageShortcutsModalOpen] = useState(false);
    const [shortcuts, setShortcuts] = useState(["Shortcut 1", "Shortcut 2", "Shortcut 3", "Shortcut 4", "Shortcut 5"]);
    const [newShortcut, setNewShortcut] = useState<string>('');

    const handleManageShortcutsClick = () => {
        setIsManageShortcutsModalOpen(true);
    };

    const handleAddShortcut = (shortcut: string) => {
        if (!shortcuts.includes(shortcut) && shortcuts.length < 5) {
            const newShortcuts = [...shortcuts, shortcut];
            setShortcuts(newShortcuts);
            setIsManageShortcutsModalOpen(false); // Close the modal after adding the shortcut
            setNewShortcut(''); // Reset the newShortcut state
        }
    };

    const handleDeleteShortcut = (shortcut: string) => {
        // delete shortcut with matching name
        const newShortcuts = shortcuts.filter(s => s !== shortcut);
        setShortcuts(newShortcuts);
    };

    return (
        <>
            <NavigatonTabs
                isOpen={isManageShortcutsModalOpen}
                handleManageShortcutsClick={handleManageShortcutsClick}
                close={() => setIsManageShortcutsModalOpen(false)}
                shortcuts={shortcuts}
                addShortcut={handleAddShortcut}
                deleteShortcut={handleDeleteShortcut}
                newShortcut={newShortcut}
                setNewShortcut={setNewShortcut}
            />
        </>
    );
};

export default NavigationTabsCon;
