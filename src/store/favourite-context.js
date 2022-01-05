import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favourtes:[],
    totalFavourites: 0,
    addFavourite: (favourateMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});

export const FavouriteContextProvider= (props) => {
    const [userFavourites,setUserFavourites] = useState([]);
    
    const addFavouriteHandler = (favourateMeetup) => {
        setUserFavourites((previousUserFavourites) => {
            return previousUserFavourites.concat(favourateMeetup)
        })
    }

    const removeFavouriteHandler =(meetupId) => {
        setUserFavourites((previousUserFavourites) => {
            return previousUserFavourites.filter(meetup => meetup.id!== meetupId )
        })
    }

    const itemIsFavouriteHandler = (meetupId) => {
        return userFavourites.some(meetup=> meetup.id === meetupId)
    }

    const context = {
        favourtes:userFavourites,
        totalFavourites :userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };
    
    return <FavouriteContext.Provider value ={context}>
        {props.children}
    </FavouriteContext.Provider>
}

export default FavouriteContext;