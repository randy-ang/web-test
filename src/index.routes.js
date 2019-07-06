import React from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import DenominatorPage from './Denominator.page';
import { INDEX_ROUTES } from './util/constant/routes.constant';

// prevent users from 'wandering around'
const IndexRoute = () => {
  return (
    <Switch>
      <Route exact path={INDEX_ROUTES.root} component={DenominatorPage}/>
      <Route path={INDEX_ROUTES.root} render={() => <Redirect to={INDEX_ROUTES.root}/>}/>
    </Switch>
)};

export default IndexRoute;