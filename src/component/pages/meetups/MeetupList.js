import classes from './MeetList.module.css'
import MeetupItem from './MeetupItem';
const MeetupList = (props) => {
    return <ul className={classes.list}>
        { props.meetups.map(meetup => {
             return <MeetupItem 
                meetup ={meetup}
             />
        })}
    </ul>
}

export default MeetupList;