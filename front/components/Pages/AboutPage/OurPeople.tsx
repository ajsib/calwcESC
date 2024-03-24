/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

// Styles
const containerStyle = css`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const innerContainerStyle = css`
    width: 100%;
    max-width: 1200px; // Limit the maximum width
`;

const profilesGridStyle = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px; // Consistent gap between cards

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const profileStyle = css`
    display: flex;
    flex-direction: column; // Stack image on top of text for better mobile viewing
    align-items: center; // Center items for a cleaner look
    text-align: center; // Center text for a better visual flow
    padding: 24px; // Increase padding for more whitespace
    gap: 16px; // Adjust gap for better visual separation
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Soften the shadow for a subtler effect
    flex-grow: 1;
    max-width: 300px;
`;

const profileImageStyle = css`
    width: 100px;
    height: 100px;
    background-color: grey; // Consider using a pattern or icon here
    border-radius: 50%;
    overflow: hidden; // In case of actual images, this will keep them circular
`;

const profileInfoStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 180px; // Increased width for better layout
`;

// New Header Section style
const headerSectionStyle = css`
    width: 100%;
    margin-left: var(--margin);
    margin-right: var(--margin);
    padding: 4REM 0; // Adds some padding above and below the text
`;

const nameStyle = css`
    font-size: 1.2rem; 
    font-weight: bold; 
    margin-bottom: 4px; 
`;

const roleLocationStyle = css`
    font-size: 1rem; // Slightly smaller font for role and location
    color: #555; // A darker grey for better readability
`;

const descriptionStyle = css`
    font-size: 0.9rem; // Small font size for description
    color: #777; // Lighter grey to differentiate from more important info
    margin-top: 8px; // Add space before the description
`;

// New HeaderSection component
const HeaderSection = () => (
    <section css={headerSectionStyle}>
        <h1>Our People</h1>
    </section>
);

// Profile component
const Profile = ({ name, role, location, description }) => (
    <article css={profileStyle}>
        <div css={profileImageStyle} />
        <div css={profileInfoStyle}>
            <h3>{name}</h3>
            <p>{role}, {location} <br /> {description}</p>
        </div>
    </article>
);

// Main component
const OurPeople = () => {
    return (
        <>
        <HeaderSection />
        <section css={containerStyle}>

            <div css={innerContainerStyle}>
                <div css={profilesGridStyle}>
                    <Profile
                        name="Daniel Aminetzah"
                        role="Senior Partner"
                        location="New York"
                        description="Advises global agricultural and specialty chemicals companies..." />
                    <Profile
                        name="Avinash Goyal"
                        role="Senior Partner"
                        location="Mumbai"
                        description="Helps chemical and agriculture companies meet the challenges..." />
                    <Profile
                        name="Ulrich Weihe"
                        role="Senior Partner"
                        location="Frankfurt"
                        description="Provides guidance on Strategy, M&A, Restructuring and..." />
                </div>
            </div>
        </section>
        </>
    );
};

export default OurPeople;
