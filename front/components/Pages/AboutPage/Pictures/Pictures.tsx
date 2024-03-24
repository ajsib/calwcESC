/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface PictureProps {
        children?: React.ReactNode;
    }

const containerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - (var(--margin) * 2)); // 100% minus the left and right padding
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`;

const titleStyle = css`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 1rem;
    margin-left: var(--margin);
    `;


export default function Picture({ children } : PictureProps) {
    const childrenArray = React.Children.toArray(children);
    return (
        <div>
            <h1 css={titleStyle}>Our People</h1>
            <div css={containerStyle}>
                {childrenArray.map((child, index) => (
                <div key={index}>
                {child}
                </div>
            ))}
            </div>
        </div>
    );
  };