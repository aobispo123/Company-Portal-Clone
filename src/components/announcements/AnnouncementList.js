import AnnouncementItem from "./AnnouncementItem";
import classes from './Announcements.module.css'

const AnnouncementList = (props) => {
  return (
    <ul className={classes.ul}>
      {props.announcements.map((announcement) => (
        <AnnouncementItem
          key={announcement.id}
          id={announcement.id}
          firstName={announcement.first}
          lastName={announcement.last}
          user={announcement.user}
          date={announcement.date} 
          message={announcement.message}         
        />
      ))}
    </ul>
  );
}

export default AnnouncementList;
