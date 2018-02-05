import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(
  <div>
<Router history={browserHistory } routes={routes} />
</div>, 
document.getElementById('root'));
registerServiceWorker();
