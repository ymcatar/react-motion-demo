import React from 'react';
import { render } from 'react-dom';

import DemoOne from './demo-one.jsx';
import DemoTwo from './demo-two.jsx';
import DemoThree from './demo-three.jsx';

const styles = {
  title: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 200
  },
  subtitle: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 200
  },
  container: {
    margin: '0 auto',
    width: '50%'
  }
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={styles.title}>React Animation Demo</h1>
        <h5 style={styles.subtitle}>interruptable animation that only depends on the state</h5>
        <div style={styles.container}>
          <DemoOne />
          <DemoTwo />
          <DemoThree />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));