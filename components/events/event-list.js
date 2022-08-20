import EventItems from "./event-items";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItems
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          location={item.location}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
