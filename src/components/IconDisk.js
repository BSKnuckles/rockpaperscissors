import React from 'react'
import styles from './IconDisk.module.css'

class IconDisk extends React.Component {
  render() {
    const classes = `${styles.disk} ${styles[this.props.label.toLowerCase()]}`
    return (
      <div className={classes}>
        <div className={styles.content}>
          <p className='sr-only'>{this.props.label}</p>
          <img src={this.props.icon} alt={this.props.label} className={styles.icon} />
        </div>
      </div>
    )
  }
}

export default IconDisk
