/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationTabsCon from './components/NavigationCon';

// Styling for the entire page
const fileSystemPageStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Navigation = () => {
    return (
        <div css={fileSystemPageStyle}>
            <NavigationTabsCon />
        </div>
    );
};

export default Navigation;