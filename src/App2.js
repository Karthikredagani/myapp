import React from 'react';
import Home from './Home';
import Login1 from './Login1';

export default function App2(props) {
  if (props.user === "") {
    return <Login1 />
  }
  else {
    return <Home username={props.user} />
  }
}
