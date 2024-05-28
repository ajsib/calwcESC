/** @jsxImportSource @emotion/react */
import React, { ChangeEvent } from 'react';
import { css } from '@emotion/react';
import { useWizard } from '../../IntakeContext';
import { ProjectInfo } from '../Types';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 600px;
  margin: 2rem auto;
`;

const headingStyle = css`
  font-size: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 1rem;
`;

const labelStyle = css`
  font-size: 1rem;
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const inputStyle = css`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const textareaStyle = css`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
  resize: vertical;
`;

const Page2: React.FC = () => {
    const { projectInfo, setProjectInfo } = useWizard() as {
        projectInfo: ProjectInfo;
        setProjectInfo: React.Dispatch<React.SetStateAction<ProjectInfo>>;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProjectInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    return (
        <div css={containerStyle}>
            <h2 css={headingStyle}>Project Info</h2>
            <label css={labelStyle}>
                Project Name:
                <input
                    type="text"
                    name="name"
                    value={projectInfo.name}
                    onChange={handleChange}
                    css={inputStyle}
                />
            </label>
            <label css={labelStyle}>
                Description:
                <textarea
                    name="description"
                    value={projectInfo.description}
                    onChange={handleChange}
                    css={textareaStyle}
                />
            </label>
            <label css={labelStyle}>
                Contact Name:
                <input
                    type="text"
                    name="contactName"
                    value={projectInfo.contactName}
                    onChange={handleChange}
                    css={inputStyle}
                />
            </label>
            <label css={labelStyle}>
                Contact Info:
                <input
                    type="text"
                    name="contactInfo"
                    value={projectInfo.contactInfo}
                    onChange={handleChange}
                    css={inputStyle}
                />
            </label>
        </div>
    );
};

export default Page2;
