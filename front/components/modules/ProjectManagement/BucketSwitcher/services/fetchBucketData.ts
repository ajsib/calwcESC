import BucketData from "../../buckets-dummy.json";

export const fetchBucketData = async (): Promise<string[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(BucketData);
      }, 500); // Simulate network delay
    });
  };
