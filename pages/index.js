import React from 'react'
import EventList from '../components/events/event-list'
import EventsSearch from '../components/events/event-search'
import { getFeaturedEvents } from '../helpers/api-utils'
import { useRouter } from 'next/router'

const index = (props) => {
  console.log('rujuta')
  return (
    <div>
      {/* <EventsSearch onSearch={findEventsHandler} /> */}
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents,
    },
  }
}

export default index
