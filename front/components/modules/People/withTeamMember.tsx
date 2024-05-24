// components/hoc/withTeamMemberProvider.tsx
import { ReactNode } from 'react';
import { TeamMemberProvider } from './TeamMemberContext';

const withTeamMemberProvider = (Component: React.ComponentType) => {
  return function WrappedComponent(props: any) {
    return (
      <TeamMemberProvider>
        <Component {...props} />
      </TeamMemberProvider>
    );
  };
};

export default withTeamMemberProvider;