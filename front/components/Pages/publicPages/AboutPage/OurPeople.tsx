/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useRouter } from 'next/router'; // Added router

// Styles
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

const profileStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
    flex-grow: 1;
    max-width: calc(100% - 4 * var(--margin) - 2rem);
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        cursor: pointer; 
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
    }
`;

const profileImageStyle = css`
    width: 100px;
    height: 100px;
    background-color: grey;
    border-radius: 50%;
`;

const profileInfoStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 180px; // Increased width for better layout
`;

const titleStyle = css`
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 4rem;
    padding-top: 3rem;
    margin-left: var(--margin);
`;

interface ProfileProps {
    name: string;
    role: string;
    location: string;
    description: string;
}

// Profile component
const Profile: React.FC<ProfileProps> = ({ name, role, location, description }) => (
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
                        <Profile
                            name="Chris Allen"
                            role="Major"
                            location="CALWC Kingston"
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
            </div>
        </div>
    );
};

export default OurPeople;
