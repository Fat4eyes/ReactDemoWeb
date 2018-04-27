class Contact extends React.Component {
    state = {
        name: '',
        sex: '',
        age: '',
        email: '',
        message: '',
        birthday: formatDateShort(new Date()),
        isValid: false
    };

    validateState = {
        nameIsValid: false,           
        sexIsValid: false,          
        ageIsValid: false,          
        emailIsValid: false,          
        messageIsValid: false,
        birthdayIsValid: false
    }

    init = this.state;

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.isValid) window.open("mailto:Jr4eyes@gmail.com?body=" + JSON.stringify(this.state));
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
        let validResult = true;
        for(state in this.validateState) {
            if(!this.validateState[state]) {
                validResult = false;
                break
            }
        }
        this.setState({isValid: validResult})
    }

    render() {
        return  (   
            <div className="content__contact">
                <form onSubmit={this.handleSubmit} onReset={this.handleReset} action="mailto:jr4eyes@gmail.com" method="post">
                    <VInput 
                        title = {"Введите ваше имя"}
                        subtitle = {null}
                        name = {"name"}
                        value = {this.state.name}
                        onChange = {this.handleInput}
                        rules = {[required()]}
                        attributes = {{
                            className : "form__text-input",
                            type : "text",
                            placeholder : "Введите ваше имя..",
                        }}
                    />
                    <VInputs 
                        title = "Введите ваш пол"
                        subtitle = {[
                            "Мужской", 
                            "Женский"]}
                        name = {"sex"}
                        rules = {[required()]}
                        onChange = {this.handleInput}
                        attributes = {[{
                            type : "radio",
                            value : "male",
                            }, {
                            type : "radio",
                            value : "female",
                        }]}
                    />
                    <VSelect 
                        optGroups = {[{
                            options : ages(10, 120)
                        }]}
                        title = {"Введите ваш возраст"}
                        name = {"age"}
                        value = {this.state.age}
                        rules = {[oneOf(ages(10, 120).map(num => String(num)))]}
                        onChange = {this.handleInput}  
                    />
                    <DateInput 
                        title = {"Введите вашу дату рождения"}
                        subtitle = {null}
                        name = {"birthday"}
                        value = {this.state.birthday}
                        onChange = {this.handleInput}
                        rules = {[
                            required(), 
                            pattern(/^[0-9]{2} [a-zA-Zа-яА-Я]{1,8} [0-9]{4}$/, "Введите дату в формате: дд мммм гггг"),
                            value => 
                                value === undefined ? `Введите корректный месяц`
                                : {  
                                    ok : monthNames.indexOf(value.split(' ')[1]) !== -1, 
                                    message : `Введите корректный месяц` 
                                }
                        ]}
                        attributes = {{
                            className : "form__text-input",
                            type : "text",
                            placeholder : "Введите вашу дату рождения..",
                        }}
                    />
                    <VInput 
                        title = "Введите ваш почтовый адресс"
                        name = "email"
                        value = {this.state.email}
                        onChange = {this.handleInput}
                        rules = {[required(), pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/, "Введите корректный почтовый адрес")]}
                        attributes = {{
                            className : "form__text-input",
                            type : "text",
                            placeholder : "Введите ваш почтовый адресс..",
                        }}
                    />
                    <VTextarea 
                        title = "Введите ваше сообщение"
                        name = "message"
                        value = {this.state.message}
                        onChange = {this.handleInput}
                        rules = {[required()]}
                        attributes = {{
                            className : "form__text-input",
                            placeholder : sidorovich,
                            rows : "10"
                        }}
                    />
                    <div className="form__control-buttons">
                        <input className={`btn ${this.state.isValid?'btn-submit-active':'btn-submit-not-active'}`} disabled={!this.state.isValid} type = "submit" value = "Отправить"/>
                        <input className={`btn btn-submit-active`} type = "reset" value = "Очистить" />
                    </div>
                </form>
            </div>
        );
    }
}