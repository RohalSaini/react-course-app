import Card from '../../ui/Card';
import classes from './MeetupItem.module.css'
import { useContext } from 'react';
import FavouriteContext from '../../../store/favourite-context';

const MeetupItem = (props) => {
    const {id,title,image,description,address} = props.meetup;
    const favourteCtx = useContext(FavouriteContext)
    const itemIsFavourite = favourteCtx.itemIsFavourite(id)

    const toggleFavouriteStatuHandler =() => {
        if(itemIsFavourite) {
            favourteCtx.removeFavourite(id)
        }else {
            favourteCtx.addFavourite(props.meetup)
        }
    }
    return <li className={classes.item}>
        <Card>
        <div>
            <img src={image} alt ={props.title} className={classes.image}/>
        </div>
        <div className={classes.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavouriteStatuHandler}>{itemIsFavourite ? 'Remove from favourite' : 'Add to favourite'}</button>
        </div>
        </Card>
    </li>
}

export default MeetupItem;