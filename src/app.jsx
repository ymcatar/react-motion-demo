import React from 'react';
import { render } from 'react-dom';

import DemoOne from './DemoOne.jsx';
import DemoTwo from './DemoTwo.jsx';
import DemoThree from './DemoThree.jsx';

const styles = {
  title: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40,
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