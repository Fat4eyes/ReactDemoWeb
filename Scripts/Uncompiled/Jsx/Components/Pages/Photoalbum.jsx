const rowImageCount = 6;
const imageCount = 15;
class Photoalbum extends React.Component {
    bigImageIndex = 0
    handleClickOnSmallImage = index => {
        console.log(index)

        bigImageIndex = index

        $("#content")
            .on(
                "click", 
                ".Photoalbum-Big-Image", 
                function() { 
                    $(this).parent().parent().remove() 
                }
            )
            .on(
                "click", 
                ".PopUp-Content-Left", 
                function() {
                    $(".Photoalbum-Big-Image").css("background-image", `url(${fotos[bigImageIndex > 0 ? --bigImageIndex : bigImageIndex]})`) 
                    $(".PopUp-Content-Middle").text(`${bigImageIndex + 1} из ${imageCount}`)
                }
            )
            .on(
                "click", 
                ".PopUp-Content-Right", 
                function() { 
                    $(".Photoalbum-Big-Image").css("background-image", `url(${fotos[bigImageIndex < imageCount - 1 ? ++bigImageIndex : bigImageIndex]})`) 
                    $(".PopUp-Content-Middle").text(`${bigImageIndex + 1} из ${imageCount}`)
                }
            )

        $("#content").append(`
            <div class="PopUp-Overlay">
                <div class="PopUp-Content">
                    <div class="Photoalbum-Big-Image" style="background-image: url(${fotos[index]})"></div>
                </div>
                <div class="PopUp-Content-Left">◄</div>
                <div class="PopUp-Content-Middle">${bigImageIndex + 1} из ${imageCount}</div>
                <div class="PopUp-Content-Right">►</div>
            </div>
        `)
    }
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
                                                <img src={image.src} alt={image.title} title={image.title} onClick = {() => this.handleClickOnSmallImage(indexMatrix * rowImageCount + index)}/>
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
                {/* <Popup show = {this.state.show} handleClose = {this.handleClickOnBigImage}>
                    <div className="Photoalbum-Big-Image" style ={{backgroundImage: `url(${this.state.src})`}}></div>
                </Popup> */}
            </div>
        );
    }
}

getNextImage = (url, previous) => {
   let currentImage = url.replace('url(','').replace(')','').replace(/\"/gi, "");
   let index = fotos.indexOf(currentImage).substring(currentImage.lastIndexOf('/') + 1, currentImage.length);
   if (index != -1) {
       if (previous) {
            if (index > 0) {
                return fotos[index - 1];
            } else {
            return fotos[index]
            }
       } else {
            if (index < imageCount - 1) {
                return fotos[index + 1];
            } else {
                return fotos[index]
            }
       }
   }
}