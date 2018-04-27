validateTest = (form) => {
    let inputs = form.getElementsByTagName('input')
    let radios = []
    for (i = 0; i < inputs.length; i++) {
        inputs[i].type == "radio" && radios.push(inputs[i])
    }

    let radioNames = []
    let radioIsValids = []
    for (i = 0; i < radios.length; i++) {
        //console.log(radios[i])
        if (radioNames.indexOf(radios[i].name) === -1) {
            radioNames.push(radios[i].name)
            radioIsValids.push(false)
        }
    }


    for (i = 0; i < radios.length; i++) {
        //console.log(radios[i], radios[i].checked)
        if (radios[i].checked) {
            radioIsValids[radioNames.indexOf(radios[i].name)] = true
        }
    }

    let isValid = true;
    for (i = 0; i < radioNames.length; i++) {       
        //console.log(`${radioNames[i]} ${radioIsValids[i]}`)
        if (!radioIsValids[i]) {
            isValid = false;  
            break; 
        }
    }

    console.log(isValid)
    
}