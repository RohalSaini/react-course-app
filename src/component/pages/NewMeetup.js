import NewMeetUpForm from "./meetups/NewMeetupForm"
import { useHistory } from 'react-router-dom';

const NewMeetupPage =() => {
    const history = useHistory()
    const hanlderMeetUp =(meetData) =>  {
        console.log(meetData)
        fetch('https://react-ef4bd-default-rtdb.firebaseio.com/meetups.json',{
            method: 'POST',
            body: JSON.stringify(meetData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=> {
            history.replace("/");
        })
    }
    return <div>
        <h1>Add New Meet up</h1>
        <NewMeetUpForm OnAddMeetup={hanlderMeetUp}/>
    </div>
}
   
export default NewMeetupPage;