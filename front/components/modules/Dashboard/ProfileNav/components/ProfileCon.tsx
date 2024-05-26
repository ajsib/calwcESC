import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProfileCardSkeleton from './ProfileCardSkeleton';
import { useAuth } from '@/globalContexts/authContext';
import { fetchRankImage } from '../services/fetchProfileData';

const ProfileContainer: React.FC = () => {
  const { person } = useAuth();

  const [rankImage, setRankImage] = useState<string | undefined>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!person) return;
    
    const loadProfileData = async () => {
      const image = await fetchRankImage(person.rank);
      setRankImage(image);
      setLoading(false);
    };

    setTimeout(loadProfileData, 1000); // Add a 1-second delay
  }, [person]);

  if (loading) {
    return <ProfileCardSkeleton />;
  }

  if (!person) {
    return null;
  }

  return <ProfileCard user={person} rankImage={rankImage} />;
};

export default ProfileContainer;
