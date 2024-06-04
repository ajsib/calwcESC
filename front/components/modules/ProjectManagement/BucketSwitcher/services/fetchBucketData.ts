import TasksData from '@/public/Database/Tasks.json';


// find out why this crashes the page
// import axios from 'axios';

// export const fetchBucketData = async (): Promise<string[]> => {
//   try {
//     const { data: tasks } = await axios.get('/api/tasks');
//     const buckets = tasks.map((task: { bucket: string }) => task.bucket);
//     const uniqueBuckets = Array.from(new Set(buckets));
//     return uniqueBuckets;
//   } catch (error) {
//     console.error('Error fetching bucket data:', error);
//     throw error;
//   }
// };


export const fetchBucketData = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const buckets = TasksData.Tasks.map(task => task.bucket);
      const uniqueBuckets = Array.from(new Set(buckets));
      resolve(uniqueBuckets);
    }, 500); // Simulate network delay
  });
};
