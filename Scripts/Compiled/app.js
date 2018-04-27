$(function () {
    localStorage.clear();
    ReactDOM.render(React.createElement(Header, null), document.getElementById('header'));
    RenderIndexPage();
});

RenderIndexPage = function RenderIndexPage() {
    setHistory('Index');
    ReactDOM.render(React.createElement(Index, null), document.getElementById('content'));
};
RenderAboutPage = function RenderAboutPage() {
    setHistory('About');
    ReactDOM.render(React.createElement(About, null), document.getElementById('content'));
};
RenderInterestsPage = function RenderInterestsPage() {
    setHistory('Interests');
    ReactDOM.render(React.createElement(Interests, null), document.getElementById('content'));
};
RenderStudyPage = function RenderStudyPage() {
    setHistory('Study');
    ReactDOM.render(React.createElement(Study, null), document.getElementById('content'));
};
RenderPhotoalbumPage = function RenderPhotoalbumPage() {
    setHistory('Photoalbum');
    ReactDOM.render(React.createElement(Photoalbum, null), document.getElementById('content'));
};
RenderContactPage = function RenderContactPage() {
    setHistory('Contact');
    ReactDOM.render(React.createElement(Contact, null), document.getElementById('content'));
};
RenderTestPage = function RenderTestPage() {
    setHistory('Test');
    ReactDOM.render(React.createElement(Test, null), document.getElementById('content'));
};
RenderHistoryPage = function RenderHistoryPage() {
    setHistory('History');
    ReactDOM.render(React.createElement(History, null), document.getElementById('content'));
};

function setHistory(key) {
    document.cookie = key + '=' + (getCookie(key) - 0 + 1);
    localStorage.setItem(key, localStorage.getItem(key) - 0 + 1);
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
var books = ['Цветы для Элджернона', 'Tаинственная история Билли Миллигана', 'Учение дона Хуана'];

var music = ['Pg.Lost', 'A perfect circle', 'Tool', 'Slayer', 'Ulver', 'Orange House', 'Public Enemy'];

var titles = ['Фотография 1', 'Описание 2', 'Фотография 3', 'Описание 4', 'Фотография 5', 'Описание 6', 'Фотография 7', 'Описание 8', 'Фотография 9', 'Описание 10', 'Фотография 11', 'Описание 12', 'Фотография 13', 'Описание 14', 'Фотография 15'];

var fotos = ['../Content/Images/1.jpg', '../Content/Images/2.jpg', '../Content/Images/3.jpg', '../Content/Images/4.jpg', '../Content/Images/5.jpg', '../Content/Images/6.jpg', '../Content/Images/7.jpg', '../Content/Images/8.jpg', '../Content/Images/9.jpg', '../Content/Images/10.jpg', '../Content/Images/11.jpg', '../Content/Images/12.jpg', '../Content/Images/13.jpg', '../Content/Images/14.jpg', '../Content/Images/15.jpg'];

var studyModel = {
    universityName: "Севастопольский государственный университет",
    platformName: "Информационные системы",
    semesters: [{
        name: "Семестр 1",
        disciplines: [{ name: "Информатика" }, { name: "Высшая математика" }, { name: "Русский язык" }, { name: "История" }, { name: "" }]
    }, {
        name: "Семестр 2",
        disciplines: [{ name: "ОПиАЯ" }, { name: "ТВиМС" }, { name: "Высшая математика" }, { name: "ТА" }, { name: "" }]
    }, {
        name: "Семестр 3",
        disciplines: [{ name: "ООП" }, { name: "Высшая математика" }, { name: "Английский язык" }, { name: ".Net" }, { name: "Java" }]
    }, {
        name: "Семестр 4",
        disciplines: [{ name: "АИС" }, { name: "ООП" }, { name: "" }, { name: "" }, { name: "" }]
    }]
};

var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var weekNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

var sidorovich = "Короче, Меченый, я тебя спас и в благородство играть не буду: выполнишь для меня пару заданий — и мы в расчете. Заодно посмотрим, как быстро у тебя башка после амнезии прояснится. А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот Стрелок сдался, но я в чужие дела не лезу, хочешь убить, значит есть за что...";
var ages = function ages(a, b) {
    var array = [];
    for (var index = 0; index < b - a; index++) {
        array[index] = a + index;
    }
    return array;
};

var getFotosWithTitlesForTable = function getFotosWithTitlesForTable() {
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
};

getProp = function getProp(prop, boolResult) {
    if (prop === undefined || prop === null) {
        return boolResult ? false : '';
    }
    return prop;
};

getYears = function getYears() {
    var years = [];
    for (var i = 0; i <= new Date().getFullYear() - 1900; i++) {
        years[i] = 1900 + i;
    }
    return years.reverse();
};

function formatDate(date) {
    return ('0' + date.getDate()).slice(-2) + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
}

function formatDateShort(date) {
    if (new Date(date) == 'Invalid Date') return ' ';
    return ('0' + date.getDate()).slice(-2) + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
}
required = function required(message) {
    return function (value) {
        return value === undefined ? message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E' : { ok: value !== '', message: message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E' };
    };
};

maxLength = function maxLength(maxLen, message) {
    return function (value) {
        return value === undefined ? message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0431\u043E\u043B\u0435\u0435 ' + maxLen : { ok: value.length > maxLen, message: message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0431\u043E\u043B\u0435\u0435 ' + maxLen };
    };
};

minLength = function minLength(minLen, message) {
    return function (value) {
        return value === undefined ? message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0435 ' + minLen : { ok: value.length < minLen, message: message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0435 ' + minLen };
    };
};

oneOf = function oneOf(its, message) {
    return function (value) {
        return value === undefined ? message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438 \u043F\u043E\u043B\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0434\u043D\u0438\u043C \u0438\u0437: ' + its.map(function (element) {
            return ' ' + element;
        }) : { ok: its.indexOf(value) !== -1, message: message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438 \u043F\u043E\u043B\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0434\u043D\u0438\u043C \u0438\u0437: ' + its.map(function (element) {
                return ' ' + element;
            }) };
    };
};

equals = function equals(it, message) {
    return function (value) {
        return value === undefined ? message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C \u0441: ' + it : { ok: value == it, message: message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C \u0441: ' + it };
    };
};

getWords = function getWords(text) {
    return text.replace(/\r\n?|\n/g, ' ').replace(/ {2,}/g, ' ').replace(/^ /, '').replace(/ $/, '').split(" ");
};

wordsCountLess = function wordsCountLess(count, message) {
    return function (value) {
        return value === undefined ? message || '\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u043E\u0432 \u0432 \u043F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435: ' + count : { ok: getWords(value).length < count, message: message || '\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u043E\u0432 \u0432 \u043F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435: ' + count };
    };
};

wordsCountMore = function wordsCountMore(count, message) {
    return function (value) {
        return value === undefined ? message || '\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u043E\u0432 \u0432 \u043F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435: ' + count : { ok: getWords(value).length > count, message: message || '\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u043E\u0432 \u0432 \u043F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435: ' + count };
    };
};

pattern = function pattern(regxp, message) {
    return function (value) {
        return value === undefined ? message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u043C\u0443 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044E: ' + regxp : { ok: regxp.test(String(value)), message: message || '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u043C\u0443 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044E: ' + regxp };
    };
};

checkRules = function checkRules(rules, value) {
    if (rules.length === 0) {
        return {
            ok: true
        };
    }

    var faultRulesMessages = [];
    var ok = true;

    for (var i = 0; i < rules.length; i++) {
        var ruleResult = rules[i](value);
        if (!ruleResult.ok) {
            ok = ruleResult.ok;
            faultRulesMessages.push(ruleResult.message);
        }
    }

    if (ok) {
        return {
            ok: true
        };
    }

    return {
        ok: false,
        messages: faultRulesMessages
    };
};
validateTest = function validateTest(form) {
    var inputs = form.getElementsByTagName('input');
    var radios = [];
    for (i = 0; i < inputs.length; i++) {
        inputs[i].type == "radio" && radios.push(inputs[i]);
    }

    var radioNames = [];
    var radioIsValids = [];
    for (i = 0; i < radios.length; i++) {
        //console.log(radios[i])
        if (radioNames.indexOf(radios[i].name) === -1) {
            radioNames.push(radios[i].name);
            radioIsValids.push(false);
        }
    }

    for (i = 0; i < radios.length; i++) {
        //console.log(radios[i], radios[i].checked)
        if (radios[i].checked) {
            radioIsValids[radioNames.indexOf(radios[i].name)] = true;
        }
    }

    var isValid = true;
    for (i = 0; i < radioNames.length; i++) {
        //console.log(`${radioNames[i]} ${radioIsValids[i]}`)
        if (!radioIsValids[i]) {
            isValid = false;
            break;
        }
    }

    console.log(isValid);
};
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownHeaderLink = function (_React$PureComponent) {
    _inherits(DropdownHeaderLink, _React$PureComponent);

    function DropdownHeaderLink() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DropdownHeaderLink);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownHeaderLink.__proto__ || Object.getPrototypeOf(DropdownHeaderLink)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: false
        }, _this.onClick = function (e) {
            var _this$props = _this.props,
                handleClick = _this$props.handleClick,
                index = _this$props.index;

            handleClick(index);
        }, _this.mouseHandler = function () {
            return _this.setState({ show: !_this.state.show });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DropdownHeaderLink, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$handleClick = _props.handleClick,
                handleClick = _props$handleClick === undefined ? function (f) {
                return f;
            } : _props$handleClick,
                _props$index = _props.index,
                index = _props$index === undefined ? 0 : _props$index,
                _props$name = _props.name,
                name = _props$name === undefined ? "" : _props$name,
                _props$styles = _props.styles,
                styles = _props$styles === undefined ? StyleSheet.HeaderLink : _props$styles,
                _props$current = _props.current,
                current = _props$current === undefined ? false : _props$current,
                _props$children = _props.children,
                children = _props$children === undefined ? React.createElement(React.Fragment, null) : _props$children;

            var attribute = {
                href: "#",
                className: "" + (current ? 'colorRed' : ''),
                style: styles
            };
            return React.createElement(
                "div",
                { onMouseEnter: this.mouseHandler, onMouseLeave: this.mouseHandler, onClick: this.onClick },
                React.createElement(
                    "div",
                    { className: "hover" },
                    React.createElement(
                        "a",
                        attribute,
                        name
                    )
                ),
                React.createElement(
                    "div",
                    { className: "positionAbsolute" },
                    this.state.show && children
                )
            );
        }
    }]);

    return DropdownHeaderLink;
}(React.PureComponent);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentPage: 0
        }, _this.handleClick = function (index) {
            _this.setState({ currentPage: index });
            pages[index].Page();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'nav',
                { style: { position: 'relative', zIndex: '1000' } },
                React.createElement(
                    HeaderList,
                    null,
                    pages.map(function (page, index) {
                        attributes = {
                            key: page.Name,
                            index: index,
                            current: index === _this2.state.currentPage,
                            name: page.Name,
                            handleClick: _this2.handleClick
                        };
                        if (!page.Links) {
                            return React.createElement(HeaderLink, attributes);
                        } else {
                            return React.createElement(
                                DropdownHeaderLink,
                                attributes,
                                page.Links
                            );
                        }
                    })
                ),
                React.createElement(
                    'div',
                    { style: { top: 0, position: 'fixed', right: '5%', color: 'white' } },
                    React.createElement(Clock, null)
                )
            );
        }
    }]);

    return Header;
}(React.Component);

pages = [{
    Name: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430',
    Page: RenderIndexPage
}, {
    Name: '\u041E\u0431\u043E \u043C\u043D\u0435',
    Page: RenderAboutPage
}, {
    Name: '\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u044B',
    Page: RenderInterestsPage,
    Links: React.createElement(
        'ul',
        { className: 'interests-menu' },
        React.createElement(
            'li',
            null,
            React.createElement(
                'a',
                { href: '#hobby' },
                '\u0425\u043E\u0431\u0431\u0438'
            )
        ),
        React.createElement(
            'li',
            null,
            React.createElement(
                'a',
                { href: '#books' },
                '\u041A\u043D\u0438\u0433\u0438'
            )
        ),
        React.createElement(
            'li',
            null,
            React.createElement(
                'a',
                { href: '#music' },
                '\u041C\u0443\u0437\u044B\u043A\u0430'
            )
        ),
        React.createElement(
            'li',
            null,
            React.createElement(
                'a',
                { href: '#movies' },
                '\u0424\u0438\u043B\u044C\u043C\u044B'
            )
        )
    )
}, {
    Name: '\u0423\u0447\u0435\u0431\u0430',
    Page: RenderStudyPage
}, {
    Name: '\u0424\u043E\u0442\u043E\u0430\u043B\u044C\u0431\u043E\u043C',
    Page: RenderPhotoalbumPage
}, {
    Name: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442',
    Page: RenderContactPage
}, {
    Name: '\u0422\u0435\u0441\u0442',
    Page: RenderTestPage
}, {
    Name: '\u0418\u0441\u0442\u043E\u0440\u0438\u044F',
    Page: RenderHistoryPage
}];
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderLink = function (_React$PureComponent) {
    _inherits(HeaderLink, _React$PureComponent);

    function HeaderLink() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, HeaderLink);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderLink.__proto__ || Object.getPrototypeOf(HeaderLink)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
            var _this$props = _this.props,
                handleClick = _this$props.handleClick,
                index = _this$props.index;

            handleClick(index);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HeaderLink, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$handleClick = _props.handleClick,
                handleClick = _props$handleClick === undefined ? function (f) {
                return f;
            } : _props$handleClick,
                _props$index = _props.index,
                index = _props$index === undefined ? 0 : _props$index,
                _props$name = _props.name,
                name = _props$name === undefined ? "" : _props$name,
                _props$styles = _props.styles,
                styles = _props$styles === undefined ? StyleSheet.HeaderLink : _props$styles,
                _props$current = _props.current,
                current = _props$current === undefined ? false : _props$current;

            var attribute = {
                href: "#",
                className: "hover  " + (current ? 'colorRed' : ''),
                style: styles,
                onClick: this.onClick
            };
            return React.createElement(
                "a",
                attribute,
                name
            );
        }
    }]);

    return HeaderLink;
}(React.PureComponent);
var HeaderList = function HeaderList(_ref) {
    var handleCall = _ref.handleCall,
        children = _ref.children,
        _ref$styles = _ref.styles,
        styles = _ref$styles === undefined ? StyleSheet.HeaderList : _ref$styles;

    var HeaderLinks = React.Children.map(children, function (child) {
        return React.createElement(
            "li",
            { style: { "float": "left" } },
            child
        );
    });
    return React.createElement(
        "ul",
        { style: styles },
        HeaderLinks
    );
};
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = function (_React$PureComponent) {
    _inherits(DateInput, _React$PureComponent);

    function DateInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DateInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: false
        }, _this.IsValid = false, _this.ValidateBox = false, _this.validate = function (value) {
            var rules = _this.props.rules;
            var result = checkRules(rules, value);
            if (result.ok) {
                _this.IsValid = true;
                return false;
            }
            _this.IsValid = false;
            return React.createElement(MBox, { messages: result.messages });
        }, _this.onVChange = function (_ref2) {
            var _ref2$target = _ref2.target,
                value = _ref2$target.value,
                name = _ref2$target.name;

            _this.ValidateBox = _this.validate(value);
            _this.props.onChange(value, name, _this.IsValid);
        }, _this.handleCalendar = function (date) {
            _this.setState({ show: false });
            _this.onVChange({ target: { name: _this.props.name, value: date } });
        }, _this.focusHandler = function () {
            return _this.setState({ show: true });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DateInput, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                subtitle = _props.subtitle,
                attributes = _props.attributes,
                rules = _props.rules;

            var messages = rules.map(function (rule) {
                return '\n' + rule();
            }).join(' ').replace(/,/, '').replace(/^\n/, '');
            return React.createElement(
                React.Fragment,
                null,
                title && React.createElement(
                    'h3',
                    null,
                    title
                ),
                subtitle && React.createElement(
                    'div',
                    null,
                    subtitle
                ),
                React.createElement('input', _extends({
                    name: this.props.name,
                    value: this.props.value,
                    onChange: function onChange(_ref3) {
                        var _ref3$target = _ref3.target,
                            value = _ref3$target.value,
                            name = _ref3$target.name;
                        _this2.props.onChange(value, name, _this2.IsValid);
                    },
                    onFocus: this.focusHandler,
                    onBlur: this.onVChange
                }, attributes)),
                React.createElement(
                    'div',
                    { className: 'positionAbsolute' },
                    this.state.show && React.createElement(Calendar, {
                        weekNames: weekNames,
                        monthNames: monthNames,
                        years: getYears(),
                        handleClick: this.handleCalendar,
                        closeHandler: function closeHandler() {
                            console.log('close', _this2.state);_this2.setState({ show: false });
                        }
                    })
                ),
                React.createElement(
                    'a',
                    _extends({}, !this.IsValid && { "title": messages }, { style: { "color": !this.IsValid ? "#ff0000" : "#33cc33", "fontSize": "16pt", "margin": "0 10px" } }),
                    !this.IsValid ? "✘" : "✔"
                ),
                this.ValidateBox
            );
        }
    }]);

    return DateInput;
}(React.PureComponent);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: "render",
        value: function render() {
            var title = this.props.title;
            var subtitle = this.props.subtitle;
            var attributes = this.props.attributes;

            return [title && React.createElement(
                "h3",
                { key: "title" },
                title
            ), subtitle && React.createElement(
                "div",
                { key: "subtitle" },
                subtitle
            ), React.createElement("input", _extends({ key: "input", name: this.props.name, value: this.props.value, onChange: this.props.onChange }, attributes))];
        }
    }]);

    return Input;
}(React.Component);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inputs = function (_React$Component) {
    _inherits(Inputs, _React$Component);

    function Inputs() {
        _classCallCheck(this, Inputs);

        return _possibleConstructorReturn(this, (Inputs.__proto__ || Object.getPrototypeOf(Inputs)).apply(this, arguments));
    }

    _createClass(Inputs, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var attributes = getProp(this.props.attributes);
            var title = getProp(this.props.title);
            var subtitle = getProp(this.props.subtitle);
            return [title && React.createElement(
                "h3",
                { key: "title" },
                title
            ), attributes.map(function (a, index) {
                return subtitle[index] ? React.createElement(
                    "div",
                    { key: "subtitle" + index },
                    subtitle[index],
                    React.createElement("input", _extends({ key: "input" + index, name: _this2.props.name, value: _this2.props.value, onChange: _this2.props.onChange }, a)),
                    " "
                ) : React.createElement("input", _extends({ key: "input" + index, name: _this2.props.name, value: _this2.props.value, onChange: _this2.props.onChange }, a));
            })];
        }
    }]);

    return Inputs;
}(React.Component);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    _createClass(Select, [{
        key: "render",
        value: function render() {
            var optGroups = getProp(this.props.optGroups);
            var attributes = getProp(this.props.attributes);
            var title = getProp(this.props.title);
            return [title && React.createElement(
                "h3",
                { key: "title" },
                title
            ), React.createElement(
                "select",
                _extends({ key: "select", name: this.props.name, value: this.props.value, onChange: this.props.onChange }, attributes),
                React.createElement(
                    "option",
                    { value: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E" },
                    "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
                ),
                optGroups.map(function (optGroup, i) {
                    return optGroup.label ? React.createElement(
                        "optgroup",
                        { key: "optgroup" + i, label: optGroup.label },
                        optGroup.options.map(function (option, j) {
                            return React.createElement(
                                "option",
                                { key: "option" + i + j, value: option },
                                option
                            );
                        })
                    ) : optGroup.options.map(function (option, j) {
                        return React.createElement(
                            "option",
                            { key: "option" + i + j, value: option },
                            option
                        );
                    });
                })
            )];
        }
    }]);

    return Select;
}(React.Component);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_React$Component) {
    _inherits(Textarea, _React$Component);

    function Textarea() {
        _classCallCheck(this, Textarea);

        return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
    }

    _createClass(Textarea, [{
        key: "render",
        value: function render() {
            var attributes = this.props.attributes;
            var title = this.props.title;
            var subtitle = this.props.subtitle;
            return [title && React.createElement(
                "h3",
                { key: "title" },
                title
            ), subtitle && React.createElement(
                "div",
                { key: "subtitle" },
                subtitle
            ), React.createElement("textarea", _extends({ key: "input", name: this.props.name, value: this.props.value, onChange: this.props.onChange }, attributes))];
        }
    }]);

    return Textarea;
}(React.Component);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VInput = function (_React$Component) {
    _inherits(VInput, _React$Component);

    function VInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, VInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VInput.__proto__ || Object.getPrototypeOf(VInput)).call.apply(_ref, [this].concat(args))), _this), _this.IsValid = false, _this.ValidateBox = false, _this.validate = function (value) {
            var rules = _this.props.rules;
            var result = checkRules(rules, value);
            if (result.ok) {
                _this.IsValid = true;
                return false;
            }
            _this.IsValid = false;
            return React.createElement(MBox, { messages: result.messages });
        }, _this.onVChange = function (_ref2) {
            var _ref2$target = _ref2.target,
                value = _ref2$target.value,
                name = _ref2$target.name;

            _this.ValidateBox = _this.validate(value);
            _this.props.onChange(value, name, _this.IsValid);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(VInput, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                subtitle = _props.subtitle,
                attributes = _props.attributes,
                rules = _props.rules;

            var messages = rules.map(function (rule) {
                return '\n' + rule();
            }).join(' ').replace(/,/, '').replace(/^\n/, '');
            return React.createElement(
                React.Fragment,
                null,
                title && React.createElement(
                    'h3',
                    null,
                    title
                ),
                subtitle && React.createElement(
                    'div',
                    null,
                    subtitle
                ),
                React.createElement('input', _extends({
                    name: this.props.name,
                    value: this.props.value,
                    onChange: function onChange(_ref3) {
                        var _ref3$target = _ref3.target,
                            value = _ref3$target.value,
                            name = _ref3$target.name;
                        _this2.props.onChange(value, name, _this2.IsValid);
                    },
                    onBlur: this.onVChange
                }, attributes)),
                React.createElement(
                    'a',
                    _extends({}, !this.IsValid && { "title": messages }, { style: { "color": !this.IsValid ? "#ff0000" : "#33cc33", "fontSize": "16pt", "margin": "0 10px" } }),
                    !this.IsValid ? "✘" : "✔"
                ),
                this.ValidateBox
            );
        }
    }]);

    return VInput;
}(React.Component);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VInputs = function (_React$Component) {
    _inherits(VInputs, _React$Component);

    function VInputs() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, VInputs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VInputs.__proto__ || Object.getPrototypeOf(VInputs)).call.apply(_ref, [this].concat(args))), _this), _this.ValidateBox = false, _this.validate = function (value) {
            var rules = _this.props.rules;
            var result = checkRules(rules, value);
            if (result.ok) {
                _this.IsValid = true;
                return false;
            }
            _this.IsValid = false;
            return React.createElement(MBox, { messages: result.messages });
        }, _this.onVChange = function (_ref2) {
            var _ref2$target = _ref2.target,
                value = _ref2$target.value,
                name = _ref2$target.name;

            _this.ValidateBox = _this.validate(value);
            _this.props.onChange(value, name, _this.IsValid);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(VInputs, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                subtitle = _props.subtitle,
                attributes = _props.attributes,
                rules = _props.rules;

            var messages = rules.map(function (rule) {
                return '\n' + rule();
            }).join(' ').replace(/,/, '').replace(/^\n/, '');
            return React.createElement(
                React.Fragment,
                null,
                title && React.createElement(
                    'h3',
                    null,
                    title
                ),
                attributes.map(function (attribute, index) {
                    return subtitle[index] ? React.createElement(
                        'span',
                        { key: index },
                        subtitle[index],
                        React.createElement('input', _extends({
                            name: _this2.props.name,
                            onChange: function onChange(_ref3) {
                                var _ref3$target = _ref3.target,
                                    value = _ref3$target.value,
                                    name = _ref3$target.name;
                                _this2.props.onChange(value, name, _this2.IsValid);
                            },
                            onBlur: _this2.onVChange
                        }, attribute))
                    ) : React.createElement('input', _extends({
                        key: index,
                        name: _this2.props.name,
                        onChange: function onChange(_ref4) {
                            var _ref4$target = _ref4.target,
                                value = _ref4$target.value,
                                name = _ref4$target.name;
                            _this2.props.onChange(value, name, _this2.IsValid);
                        },
                        onBlur: _this2.onVChange
                    }, attribute));
                }),
                React.createElement(
                    'a',
                    _extends({}, !this.IsValid && { "title": messages }, { style: { "color": !this.IsValid ? "#ff0000" : "#33cc33", "fontSize": "16pt", "margin": "0 10px" } }),
                    !this.IsValid ? "✘" : "✔"
                ),
                this.ValidateBox
            );
        }
    }]);

    return VInputs;
}(React.Component);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VSelect = function (_React$Component) {
    _inherits(VSelect, _React$Component);

    function VSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, VSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VSelect.__proto__ || Object.getPrototypeOf(VSelect)).call.apply(_ref, [this].concat(args))), _this), _this.ValidateBox = false, _this.validate = function (value) {
            var rules = _this.props.rules;
            var result = checkRules(rules, value);
            if (result.ok) {
                _this.IsValid = true;
                return false;
            }
            _this.IsValid = false;
            return React.createElement(MBox, { messages: result.messages });
        }, _this.onVChange = function (_ref2) {
            var _ref2$target = _ref2.target,
                value = _ref2$target.value,
                name = _ref2$target.name;

            _this.ValidateBox = _this.validate(value);
            _this.props.onChange(value, name, _this.IsValid);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(VSelect, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                optGroups = _props.optGroups,
                attributes = _props.attributes,
                rules = _props.rules;

            var messages = rules.map(function (rule) {
                return '\n' + rule();
            }).join(' ').replace(/,/, '').replace(/^\n/, '');
            return React.createElement(
                React.Fragment,
                null,
                title && React.createElement(
                    'h3',
                    null,
                    title
                ),
                React.createElement(
                    'select',
                    _extends({
                        name: this.props.name,
                        value: this.props.value,
                        onChange: function onChange(_ref3) {
                            var _ref3$target = _ref3.target,
                                value = _ref3$target.value,
                                name = _ref3$target.name;
                            _this2.props.onChange(value, name, _this2.IsValid);
                        },
                        onBlur: this.onVChange
                    }, attributes),
                    React.createElement(
                        'option',
                        { value: '' },
                        '\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E'
                    ),
                    optGroups.map(function (optGroup, i) {
                        return optGroup.label ? React.createElement(
                            'optgroup',
                            { key: 'optgroup' + i, label: optGroup.label },
                            optGroup.options.map(function (option, j) {
                                return React.createElement(
                                    'option',
                                    { key: 'option' + i + j, value: option },
                                    option
                                );
                            })
                        ) : optGroup.options.map(function (option, j) {
                            return React.createElement(
                                'option',
                                { key: 'option' + i + j, value: option },
                                option
                            );
                        });
                    })
                ),
                React.createElement(
                    'a',
                    _extends({}, !this.IsValid && { "title": messages }, { style: { "color": !this.IsValid ? "#ff0000" : "#33cc33", "fontSize": "16pt", "margin": "0 10px" } }),
                    !this.IsValid ? "✘" : "✔"
                ),
                this.ValidateBox
            );
        }
    }]);

    return VSelect;
}(React.Component);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VTextarea = function (_React$Component) {
    _inherits(VTextarea, _React$Component);

    function VTextarea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, VTextarea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VTextarea.__proto__ || Object.getPrototypeOf(VTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.ValidateBox = false, _this.validate = function (value) {
            var rules = _this.props.rules;
            var result = checkRules(rules, value);
            if (result.ok) {
                _this.IsValid = true;
                return false;
            }
            _this.IsValid = false;
            return React.createElement(MBox, { messages: result.messages });
        }, _this.onVChange = function (_ref2) {
            var _ref2$target = _ref2.target,
                value = _ref2$target.value,
                name = _ref2$target.name;

            _this.ValidateBox = _this.validate(value);
            _this.props.onChange(value, name, _this.IsValid);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(VTextarea, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                subtitle = _props.subtitle,
                attributes = _props.attributes,
                rules = _props.rules;

            var messages = rules.map(function (rule) {
                return '\n' + rule();
            }).join(' ').replace(/,/, '').replace(/^\n/, '');
            return React.createElement(
                React.Fragment,
                null,
                title && React.createElement(
                    'h3',
                    null,
                    title
                ),
                subtitle && React.createElement(
                    'div',
                    null,
                    subtitle
                ),
                React.createElement('textarea', _extends({
                    name: this.props.name,
                    value: this.props.value,
                    onChange: function onChange(_ref3) {
                        var _ref3$target = _ref3.target,
                            value = _ref3$target.value,
                            name = _ref3$target.name;
                        _this2.props.onChange(value, name, _this2.IsValid);
                    },
                    onBlur: this.onVChange
                }, attributes)),
                React.createElement(
                    'a',
                    _extends({}, !this.IsValid && { "title": messages }, { style: { "color": !this.IsValid ? "#ff0000" : "#33cc33", "fontSize": "16pt", "margin": "0 10px" } }),
                    !this.IsValid ? "✘" : "✔"
                ),
                this.ValidateBox
            );
        }
    }]);

    return VTextarea;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "About" },
                React.createElement(
                    "span",
                    { className: "About-Autobiography" },
                    React.createElement(
                        "p",
                        null,
                        "\u042F, \u0415\u043C\u0435\u043B\u044C\u044F\u043D\u0435\u043D\u043A\u043E \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447, \u0440\u043E\u0434\u0438\u043B\u0441\u044F 21 \u0444\u0435\u0432\u0440\u0430\u043B\u044F 1998 \u0433\u043E\u0434\u0430\u2026"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0438 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442:",
                        React.createElement("br", null),
                        "\u0417\u043D\u0430\u0447\u0438\u043C\u043E\u0441\u0442\u044C \u044D\u0442\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u0430, \u0447\u0442\u043E \u0440\u0430\u043C\u043A\u0438 \u0438 \u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439. \u0417\u043D\u0430\u0447\u0438\u043C\u043E\u0441\u0442\u044C \u044D\u0442\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u0430, \u0447\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F.\u0420\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0438 \u0431\u043E\u0433\u0430\u0442\u044B\u0439 \u043E\u043F\u044B\u0442 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u043F\u0440\u043E\u043F\u0430\u0433\u0430\u043D\u0434\u0438\u0441\u0442\u0441\u043A\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u0448\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F. \u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0441\u043B\u043E\u0436\u0438\u0432\u0448\u0430\u044F\u0441\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u043E\u043C\u0443 \u043A\u0440\u0443\u0433\u0443 (\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432) \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u041D\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442, \u043E\u0434\u043D\u0430\u043A\u043E \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0442 \u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432\u043B\u0435\u0447\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u0438 \u043C\u043E\u0434\u0435\u0440\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C."
                    )
                )
            );
        }
    }]);

    return About;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Contact);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Contact.__proto__ || Object.getPrototypeOf(Contact)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: '',
            sex: '',
            age: '',
            email: '',
            message: '',
            birthday: formatDateShort(new Date()),
            isValid: false
        }, _this.validateState = {
            nameIsValid: false,
            sexIsValid: false,
            ageIsValid: false,
            emailIsValid: false,
            messageIsValid: false,
            birthdayIsValid: false
        }, _this.init = _this.state, _this.handleSubmit = function (e) {
            e.preventDefault();
            if (_this.state.isValid) window.open("mailto:Jr4eyes@gmail.com?body=" + JSON.stringify(_this.state));
        }, _this.handleReset = function (e) {
            e.preventDefault();
            _this.setState(_this.init);
        }, _this.handleInput = function (value, name, isValid) {
            _this.setState(_defineProperty({}, name, value), _this.handleValidate(isValid, name));
        }, _this.handleValidate = function (isValid, name) {
            if (_this.validateState[name + 'IsValid'] !== isValid) {
                console.log(name + 'IsValid = ' + isValid);
                _this.validateState[name + 'IsValid'] = isValid;
            }
            var validResult = true;
            for (state in _this.validateState) {
                if (!_this.validateState[state]) {
                    validResult = false;
                    break;
                }
            }
            _this.setState({ isValid: isValid });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'content__contact' },
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, onReset: this.handleReset, action: 'mailto:jr4eyes@gmail.com', method: 'post' },
                    React.createElement(VInput, {
                        title: "Введите ваше имя",
                        subtitle: null,
                        name: "name",
                        value: this.state.name,
                        onChange: this.handleInput,
                        rules: [required()],
                        attributes: {
                            className: "form__text-input",
                            type: "text",
                            placeholder: "Введите ваше имя.."
                        }
                    }),
                    React.createElement(VInputs, {
                        title: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u043E\u043B',
                        subtitle: ["Мужской", "Женский"],
                        name: "sex",
                        rules: [required()],
                        onChange: this.handleInput,
                        attributes: [{
                            type: "radio",
                            value: "male"
                        }, {
                            type: "radio",
                            value: "female"
                        }]
                    }),
                    React.createElement(VSelect, {
                        optGroups: [{
                            options: ages(10, 120)
                        }],
                        title: "Введите ваш возраст",
                        name: "age",
                        value: this.state.age,
                        rules: [oneOf(ages(10, 120).map(function (num) {
                            return String(num);
                        }))],
                        onChange: this.handleInput
                    }),
                    React.createElement(DateInput, {
                        title: "Введите вашу дату рождения",
                        subtitle: null,
                        name: "birthday",
                        value: this.state.birthday,
                        onChange: this.handleInput,
                        rules: [required(), pattern(/^[0-9]{2} [a-zA-Zа-яА-Я]{1,8} [0-9]{4}$/, "Введите дату в формате: дд мммм гггг"), function (value) {
                            return value === undefined ? '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043C\u0435\u0441\u044F\u0446' : {
                                ok: monthNames.indexOf(value.split(' ')[1]) !== -1,
                                message: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043C\u0435\u0441\u044F\u0446'
                            };
                        }],
                        attributes: {
                            className: "form__text-input",
                            type: "text",
                            placeholder: "Введите вашу дату рождения.."
                        }
                    }),
                    React.createElement(VInput, {
                        title: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441\u0441',
                        name: 'email',
                        value: this.state.email,
                        onChange: this.handleInput,
                        rules: [required(), pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/, "Введите корректный почтовый адрес")],
                        attributes: {
                            className: "form__text-input",
                            type: "text",
                            placeholder: "Введите ваш почтовый адресс.."
                        }
                    }),
                    React.createElement(VTextarea, {
                        title: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435',
                        name: 'message',
                        value: this.state.message,
                        onChange: this.handleInput,
                        rules: [required()],
                        attributes: {
                            className: "form__text-input",
                            placeholder: sidorovich,
                            rows: "10"
                        }
                    }),
                    React.createElement(
                        'div',
                        { className: 'form__control-buttons' },
                        React.createElement('input', { disabled: !this.state.isValid, type: 'submit', value: '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C' }),
                        React.createElement('input', { type: 'reset', value: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C' })
                    )
                )
            );
        }
    }]);

    return Contact;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_React$Component) {
    _inherits(History, _React$Component);

    function History() {
        _classCallCheck(this, History);

        return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
    }

    _createClass(History, [{
        key: 'render',
        value: function render() {
            var pages = [{ name: 'Index', localizedName: 'Главная страница' }, { name: 'About', localizedName: 'Обо мне' }, { name: 'Interests', localizedName: 'Интересы' }, { name: 'Study', localizedName: 'Учеба' }, { name: 'Photoalbum', localizedName: 'Фотоальбом' }, { name: 'Contact', localizedName: 'Контакт' }, { name: 'Test', localizedName: 'Тест' }, { name: 'History', localizedName: 'История' }];
            return React.createElement(
                'div',
                { className: 'History' },
                React.createElement(
                    'h3',
                    { className: 'History-Title Page-Title' },
                    '\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446:'
                ),
                React.createElement(
                    'table',
                    null,
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement('td', { style: { border: 'none' } }),
                            React.createElement(
                                'td',
                                null,
                                '\u041C\u0435\u0441\u0442\u043D\u044B\u0439 \u0441\u0442\u043E\u0440\u043E\u0436'
                            ),
                            React.createElement(
                                'td',
                                null,
                                '\u041A\u0443\u043A\u0438\u0448\u0438'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        pages.map(function (page) {
                            return React.createElement(
                                'tr',
                                { key: page.name },
                                React.createElement(
                                    'td',
                                    { style: { textAlign: 'left' } },
                                    page.localizedName
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    localStorage.getItem(page.name)
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    getCookie(page.name)
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return History;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Index" },
                React.createElement(
                    "h1",
                    { className: "Index-FullName" },
                    "\u0415\u043C\u0435\u043B\u044C\u044F\u043D\u0435\u043D\u043A\u043E \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447"
                ),
                React.createElement("img", { className: "Index-Photo", src: "..\\Content\\Images\\photo.jpg", alt: "\u0444\u043E\u0442\u043E" }),
                React.createElement(
                    "table",
                    { className: "Index-InfoTable " },
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "content__group" },
                                    "\u0413\u0440\u0443\u043F\u043F\u0430:"
                                )
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "content__group-number" },
                                    " \u0418\u0421\u0431-31\u043E"
                                )
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "content__lab-number" },
                                    "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430:"
                                )
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement(
                                    "span",
                                    null,
                                    "\u21161"
                                )
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "content__lab-name" },
                                    "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:"
                                )
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement(
                                    "span",
                                    null,
                                    "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u044F\u0437\u044B\u043A\u0430 \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0438 \u0433\u0438\u043F\u0435\u0440\u0442\u0435\u043A\u0441\u0442\u043E\u0432 HTML \u0438 \u043A\u0430\u0441\u043A\u0430\u0434\u043D\u044B\u0445 \u0442\u0430\u0431\u043B\u0438\u0446 \u0441\u0442\u0438\u043B\u0435\u0439 CSS"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Index;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interests = function (_React$Component) {
    _inherits(Interests, _React$Component);

    function Interests() {
        _classCallCheck(this, Interests);

        return _possibleConstructorReturn(this, (Interests.__proto__ || Object.getPrototypeOf(Interests)).apply(this, arguments));
    }

    _createClass(Interests, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Interests" },
                React.createElement(
                    "div",
                    { className: "Interests-Hobby" },
                    React.createElement("a", { id: "linkOnPage", name: "hobby" }),
                    React.createElement(
                        "h3",
                        null,
                        "\u041C\u043E\u0451 \u0445\u043E\u0431\u0431\u0438:"
                    ),
                    React.createElement(
                        "h4",
                        null,
                        "\u041C\u043E\u0451 \u043B\u044E\u0431\u0438\u043C\u043E\u0435 \u0445\u043E\u0431\u0431\u0438 - \u0438\u0433\u0440\u0430 \u043D\u0430 \u0433\u0438\u0442\u0430\u0440\u0435 \u0438 \u043D\u0430 \u043D\u0435\u0440\u0432\u0430\u0445 \u0441\u0432\u043E\u0438\u0445 \u0441\u043E\u0441\u0435\u0434\u0435\u0439."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "\u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0444\u043E\u0440\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u043E\u043C\u0443 \u043A\u0440\u0443\u0433\u0443 (\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432) \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0442 \u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0441\u0438\u0441\u0442\u0435\u043C \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F. \u0417\u043D\u0430\u0447\u0438\u043C\u043E\u0441\u0442\u044C \u044D\u0442\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u0430, \u0447\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "Interests-Books" },
                    React.createElement("a", { id: "linkOnPage", name: "books" }),
                    React.createElement(
                        "h3",
                        null,
                        "\u041C\u043E\u0438 \u043B\u044E\u0431\u0438\u043C\u044B\u0435 \u043A\u043D\u0438\u0433\u0438:"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        books.map(function (book, index) {
                            return React.createElement(
                                "li",
                                { key: book },
                                book
                            );
                        })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "Interests-Music" },
                    React.createElement("a", { id: "linkOnPage", name: "music" }),
                    React.createElement(
                        "h3",
                        null,
                        "\u041C\u043E\u044F \u043B\u044E\u0431\u0438\u043C\u0430\u044F \u043C\u0443\u0437\u044B\u043A\u0430:"
                    ),
                    React.createElement(
                        "h4",
                        null,
                        "\u0422\u0430\u043A\u0441\u0442\u0430\u043A\u0441\u0442\u0430\u043A\u0441, \u0448\u0442\u043E \u0442\u0443\u0442 \u0443 \u043D\u0430\u0441? \u041C\u0443\u0437\u044B\u043A\u0430? \u041C\u0443\u0443\u0443\u0437\u044B\u043A\u0430, \u0434\u0430."
                    ),
                    React.createElement(
                        "ol",
                        null,
                        music.map(function (m, i) {
                            return React.createElement(
                                "li",
                                { key: m },
                                m
                            );
                        })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "Interests-Movies" },
                    React.createElement("a", { id: "linkOnPage", name: "movies" }),
                    React.createElement(
                        "h3",
                        null,
                        "\u041C\u043E\u0438 \u043B\u044E\u0431\u0438\u043C\u044B\u0435 \u0444\u0438\u043B\u044C\u043C\u044B:"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "\u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0444\u043E\u0440\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u043E\u043C\u0443 \u043A\u0440\u0443\u0433\u0443 (\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432) \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0442 \u043D\u0430\u0441 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0441\u0438\u0441\u0442\u0435\u043C \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F. \u0417\u043D\u0430\u0447\u0438\u043C\u043E\u0441\u0442\u044C \u044D\u0442\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u0430, \u0447\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439."
                    )
                )
            );
        }
    }]);

    return Interests;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rowImageCount = 6;
var imageCount = 15;

var Photoalbum = function (_React$Component) {
    _inherits(Photoalbum, _React$Component);

    function Photoalbum() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Photoalbum);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Photoalbum.__proto__ || Object.getPrototypeOf(Photoalbum)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: false,
            src: ''
        }, _this.handleClickOnSmallImage = function (src) {
            return _this.setState({ src: src, show: true });
        }, _this.handleClickOnBigImage = function (src) {
            return _this.setState({ show: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Photoalbum, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "Photoalbum" },
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "tbody",
                        null,
                        getFotosWithTitlesForTable().map(function (images, indexMatrix) {
                            return React.createElement(
                                "tr",
                                { key: indexMatrix },
                                images.map(function (image, index) {
                                    return React.createElement(
                                        "td",
                                        { key: index },
                                        React.createElement(
                                            "div",
                                            { className: "Photoalbum-Small-Image" },
                                            React.createElement("img", { src: image.src, alt: image.title, title: image.title, onClick: function onClick() {
                                                    return _this2.handleClickOnSmallImage(image.src);
                                                } }),
                                            React.createElement(
                                                "h3",
                                                null,
                                                image.title
                                            )
                                        )
                                    );
                                })
                            );
                        })
                    )
                ),
                React.createElement(
                    Popup,
                    { show: this.state.show, handleClose: this.handleClickOnBigImage },
                    React.createElement("div", { className: "Photoalbum-Big-Image", style: { backgroundImage: "url(" + this.state.src + ")" } })
                )
            );
        }
    }]);

    return Photoalbum;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Study = function (_React$Component) {
    _inherits(Study, _React$Component);

    function Study() {
        _classCallCheck(this, Study);

        return _possibleConstructorReturn(this, (Study.__proto__ || Object.getPrototypeOf(Study)).apply(this, arguments));
    }

    _createClass(Study, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Study" },
                React.createElement(
                    "h3",
                    { className: "Study-UniversityName" },
                    studyModel.universityName
                ),
                React.createElement(
                    "h3",
                    { className: "Study-PlatformName" },
                    studyModel.platformName
                ),
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                { colSpan: "6" },
                                React.createElement(
                                    "span",
                                    null,
                                    "\u0414\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u044B:"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        studyModel.semesters.map(function (semester, index) {
                            return React.createElement(
                                "tr",
                                { key: index },
                                React.createElement(
                                    "th",
                                    null,
                                    semester.name
                                ),
                                semester.disciplines.map(function (discipline, index) {
                                    return React.createElement(
                                        "td",
                                        { key: index },
                                        discipline.name
                                    );
                                })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Study;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
    _inherits(Test, _React$Component);

    function Test() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Test);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            fullName: "",
            group: "",
            phone: "",
            testOne: "",
            testTwo: "",
            testThree: ""
        }, _this.validateState = {
            fullNameIsValid: "",
            groupIsValid: "",
            phoneIsValid: "",
            testOneIsValid: "",
            testTwoIsValid: "",
            testThreeIsValid: ""
        }, _this.init = _this.state, _this.handleSubmit = function (e) {
            e.preventDefault();
            var isValid = true;
            for (state in _this.validateState) {
                if (!_this.validateState[state]) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) window.open("mailto:Jr4eyes@gmail.com?body=" + JSON.stringify(_this.state));
        }, _this.handleReset = function (e) {
            e.preventDefault();
            _this.setState(_this.init);
        }, _this.handleInput = function (value, name, isValid) {
            _this.setState(_defineProperty({}, name, value), _this.handleValidate(isValid, name));
        }, _this.handleValidate = function (isValid, name) {
            if (_this.validateState[name + "IsValid"] !== isValid) {
                console.log(name + "IsValid = " + isValid);
                _this.validateState[name + "IsValid"] = isValid;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Test, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit, onReset: this.handleReset },
                    React.createElement(
                        "h2",
                        null,
                        "\u0422\u0435\u0441\u0442 \u043F\u043E \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0435 \"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u0430\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430\":"
                    ),
                    React.createElement(VInput, {
                        title: "Введите ваше имя",
                        name: "fullName",
                        value: this.state.fullName,
                        onChange: this.handleInput,
                        rules: [required(), pattern(/^[a-zA-Zа-яА-я]+ [a-zA-Zа-яА-я]+ [a-zA-Zа-яА-я]+$/, "ФИО - Три слова: рас два три")],
                        attributes: {
                            className: "form__text-input",
                            type: "text",
                            placeholder: "Введите ваше имя.."
                        }
                    }),
                    React.createElement(VInput, {
                        title: "Введите ваш мобильный номер",
                        name: "phone",
                        value: this.state.phone,
                        onChange: this.handleInput,
                        rules: [required(), pattern(/^\+[73]{1}[0-9]{8}$|^\+[73]{1}[0-9]{10}$/, "Номер должен начинаться на +3 или +7 и состоять из 9 или 11 цифр")],
                        attributes: {
                            className: "form__text-input",
                            type: "text",
                            placeholder: "+79789999999"
                        }
                    }),
                    React.createElement(VSelect, {
                        optGroups: [{
                            label: "4 курс",
                            options: ["I-41", "I-42", "I-43", "I-44"]
                        }, {
                            label: "5 курс",
                            options: ["I-51", "I-52", "I-53", "I-54"]
                        }, {
                            label: "6 курс",
                            options: ["I-61"]
                        }],
                        title: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0433\u0440\u0443\u043F\u043F\u0443",
                        name: "group",
                        value: this.state.group,
                        rules: [required()],
                        onChange: this.handleInput
                    }),
                    React.createElement(VInputs, {
                        title: "\u041A\u0430\u043A \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u0440\u0430\u0441\u0442\u0440\u043E\u0432\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0435?",
                        subtitle: ["Пиксель", "Бит"],
                        name: "testOne",
                        rules: [required()],
                        value: this.state.testOne,
                        onChange: this.handleInput,
                        attributes: [{
                            type: "radio",
                            value: "Пиксель"
                        }, {
                            type: "radio",
                            value: "Бит"
                        }]
                    }),
                    React.createElement(VSelect, {
                        optGroups: [{
                            options: ["Векторная", "Растровая", "Фрактальная"]
                        }],
                        title: "\u041A\u0430\u043A\u043E\u0439 \u0432\u0438\u0434 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438?",
                        name: "testTwo",
                        value: this.state.testTwo,
                        rules: [required()],
                        onChange: this.handleInput
                    }),
                    React.createElement(VTextarea, {
                        title: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u043A \u0440\u0430\u0441\u0442\u0440\u043E\u0432\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0438, \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0432\u0435\u043A\u0442\u043E\u0440\u043D\u043E\u0439:",
                        name: "testThree",
                        value: this.state.testThree,
                        onChange: this.handleInput,
                        rules: [required(), wordsCountLess(31)],
                        attributes: {
                            className: "form__text-input",
                            placeholder: sidorovich,
                            rows: "10"
                        }
                    }),
                    React.createElement(
                        "div",
                        { className: "form__control-buttons" },
                        React.createElement(Input, { attributes: { type: "submit", value: "Отправить" } }),
                        React.createElement(Input, { attributes: { type: "reset", value: "Очистить" } })
                    )
                )
            );
        }
    }]);

    return Test;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_React$PureComponent) {
    _inherits(Calendar, _React$PureComponent);

    function Calendar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Calendar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        }, _this.handleInput = function (_ref2) {
            var _ref2$target = _ref2.target,
                name = _ref2$target.name,
                value = _ref2$target.value;
            return _this.setState(_defineProperty({}, name, value), function () {
                return _this.setState({ calendar: _this.refresh() });
            });
        }, _this.handleClick = function (day) {
            return _this.props.handleClick(formatDateShort(new Date(_this.state.year, _this.state.month, day)));
        }, _this.handleNeighbors = function (date) {
            return _this.setState({ month: date.getMonth(), year: date.getFullYear() });
        }, _this.refresh = function () {
            var calendar = [];
            var date = new Date(_this.state.year, _this.state.month, 1);
            var firstDay = date.getDayRu();
            var daysInPreviousMonth = date.getNeighborsMonth(true).daysInMonth() - firstDay + 1;
            var daysInNextMonth = 1;

            var _loop = function _loop(i) {
                var currentMonth = i >= firstDay && i < firstDay + date.daysInMonth();
                var holiday = (i + 1) % 7 === 0;
                calendar.push(React.createElement(
                    "div",
                    { className: "Calendar-DayBlock background-white " + (holiday ? "" + (currentMonth ? "border-red" : "border-red-not-active") : "" + (currentMonth ? "border-black" : "border-black-not-active")) },
                    !currentMonth ? React.createElement(
                        "div",
                        { className: "Calendar-DayLink-Hover_not-active" },
                        React.createElement(
                            "p",
                            { className: "Calendar-DayLink_not-active",
                                onClick: function onClick() {
                                    var data = i < firstDay ? date.getNeighborsMonth(true) : date.getNeighborsMonth(false);
                                    _this.handleNeighbors(data);
                                }
                            },
                            i < firstDay ? "" + daysInPreviousMonth++ : "" + daysInNextMonth++
                        )
                    ) : React.createElement(
                        "div",
                        { className: "Calendar-DayLink-Hover" },
                        React.createElement(
                            "p",
                            { className: "Calendar-DayLink", onClick: function onClick() {
                                    return _this.handleClick(i - firstDay + 1);
                                } },
                            i - firstDay + 1
                        )
                    )
                ));
            };

            for (var i = 0; i < 42; i++) {
                _loop(i);
            }
            return calendar;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Calendar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                weekNames = _props.weekNames,
                monthNames = _props.monthNames,
                years = _props.years;

            return React.createElement(
                "div",
                { className: "Calendar" },
                React.createElement(
                    "div",
                    { className: "Calendar-DateHandler" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "select",
                            { className: "Calendar-DateHandler-Select", name: 'month', value: this.state.month, onChange: this.handleInput },
                            monthNames.map(function (month, index) {
                                return React.createElement(
                                    "option",
                                    { key: index, value: index },
                                    month
                                );
                            })
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "select",
                            { className: "Calendar-DateHandler-Select", name: 'year', value: this.state.year, onChange: this.handleInput },
                            years.map(function (year) {
                                return React.createElement(
                                    "option",
                                    { key: year, value: year },
                                    year
                                );
                            })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "Calendar-Close", onClick: this.props.closeHandler },
                        "\xD7"
                    )
                ),
                weekNames.map(function (weekName, index) {
                    var borderClass = (index + 1) % 7 === 0 ? "border-red" : "border-black";
                    return React.createElement(
                        "div",
                        { className: "Calendar-DayBlock background-white " + borderClass, key: weekName },
                        React.createElement(
                            "p",
                            { className: "Calendar-DayLink" },
                            weekName
                        )
                    );
                }),
                React.Children.map(this.refresh(), function (day, index) {
                    return React.cloneElement(day, { key: index });
                })
            );
        }
    }]);

    return Calendar;
}(React.PureComponent);

Date.prototype.daysInMonth = function () {
    return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

Date.prototype.getDayRu = function () {
    var day = this.getDay();
    return day == 0 ? 6 : day - 1;
};

Date.prototype.getNeighborsMonth = function (previous) {
    var month = this.getMonth();
    var year = this.getFullYear();
    if (previous) {
        if (month === 0) {
            month = 11;
            year -= 1;
        } else {
            month -= 1;
        }
    } else {
        if (month === 11) {
            month = 0;
            year = year === new Date().getFullYear() ? year : year + 1;
        } else {
            month += 1;
        }
    }
    return new Date(year, month, 1);
};
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Clock);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Clock.__proto__ || Object.getPrototypeOf(Clock)).call.apply(_ref, [this].concat(args))), _this), _this.state = { date: new Date() }, _this.componentDidMount = function () {
            return _this.timerID = setInterval(function () {
                return _this.setState({ date: new Date() });
            }, 1000);
        }, _this.componentWillUnmount = function () {
            return clearInterval(_this.timerID);
        }, _this.render = function () {
            return React.createElement(
                "p",
                null,
                formatDate(_this.state.date)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Clock;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$PureComponent) {
    _inherits(Dropdown, _React$PureComponent);

    function Dropdown() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dropdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: false
        }, _this.mouseHandler = function () {
            return _this.setState({ show: !_this.state.show });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                name = _props.name;

            var attribute = {
                href: "#",
                className: ""
            };
            return React.createElement(
                "div",
                {
                    className: 'dropdown-menu positionAbsolute hover',
                    style: StyleSheet.HeaderLink,
                    onMouseEnter: this.mouseHandler,
                    onMouseLeave: this.mouseHandler
                },
                React.createElement(
                    "div",
                    null,
                    name
                ),
                this.state.show && children
            );
        }
    }]);

    return Dropdown;
}(React.PureComponent);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MBox = function (_React$Component) {
    _inherits(MBox, _React$Component);

    function MBox() {
        _classCallCheck(this, MBox);

        return _possibleConstructorReturn(this, (MBox.__proto__ || Object.getPrototypeOf(MBox)).apply(this, arguments));
    }

    _createClass(MBox, [{
        key: "render",
        value: function render() {
            var messages = this.props.messages && this.props.messages.map(function (message, index) {
                return React.createElement(
                    "div",
                    { key: index },
                    message
                );
            });
            return React.createElement(
                "div",
                null,
                messages
            );
        }
    }]);

    return MBox;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_React$Component) {
    _inherits(Popup, _React$Component);

    function Popup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Popup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            popup: false
        }, _this.render = function () {
            return React.createElement("noscript", null);
        }, _this.handleClose = function () {
            if (_this.state.popup) {
                ReactDOM.unmountComponentAtNode(_this.state.popup);
                document.body.removeChild(_this.state.popup);
            }
            _this.setState({ popup: false });
            _this.props.handleClose();
        }, _this.renderPopup = function () {

            if (!_this.props.show) return;

            if (!_this.state.popup) {
                _this.state.popup = document.createElement("div");
                document.body.appendChild(_this.state.popup);
            }

            console.log(_this.state.popup);
            ReactDOM.render(React.createElement(
                "div",
                { className: "popup-overlay", onClick: _this.handleClose, style: { position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', backgroundColor: '#1111117c' } },
                React.createElement(
                    "div",
                    { className: "popup-content", style: { position: 'absolute', left: '25%', right: '25%', top: '25%', bottom: '25%', margin: 'auto', width: 'auto', height: 'auto' } },
                    _this.props.children
                )
            ), _this.state.popup);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Popup, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.renderPopup();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.renderPopup();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (!this.state.popup) return;
            ReactDOM.unmountComponentAtNode(this.state.popup);
            document.body.removeChild(this.state.popup);
        }
    }]);

    return Popup;
}(React.Component);
StyleSheet = {};

StyleSheet.HeaderLink = {
    "display": "block",
    "color": "white",
    "textAlign": "center",
    "padding": "16px",
    "textDecoration": "none"
};
StyleSheet.HeaderList = {
    WebkitPaddingStart: 0,
    width: "900px",
    listStyleType: "none",
    margin: "0 auto",
    overflow: "hidden",
    backgroundColor: "#333333"
};
