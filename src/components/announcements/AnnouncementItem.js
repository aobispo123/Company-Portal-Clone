import Card from './Card';
import classes from './Announcements.module.css'
import moment from "moment"

function AnnouncementItem(props){
    return (
        <li className={classes.li}>
            <Card>
                <div className={classes.title}>
                    <h1>{props.firstName} {props.lastName}</h1>
                
                    <p>{moment(props.date).format('MMMM Do YYYY')}</p>
                </div>

                
                <p className={classes.message}>{props.message}</p>
            </Card>
        </li>
    )
}

export default AnnouncementItem;