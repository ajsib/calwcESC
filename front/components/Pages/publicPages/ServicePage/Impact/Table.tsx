/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState, ReactNode, Children} from 'react';

const tableStyle = css`
  border-collapse: collapse;
  width: 100%;
  height: 15rem;
  width: calc(80% - (var(--margin) * 2));
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const cellStyle = css`
  border-right: 1px solid var(--primary-color);
  padding: 8px;
  text-align: center;
  width: 25%;
  &:last-child {
    border-right: none;
`;


// Mobile table style
const mobileTableStyle = css`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const mobileCellStyle = css`
  border-bottom: 1px solid var(--primary-color);
  padding: 8px;
  text-align: center;
  &:last-child {
    border-bottom: none;
  }
`;

interface TableProps {
  children: ReactNode;
}

// MobileTable component
function MobileTable({ children }: TableProps) {
  const childrenArray = Children.toArray(children);
  return (
    <table css={mobileTableStyle}>
      <tbody>
        {childrenArray.map((child, index) => (
          <tr key={index}>
            <td css={mobileCellStyle}>
              {child}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


interface TableProps {
  children: ReactNode;
}

export default function Table({ children }: TableProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial call to set isMobile based on window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run effect only once on mount

  const childrenArray = Children.toArray(children);

  return isMobile ? (
    <MobileTable>{children}</MobileTable>
  ) : (
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

  