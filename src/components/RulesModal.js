import React from 'react'

import rules from '../images/image-rules-bonus.svg'
import close from '../images/icon-close.svg'
import styles from './RulesModal.module.css'

class RulesModal extends React.Component {
  render() {
    if (this.props.open) {
      return (
        <div className={styles.modalWrapper}>
          <dialog className={styles.modal} open={this.props.open}>
            <header className={styles.mobileModalHeader}>
              <h2 className={styles.heading}>Rules</h2>
            </header>
            <header className={styles.desktopModalHeader}>
              <h2 className={styles.heading}>Rules</h2>
              <button className={styles.closeBtn} onClick={this.props.toggleModal}>
                <span className='sr-only'>Close Rules Modal</span>
                <img src={close} alt='Close Icon' />
              </button>
            </header>
            <img src={rules} alt='Rules' className={styles.image} />
            <footer className={styles.mobileModalFooter}>
              <button className={styles.closeBtn} onClick={this.props.toggleModal}>
                <span className='sr-only'>Close Rules Modal</span>
                <img src={close} alt='Close Icon' />
              </button>
            </footer>
          </dialog>
        </div>
      )
    } else {
      return null
    }
  }
}

export default RulesModal
