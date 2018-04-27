class MBox extends React.Component {
    render() {
        const messages = this.props.messages && this.props.messages.map((message, index) => <div key = {index}>{message}</div>)
        return (
            <div>{messages}</div>
        );
    }
}