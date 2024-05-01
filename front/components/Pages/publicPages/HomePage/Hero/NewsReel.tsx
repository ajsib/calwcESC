import { useState, useEffect } from 'react';

export const newsItems = [
    {
        imageUrl: "/images/landing/flicker4.jpg",
        content: () => (
          <>
            <h1>Upcoming Events</h1>
            <ul>
              {[
                "Tactical Communication Systems Workshop - September 12, 2024",
                "Advanced Weaponry Symposium - May 15, 2024",
                "Experimental Drone Showcase - June 28, 2024",
                "Military Robotics Conference - July 10, 2024",
                "Biomedical Innovations Expo - August 5, 2024",
                "Cybersecurity Training Camp - October 20, 2024",
                "Artificial Intelligence Integration Summit - November 8, 2024",
                "Virtual Reality Warfare Simulation - December 15, 2024",
              ].map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </>
        )
      },
      {
        imageUrl: "/images/landing/flicker3.jpg",
        content: () => (
          <>
            <h1>Important Links</h1>
            <ul>
              {[
                "Research Database - /research",
                "Experimental Equipment Catalog - /equipment",
                "Training Programs - /training",
                "Collaboration Opportunities - /collaboration",
                "Experimental Results Repository - /results",
                "Ethics and Compliance Guidelines - /ethics",
                "Technology Transfer Initiatives - /transfer",
                "Innovation Funding Grants - /grants",
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.split(" - ")[1]}>{link.split(" - ")[0]}</a>
                </li>
              ))}
            </ul>
          </>
        )
      }
  ];
  
  

  const useNewsReel = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Specify the type of currentIndex as number
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % newsItems.length); // Specify the type of prevIndex as number
      }, 8000); // Change the interval as needed
      return () => clearInterval(interval);
    }, []);
  
    return [currentIndex, setCurrentIndex] as const; // Return tuple with const assertion
  };
  
  export default useNewsReel;
