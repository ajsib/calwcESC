/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const fileCardsStyle = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
`;

const fileCardStyle = css`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FileCard = ({ name }: { name: string }) => {
  return (
    <div css={fileCardStyle}>
      {name}
    </div>
  );
};

const FileCards = () => {
  const files = ["File 1", "File 2", "File 3", "File 4"];

  return (
   <div css={fileCardsStyle}>
      {files.map((file) => (
        <FileCard key={file} name={file} />
      ))}
    </div>
  );
};

export default FileCards;
