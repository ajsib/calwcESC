/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FileCardsCon from "./components/FileCardsCon";

// Styling for the entire page
const fileSystemPageStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const RecentFiles = () => {
    return (
        <div css={fileSystemPageStyle}>
            <FileCardsCon />
        </div>
    );
};

export default RecentFiles;