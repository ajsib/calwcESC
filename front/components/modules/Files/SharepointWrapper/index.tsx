/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SharepointWrapperCon from './components/SharePointWrapperCon';


// Styling for the entire page
const fileSystemPageStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const SharepointWrapperPage = () => {
    return (
        <div css={fileSystemPageStyle}>
            <SharepointWrapperCon />
        </div>
    );
};

export default SharepointWrapperPage;