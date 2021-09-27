import React from 'react'
import styles from './Header.module.css'
import logo from '../images/logo-bonus.svg'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.jumbotron}>
        <h1 className='sr-only'>Rock Paper Scissors Lizard Spock Logo Game</h1>
        <img src={logo} alt='Rock Paper Scissors Lizard Spock Logo' />
        <div className={styles.scoreCard}>
          <h2 className={styles.scoreHeading}>Score</h2>
          <p className={styles.scoreValue}>{this.props.score}</p>
        </div>
      </header>
    )
  }
}

export default Header
