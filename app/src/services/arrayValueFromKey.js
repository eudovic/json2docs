export const arrayValueFromKey = (keyString, data) => {
    const keys = keyString.split('.');
    let value = data;
    let lastKey =  keys[keys.length - 1] ?? '';
    
    for (const key of keys) {
        if (value && typeof value === 'object') {
            value = value[key];
        } else {
            return data[lastKey] ?? '';
        }
    }

    return value;
};
