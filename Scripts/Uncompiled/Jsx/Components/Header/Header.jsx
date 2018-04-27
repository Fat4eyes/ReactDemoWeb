class Header extends React.Component {
    state = {
        currentPage: 0
    }
    handleClick = index => {
        this.setState({currentPage: index})
        pages[index].Page()
    }
    render() {
        return (
            <nav style = {{position: 'relative', zIndex: '1000'}}>
                <HeaderList>
                    {pages.map((page, index) => 
                        {
                            attributes = {
                                key: page.Name,
                                index: index, 
                                current: index === this.state.currentPage,
                                name: page.Name,
                                handleClick: this.handleClick
                            }
                            if (!page.Links) {
                                return <HeaderLink {...attributes}/>
                            } else {
                                return <DropdownHeaderLink {...attributes}>
                                    {page.Links}
                                </DropdownHeaderLink>
                            }
                        }
                    )}
                </HeaderList>
                <div style = {{top: 0, position: 'fixed', right: '5%', color: 'white'}}>
                    <Clock/>
                </div>
            </nav>
        );
    }
}

pages = [{
    Name: `Главная страница`,
    Page: RenderIndexPage
},{
    Name: `Обо мне`,
    Page: RenderAboutPage
},{
    Name: `Интересы`,
    Page: RenderInterestsPage,
    Links:  <ul className="interests-menu">
                <li><a href="#hobby">Хобби</a></li>
                <li><a href="#books">Книги</a></li>
                <li><a href="#music">Музыка</a></li>
                <li><a href="#movies">Фильмы</a></li>
            </ul>
},{
    Name: `Учеба`,
    Page: RenderStudyPage
},{
    Name: `Фотоальбом`,
    Page: RenderPhotoalbumPage
},{
    Name: `Контакт`,
    Page: RenderContactPage
},{
    Name: `Тест`,
    Page: RenderTestPage
},{
    Name: `История`,
    Page: RenderHistoryPage
}]