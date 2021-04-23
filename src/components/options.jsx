import React, { Component } from 'react';
class Option extends Component {


    getClass(set) {
        let className = "btn btn "
        if (set.isSelected && set.isCorrect) {
            className += 'bg-success text-white'
        } else if (set.isSelected) {
            className += 'bg-danger text-white'
        }
        return className

    }

    render() {
        return (<div className="option-container col-12 ">
            <button

                name="opiton"
                className={this.getClass(this.props.option)}
                onClick={() => this.props.onOptionSelect(this.props.option, this.props.queSet)}
            >
                {this.props.option.value}

            </button>

        </div>);
    }
}

export default Option;