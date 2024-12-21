import { arrayValueFromKey } from './arrayValueFromKey.js';
import { replaceVariables } from './replaceVariables.js';

const handleLoops = (template, data, map = false) => {
    const loopRegex = /<<\[start_loop\|([\w.]+)]>>([\s\S]*?)<<\[end_loop\|\1]>>/gs;

    return template.replace(loopRegex, (match, entity, content) => {
        const objectToLoop = arrayValueFromKey(entity, data);

        if (!objectToLoop || !Array.isArray(objectToLoop)) {
            return match;
        }

        return objectToLoop
            .map(item => {
                const processedContent = handleLoops(content, item, map);
                return replaceVariables(processedContent, item, map);
            })
            .join(''); 
    });
};

export { handleLoops };