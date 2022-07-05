import React, { Component } from "react";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

class App extends Component {
  
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  };
  
  // Replace three methods of click

    handleIncrement = (name) => {
        this.setState(prev => {
            return { [name]: prev[name] + 1 }
        })
    };
  
    // clickGood = () => {
    //     this.setState(prevState => ({
    //         good: prevState.good + 1,
    //     }))
    // };
    // clickNeutral = () => {
    //     this.setState(prevState => ({
    //         neutral: prevState.neutral + 1,
  
    //     }))
    // };
    // clickBad = () => {
    //     this.setState(prevState => ({
    //         bad: prevState.bad + 1,
    //     }))
    // };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          fontSize: 40,
          color: '#010101',
          backgroundColor:'rgb(173, 242, 242)'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          ></FeedbackOptions>
        </Section>
                
        <Section title="Statistics">
          {!this.countTotalFeedback() ? <Notification message="No feedback given" /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()} />}
        </Section>
      </div>
    );
  };
};
export default App;
