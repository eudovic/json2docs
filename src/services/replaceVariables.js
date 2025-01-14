import { validateInputs } from "../validations/inputValidation.js";
import { arrayValueFromKey } from "./arrayValueFromKey.js";


const replaceVariables = (template, data, map) => {
    validateInputs(template, data, map);

    const pattern = /<<([\w.]+)>>/g;
    const replaceMap = map?.replace;

    return template.replace(pattern, (match, keyString) => {
        if (!keyString) return match;
        
        if (replaceMap?.[keyString]) {
            return replaceVariables(replaceMap[keyString], data, false);
        }

        const value = arrayValueFromKey(keyString, data, map);
        return value === null ? '' : value;
    });
};

export { replaceVariables };
