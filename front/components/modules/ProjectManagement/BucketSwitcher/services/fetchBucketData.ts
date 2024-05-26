import TasksData from '@/public/Database/Tasks.json';

export const fetchBucketData = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const buckets = TasksData.Tasks.map(task => task.bucket);
      const uniqueBuckets = Array.from(new Set(buckets));
      resolve(uniqueBuckets);
    }, 500); // Simulate network delay
  });
};
