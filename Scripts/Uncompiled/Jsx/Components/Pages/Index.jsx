class Index extends React.Component {
    render() {
        return  (   
            <div className = {`Index`}>
                <h1 className="Index-FullName">
                    Емельяненко Дмитрий Владимирович
                </h1>
                <img className="Index-Photo" src="..\Content\Images\photo.jpg" alt="фото"/>
                <table className="Index-InfoTable ">
                    <tbody>
                        <tr>
                            <th>
                                <span className="content__group">Группа:</span>
                            </th>
                            <td>
                                <span className="content__group-number"> ИСб-31о</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <span className="content__lab-number">Лабораторная работа:</span>
                            </th>
                            <td>
                                <span>№1</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <span className="content__lab-name">Наименование:</span>
                            </th>
                            <td>
                                <span>Исследование возможностей языка разметки гипертекстов HTML и каскадных таблиц стилей CSS</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}