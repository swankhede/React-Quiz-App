import React, { Component } from 'react';
import questions from '../fakeQuestion'
import Quiz from './quiz'
class Form extends Component {
    state = {
        questions: questions,
        startIndex: 0,
        lastIndex: 1,
        score: 0
    }


    handleOPtionSelection = (option, question) => {

        const questionIndex = this.state.questions.indexOf(question)
        const optionIndex = this.state.questions[questionIndex].option.indexOf(option)
        const seletedOption = this.state.questions[questionIndex].option[optionIndex]

        if (seletedOption.isCorrect) {

            seletedOption.isSelected = true
            this.setState({ questions })
            if (this.state.lastIndex < this.state.questions.length) {
                setTimeout(function () { //Start the timer
                    this.setState({ startIndex: this.state.startIndex + 1, lastIndex: this.state.lastIndex + 1 })
                }.bind(this), 200)


            }

        } else {
            seletedOption.isSelected = true
            const correctOpiton = question.option.filter(o => o.isCorrect)[0]
            correctOpiton.isSelected = true
            this.setState({ questions })
        }
    }
    handleNextPage = () => {
        if (this.state.lastIndex < this.state.questions.length) {
            this.setState({ startIndex: this.state.startIndex + 1, lastIndex: this.state.lastIndex + 1 })

        }
    }
    handlePrevPage = () => {
        if (this.state.startIndex > 0) {
            this.setState({ startIndex: this.state.startIndex - 1, lastIndex: this.state.lastIndex - 1 })

        }
    }


    render() {
        const { questions, startIndex, lastIndex } = this.state

        return (
            <div className="container ">
                <div className="d-flex ">
                    <button className="btn prev-btn " onClick={() => this.handlePrevPage()}>
                        <i className="fa fa-arrow-left"></i>
                Back
                </button>

                </div>



                <div className="jumbotron vertical-center">
                    <div className="d-flex justify-content-center">
                        <h5 className="align-content-center text-warning">
                            Question {this.state.lastIndex} / {this.state.questions.length}</h5>

                    </div>
                    <div className="form-container d-flex flex-row justify-content-center m-md-5  ">

                        <div className="question-container container border-1">

                            {questions.slice(startIndex, lastIndex).map(q =>
                                < Quiz
                                    onOptionSelect={this.handleOPtionSelection}
                                    key={q.id}
                                    queSet={q}
                                />
                            )}




                        </div>
                    </div>

                    <button className="btn next-btn  " onClick={() => this.handleNextPage()}>Next
                <i className="fa fa-arrow-right ml-5"></i></button>
                </div>
            </div >
        );
    }
}

export default Form;