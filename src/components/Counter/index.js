import React, { Component } from 'react'
import styles from './style.css'
import { IconSmile } from '../icons'

class Counter extends Component {
  state = {
    counter: 0
  }

  render () {
    return (
      <div className={styles.counter}>
        <div className={styles.counterHeader}>
          <h1 className={styles.title}>Mega React Counter</h1>
        </div>
        <div className={styles.counterContent}>
          <IconSmile className={styles.icon} fill={'#ff7043'} iconTitle="Icon Smile" />
          <h3 className={styles.counted}>{this.state.counter}</h3>
          <button className={styles.button} type="button" onClick={this.updateCounter}>Click Me</button>
        </div>
      </div>
    )
  }

  updateCounter = ev => {
    ev.preventDefault()

    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default Counter
