/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid';

const calendarContainerStyle = css`
    min-width: 320px;
    height: calc(100vh - 320px);
    border: 0px solid #ccc;
    background-color: #f9f9f9;
    .fc {
        height: 100%;
        .fc-timegrid-col {
            background-color: #ffffff; // Change the background color of the time grid
        }
    }
`;

const eventContentStyle = css`
    padding: 8px;
    .fc-event-time {
        display: block;
        margin-bottom: -8px;
    }
    .fc-event-title {
        white-space: normal;
    }
`;

interface EventInfo {
    timeText: string;
    event: {
        title: string;
        id?: string; // Add additional fields as needed
        start?: string;
        end?: string;
        color?: string;
    };
}

// Function to get the current date in the format YYYY-MM-DD
const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

const todayDate = getCurrentDate();

const events = [
    { start: `${todayDate}T06:00:00`, end: `${todayDate}T07:00:00`, title: 'Morning Briefing', color: '#3D4132' },
    { start: `${todayDate}T07:30:00`, end: `${todayDate}T09:00:00`, title: 'Equipment Check and Setup', color: '#3D4132' },
    { start: `${todayDate}T09:30:00`, end: `${todayDate}T11:30:00`, title: 'Field Experimentation', color: '#3D4132' },
    { start: `${todayDate}T12:00:00`, end: `${todayDate}T13:00:00`, title: 'Lunch Break', color: '#3D4132' },
    { start: `${todayDate}T13:30:00`, end: `${todayDate}T15:00:00`, title: 'Data Analysis and Reporting', color: '#3D4132' },
    { start: `${todayDate}T15:30:00`, end: `${todayDate}T17:00:00`, title: 'Strategy Meeting', color: '#3D4132' },
    { start: `${todayDate}T17:30:00`, end: `${todayDate}T18:30:00`, title: 'Debrief and Documentation', color: '#3D4132' },
];

const DailyCalendar = () => {
    const renderEventContent = (eventInfo: EventInfo) => {
        return (
            <div css={eventContentStyle}>
                <div className="fc-event-time">{eventInfo.timeText}</div>
                <div className="fc-event-title">{eventInfo.event.title}</div>
            </div>
        );
    };

    return (
        <div css={calendarContainerStyle}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridDay"
                headerToolbar={false}
                events={events}
                slotMinTime="00:00:00"
                slotMaxTime="24:00:00"
                allDaySlot={false}
                height="100%"
                eventContent={renderEventContent}
            />
        </div>
    );
};

export default DailyCalendar;
