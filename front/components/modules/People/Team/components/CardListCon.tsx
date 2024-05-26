import { useState, useEffect } from 'react';
import CardList from './CardList';
import { fetchProfileData } from '../services/fetchProfileData';
import { Person as Profile } from '@/public/Types/GlobalTypes';
import ProfileCardSkeleton from './CardSkeleton';

const CardListCon = () => {
    const [profileData, setProfileData] = useState<Profile[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchProfileData().then((data) => {
            setProfileData(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                    <ProfileCardSkeleton key={index} />
                ))
            ) : (
                <CardList profiles={profileData} />
            )}
        </>
    );
};

export default CardListCon;
