class Inputs extends React.Component {
    render() {
        const attributes = getProp(this.props.attributes);
        const title = getProp(this.props.title);
        const subtitle = getProp(this.props.subtitle);
        return ([
            title && <h3 key = {"title"}>{title}</h3>,
            attributes.map((a, index) => 
                subtitle[index] ? <div key = {`subtitle${index}`}>{subtitle[index]}<input key = {`input${index}`} name = {this.props.name} value = {this.props.value} onChange = {this.props.onChange} {...a}/> </div>
                                : <input key = {`input${index}`} name = {this.props.name} value = {this.props.value} onChange = {this.props.onChange} {...a}/> 
            ),
        ]);      
    }
}