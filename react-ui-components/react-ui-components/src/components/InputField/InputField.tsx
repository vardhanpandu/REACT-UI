import React, { useState } from 'react';

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  clearable?: boolean;
  passwordToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'filled',
  size = 'md',
  clearable = false,
  passwordToggle = false,
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isPasswordVisible, setIsPasswordVisible] = useState(!passwordToggle);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const handleClear = () => {
    setInputValue('');
    onChange && onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputClasses = `input ${variant} ${size} ${disabled ? 'disabled' : ''} ${invalid ? 'invalid' : ''}`;

  return (
    <div className="input-field">
      {label && <label className="label">{label}</label>}
      <div className="input-wrapper">
        <input
          type={passwordToggle && !isPasswordVisible ? 'password' : 'text'}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={invalid}
          aria-describedby={helperText ? 'helper-text' : undefined}
        />
        {clearable && inputValue && (
          <button type="button" onClick={handleClear} className="clear-button">
            Clear
          </button>
        )}
        {passwordToggle && (
          <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
            {isPasswordVisible ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {helperText && <p id="helper-text" className="helper-text">{helperText}</p>}
      {invalid && errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default InputField;