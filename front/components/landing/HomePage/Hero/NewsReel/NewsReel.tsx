import { useState, useEffect } from 'react';

const eventsData = [
  { id: '1', title: 'Operation Northern Shield', date: 'May 10, 2024', url: '/events/operation-northern-shield' },
  { id: '2', title: 'Arctic Warfare Simulation', date: 'June 5, 2024', url: '/events/arctic-warfare-simulation' },
  { id: '3', title: 'Urban Combat Training', date: 'July 20, 2024', url: '/events/urban-combat-training' },
  { id: '4', title: 'Counter-Terrorism Exercise: Operation Guardian', date: 'August 15, 2024', url: '/events/counter-terrorism-exercise-operation-guardian' },
  { id: '5', title: 'Cybersecurity Workshop', date: 'September 10, 2024', url: '/events/cybersecurity-workshop' },
  { id: '6', title: 'Joint Amphibious Assault Drill', date: 'October 25, 2024', url: '/events/joint-amphibious-assault-drill' },
  { id: '7', title: 'High Altitude Low Opening (HALO) Jump Training', date: 'November 12, 2024', url: '/events/high-altitude-low-opening-jump-training' },
  { id: '8', title: 'Arctic Survival Course', date: 'December 8, 2024', url: '/events/arctic-survival-course' },
  { id: '9', title: 'Chemical, Biological, Radiological and Nuclear (CBRN) Response Drill', date: 'January 15, 2025', url: '/events/cbrn-response-drill' },
  { id: '10', title: 'Tactical Medical Training', date: 'February 20, 2025', url: '/events/tactical-medical-training' }
];

const linksData = [
  { id: '1', title: 'Interoperability Team Page', url: '/interoperability' },
  { id: '2', title: 'Lessons Learned', url: '/lessons-learned' },
  { id: '3', title: 'Joint Warfare Assessment', url: '/joint-warfare-assessment' },
  { id: '4', title: 'Bold Quest', url: '/bold-quest' },
  { id: '5', title: 'Project Convergence', url: '/project-convergence' },
  { id: '6', title: 'Simulated Battlefield Software Suite', url: '/simulated-battlefield-software' },
  { id: '7', title: 'Virtual Reality Combat Training Program', url: '/vr-combat-training' },
  { id: '8', title: 'Drone Operations Management System', url: '/drone-operations' },
  { id: '9', title: 'Satellite Imaging Analysis Platform', url: '/satellite-imaging-analysis' },
  { id: '10', title: 'Cybersecurity Threat Intelligence Dashboard', url: '/cybersecurity-dashboard' }
];


export const newsItems: {
  imageUrl: string;
  props: {
    items: { id: string; title: string; date?: string; url?: string; }[];
    type: 'event' | 'link';
  };
}[] = [
  {
    imageUrl: "/images/landing/flicker4.jpg",
    props: {
      items: eventsData.slice(0, 3),
      type: 'event'
    }
  },
  {
    imageUrl: "/images/landing/flicker3.jpg",
    props: {
      items: linksData.slice(0, 4),
      type: 'link'
    }
  }
];
  
const useNewsReel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const advanceItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const regressItem = () => {
    setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : newsItems.length - 1);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return [currentIndex, setCurrentIndex, advanceItem, regressItem] as const;
};

export default useNewsReel;
