import { useState, useEffect } from 'react';
import CardList from './CardList';
import { fetchProfileData } from '../services/fetchProfileData';
import { Profile } from '../../Types';

const CardListCon = () => {
    const [profileData, setProfileData] = useState<Profile[]>([]);

    useEffect(() => {
        fetchProfileData().then((data) => setProfileData(data));
    }, []);

    return <CardList profiles={profileData} />;
};

export default CardListCon;
