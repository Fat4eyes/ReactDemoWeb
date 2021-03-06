class VSelect extends React.Component {
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
        const { title, optGroups, attributes, rules } = this.props;
        const messages = rules.map(rule => `\n${rule()}`).join(' ').replace(/,/, '').replace(/^\n/, '');
        return (
            <React.Fragment>
                {title && <h3>{title}</h3>}
                <select 
                    name = {this.props.name} 
                    value = {this.props.value} 
                    onChange = {({ target : {value, name}}) => {this.props.onChange(value, name, this.IsValid);}} 
                    onBlur={this.onVChange} 
                    {...attributes}
                >
                <option value="">Не выбрано</option>   
                {
                optGroups.map((optGroup, i) =>
                    optGroup.label ? 
                    <optgroup key = {`optgroup${i}`} label = {optGroup.label}>
                        {optGroup.options.map((option, j) => <option key = {`option${i}${j}`} value = {option}>{option}</option>)}
                    </optgroup>
                        :
                    optGroup.options.map((option, j) => <option key = {`option${i}${j}`} value = {option}>{option}</option>)
                )}
                </select>
                <a {...!this.IsValid && {"title" : messages}} style = {{"color" : !this.IsValid? "#ff0000" : "#33cc33", "fontSize" : "16pt", "margin" : "0 10px",}}>{!this.IsValid? "✘" : "✔"}</a>
                {this.ValidateBox}
            </React.Fragment>
        );
    }
}