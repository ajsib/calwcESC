import { UserProfile } from '../Types';
import dummyData from '../dummy.json';

export const fetchProfileData = async (): Promise<UserProfile> => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  return new Promise((resolve) => {
    setTimeout(() => {
      const profile = {
        ...dummyData.profile,
        rankImage: `${backendUrl}api/images/internal/${dummyData.profile.rank.toLowerCase()}.png`,
      };
      resolve(profile);
    }, 500); // Simulate network delay
  });
};
