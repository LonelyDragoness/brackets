module.exports = function check(str, bracketsConfig) {
    let buffer = [];
    for (let j = 0; j < bracketsConfig.length; j++) {
        buffer = bracketsConfig[j].join('');
        while (str.includes(buffer)) {
            str = str.replace(buffer, '');
            j = -1;
        }
    }
    return !str.length
};
