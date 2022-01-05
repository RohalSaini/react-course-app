import { useContext } from 'react'
import FavouriteContext from '../../store/favourite-context';
import MeetupList from './meetups/MeetupList';

const FavouritePage =() => {
    const FavouriteCtx = useContext(FavouriteContext);
    let content;
    if(FavouriteCtx.totalFavourites === 0) {
        console.log("Empty list")
        content = <p>You got no favourites yet, Start adding some!!</p>
    } else {
        content = <MeetupList meetups={FavouriteCtx.favourtes}/>
    }
    return (<section>
        <h1>My Favourites</h1>
         {content}
    </section>)
}
   
export default FavouritePage;