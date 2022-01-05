import "./App.css";
import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./component/pages/AllMeetups";
import NewMeetupPage from "./component/pages/NewMeetup";
import FavouritePage from "./component/pages/Favourite";
import MainNavigation from "./component/pages/layout/MainNavigation";
import Layout from "./component/pages/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new">
          <NewMeetupPage />
        </Route>
        <Route path="/fav">
          <FavouritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
