var ages = function (a, b) {
    var array = [];
    for (var index = 0; index < b - a; index++) {
        array[index] = a + index;      
    }
    return array;
}

var getFotosWithTitlesForTable = function () {
    var array = [];
    var i = 1;
    for (var index = 0, row = 0; index < imageCount; index += rowImageCount, row++) {
        array[row] = [];
        for (var col = 0; col < rowImageCount; col++) {
            var imageIndex = row * rowImageCount + col + 1;
            array[row][col] = {
                src: fotos[row * rowImageCount + col],
                title: titles[row * rowImageCount + col]
            }; 
            if (imageIndex == imageCount) return array;
        }     
    }
    return array;
}

getProp = (prop, boolResult) => {
    if (prop === undefined || prop === null) {
        return boolResult ? false : ''
    } 
    return prop;
}

getYears = () => {
    let years = []
    for(let i = 0; i <= new Date().getFullYear() - 1900; i++) {
        years[i] = 1900 + i;
    }
    return years.reverse();
}

function formatDate(date) {
    return `${('0' + date.getDate()).slice(-2)} ${monthNames[date.getMonth()]} ${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`
}

function formatDateShort(date) {
    if(new Date(date) == 'Invalid Date') return ' ';
    return `${('0' + date.getDate()).slice(-2)} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}