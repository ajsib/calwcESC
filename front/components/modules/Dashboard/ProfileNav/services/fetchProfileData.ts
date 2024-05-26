// Profile image will be similarly fetched from the backend
export const fetchRankImage = async (rank: string): Promise<any> => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const formattedRank = rank.toLowerCase().replace(/\s+/g, '-');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${backendUrl}api/images/internal/${formattedRank}.png`);
        }, 500); // Simulate network delay
    });
};
