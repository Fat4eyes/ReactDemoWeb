class Clock extends React.Component {
    state = { date: new Date() }
    componentDidMount= () => this.timerID = setInterval(() => this.setState({date: new Date()}), 1000)
    componentWillUnmount = () => clearInterval(this.timerID)
    render = () => <p>{formatDate(this.state.date)}</p>
}