import React, {Component} from 'react';
import {Section} from './components/Section/Section'
import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Notification from './components/Notification/Notification'
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      acc += value
      return acc
    }, 0)
  }

  countPositiveFeedbackPercentage = () => {
    if(this.state.good !== 0){
      return Math.ceil((this.state.good*100)/this.countTotalFeedback())
    }else{
      return 0
    }
    
  }

  handleIncrement = (value) => {
    this.setState({[value]: this.state[value] + 1})
    this.countTotalFeedback()
  }

  
  render() {
    const {good, neutral, bad} = this.state
      return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions options={this.state} onLeaveFeedback={this.handleIncrement} />
          </Section>
          {this.countPositiveFeedbackPercentage() ? (
            <Section title="Statistics">
              <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            </Section>
          ) : <Notification message='No feedback given' />}
          
        </>
      )
  }
}

export default App;
