/** @jsxImportSource @emotion/react */
import React, { ChangeEvent } from 'react';
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

const questionContainerStyle = css`
  margin-bottom: 1rem;
`;

const questionTextStyle = css`
  font-size: 1rem;
  font-family: Arial, sans-serif;
  color: #666;
  margin-bottom: 0.5rem;
`;

const selectStyle = css`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
`;

const Page5: React.FC = () => {
    const { questions, studyMethods, setStudyMethods } = useWizard() as {
        questions: string[];
        studyMethods: string[];
        setStudyMethods: React.Dispatch<React.SetStateAction<string[]>>;
    };

    const handleChange = (index: number, value: string) => {
        const newMethods = [...studyMethods];
        newMethods[index] = value;
        setStudyMethods(newMethods);
    };

    return (
        <div css={containerStyle}>
            <h2 css={headingStyle}>Study Method Selection</h2>
            {questions.map((question, index) => (
                <div key={index} css={questionContainerStyle}>
                    <p css={questionTextStyle}>Question: {question}</p>
                    <select
                        value={studyMethods[index] || ''}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(index, e.target.value)}
                        css={selectStyle}
                    >
                        <option value="experiment">Experiment</option>
                        <option value="survey">Survey</option>
                        <option value="caseStudy">Case Study</option>
                        <option value="simulation">Simulation</option>
                    </select>
                </div>
            ))}
        </div>
    );
};

export default Page5;
