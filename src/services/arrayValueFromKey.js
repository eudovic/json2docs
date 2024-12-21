export const arrayValueFromKey = (keyString, data) => {
    const keys = keyString.split('.');
    let value = data;

    for (const key of keys) {
        if (value && typeof value === 'object') {
            value = value[key];
        } else {
            return null;
        }
    }

    return value;
};
