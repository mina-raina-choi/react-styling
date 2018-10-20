import React, { Component } from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';
import Button from './components/Button';
import StyledButton from './components/StyledButton';

const cx = classNames.bind(styles);

// console.log(styles)

class App extends Component {
  render() {
    const isBlue = true;

    return (
      // <div className={[styles.box, styles.blue].join(' ')}></div>
      // <div className={classNames(styles.box, styles.blue)}></div>
      // <div className={cx('box', 'blue')}></div>
      
      // <div className={cx('box', {
      //   blue: isBlue
      // })}>
      //   <div className={cx('box-inside')}>
      //   </div>
      // </div>

      // button
      // <div>
      //   <Button>button</Button>
      // </div>


      <div>
          <StyledButton big>button</StyledButton>
      </div>
    );
  }
}

export default App;
