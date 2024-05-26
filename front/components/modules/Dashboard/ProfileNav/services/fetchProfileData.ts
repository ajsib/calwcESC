// profile image will be similarly fetched from the backend
export const fetchRankImage = async (rank: string): Promise<any> => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${backendUrl}api/images/internal/${rank.toLowerCase()}.png`);
        }, 500); // Simulate network delay
    });
};
