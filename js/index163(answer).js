const add = function() {
    if (arguments.length > 0) {
        let result = 0;
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'number') continue;
            result += arguments[i];
        }
        return result;
    }
    return 0;
}

console.log(add(1,2,3) === 6);
console.log(add(1,3,'test') === 4);

