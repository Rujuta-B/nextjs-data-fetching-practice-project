import React from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";
import { useRouter } from "next/router";

const index = (props) => {
  return (
    <div>
      {/* <EventsSearch onSearch={findEventsHandler} /> */}
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default index;
