class Textarea extends React.Component {
    render() {
        const attributes = this.props.attributes;
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        return ([
            title && <h3 key = {"title"}>{title}</h3>,
            subtitle && <div key = {"subtitle"}>{subtitle}</div>,
            <textarea key = {"input"}  name = {this.props.name} value = {this.props.value} onChange = {this.props.onChange} {...attributes}></textarea>,
        ]);
    }
}