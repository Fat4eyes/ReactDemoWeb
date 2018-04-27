class Calendar extends React.PureComponent {
    state = {
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
    }
    handleInput = ({target: {name, value}}) => this.setState({[name] : value}, () => this.setState({calendar: this.refresh()}))
    handleClick = day => this.props.handleClick(formatDateShort(new Date(this.state.year, this.state.month, day)))
    handleNeighbors = (date) => this.setState({month: date.getMonth(), year: date.getFullYear()})
    refresh = () => {
        let calendar = []
        let date = new Date(this.state.year, this.state.month, 1)
        let firstDay = date.getDayRu()
        let daysInPreviousMonth = date.getNeighborsMonth(true).daysInMonth() - firstDay + 1
        let daysInNextMonth = 1
        for (let i = 0; i < 42; i++) {
            let currentMonth = i >= firstDay && i < firstDay + date.daysInMonth()
            let holiday = (i + 1) % 7 === 0
            calendar.push(
                <div className = {`Calendar-DayBlock background-white ${holiday? `${currentMonth?`border-red`:`border-red-not-active`}` : `${currentMonth?`border-black`:`border-black-not-active`}`}`}>
                    {   
                        !currentMonth ?  
                            <div className = {`Calendar-DayLink-Hover_not-active`}>
                                <p  className = {`Calendar-DayLink_not-active`} 
                                    onClick = {() => {
                                        let data = i < firstDay ? date.getNeighborsMonth(true) : date.getNeighborsMonth(false)
                                        this.handleNeighbors(data)
                                    }}
                                >
                                    {i < firstDay? `${daysInPreviousMonth++}` : `${daysInNextMonth++}`}
                                </p>
                            </div>  
                        :
                            <div className = {`Calendar-DayLink-Hover`}>
                                <p className = {`Calendar-DayLink`} onClick = {() => this.handleClick(i - firstDay + 1)}>
                                    {i - firstDay + 1}
                                </p>
                            </div>       
                    }               
                </div>
            )
        }
        return calendar
    }
    render() {
        const { weekNames, monthNames, years } = this.props
        return (
            <div className = "Calendar">
                <div className = "Calendar-DateHandler">
                    <div>
                        <select className = {`Calendar-DateHandler-Select`} name = {'month'} value = {this.state.month} onChange = {this.handleInput}>
                            {monthNames.map((month, index) => 
                                <option key = {index} value = {index}>
                                    {month}
                                </option>
                            )}
                        </select>
                    </div>
                    <div>
                        <select className = {`Calendar-DateHandler-Select`} name = {'year'} value = {this.state.year} onChange = {this.handleInput}>
                            {years.map(year =>
                                <option key = {year} value = {year}>
                                    {year}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className='Calendar-Close' onClick={this.props.closeHandler}>×</div>
                </div>
                {weekNames.map((weekName, index) => {
                    let borderClass = (index + 1) % 7 === 0 ? `border-red` : `border-black` 
                    return <div className = {`Calendar-DayBlock background-white ${borderClass}`} key = {weekName}>
                        <p className = {`Calendar-DayLink`}>{weekName}</p>
                    </div>
                })
                }
                {React.Children.map(this.refresh(), (day, index) => React.cloneElement(day, {key: index}))}
            </div>)
    }
}

Date.prototype.daysInMonth = function() {
    return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

Date.prototype.getDayRu = function() {
    let day = this.getDay()
    return day == 0 ? 6 : day - 1
};

Date.prototype.getNeighborsMonth = function(previous) {
    let month = this.getMonth()
    let year = this.getFullYear()
    if (previous) {
        if (month === 0) {
            month = 11
            year -= 1
        } else {
            month -= 1
        }
    } else {
        if (month === 11) {
            month = 0
            year = year === new Date().getFullYear() ? year : year + 1
        } else {
            month += 1
        }
    }
    return new Date(year, month, 1)
};