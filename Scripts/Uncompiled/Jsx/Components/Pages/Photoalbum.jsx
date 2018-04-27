const rowImageCount = 6;
const imageCount = 15;
class Photoalbum extends React.Component {
    state = {
        show: false,
        src: ''
    }
    handleClickOnSmallImage = src => this.setState({src: src, show: true})
    handleClickOnBigImage = src => this.setState({show: false})
    render() {
        return  (   
            <div className="Photoalbum">
                <table>
                    <tbody>
                    {
                        getFotosWithTitlesForTable().map((images, indexMatrix) => 
                            <tr key={indexMatrix}>
                                {
                                    images.map((image, index) => 
                                        <td key={index}>
                                            <div className="Photoalbum-Small-Image">
                                                <img src={image.src} alt={image.title} title={image.title} onClick = {() => this.handleClickOnSmallImage(image.src)}/>
                                                <h3>{image.title}</h3>
                                            </div>
                                        </td>
                                    )
                                }
                            </tr> 
                        )
                    }
                    </tbody>
                </table>
                <Popup show = {this.state.show} handleClose = {this.handleClickOnBigImage}>
                    <div className="Photoalbum-Big-Image" style ={{backgroundImage: `url(${this.state.src})`}}></div>
                </Popup>              
            </div>
        );
    }
}