// components/Pages/internalPages/FileSystem/FileSystemPage.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SearchBar from './SearchBar';
import NavigationTabs from './NavigationTabs';
import FileCards from './FileCards';
import SharepointWrapper from './SharepointWrapper/SharepointWrapper';
import Separator from '@/components/Shared/Internal/Separator';

// Styling for the entire page
const fileSystemPageStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

// Export the main FileSystemPage component
const FileSystemPage = () => {
  return (
    <div css={fileSystemPageStyle}>
      <SearchBar />
      <NavigationTabs />
      <Separator />
      <FileCards />
      <SharepointWrapper />
    </div>
  );
};

export default FileSystemPage;
