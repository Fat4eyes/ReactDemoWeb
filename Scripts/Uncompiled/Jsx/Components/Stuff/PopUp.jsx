class Popup extends React.Component {
    state = {
        popup: false
    }
    render = () => <noscript></noscript>

    componentDidMount() {
        this.renderPopup();
    }
    componentDidUpdate() {
        this.renderPopup();
    }
    componentWillUnmount() {
        if (!this.state.popup) return
        ReactDOM.unmountComponentAtNode(this.state.popup);
        document.body.removeChild(this.state.popup);
    }
    handleClose = () => {
        if (this.state.popup) {
        ReactDOM.unmountComponentAtNode(this.state.popup);
        document.body.removeChild(this.state.popup);
        }
        this.setState({popup: false})
        this.props.handleClose()
    }
    renderPopup = () => {

        if (!this.props.show) return
        
        if (!this.state.popup) {
            this.state.popup = document.createElement("div")
            document.body.appendChild(this.state.popup);
        }

        console.log(this.state.popup)
        ReactDOM.render(
            <div className="popup-overlay" onClick = {this.handleClose}  style= {{position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', backgroundColor: '#1111117c'}}>
                <div className="popup-content" style = {{position: 'absolute', left: '25%', right: '25%', top: '25%', bottom: '25%', margin: 'auto', width: 'auto', height: 'auto'}}>
                    { this.props.children }
                </div>
            </div>,
            this.state.popup
        );
    }
}

