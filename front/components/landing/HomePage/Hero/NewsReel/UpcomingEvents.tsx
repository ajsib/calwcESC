/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Event {
  id: string;
  title: string;
  date: string;
}

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {

  const eventsContainerStyle = css`
  display: flex;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to bottom right, rgba(51, 51, 51, 0.8), transparent),
              linear-gradient(to top left, rgba(51, 51, 51, 0.8), transparent);
  transition: background 0.3s ease, transform 0.3s ease;
  transform: translateX(20%);
  &:hover {
    background: linear-gradient(to bottom right, rgba(51, 51, 51, 0.9), transparent),
                linear-gradient(to top left, rgba(51, 51, 51, 0.9), transparent),
                #333;
    transform: translateX(0);
  }
`;


  const eventsStyle = css`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  const eventItemStyle = css`
  transition: color 0.3s ease;
  &:hover {
    cursor: pointer;
    color: #ff9900;
    text-decoration: underline;

    // Apply styles to all child elements on hover
    * {
      color: #ff9900;
      text-decoration: underline;
    }
  }
`;

const eventTitleStyle = css`
  font-weight: bold;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
`;

const eventDateStyle = css`
  font-size: 0.9rem;
  color: #999;
  transition: color 0.3s ease;
`;

  const buttonStyle = css`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #444;
    transition: background-color 0.3s ease;
    &:hover {
      cursor: pointer;
      background-color: #555; // Lighten on hover
    }
  `;

  const buttonText = css`
    padding: 1rem;
    font-size: 1.2rem;
    color: #fff;
  `;

  const titleStyle = css`
    font-size: 1.5rem;
    font-weight: bold;
    // margin-bottom: 1rem;
  `;

return (
      <div css={eventsContainerStyle}>
        <div css={eventsStyle}>
          <div css={titleStyle}>Upcoming Events</div>
          {events.map((event) => (
            <div key={event.id} css={eventItemStyle}>
              <div css={eventTitleStyle}>{event.title}</div>
              <div css={eventDateStyle}>{event.date}</div>
            </div>
          ))}
        </div>
        <div css={buttonStyle}>
          <div css={buttonText}>View All Events</div>
        </div>
      </div>
  );
};

export default UpcomingEvents;
