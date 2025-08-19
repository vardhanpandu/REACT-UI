import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe('InputField Component', () => {
  const setup = (props = {}) => {
    render(<InputField {...props} />);
  };

  test('renders with label and placeholder', () => {
    setup({ label: 'Test Label', placeholder: 'Enter text' });
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('displays helper text', () => {
    setup({ helperText: 'This is helper text' });
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  test('shows error message when invalid', () => {
    setup({ errorMessage: 'This field is required', invalid: true });
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  test('is disabled when disabled prop is true', () => {
    setup({ disabled: true });
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  test('calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    setup({ onChange: handleChange });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'New Value' } }));
  });

  test('renders with different variants and sizes', () => {
    setup({ variant: 'outlined', size: 'lg' });
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('input-outlined input-lg'); // Adjust class names based on your Tailwind setup
  });

  test('renders loading state', () => {
    setup({ loading: true });
    expect(screen.getByText('Loading...')).toBeInTheDocument(); // Adjust based on your loading implementation
  });

  test('renders clear button when clearable', () => {
    setup({ clearable: true });
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument(); // Adjust based on your clear button implementation
  });
});