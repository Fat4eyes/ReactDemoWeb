required = message => value => value === undefined
    ? message || `Значение поля обязательно` 
    : {ok : value !== '', message : message || `Значение поля обязательно`}

maxLength = (maxLen, message) => value => value === undefined 
    ? message || `Значение поля должно содержать более ${maxLen}`
    : { ok : value.length > maxLen, message : message || `Значение поля должно содержать более ${maxLen}` }

minLength = (minLen, message) => value => value === undefined 
    ? message || `Значение поля должно содержать менее ${minLen}`
    : { ok : value.length < minLen, message : message || `Значение поля должно содержать менее ${minLen}` }

oneOf = (its, message) => value => value === undefined
    ? message || `Значени поля может быть одним из: ${its.map(element => ` ${element}`)}`
    : { ok : its.indexOf(value) !== -1, message : message || `Значени поля может быть одним из: ${its.map(element => ` ${element}`)}`}

equals = (it, message) => value => value === undefined
    ? message || `Значение поля должно совпадать с: ${it}`
    : {  ok : value == it, message : message || `Значение поля должно совпадать с: ${it}` }

getWords = text => text.replace(/\r\n?|\n/g, ' ').replace(/ {2,}/g, ' ').replace(/^ /, '').replace(/ $/, '').split(" ")

wordsCountLess = (count, message) => value => value === undefined
    ? message || `Колличество слов в поле должно быть меньше: ${count}` 
    : { ok : getWords(value).length < count, message : message || `Колличество слов в поле должно быть меньше: ${count}` }

wordsCountMore = (count, message) => value => value === undefined
    ? message || `Колличество слов в поле должно быть меньше: ${count}` 
    : { ok : getWords(value).length > count, message : message || `Колличество слов в поле должно быть меньше: ${count}` }      

pattern = (regxp, message) => value => value === undefined
    ? message || `Значение поля должно соответствовать регулярному выражению: ${regxp}`
    : { ok : regxp.test(String(value)), message : message || `Значение поля должно соответствовать регулярному выражению: ${regxp}` }


checkRules = (rules, value) => {
    if (rules.length === 0) {
        return {
            ok : true
        };
    }

    let faultRulesMessages = [];
    let ok = true;

    for(let i = 0; i < rules.length; i++)
    {
        let ruleResult = rules[i](value);
        if(!ruleResult.ok){
            ok = ruleResult.ok;
            faultRulesMessages.push(ruleResult.message)
        }
    }

    if (ok) {
        return {
            ok : true
        };
    }

    return {
        ok : false,
        messages : faultRulesMessages
    };
}