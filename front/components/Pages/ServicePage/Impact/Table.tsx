/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const tableStyle = css`
  border-collapse: collapse;
  width: 100%;
  height: 200px;
  width: calc(100% - (var(--margin) * 2)); // 100% minus the left and right padding
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const cellStyle = css`
  border-right: 10px solid var(--primary-color); /* Adjust the border color as needed */
  padding: 8px;
  text-align: center;
  width: 25%;
  /* Conditional border style for the last cell */
  &:last-child {
    border-right: none;
`;

interface TableProps {
  children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
    const childrenArray = React.Children.toArray(children);
    return (
      <table css={tableStyle}>
        <tbody>
          <tr>
            {childrenArray.map((child, index) => (
              <td css={cellStyle} key={index}>
                {child}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
  