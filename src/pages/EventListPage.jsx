import { Fragment, useEffect, useState } from "react";
import { getEvents } from "../services/eventsService";
import { EventCard } from "../components/EventCard";

export function EventListPage() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then((events) => setEvents(events));
  });
  return (
    <Fragment>
      <ul>
        {events.map((event, index) => {
          return (
            <li key={index}>
              <EventCard event={event} />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
