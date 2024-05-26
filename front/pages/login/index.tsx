/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    gap: 1rem;
`;


const SignInComponent = () => {
    return(
        <div css={containerStyle}>
            <button>Client/Sponsor</button>
            <button>ESC Staff</button>
            <button>OR Staff</button>
        </div>
    )
}

export default SignInComponent;