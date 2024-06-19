import React, { createContext, useContext, useState } from 'react';
import { useUserProfile } from '@/globalContexts/userContext';
import { useRouter } from 'next/router';

const WizardContext = createContext<any>(null);

export const useWizard = () => useContext(WizardContext);

export const WizardProvider = ({ children } : { children: React.ReactNode }) => {
    const { profile } = useUserProfile();
    const router = useRouter();
    const mode = router.query.mode || '1';

    const maxPages = mode === '1' ? 6 : 4;

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
        setPage((prevPage) => Math.min(prevPage + 1, maxPages));
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
