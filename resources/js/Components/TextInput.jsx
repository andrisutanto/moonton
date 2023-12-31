import { ref, useEffect, useRef } from 'react';
import PropTypes from "prop-types";

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "number", "email", "file", "password"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
}

export default function TextInput({
    type = 'text', 
    name,
    value,
    message,
    defaultValue, 
    className, 
    variant = 'primary',
    autoComplete,
    required,
    isFocused, 
    onChange,
    placeholder,
    isError,
    ...props 
    }) 
    
    {
        const input = useRef();
    
        useEffect(() => {
            if (isFocused) {
                input.current.focus();
            }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => onChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
};
