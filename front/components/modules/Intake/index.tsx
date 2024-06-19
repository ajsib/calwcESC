import IntakePage from "./IntakePage/components/Intake";
import { useWizard, WizardProvider } from './IntakeContext';

const Intake = () => {
    return (
        <div>
            <WizardProvider>
                <IntakePage />
            </WizardProvider>
        </div>
    );
};

export default Intake;