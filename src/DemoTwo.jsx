import React from 'react';
import { Motion, spring } from 'react-motion';

import cardStyle from './styles/card-styles.jsx';

const styles = {
  box: (position) => ({
    marignTop: 20,
    width: 60,
    height: 60,
    backgroundColor: '#00BCD4',
    borderRadius: '50%',
    /* positon stuff below! */
    position: 'relative',
    left: position
  }),
  input: {
    margin: '10px 0px 10px 0px',
    width: '90%'
  }
};

export default class DemoTwo extends React.Component {

  constructor(...props) {
    super(...props);
    this.state = { position: 0 };
    this.onChange = this.onChange.bind(this);
  } 

  onChange(e) {
    this.setState({ position: parseInt(e.target.value) });
  }

  render() {
    return (
      <div style={cardStyle}>
        <div><b>Demo 2 (current value: {this.state.position})</b></div>

        <input style={styles.input} type="range" min="0" max="500" step="1" value={this.state.position} onChange={this.onChange} />

        {/* inject the color to the element by changing the style object! */}
        <Motion style={{position: spring(this.state.position, { stiffness: 90, damping: 9 })}}>
          { ({ position }) => <div style={styles.box(position)} /> }
        </Motion>

      </div>
    );
  }
}