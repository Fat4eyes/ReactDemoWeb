class DropdownHeaderLink extends React.PureComponent {
    state = {
        show: false
    }
    onClick = e => {
        let { handleClick, index } = this.props
        handleClick(index)
    }
    mouseHandler = () => this.setState({show: !this.state.show})
    render () {
        const {
            handleClick = f => f, 
            index = 0,
            name = "", 
            styles = StyleSheet.HeaderLink,
            current = false,
            children = <React.Fragment/>
        } = this.props
        const attribute = {
            href: "#",
            className: `${current ? 'colorRed' : ''}`,
            style: styles,
        }
        return (
            <div onMouseEnter = {this.mouseHandler} onMouseLeave =  {this.mouseHandler} onClick = {this.onClick}>
                <div className = {`hover`}><a {...attribute}>{name}</a></div>
                {
                    <div className = "positionAbsolute">
                        {this.state.show && children}
                    </div>
                }
            </div>
        ) 
    }
}