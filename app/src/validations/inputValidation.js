const validateInputs = (template, data, map) => {
     if (typeof template !== 'string') {
        const error = new Error('Template must be a string.');
        error.statusCode = 400;
        throw error;
    }
    if (typeof data !== 'object' || data === null) {
        const error = new Error('Data must be a non-null object.');
        error.statusCode = 400;
        throw error;
    }
    if (map && typeof map !== 'object') {
        const error = new Error('Map must be an object if provided.');
        error.statusCode = 400;
        throw error;
    }
};

export { validateInputs };