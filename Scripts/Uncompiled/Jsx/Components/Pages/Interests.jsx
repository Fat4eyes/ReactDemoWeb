class Interests extends React.Component {
    render() {
        return  (   
            <div className = {`Interests`}>
                <div className={`Interests-Hobby`}>
                    <a id="linkOnPage" name="hobby"></a>
                    <h3>Моё хобби:</h3>
                    <h4>Моё любимое хобби - игра на гитаре и на нервах своих соседей.</h4>
                    <p>
                        Таким образом укрепление и развитие структуры позволяет оценить значение форм развития. 
                        Таким образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) 
                        участие в формировании дальнейших направлений развития. Повседневная практика показывает, 
                        что дальнейшее развитие различных форм деятельности требуют от нас анализа систем массового участия. 
                        Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности 
                        способствует подготовки и реализации существенных финансовых и административных условий.
                    </p>
                </div>
                <div className={`Interests-Books`}>
                    <a id="linkOnPage" name="books"></a>

                    <h3>Мои любимые книги:</h3>
                    <ul>{books.map((book, index) => <li key = {book}>{book}</li>)}</ul>
                </div>

                <div className={`Interests-Music`}>
                    <a id="linkOnPage" name="music"></a>
                    <h3>Моя любимая музыка:</h3>
                    <h4>Такстакстакс, што тут у нас? Музыка? Мууузыка, да.</h4>
                    <ol>{music.map((m, i) => <li key = {m}>{m}</li>)}</ol>
                </div>

                <div className={`Interests-Movies`}>
                    <a id="linkOnPage" name="movies"></a>
                    <h3>Мои любимые фильмы:</h3>
                    <p>
                        Таким образом укрепление и развитие структуры позволяет оценить значение форм развития. 
                        Таким образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) 
                        участие в формировании дальнейших направлений развития. Повседневная практика показывает, 
                        что дальнейшее развитие различных форм деятельности требуют от нас анализа систем массового участия. 
                        Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности 
                        способствует подготовки и реализации существенных финансовых и административных условий.
                    </p>
                </div>
            </div>
        );
    }
}