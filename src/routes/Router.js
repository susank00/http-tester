import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../pages/Index";
import ViewMovie from "../pages/ViewMovie";
import AddMovie from "../pages/AddMovie";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/view_movie/:id" component={ViewMovie} exact />
        <Route path="/add" component={AddMovie} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/Profile" component={Profile} exact />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
