/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useWizard } from '../../../IntakeContext'; // Adjust the import path as needed

const formContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

const fieldContainer = css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    background-color: #ccc;
    padding: 1rem;
    gap: 0.5rem;
`;

const inputField = css`
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
`;

const inputFieldInvalid = css`
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid red;
`;

const button = css`
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
`;

const linkContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ccc;
    padding: 0.5rem;
    border: 1px solid #ccc;
`;

const LinkForm = () => {
    const { experimentReport, setExperimentReport } = useWizard();
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validateLink = (url: string) => {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
        } catch (e) {
            return false;
        }
    };

    const addLink = () => {
        if (validateLink(inputValue)) {
            const updatedLinks = [...experimentReport.links, inputValue];
            setExperimentReport({ ...experimentReport, links: updatedLinks });
            setInputValue('');
            setIsValid(true);
        } else {
            setIsValid(false);
            setInputValue('');
        }
    };

    const deleteLink = (index: number) => {
        const updatedLinks = experimentReport.links.filter((_:number, i:number) => i !== index);
        setExperimentReport({ ...experimentReport, links: updatedLinks });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            addLink();
        }
    };

    return (
        <div css={formContainer}>
            <div css={fieldContainer}>
                <input 
                    type="text" 
                    placeholder={isValid ? "Paste link in here (clicking enter adds it)" : "Please enter a valid link"} 
                    css={isValid ? inputField : inputFieldInvalid}
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        setIsValid(true);
                    }}
                    onKeyPress={handleKeyPress}
                />
                <button css={button} onClick={addLink}>+</button>
            </div>
            <div css={fieldContainer}>
                {experimentReport.links.map((link:string, index:number) => (
                    <div css={linkContainer} key={index}>
                        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                        <button css={button} onClick={() => deleteLink(index)}>🗑️</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LinkForm;
