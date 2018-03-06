import React from 'react';
import ReactDOM from 'react-dom';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';

import stores from './stores'

import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

useStrict(true);

ReactDOM.render((
    <Provider {...stores}>
        <App/>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
