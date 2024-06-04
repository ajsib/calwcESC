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

const inputContainerStyle = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const inputStyle = css`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
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

const Page3: React.FC = () => {
    const { questions, setQuestions } = useWizard() as {
        questions: string[];
        setQuestions: React.Dispatch<React.SetStateAction<string[]>>;
    };

    const handleChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, '']);
    };

    return (
        <div css={containerStyle}>
            <h2 css={headingStyle}>Master Question List</h2>
            {questions.map((question, index) => (
                <div key={index} css={inputContainerStyle}>
                    <input
                        type="text"
                        value={question}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                        css={inputStyle}
                    />
                </div>
            ))}
            <button onClick={addQuestion} css={buttonStyle}>Add Question</button>
        </div>
    );
};

export default Page3;
