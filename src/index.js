import React from 'react';
import ReactDOM from 'react-dom/client';
import Launch from './launch';
import Gallery from './gallery';
import Store from './store';
import Search from './search';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/search' component={Search} />
        <Route exact path='/gallery/:id' render={routeProps => <Gallery {...routeProps} />} />
        <Route exact path='/store/:id' render={routeProps => <Store {...routeProps} />} />
        <Route exact path='/' component={Launch} />
        <Route exact path='*' component={Launch} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
