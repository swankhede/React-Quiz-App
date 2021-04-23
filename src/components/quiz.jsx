import React, { Component } from 'react';
import Option from './options'
class Quiz extends Component {


    render() {

        return (
            <React.Fragment >

                <div className="question-container border-4 d-flex justify-content-center col-12 ">
                    <h1>{this.props.queSet.question}</h1>
                </div>
                {this.props.queSet.option.map(o =>
                    <Option
                        queSet={this.props.queSet}

                        key={o.value}
                        option={o}
                        onOptionSelect={this.props.onOptionSelect} />)}
            </React.Fragment>
        );
    }
}

export default Quiz;