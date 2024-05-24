export interface ProfileCardProps {
    profilePhoto: string;
    name: string;
    rank: string;
    email: string;
    department: string;
    reportsTo: string;
    id: number;
    onClick: () => void;
}