import React from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'

class MonthPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: this.props.year
        }
    }

    toggleDrogdown = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    selecYear = (event, yearNumber) => {
        event.preventDefault()
        this.setState({
            selectedYear: yearNumber
        })
    }

    selecMonth = (event, monthNumber) => {
        event.preventDefault()
        this.setState({
            isOpen: false
        })
        this.props.onChange(this.state.selectedYear, monthNumber)
    }

    render() {
        const { year, month } = this.props
        const { isOpen, selectedYear } = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map(number => number + year)

        return (
            <div className="dropdown month-picker-component">
                <h4>选择月份</h4>
                <button
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={this.toggleDrogdown}
                >
                    {`${year}年 ${padLeft(month)}月`}
                </button>
                { isOpen &&
                    <div className="dropdown-menu" style={{display: 'block'}}>
                        <div className="row">
                            <div className="col border-right">
                                { yearRange.map((yearNumber, index) => 
                                    <a
                                        href="#"
                                        key={index}
                                        className={(yearNumber === selectedYear) ? 'dropdown-item active' : 'dropdown-item'}
                                        onClick={(event) => {this.selecYear(event, yearNumber)}}
                                    >
                                        {yearNumber} 年
                                    </a>
                                )}
                            </div>
                            <div className="col">
                                { monthRange.map((monthNumber, index) => 
                                    <a
                                        href="#"
                                        key={index}
                                        className={(monthNumber === month) ? 'dropdown-item active' : 'dropdown-item'}
                                        onClick={(event) => {this.selecMonth(event, monthNumber)}}
                                    >
                                        {padLeft(monthNumber)} 月
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MonthPicker