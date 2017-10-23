import * as React from 'react';

import styles from './header.css';

export default class Header extends React.Component {
  render() {
    return(
      <div className={ styles.header }>
        <div className="logo">WithMeshi</div>
      </div>
    );
  }
}
