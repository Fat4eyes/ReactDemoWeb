class Dropdown extends React.PureComponent {
    state = {
        show: false
    }
    mouseHandler = () => this.setState({show: !this.state.show})
    render () {
        const { children, name } = this.props
        const attribute = {
            href: "#",
            className: ``,
        }
        return (
            <div 
                className = {'dropdown-menu positionAbsolute hover'} 
                style = {StyleSheet.HeaderLink}
                onMouseEnter = {this.mouseHandler}
                onMouseLeave = {this.mouseHandler}
            >
                <div>{name}</div>
                {
                    this.state.show && 
                    children
                }
            </div>
        ) 
    }
}