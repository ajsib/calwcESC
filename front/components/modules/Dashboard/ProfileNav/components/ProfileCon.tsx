import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProfileCardSkeleton from './ProfileCardSkeleton';
import { useUserProfile } from '@/globalContexts/userContext';
import { fetchRankImage } from '../services/fetchProfileData';

const ProfileContainer: React.FC = () => {
  const { profile } = useUserProfile();

  const [rankImage, setRankImage] = useState<string | undefined>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profile) return;
    
    const loadProfileData = async () => {
      const image = await fetchRankImage(profile.rank);
      setRankImage(image);
      setLoading(false);
    };

    setTimeout(loadProfileData, 1000); // Add a 1-second delay
  }, [profile]);

  if (loading) {
    return <ProfileCardSkeleton />;
  }

  if (!profile) {
    return null;
  }

  return <ProfileCard user={profile} rankImage={rankImage} />;
};

export default ProfileContainer;
