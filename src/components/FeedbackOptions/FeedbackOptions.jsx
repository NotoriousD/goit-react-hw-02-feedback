import React, { Component } from 'react'
import faker from 'faker'

export default class FeedbackOptions extends Component {
    render() {
        const {options, onLeaveFeedback} = this.props
        return (
            <div className="buttons">
                {Object.keys(options).map(item => (
                  <input key={faker.random.uuid()} type="button" onClick={() => {
                    onLeaveFeedback(item)
                  }} value={item}/>
                ))}
            </div>
        )
    }
}
