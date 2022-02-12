import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import "./App.module.css";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleIncrementgood = () => {
  //   this.setState(() => ({
  //     good: this.state.good + 1,
  //   }));
  // };
  // handleIncrementgneutral = () => {
  //   this.setState(() => ({
  //     neutral: this.state.neutral + 1,
  //   }));
  // };
  // handleIncrementgbad = () => {
  //   this.setState(() => ({
  //     bad: this.state.bad + 1,
  //   }));
  // };
  handleIncrease = (a) => {
    this.setState((prevState) => ({
      [a]: prevState[a] + 1,
    }));
  };
  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    `${Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0}%`;

  isFeedback = (total) => total === 0;
  // this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0;
  render() {
    const { good, neutral, bad } = this.state;
    const statistics= {
      Good: good,
      Neutral: neutral,
      Bad: bad,
      Total: this.countTotalFeedback(),
      "Positive percentage": this.countPositiveFeedbackPercentage(),
    };
    return (
      
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrease}
          />
        </Section>

        <Section title="Statistics">
          {this.isFeedback(this.countTotalFeedback()) ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              prop={statistics}
              // total={this.countTotalFeedback()}
              // positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
