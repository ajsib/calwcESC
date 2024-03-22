/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card';
import { ReactNode } from 'react';
import WedgeMedium from '@/components/UI/arrows/RightWedgeThin';

const cardContentStyle = css`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 6rem;
  padding-top: 4rem;
  padding-bottom: 8rem;
  width: calc(50vw - var(--margin) - 12rem);
  text-align: left;
  transition: background-color 0.3s ease-in-out;
`;

const cardTitleStyle = css`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  line-height: 1.2;
`;

const cardSubtitleStyle = css`
  display: flex; /* Changed to flex to align subtitle and SVG vertically */
  align-items: center; /* Vertically center the subtitle and SVG */
  font-size: 1.2rem;
  color: #555;
  position: relative;
  transition: all 0.3s ease-in-out;
  line-height: 1.5rem;
`;

const arrowIconStyle = css`
  margin-left: 1.5rem; /* Adjust margin instead of padding */
  transition: transform 0.3s ease-in-out;
  width: 24px;
  height: 24px;
`;

const cardStyleHover = css`
  svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    svg {
      transform: translateX(5px);
    }
  }
`;

interface CardTemplateProps {
  title: ReactNode;
  subtitle: ReactNode;
}

const CardTemplate = ({ title, subtitle }: CardTemplateProps) => (
  <div css={cardStyleHover}>
    <Card>
      <div css={cardContentStyle}>
        <h2 css={cardTitleStyle}>{title}</h2>
        <div css={cardSubtitleStyle}>
          <p>{subtitle}</p>
          <div css={arrowIconStyle}><WedgeMedium size={26} /></div>
        </div>
      </div>
    </Card>
  </div>
);

export default CardTemplate;
