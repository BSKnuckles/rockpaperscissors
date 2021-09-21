import React from 'react'
import styles from './Pick.module.css'
import IconDisk from '../components/IconDisk'

class Pick extends React.Component {
  render() {
    let controls = []

    this.props.choices.forEach(choice => {
      controls.push(
        <li key={choice.label} className={styles.choiceBtn}>
          <button className={styles.invisibleBtn} onClick={() => this.props.pickOption(choice)}>
            <IconDisk icon={choice.icon} label={choice.label} />
          </button>
        </li>
      )
    })
    return <ul className={styles.choiceList}>{controls}</ul>
  }
}

export default Pick
