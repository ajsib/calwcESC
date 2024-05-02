/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useRouter } from 'next/router';
import ProfileCard from './ProfileCard';

// Main Styles
const containerStyle = css`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;
`;

const innerContainerStyle = css`
    width: 100%;
    max-width: 1200px;
`;

const profilesGridStyle = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px; 

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const titleStyle = css`
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 4rem;
    padding-top: 3rem;
    margin-left: var(--margin);
`;

// Main component
const OurPeople = () => {
    const router = useRouter(); // Initialized router
    const { locale } = router; // Get current locale from router

    // Define translated title based on locale
    const Title = locale === 'en' ? 'Our People' : 'Notre équipe';

    return (
        <div style={{backgroundColor: 'white'}}>
            <h1 css={titleStyle}>{Title}</h1>
            <div css={containerStyle}>
                <div css={innerContainerStyle}>
                    <div css={profilesGridStyle}>
                    <ProfileCard
                        name="John Doe"
                        rank="Mr."
                        role="Software Engineer"
                        location="New York"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ipsum vitae libero lobortis scelerisque."
                    />

                    <ProfileCard
                        name="Jane Smith"
                        rank="Ms."
                        role="Data Scientist"
                        location="San Francisco"
                        description="Sed euismod mauris non velit iaculis, nec molestie enim feugiat. Vivamus venenatis justo non arcu malesuada, nec auctor leo feugiat."
                    />

                    <ProfileCard
                        name="Bob Johnson"
                        rank="Dr."
                        role="Product Manager"
                        location="Seattle"
                        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ac erat non eros lobortis hendrerit."
                    />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPeople;
