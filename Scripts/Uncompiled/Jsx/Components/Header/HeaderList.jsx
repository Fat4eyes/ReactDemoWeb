const HeaderList = ({handleCall, children, styles = StyleSheet.HeaderList}) => {
    const HeaderLinks = React.Children.map(children, child => <li style = {{"float": "left"}}>{child}</li>)
    return (
        <ul style = {styles}>
            {HeaderLinks}
        </ul>
    )
}
