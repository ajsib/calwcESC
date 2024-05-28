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

const selectStyle = css`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
`;

const Page4: React.FC = () => {
    const { experimentType, setExperimentType } = useWizard() as {
        experimentType: string;
        setExperimentType: React.Dispatch<React.SetStateAction<string>>;
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setExperimentType(e.target.value);
    };

    return (
        <div css={containerStyle}>
            <h2 css={headingStyle}>Experiment Type</h2>
            <select value={experimentType} onChange={handleChange} css={selectStyle}>
                <option value="demonstration">Demonstration</option>
                <option value="hypothesis">Hypothesis Testing</option>
                <option value="discovery">Discovery</option>
            </select>
        </div>
    );
};

export default Page4;
