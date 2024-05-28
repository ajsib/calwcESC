// WizardContext.js
import React, { createContext, useContext, useState } from 'react';

const WizardContext = createContext<any>(null);

export const useWizard = () => useContext(WizardContext);

export const WizardProvider = ({ children } : { children: React.ReactNode }) => {
    const [page, setPage] = useState(1);
    const [projectInfo, setProjectInfo] = useState({
        name: '',
        description: '',
        contactName: '',
        contactInfo: ''
    });
    const [questions, setQuestions] = useState(['']);
    const [experimentType, setExperimentType] = useState('');
    const [studyMethods, setStudyMethods] = useState([]);

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
                projectInfo,
                setProjectInfo,
                questions,
                setQuestions,
                experimentType,
                setExperimentType,
                studyMethods,
                setStudyMethods
            }}
        >
            {children}
        </WizardContext.Provider>
    );
};
