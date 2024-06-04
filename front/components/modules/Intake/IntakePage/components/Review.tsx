/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useWizard } from '../../IntakeContext';

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

const sectionStyle = css`
  margin-bottom: 2rem;
`;

const subHeadingStyle = css`
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 0.5rem;
`;

const textStyle = css`
  font-size: 1rem;
  font-family: Arial, sans-serif;
  color: #666;
  margin-bottom: 0.5rem;
`;

const buttonStyle = css`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #364132;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #2b332a;
  }
`;

const Page6: React.FC = () => {
    const {
        projectInfo,
        questions,
        experimentType,
        studyMethods,
        setPage
    } = useWizard() as {
        projectInfo: {
            name: string;
            description: string;
            contactName: string;
            contactInfo: string;
        };
        questions: string[];
        experimentType: string;
        studyMethods: string[];
        setPage: (page: number) => void;
    };

    return (
        <div css={containerStyle}>
            <h2 css={headingStyle}>Review and Confirm</h2>
            <div css={sectionStyle}>
                <h3 css={subHeadingStyle}>Project Info</h3>
                <p css={textStyle}>Name: {projectInfo.name}</p>
                <p css={textStyle}>Description: {projectInfo.description}</p>
                <p css={textStyle}>Contact Name: {projectInfo.contactName}</p>
                <p css={textStyle}>Contact Info: {projectInfo.contactInfo}</p>
                <button onClick={() => setPage(2)} css={buttonStyle}>Edit</button>
            </div>
            <div css={sectionStyle}>
                <h3 css={subHeadingStyle}>Questions</h3>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p css={textStyle}>Question: {question}</p>
                        <p css={textStyle}>Study Method: {studyMethods[index]}</p>
                        <button onClick={() => setPage(3)} css={buttonStyle}>Edit</button>
                    </div>
                ))}
            </div>
            <div css={sectionStyle}>
                <h3 css={subHeadingStyle}>Experiment Type</h3>
                <p css={textStyle}>{experimentType}</p>
                <button onClick={() => setPage(4)} css={buttonStyle}>Edit</button>
            </div>
        </div>
    );
};

export default Page6;
