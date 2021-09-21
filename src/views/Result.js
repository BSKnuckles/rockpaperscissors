import React from 'react'

import IconDisk from '../components/IconDisk'

import styles from './Result.module.css'

class Result extends React.Component {
  render() {
    return (
      <div className={styles.results}>
        <div className={styles.iconGroup}>
          <p>You Picked</p>
          <IconDisk label={this.props.results.user.label} icon={this.props.results.user.icon} />
        </div>
        <div className={styles.resultBlock}>
          <p>
            {this.props.results.userWon !== null ? (this.props.results.userWon ? 'You Won!' : 'You Lost!') : 'Draw!'}
          </p>
          <button className={styles.resetBtn} onClick={() => this.props.pickAgain()}>
            Play Again
          </button>
        </div>
        <div className={styles.iconGroup}>
          <p>The House Picked</p>
          <IconDisk label={this.props.results.computer.label} icon={this.props.results.computer.icon} />
        </div>
      </div>
    )
  }
}

export default Result
