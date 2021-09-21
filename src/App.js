import React from 'react'
import Header from './components/Header'
import RulesModal from './components/RulesModal'
import styles from './App.module.css'

import Pick from './views/Pick'
import Result from './views/Result'

import Spock from './images/icon-spock.svg'
import Lizard from './images/icon-lizard.svg'
import Rock from './images/icon-rock.svg'
import Paper from './images/icon-paper.svg'
import Scissors from './images/icon-scissors.svg'

class App extends React.Component {
  constructor(props) {
    super(props)

    if (!localStorage.getItem('rpsls_score')) {
      localStorage.setItem('rpsls_score', 0)
    }

    this.state = {
      modalOpen: false,
      score: Number(localStorage.getItem('rpsls_score')),
      stage: 'pick',
      results: {}
    }
  }

  choices = [
    {
      icon: Scissors,
      label: 'Scissors'
    },
    {
      icon: Spock,
      label: 'Spock'
    },
    {
      icon: Paper,
      label: 'Paper'
    },
    {
      icon: Lizard,
      label: 'Lizard'
    },
    {
      icon: Rock,
      label: 'Rock'
    }
  ]

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  setStage() {
    switch (this.state.stage) {
      case 'pick':
        return <Pick choices={this.choices} pickOption={choice => this.processWinner(choice)} />
      case 'result':
        return <Result results={this.state.results} pickAgain={() => this.resetView()} />
      default:
        return <Pick choices={this.choices} pickOption={choice => this.processWinner(choice)} />
    }
  }

  resetView = () => {
    this.setState({ stage: 'pick' })
    this.setStage()
  }

  computerPick = () => this.choices[Math.floor(Math.random() * 5)]
  updateScore(won) {
    let newScore = this.state.score
    if (won) {
      this.setState({ score: newScore + 1 })
      localStorage.setItem('rpsls_score', newScore + 1)
    } else {
      this.setState({ score: newScore - 1 })
      localStorage.setItem('rpsls_score', newScore - 1)
    }
  }
  userWon(user, computer) {
    const compLabel = computer.label
    const userLabel = user.label
    if (
      (compLabel === 'Spock' && (userLabel === 'Lizard' || userLabel === 'Paper')) ||
      (compLabel === 'Lizard' && (userLabel === 'Scissors' || userLabel === 'Rock')) ||
      (compLabel === 'Rock' && (userLabel === 'Paper' || userLabel === 'Spock')) ||
      (compLabel === 'Paper' && (userLabel === 'Scissors' || userLabel === 'Lizard')) ||
      (compLabel === 'Scissors' && (userLabel === 'Spock' || userLabel === 'Rock'))
    ) {
      return true
    } else if (compLabel === userLabel) {
      return null
    } else {
      return false
    }
  }

  processWinner(user) {
    const computer = this.computerPick()
    const winner = this.userWon(user, computer)
    const results = {
      user: user,
      computer: computer,
      userWon: winner
    }
    this.setState({
      results: results,
      stage: 'result'
    })
    if (winner !== null) this.updateScore(winner)
  }

  render() {
    const stage = this.setStage()

    return (
      <div className={styles.app}>
        <Header score={this.state.score} />
        <main className={styles.content}>{stage}</main>
        <footer className={styles.footer}>
          <button className={styles.rulesBtn} onClick={() => this.toggleModal()}>
            Rules
          </button>
        </footer>
        <RulesModal open={this.state.modalOpen} toggleModal={() => this.toggleModal()} />
      </div>
    )
  }
}

export default App
