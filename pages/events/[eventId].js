import React, { Fragment } from "react";
import { getAllEvents, getEventById } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import ErrorAlert from "../../components/ui/error-alert";

const Events = (props) => {
  const event = props.selectedEvent;

  if (!event) {
    return;
    <div className="center">
      <p>Loading</p>;
    </div>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventID = context.params.eventId;
  const event = await getEventById(eventID);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default Events;
