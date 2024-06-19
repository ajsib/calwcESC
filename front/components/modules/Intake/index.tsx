import IntakePage from "./IntakePage/components/Intake";
import { WizardProvider } from './IntakeContext';

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