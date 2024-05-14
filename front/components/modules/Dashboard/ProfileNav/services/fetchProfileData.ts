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
