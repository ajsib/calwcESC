/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeMedium';
import LeftWedgeThin from '@/components/UI/arrows/LeftWedgeThin';
import { PaginationProps } from "../../Types"

const pageSelectorStyle = css`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const arrowButtonStyle = css`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0.6rem;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
        background-color: #ddd;
    }
`;

const numberButtonStyle = css`
    background-color: transparent;
    color: #aaa;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
        color: var(--primary-color); /* Change text color on hover */
        font-weight: bold;
    }
`;

const activeButtonStyle = css`
    color: var(--primary-color); /* Change text color for active button */
    font-weight: bold;
`;

const disabledButtonStyle = css`
    cursor: not-allowed;
    color: #ccc;
`;

const Pagination: React.FC<PaginationProps> = ({ numPages, currentPage, handlePageChange }) => {
    const pageNumbers = Array.from({ length: numPages }, (_, i) => i + 1);
    return (
        <div css={pageSelectorStyle}>
            <button css={[arrowButtonStyle, currentPage === 1 && disabledButtonStyle]} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}><LeftWedgeThin size={15}/></button>
            {pageNumbers.map(page => (
                <button key={page} css={[numberButtonStyle, page === currentPage && activeButtonStyle]} onClick={() => handlePageChange(page)} disabled={page === currentPage}>
                    {page}
                </button>
            ))}
            <button css={[arrowButtonStyle, currentPage === numPages && disabledButtonStyle]} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= numPages}><RightWedgeThin size={15} /></button>
        </div>
    );
};

export default Pagination;
