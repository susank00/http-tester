import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../pages/Index";
import ViewMovie from "../pages/ViewMovie";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/view_movie/:id" component={ViewMovie} exact />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
