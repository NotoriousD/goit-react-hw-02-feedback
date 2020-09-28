import React, { Component } from 'react'

export default class Statistics extends Component {
    render() {
        const {good, neutral, bad, total, positivePercentage} = this.props
        return (
            <div className="stats">
                <span className="block">Good: {good}</span>
                <span className="block">Neutral: {neutral}</span>
                <span className="block">bad: {bad}</span>
                <span className="block">Total: {total}</span>
                <span className="block">Positive feedback: {positivePercentage}%</span>
            </div>
        )
    }
}
