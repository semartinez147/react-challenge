import ReactDOM from 'react-dom';
import React from 'react'
import {App} from './ui/App'
import {HashRouter} from "react-router-dom";

ReactDOM.render(

<React.StrictMode>
<HashRouter>
    <App/>
</HashRouter>
</React.StrictMode>, document.getElementById('root')
);


