// == Import npm
import React from 'react';

// == Import
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import 'src/styles/index.scss';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
    <Settings />
  </div>
);

// == Export
export default App;
