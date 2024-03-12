// ./components/Shared/Banner/Banner.tsx
/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from "../Header/Header";
import Image from "./Image";


const headerStyle = css`
    position: relative;
    width: 100%;
    height: 400px;
`;


export default function Banner() {
    return (
        <div css={headerStyle}>
            <Header />
            <Image src="/images/service/service1.png" alt="Header Image" bannerText='Discover, Test, Demonstrate, Explore' />
        </div>
    );
}