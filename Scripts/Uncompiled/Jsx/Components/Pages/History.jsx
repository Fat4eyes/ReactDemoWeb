class History extends React.Component {
    render() {
        const pages = [
            {   name: 'Index',      localizedName: 'Главная страница'   },
            {   name: 'About',      localizedName: 'Обо мне'            },
            {   name: 'Interests',  localizedName: 'Интересы'           },
            {   name: 'Study',      localizedName: 'Учеба'              },
            {   name: 'Photoalbum', localizedName: 'Фотоальбом'         },
            {   name: 'Contact',    localizedName: 'Контакт'            },
            {   name: 'Test',       localizedName: 'Тест'               },
            {   name: 'History',    localizedName: 'История'            }
        ]
        return (
            <div className='History'>
                <h3 className='History-Title Page-Title'>История просмотра страниц:</h3>
                <table>
                    <thead>
                        <tr>
                            <td style={{border: 'none'}}></td>
                            <td>Местный сторож</td>
                            <td>Кукиши</td>
                        </tr>
                    </thead>
                    <tbody>
                        {pages.map(page => 
                            <tr key={page.name}>
                                <td style={{textAlign: 'left'}}>{page.localizedName}</td>
                                <td>{localStorage.getItem(page.name)}</td>
                                <td>{getCookie(page.name)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>        
        );
    }
}