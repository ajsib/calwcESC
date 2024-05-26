import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProfileCardSkeleton from './ProfileCardSkeleton';
import { UserProfile } from '../Types';
import { fetchProfileData } from '../services/fetchProfileData';

const ProfileContainer: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetchProfileData().then(data => setProfile(data));
    console.log(profile);
  }, [profile]);

  if (!profile) {
    return <ProfileCardSkeleton />;
  }

  return <ProfileCard user={profile} />;
};

export default ProfileContainer;
