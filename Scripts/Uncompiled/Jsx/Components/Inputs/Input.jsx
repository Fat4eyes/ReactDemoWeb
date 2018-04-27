class Input extends React.Component {
    render() {
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const attributes = this.props.attributes;

        return ([
            title && <h3 key = {"title"}>{title}</h3>,
            subtitle && <div key = {"subtitle"}>{subtitle}</div>,
            <input key = {"input"} name = {this.props.name} value = {this.props.value} onChange = {this.props.onChange} {...attributes}/>,
        ]);
    }
}