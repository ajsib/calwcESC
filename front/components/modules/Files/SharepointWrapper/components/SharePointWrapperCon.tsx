import { useState, useEffect } from "react";
import SharepointWrapper from "./SharepointWrapper";
import SharepointSkeleton from "./SharepointWrapperSkeleton";
import { fetchFileData } from "../services/fetchFileData";
import { File } from "@/public/Types/GlobalTypes";

const SharepointWrapperCon = () => {
    const [fileData, setFileData] = useState<File[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFileData();
            setFileData(data);
        };
        fetchData();
    }, []);

    if (fileData.length === 0) {
        return <SharepointSkeleton />;
    }

    return <SharepointWrapper fileData={fileData} />

};
export default SharepointWrapperCon;