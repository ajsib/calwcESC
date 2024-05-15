// pages/people.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SearchBar from '@/components/modules/Dashboard/SearchBar/components/SearchBar';
import Separator from '@/components/Shared/Internal/Separator';
import ProfileCardsList from './Team/CardList';

const peoplePageStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  position: relative;
`;

const PeoplePage = () => {
  return (
    <>
      <div css={peoplePageStyle}>
        <SearchBar />
        <Separator />
        <ProfileCardsList />
        <Separator />
        <footer css={css`padding: 1rem; text-align: center;`}>
          Finding People
        </footer>
      </div>
    </>
  );
};

export default PeoplePage;
