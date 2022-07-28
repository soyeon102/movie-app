import React from 'react';
import Home from './routes/Home';
import Detail from './routes/Detail';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path='/' component={Home} />
      <Route path='/movie/:id' component={Detail} />
    </BrowserRouter>
  );
}

export default App;
