import { UserProfile } from '../Types';
import dummyData from '../dummy.json';

export const fetchProfileData = async (): Promise<UserProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const profile = {
        ...dummyData.profile,
        rankImage: `http://localhost:3000/api/images/internal/${dummyData.profile.rank.toLowerCase()}.png`,
      };
      resolve(profile);
    }, 500); // Simulate network delay
  });
};
