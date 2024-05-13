/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

// Styles
const profileStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    margin: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
    flex-grow: 1;
    max-width: calc(100% - 2 * var(--margin));
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
    max-width: 240px; // Increased width for better text display
`;

const nameStyle = css`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const roleLocationStyle = css`
    font-size: 1rem;
    color: #666;
`;

const descriptionStyle = css`
    font-size: 0.9rem;
    margin-top: 0.5rem;
`;

// Interface for props
interface ProfileProps {
    name: string;
    rank: string;
    role: string;
    location: string;
    description: string;
}

// Profile component
const ProfileCard: React.FC<ProfileProps> = ({ name, rank, role, location, description }) => (
    <article css={profileStyle}>
        <div css={profileImageStyle} />
        <div css={profileInfoStyle}>
            <h3 css={nameStyle}>{rank} {name}</h3>
            <p css={roleLocationStyle}>{role}, {location}</p>
            <p css={descriptionStyle}>{description}</p>
        </div>
    </article>
);

export default ProfileCard;
