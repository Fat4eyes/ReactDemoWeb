class Select extends React.Component {
    render() {
        const optGroups = getProp(this.props.optGroups)
        const attributes = getProp(this.props.attributes)
        const title = getProp(this.props.title)
        return ([
            title && <h3 key = {"title"}>{title}</h3>,
            <select key = {"select"} name = {this.props.name} value = {this.props.value} onChange = {this.props.onChange} {...attributes}>
                <option value="Не выбрано">Не выбрано</option>   
                {
                optGroups.map((optGroup, i) =>
                    optGroup.label ? 
                    <optgroup key = {`optgroup${i}`} label = {optGroup.label}>
                        {optGroup.options.map((option, j) => <option key = {`option${i}${j}`} value = {option}>{option}</option>)}
                    </optgroup>
                        :
                    optGroup.options.map((option, j) => <option key = {`option${i}${j}`} value = {option}>{option}</option>)
                )}
            </select>,
        ]);
    }
}