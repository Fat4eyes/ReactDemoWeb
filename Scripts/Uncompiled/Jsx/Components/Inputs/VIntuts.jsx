class VInputs extends React.Component {
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
    render() {
        const { title, subtitle, attributes, rules } = this.props;
        const messages = rules.map(rule => `\n${rule()}`).join(' ').replace(/,/, '').replace(/^\n/, '');
        return (
            <React.Fragment>
                {title && <h3>{title}</h3>}
                {attributes.map((attribute, index) => subtitle[index] 
                    ? <span key = {index}>{subtitle[index]}
                        <input 
                            name = {this.props.name} 
                            onChange = {({ target : {value, name}}) => {this.props.onChange(value, name, this.IsValid);}} 
                            onBlur={this.onVChange}  
                            {...attribute}/></span>
                    : <input 
                        key = {index} 
                        name = {this.props.name} 
                        onChange = {({ target : {value, name}}) => {this.props.onChange(value, name, this.IsValid);}} 
                        onBlur={this.onVChange} 
                        {...attribute}/>                 
                )}    
                <a {...!this.IsValid && {"title" : messages}} style = {{"color" : !this.IsValid? "#ff0000" : "#33cc33", "fontSize" : "16pt", "margin" : "0 10px",}}>{!this.IsValid? "✘" : "✔"}</a>
                {this.ValidateBox}
            </React.Fragment>
        );      
    }
}

