import React, { createContext, useContext, useState } from 'react';
import { useUserProfile } from '@/globalContexts/userContext';

const WizardContext = createContext<any>(null);

export const useWizard = () => useContext(WizardContext);

export const WizardProvider = ({ children } : { children: React.ReactNode }) => {
    const { profile } = useUserProfile();
    const [page, setPage] = useState(1);
    const [experimentRequest, setExperimentRequest] = useState({
        name: profile?.name || '',
        unit: '',
        phoneNumber: '',
        email: profile?.email || '',
        description: '',
        links: [],
    });

    const [experimentReport, setExperimentReport] = useState({
        name: profile?.name || '',
        unit: '',
        phoneNumber: '',
        email: profile?.email || '',
        description: '',
        questions: '',
        assets: '',
        status: '',
        links: [],
    });

    const goForward = () => {
        setPage((prevPage) => Math.min(prevPage + 1, 7));
    };

    const goBack = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <WizardContext.Provider
            value={{
                page,
                setPage,
                goForward,
                goBack,
                experimentRequest,
                setExperimentRequest,
                experimentReport,
                setExperimentReport,
            }}
        >
            {children}
        </WizardContext.Provider>
    );
};
