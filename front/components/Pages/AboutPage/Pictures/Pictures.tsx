/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { titleStyle } from '@/styles/GlobalStyles';

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
