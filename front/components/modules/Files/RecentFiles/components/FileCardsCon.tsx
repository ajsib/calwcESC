import FileCards from "./FileCards";
import {useState, useEffect} from "react";
import { fetchFileData } from "../services/fetchFileData";
import { File } from '@/public/Types/GlobalTypes';
import SkeletonContainer from "./SkeletonContainer";

const FileCardsCon = () => {
    const [fileData, setFileData] = useState<File[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFileData();
            setFileData(data);
        };
        fetchData();
    }, []);

    // Sort fileData by last edited timestamp in descending order
    const sortedFiles: File[] = fileData.sort((a: File, b: File) => new Date(b.date_modified).getTime() - new Date(a.date_modified).getTime());
    // Select the 4 most recently edited files
    const recentFiles: File[] = sortedFiles.slice(0, 4);

    if (fileData.length === 0) {
        return (
            <SkeletonContainer />
        );
    } else {
        return (
            <div>
                <FileCards fileData={recentFiles} />
            </div>
        );
    }

};

export default FileCardsCon;

