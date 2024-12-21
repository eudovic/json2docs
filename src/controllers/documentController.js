import { replaceVariables } from '../services/replaceVariables.js';
import { handleLoops } from '../services/handleLoops.js';
import he from 'he';
import { validateInputs } from '../validations/inputValidation.js';

const { decode } = he;


const generateDocument = (req, res) => {
    try {
        const { template, data, map } = req.body;
        
        validateInputs(template, data, map);     

        const decodedTemplate = decode(template);
        
        const result = handleLoops(decodedTemplate, data, map);    
        
        const finalResult = replaceVariables(result, data, map);

        return res.status(200).json({ success: true, finalResult });
    } catch (error) {       
        return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
};



export { generateDocument };
