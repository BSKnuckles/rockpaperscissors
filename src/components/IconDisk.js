import React from 'react'
import styles from './IconDisk.module.css'

class IconDisk extends React.Component {
  render() {
    const classes = `${styles.disk} ${styles[this.props.label.toLowerCase()]}`
    return (
      <figure className={classes}>
        <div className={styles.content}>
          <p className='sr-only'>{this.props.label}</p>
          <img src={this.props.icon} alt={`${this.props.label} icon`} className={styles.icon} />
        </div>
      </figure>
    )
  }
}

export default IconDisk
