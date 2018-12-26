import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/module-app/App';
import App2 from './components/module-app2/App2'
import * as serviceWorker from './serviceWorker';
let app = (
    <div>
        <App/>
        <App2 name="Goutam" age="30"/>
    </div>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
