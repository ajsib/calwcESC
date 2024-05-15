/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ProfileCardProps } from '../../Types';
import Image from 'next/image'; 

const ProfileCard = ({ profilePhoto, name, rank, email, department, reportsTo }: ProfileCardProps) => {
    const router = useRouter();
    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
    const [hideTimeout, setHideTimeout] = useState<number | null>(null); // Store the timeout ID
  
    const cardStyle = css`
    display: flex;
    align-items: center;
    padding: 1.25rem;
    margin: 0.5rem 0;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: ${position ? position.y : '-1000px'}px;
    left: ${position ? position.x : '-1000px'}px;
    transform: translate(-50%, -50%);
    transition: top 0.3s ease, left 0.3s ease;
    z-index: 1000;
  `;
  
    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setPosition({ x: event.clientX, y: event.clientY });
      // If a hide timeout is pending, clear it
      if (hideTimeout !== null) {
        clearTimeout(hideTimeout);
        setHideTimeout(null);
      }
    };
  
    const handleMouseLeave = () => {
      // Set a timeout to hide the card after a short delay
      const timeoutId = window.setTimeout(() => {
        setPosition(null);
      }, 500); // Adjust the delay as needed (200 milliseconds in this example)
      setHideTimeout(timeoutId); // Store the timeout ID
    };

    const handleClick = () => {
      router.push(`/profile/${name}`);
    };
  
    return (
        <div css={cardStyle} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div>
        <Image src={profilePhoto} alt={name} style={{ width: '55px', height: '55px', borderRadius: '50%' }} width={55} height={55} layout="intrinsic" />
        </div>
        <div>
          <div>{name}</div>
          <div>{rank}</div>
          <div>{department}</div>
          <div>Reports to: {reportsTo}</div>
          <div>{email}</div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
