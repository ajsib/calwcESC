import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import { UserProfile } from '../Types';
import { fetchProfileData } from '../services/fetchProfileData';

const ProfileContainer: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetchProfileData().then(data => setProfile(data));
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return <ProfileCard user={profile} />;
};

export default ProfileContainer;
