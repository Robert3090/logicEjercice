function toArray(obj) {
    let keys = Object.keys(obj);
    let values =Object.values(obj);
    let array = [];

    for(let i = 0; i <= keys.length-1 ; i++){
        let entries = [];

        entries.push(keys[i]);
        entries.push(values[i]);
        
        array.push(entries);
    }

    return array;
}

module.exports = toArray;