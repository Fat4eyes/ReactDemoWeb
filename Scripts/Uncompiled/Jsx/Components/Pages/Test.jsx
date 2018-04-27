class Test extends React.Component {
    state = {
        fullName: "",
        group: "",
        phone: "",
        testOne: "",
        testTwo: "",
        testThree: ""
    }

    validateState = {
        fullNameIsValid: "",
        groupIsValid: "",
        phoneIsValid: "",
        testOneIsValid: "",
        testTwoIsValid: "",
        testThreeIsValid: ""
    }

    init = this.state;

    handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        for(state in this.validateState) {
            if(!this.validateState[state]) {
                isValid = false;
                break
            }
        }
        if (isValid) window.open("mailto:Jr4eyes@gmail.com?body=" + JSON.stringify(this.state));
    }

    handleReset = (e) => {
        e.preventDefault();
        this.setState(this.init);
    }

    handleInput = (value, name, isValid) => {
        this.setState({[name] : value}, this.handleValidate(isValid, name));
    }

    handleValidate = (isValid, name) => {
        if(this.validateState[`${name}IsValid`] !== isValid) {
            console.log(`${name}IsValid = ${isValid}`);
            this.validateState[`${name}IsValid`] = isValid;
        }
    }

    render() {
        return  (   
            <div>
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <h2>Тест по дисциплине "Компьютерная графика":</h2>
                    <VInput 
                        title = {"Введите ваше имя"}
                        name = {"fullName"}
                        value = {this.state.fullName}
                        onChange = {this.handleInput}
                        rules = {[required(), pattern(/^[a-zA-Zа-яА-я]+ [a-zA-Zа-яА-я]+ [a-zA-Zа-яА-я]+$/, "ФИО - Три слова: рас два три")]}
                        attributes = {{
                            className : "form__text-input",
                            type : "text",
                            placeholder : "Введите ваше имя..",
                        }}
                    />
                    <VInput 
                        title = {"Введите ваш мобильный номер"}
                        name = {"phone"}
                        value = {this.state.phone}
                        onChange = {this.handleInput}
                        rules = {[
                            required(), 
                            pattern(
                                /^\+[73]{1}[0-9]{8}$|^\+[73]{1}[0-9]{10}$/, 
                                "Номер должен начинаться на +3 или +7 и состоять из 9 или 11 цифр"
                            )
                        ]}
                        attributes = {{
                            className : "form__text-input",
                            type : "text",
                            placeholder : "+79789999999",
                        }}
                    />
                    <VSelect 
                        optGroups = {[{
                            label : "4 курс",
                            options : ["I-41","I-42","I-43","I-44"]
                        },{
                            label : "5 курс",
                            options : ["I-51","I-52","I-53","I-54"]
                        },{
                            label : "6 курс",
                            options : ["I-61"]
                        }]}
                        title = "Введите вашу группу"
                        name = {"group"}
                        value = {this.state.group}
                        rules = {[required()]}
                        onChange = {this.handleInput}  
                    />   
                    <VInputs 
                        title = "Как называется минимальный элемент в растровой графике?"
                        subtitle = {[
                            "Пиксель", 
                            "Бит"
                        ]}
                        name = {"testOne"}
                        rules = {[required()]}
                        value = {this.state.testOne}
                        onChange = {this.handleInput}
                        attributes = {[{
                            type : "radio",
                            value : "Пиксель"
                            }, {
                            type : "radio",
                            value : "Бит"
                        }]}
                    />
                    <VSelect 
                        optGroups = {[{
                            options : ["Векторная","Растровая","Фрактальная"]
                        }]}
                        title = "Какой вид компьютерной графики больше подходит при работе с фотографиями?"
                        name = {"testTwo"}
                        value = {this.state.testTwo}
                        rules = {[required()]}
                        onChange = {this.handleInput}  
                    />
                    <VTextarea 
                        title = "Укажите недостаток растровой графики, по сравнению с векторной:"
                        name = "testThree"
                        value = {this.state.testThree}
                        onChange = {this.handleInput}
                        rules = {[required(), wordsCountLess(31)]}
                        attributes = {{
                            className : "form__text-input",
                            placeholder : sidorovich,
                            rows : "10"
                        }}
                    />
                    <div className="form__control-buttons">
                        <Input attributes = {{type : "submit", value : "Отправить" }}/>
                        <Input attributes = {{type : "reset", value : "Очистить" }}/>
                    </div>
                </form>
            </div>
        );
    }
}