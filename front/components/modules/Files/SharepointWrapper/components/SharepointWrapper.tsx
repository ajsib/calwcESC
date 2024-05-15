/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { File } from '../../Types';

const SharepointWrapperStyle = css`
  border: 1px solid #ccc;
  overflow-x: auto; // Make the table scrollable on small screens
  margin-top: 1rem;
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; // Minimum width before scroll appears
  
  @media (max-width: 768px) { // Adjustments for tablet and smaller devices
    min-width: 0;
  }
`;

const thStyle = css`
  background-color: #dcdcdc;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const tdStyle = css`
  padding: 10px;
`;

const trStyle = css`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #eaeaea;
  }
`;

// Responsive table header
const responsiveThStyle = css`
  ${thStyle};
  @media (max-width: 768px) {
    padding: 10px 5px; // Reduce padding on smaller screens
  }
`;

// Responsive table data
const responsiveTdStyle = css`
  ${tdStyle};
  @media (max-width: 768px) {
    padding: 10px 5px; // Reduce padding on smaller screens
  }
`;

const SharepointWrapper = ({ fileData }: { fileData: File[] }) => {
  return (
    <div css={SharepointWrapperStyle}>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th css={responsiveThStyle}>File Name</th>
            <th css={responsiveThStyle}>File Type</th>
            <th css={responsiveThStyle}>Creator</th>
            <th css={responsiveThStyle}>Date Added</th>
            <th css={responsiveThStyle}>Date Modified</th>
          </tr>
        </thead>
        <tbody>
          {fileData.map((file, index) => (
            <tr key={index} css={trStyle}>
              <td css={responsiveTdStyle}>{file.fileName}</td>
              <td css={responsiveTdStyle}>{file.fileType}</td>
              <td css={responsiveTdStyle}>{file.creator}</td>
              <td css={responsiveTdStyle}>{file.dateAdded}</td>
              <td css={responsiveTdStyle}>{file.dateModified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SharepointWrapper;
