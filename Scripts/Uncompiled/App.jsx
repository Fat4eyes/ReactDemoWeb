$(() => {
    localStorage.clear()
    ReactDOM.render(
        <Header />,
        document.getElementById('header')
    )
    RenderIndexPage()
})

RenderIndexPage = () => {
    setHistory('Index')
    ReactDOM.render(<Index/>, document.getElementById('content')) 
}
RenderAboutPage = () => {
    setHistory('About')
    ReactDOM.render(<About/>, document.getElementById('content')) 
}
RenderInterestsPage = () => { 
    setHistory('Interests')
    ReactDOM.render(<Interests/>, document.getElementById('content'))
}
RenderStudyPage = () => {
    setHistory('Study')
    ReactDOM.render(<Study/>, document.getElementById('content'))
}
RenderPhotoalbumPage = () => {
    setHistory('Photoalbum')
    ReactDOM.render(<Photoalbum/>, document.getElementById('content'))
}
RenderContactPage = () => { 
    setHistory('Contact')
    ReactDOM.render(<Contact/>, document.getElementById('content'))
}
RenderTestPage = () => { 
    setHistory('Test')
    ReactDOM.render(<Test/>, document.getElementById('content'))
}
RenderHistoryPage = () => {
    setHistory('History')
    ReactDOM.render(<History/>, document.getElementById('content')) 
}

function setHistory(key) {
    document.cookie = `${key}=${getCookie(key) - 0 + 1}`
    localStorage.setItem(key, localStorage.getItem(key) - 0 + 1)
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}