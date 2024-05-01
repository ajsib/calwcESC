/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { LargeNewsCard } from './NewsCards/LargeCard';
import { MediumNewsCard } from './NewsCards/MediumCard';
import { SmallNewsCard } from './NewsCards/SmallCard';
import NewsNavigateCard from './NewsButton';

interface NewsItem {
  title: string;
  date: string;
  imageUrl: string;
  content: string;
}

// Sample data structure for news items
const newsItems: NewsItem[] = [
    { 
      title: "Canadian Armed Forces Deploy New Arctic Surveillance System", 
      date: "29 Apr. 2024", 
      imageUrl: "/images/landing/flicker6.jpg", 
      content: "In a strategic move to bolster surveillance capabilities in the Arctic region, the Canadian Armed Forces have deployed a state-of-the-art surveillance system. This advanced system aims to enhance Canada's monitoring and response capabilities in the Arctic's challenging environment, ensuring sovereignty and security in the region.",
    },
    { 
      title: "Canadian Troops Participate in NATO Exercise Trident Juncture", 
      date: "28 Apr. 2024", 
      imageUrl: "/images/landing/flicker12.jpg", 
      content: "As part of Canada's commitment to NATO, Canadian troops have joined multinational forces in Exercise Trident Juncture. The exercise, taking place in Europe, focuses on interoperability and readiness, demonstrating Canada's dedication to collective defense and strengthening alliances.",
    },
    { 
      title: "Canada Launches Initiative to Combat Cyber Threats", 
      date: "30 Apr. 2024", 
      imageUrl: "/images/landing/flicker5.jpg", 
      content: "Amid growing cyber threats, Canada has launched a comprehensive initiative to enhance cyber defense capabilities. The initiative includes investments in cybersecurity infrastructure, collaboration with international partners, and the development of cutting-edge technologies to safeguard Canada's digital assets and national security.",
    },
    { 
      title: "Canadian Forces Showcase Innovative Unmanned Aerial Vehicles", 
      date: "01 May 2024", 
      imageUrl: "/images/landing/flicker6.jpg", 
      content: "The Canadian Armed Forces have unveiled a series of innovative unmanned aerial vehicles (UAVs) designed to revolutionize reconnaissance and surveillance operations. These advanced UAVs boast enhanced capabilities, including extended flight endurance, real-time data transmission, and autonomous navigation, bolstering Canada's military capabilities.",
    },
    { 
      title: "Canada Hosts International Summit on Peacekeeping Operations", 
      date: "02 May 2024", 
      imageUrl: "/images/landing/flicker7.jpg", 
      content: "As a global leader in peacekeeping efforts, Canada is hosting an international summit on peacekeeping operations. The summit aims to foster dialogue, share best practices, and explore innovative approaches to addressing complex security challenges. With participants from around the world, Canada reaffirms its commitment to promoting peace and stability.",
    },
    { 
      title: "Canadian Navy Enhances Maritime Security in the Pacific", 
      date: "03 May 2024", 
      imageUrl: "/images/landing/flicker8.jpg", 
      content: "The Royal Canadian Navy has launched a maritime security operation in the Pacific region to safeguard vital sea lanes and protect Canadian interests. Through patrols, surveillance, and collaboration with regional partners, the Canadian Navy reinforces its presence in the Indo-Pacific, contributing to regional stability and security.",
    },
    { 
      title: "Canada Expands Military Cooperation with NATO Allies", 
      date: "04 May 2024", 
      imageUrl: "/images/landing/flicker9.jpg", 
      content: "In an effort to strengthen military cooperation and interoperability, Canada has expanded its engagement with NATO allies. Through joint exercises, training programs, and strategic partnerships, Canada reaffirms its commitment to collective defense and reinforces its role as a key contributor to NATO's missions and objectives.",
    },
  ];
  

const NewsSection = () => {
  const sectionStyle = css`
    display: flex;
    width: calc(100% - 2rem);
    height: 50vh;
    background-color: #fff;
    gap: 1rem;
    margin: 1rem;
  `;

  const leftColumn = css`
    width: 50%;
    height: 100%;
  `;

  const rightColumn = css`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  return (
    <div css={sectionStyle}>
      <div css={leftColumn}>
        {newsItems.length > 0 && <LargeNewsCard item={newsItems[0]} />}
      </div>
      <div css={rightColumn}>
        {newsItems.length > 1 && <MediumNewsCard item={newsItems[1]} />}
        {newsItems.length > 2 && <MediumNewsCard item={newsItems[2]} />}
      </div>
      <div css={rightColumn}>
        {newsItems.slice(4).map((item, index) => (
          <SmallNewsCard key={index} item={item} />
        ))}
        <NewsNavigateCard />
      </div>
    </div>
  );
};

export default NewsSection;
