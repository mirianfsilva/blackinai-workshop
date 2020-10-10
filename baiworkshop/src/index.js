import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker';
import AcademicPrograms from './pages/AcademicPrograms';
import BAI from './pages/BAI';

library.add(fab, fas);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/academicprograms" component={AcademicPrograms} exact />
            <Route path="/bai" component={BAI} exact />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
