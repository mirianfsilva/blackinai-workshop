import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker';

// Import the pages
import cpf2020 from './pages/BAI/cpf2020';
import grants2020 from './pages/BAI/grants2020';
import organizers2020 from './pages/BAI/organizers2020';
import programs2020 from './pages/BAI/programs2020';
import subInstructions2020 from './pages/BAI/submissionsInstructions2020';
import datagrant2020 from './pages/BAI/datagrant2020';
import contactUs from './pages/BAI/contactUs';
import Organizers from './pages/Organizers';
import speakers2020 from './pages/BAI/speakers2020';
import schedule2020 from './pages/BAI/schedule2020';
 
library.add(fab, fas);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cpfbai2020" component={cpf2020} exact />
            <Route path="/grants2020" component={grants2020} exact />
            <Route path="/organizers2020" component={organizers2020} exact />
            <Route path="/programs2020" component={programs2020} exact />
            <Route path="/subInstructions2020" component={subInstructions2020} exact />
            <Route path="/datagrant2020" component={datagrant2020} exact />
            <Route path="/contact" component={contactUs} exact />
            <Route path="/organizers" component={Organizers} exact />
            <Route path="/talks2020" component={speakers2020} exact/>
            <Route path="/schedule2020" component={schedule2020} exact/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
