import DOMPurify from "dompurify";

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const sanitizeName = (name) => {
    return name.replace(/[^a-zA-Z0-9 \-'.]/g, '');
};

export const sanitizeEmail = (email) => {
    return email.replace(/[^a-zA-Z0-9@._-]/g, '');
};

export const sanitizeMessage = (message) => {
    return DOMPurify.sanitize(message);
};

export const validateForm = (form) => {
    if (form.name === '') {
        return {
            type: 'field',
            field: 'name',
            message: 'Please specify your name.',
            isValid: false
        };
    } else if (form.email === '') {
        return {
            type: 'field',
            field: 'email',
            message: 'Please specify your email.',
            isValid: false
        };
    } else if (validateEmail(form.email) === false) {
        return {
            type: 'field',
            field: 'email',
            message: 'Please specify a valid email.',
            isValid: false
        };
    } else if (form.message === '') {
        return {
            type: 'field',
            field: 'message',
            message: 'Please specify your message.',
            isValid: false
        };
    }
    return {
        type: '',
        field: '',
        message: '',
        isValid: true
    };
}