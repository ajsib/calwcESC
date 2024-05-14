# Guide to Creating a SubFeature/SubModule

## 1. Steps to Create a SubFeature/SubModule

### Step 1: Refactor Presentational Component
- **Goal**: Modify the existing presentational component to accept props.
- **Action**: Update the component to take in necessary props, removing any embedded logic.

### Step 2: Create the Container Component
- **Goal**: Handle the logic and state management.
- **Action**: Name the container component the same as the presentational component but with a `Container` suffix.
- **Details**: 
  - Add logic for `useEffect` and `useState`.
  - Move complex logic and API calls here.

### Step 3: Create Service Functions
- **Goal**: Simulate or handle API calls and other service functions.
- **Action**: Implement these functions in the `services` directory.

### Step 4: Create Dummy Data
- **Goal**: Provide mock data for testing.
- **Action**: Structure the dummy data in a JSON file.

### Step 5: Create Types File
- **Goal**: Define TypeScript types for the submodule.
- **Action**: Create a `Types.ts` file and ensure all imports are correct.

### Step 6: Contexts (If Required)
- **Goal**: Manage shared state if needed.
- **Action**: Create a `Context.tsx` file for contexts.

### Step 7: Bundle Components
- **Goal**: Organize the submodule components for export.
- **Action**: Create an `index.tsx` file that exports the necessary components.

### Example Directory Structure
```plaintext
/components/modules/ExampleModule/ExampleSubFeature
├── components
│   ├── ExampleComponent.tsx
│   ├── ExampleComponentContainer.tsx
├── services
│   └── fetchExampleData.ts
├── Context.tsx (if needed)
├── dummy.json
├── index.tsx
└── Types.ts
```


## 2. Detailed System Prompt for AI

### System Prompt for AI

Below is a detailed system prompt to guide an AI model through the refactoring process:

```markdown
You are a large language model Your task is to help refactor a pre-existing presentational component into a submodule with proper architecture for a Next.js project Follow these steps:

1. **Refactor Presentational Component**: Modify the existing presentational component to accept props. Remove any embedded logic and ensure it only contains code necessary to render the component.
    - Example: Refactor `ProfileCard.tsx` to accept `user` as a prop.

2. **Create the Container Component**: Create a new component named the same as the presentational component but with a `Container` suffix. This component will handle all logic and state management, including `useEffect` and `useState`.
    - Example: Create `ProfileCardContainer.tsx` to manage fetching profile data.

3. **Create Service Functions**: Implement service functions to handle API calls or simulate them using dummy data. Place these functions in the `services` directory.
    - Example: Implement `fetchProfileData.ts` to fetch profile data from a dummy JSON file.

4. **Create Dummy Data**: Provide realistic dummy data in a JSON file. This data will be used to simulate API responses during development.
    - Example: Create `dummy.json` with mock profile data.

5. **Create Types File**: Define TypeScript types for the submodule to ensure type safety and consistency.
    - Example: Create `Types.ts` with `UserProfile` interface.

6. **Contexts (If Required)**: If the submodule requires shared state management, create a `Context.tsx` file to define and manage context.
    - Example: Create `ProfileContext.tsx` to manage profile state.

7. **Bundle Components**: Organize the submodule components for export by creating an `index.tsx` file. This file should export the necessary components and context providers.
    - Example: Create `index.tsx` to export `ProfileCardContainer` and `ProfileContext`.

### Example Directory Structure
Use the following structure as a reference for organizing the submodule:

"""plaintext
@/components/modules/Dashboard/ProfileNav
├── components
│   ├── ProfileCard.tsx
│   ├── ProfileCardContainer.tsx
│   ├── Navigation.tsx
├── services
│   └── fetchProfileData.ts
├── dummy.json
├── index.tsx
└── Types.ts
"""
```

#### Example Tree Command
To visualize the directory structure, you can use the following tree command:

```bash
tree /components/modules/<ModuleName>/<SubFeatureName>
```

#### Pre-Existing Files for Context
Include the content of pre-existing presentational components as they will be refactored. Ensure all necessary imports are corrected and files are organized as per the structure provided.


### Sample Output to give to AI:

```plaintext
Example Output
Presentational Component (ProfileCard.tsx)
typescript
Copy code
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { UserProfile } from '../Types';

interface ProfileCardProps {
  user: UserProfile;
}

const profileCardStyle = css`
  display: flex;
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  width: 50%;
  height: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
  }
`;

const profileImageSection = css`
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #eee;
  background-size: cover;
  background-position: center;
`;

const profileInfoSection = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const rankEpauletSection = css`
  flex: 0 0 auto;
  width: auto;
  height: 100px;
  aspect-ratio: 1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const nameStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

const rankStyle = css`
  font-size: 1rem;
  font-style: italic;
  color: #000;
`;

const departmentStyle = css`
  font-size: 1rem;
  color: #666;
`;

const lastLoginStyle = css`
  padding-top: 2rem;
  font-size: 0.8rem;
  color: #333;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => (
  <div css={profileCardStyle}>
    <div
      css={profileImageSection}
      style={{ backgroundImage: `url(${user.profileImage})` }}
    />
    <div css={profileInfoSection}>
      <p css={nameStyle}>{user.name}</p>
      <p>
        <span css={rankStyle}>{user.rank}</span>
        <span css={departmentStyle}> | {user.department}</span>
      </p>
      <p className='caption' css={lastLoginStyle}>Last Login: {user.lastLogin}</p>
    </div>
    <div
      css={rankEpauletSection}
      style={{ backgroundImage: `url(${user.rankImage})` }}
    />
  </div>
);

export default ProfileCard;
Container Component (ProfileCardContainer.tsx)
typescript
Copy code
import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import { UserProfile } from '../Types';
import { fetchProfileData } from '../services/fetchProfileData';

const ProfileCardContainer: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetchProfileData().then(data => setProfile(data));
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return <ProfileCard user={profile} />;
};

export default ProfileCardContainer;
Service Function (fetchProfileData.ts)
typescript
Copy code
import { UserProfile } from '../Types';
import dummyData from '../dummy.json';

export const fetchProfileData = async (): Promise<UserProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const profile = {
        ...dummyData.profile,
        profileImage: '/images/internal/avatar.png',
        rankImage: '/images/internal/captain.png',
      };
      resolve(profile);
    }, 500); // Simulate network delay
  });
};
Dummy Data (dummy.json)
json
Copy code
{
  "profile": {
    "id": 1,
    "name": "John Doe",
    "rank": "Captain",
    "department": "Engineering",
    "lastLogin": "2024-04-27T10:00:00Z"
  }
}
Types (Types.ts)
typescript
Copy code
export interface UserProfile {
  id: number;
  name: string;
  rank: string;
  department: string;
  lastLogin: string;
  profileImage: string;
  rankImage: string;
}
Index File (index.tsx)
typescript
Copy code
import React from 'react';
import { css } from '@emotion/react';
import ProfileCardContainer from './components/ProfileCardContainer';
import ModuleNavigation from './components/Navigation';

const profileNavContainer = css`
  display: flex;
  flex-direction: row;
  background: #FBFBFB;
  gap: 1rem;
  padding: 2rem;
`;

const ProfileNavModule: React.FC = () => {
  const handleNavigation = (path: string) => {
    console.log(`Navigating to ${path}`);
  };

  return (
    <div css={profileNavContainer}>
      <ProfileCardContainer />
      <ModuleNavigation onNavigate={handleNavigation} />
    </div>
  );
};

export default ProfileNavModule;
```







