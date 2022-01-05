import MeetupItem from "./meetups/MeetupItem";
import MeetupList from "./meetups/MeetupList";
import { useEffect, useState } from "react";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
     setIsLoading(true); 
    fetch("https://react-ef4bd-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups= [];
        for (const key in data) {
            const meetup= {
                id: key,
                ...data[key]
            }
            meetups.push(meetup)
        }  
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1> All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    );
  }
};

export default AllMeetupsPage;
