class DateInput extends React.PureComponent {
    state = {
        show: false
    }
    IsValid = false
    ValidateBox = false
    validate = (value) => {
        let rules = this.props.rules;
        let result = checkRules(rules, value);
        if (result.ok) {
            this.IsValid = true
            return false
        }
        this.IsValid = false
        return <MBox messages = {result.messages}/>
    }
    onVChange = ({ target : {value, name}}) => {
        this.ValidateBox = this.validate(value);
        this.props.onChange(value, name, this.IsValid);
    }
    handleCalendar = date => {
        this.setState({show: false})
        this.onVChange({target: {name: this.props.name, value: date}})
    }
    focusHandler = () => this.setState({show: true})
    render() {
        const { title, subtitle, attributes, rules } = this.props;
        const messages = rules.map(rule => `\n${rule()}`).join(' ').replace(/,/, '').replace(/^\n/, '');
        return (
            <React.Fragment>
                {title && <h3>{title}</h3>}
                {subtitle && <div>{subtitle}</div>}
                <input
                    name = {this.props.name} 
                    value = {this.props.value} 
                    onChange = {({ target : {value, name}}) => {this.props.onChange(value, name, this.IsValid);}} 
                    onFocus = {this.focusHandler}
                    onBlur={this.onVChange} 
                    {...attributes}
                />
                <div className = "positionAbsolute">
                    {this.state.show && 
                        <Calendar 
                        weekNames = {weekNames}
                        monthNames = {monthNames}
                        years = {getYears()} 
                        handleClick = {this.handleCalendar} 
                        closeHandler={() => {console.log('close', this.state); this.setState({show: false})}}
                    />}
                </div>
                <a {...!this.IsValid && {"title" : messages}} style = {{"color" : !this.IsValid? "#ff0000" : "#33cc33", "fontSize" : "16pt", "margin" : "0 10px",}}>{!this.IsValid? "✘" : "✔"}</a>
                {this.ValidateBox}
            </React.Fragment>
        );
    }

}