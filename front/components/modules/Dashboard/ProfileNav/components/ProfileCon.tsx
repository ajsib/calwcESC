import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProfileCardSkeleton from './ProfileCardSkeleton';
import { useAuth } from '@/globalContexts/authContext';
import { fetchRankImage } from '../services/fetchProfileData';

const ProfileContainer: React.FC = () => {
  const { person } = useAuth();

  const [rankImage, setRankImage] = useState<string | undefined>("");

  useEffect(() => {
    // get the rank image
    if (!person) return;
    fetchRankImage(person.rank).then((image) => {
      setRankImage(image);
    });
  }, [person]);

  if (!person) {
    return <ProfileCardSkeleton />;
  }

  return <ProfileCard user={person} rankImage={rankImage} />;
};

export default ProfileContainer;
