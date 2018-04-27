class HeaderLink extends React.PureComponent {
    onClick = e => {
        let { handleClick, index } = this.props
        handleClick(index)
    }
    render () {
        const {
            handleClick = f => f, 
            index = 0,
            name = "", 
            styles = StyleSheet.HeaderLink,
            current = false
        } = this.props
        const attribute = {
            href: "#",
            className: `hover  ${current ? 'colorRed' : ''}`,
            style: styles,
            onClick: this.onClick
        }
        return (
            <a {...attribute}>{name}</a>
        ) 
    }
}