import React from 'react';
import InputField from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outlined', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input Label',
  placeholder: 'Enter text...',
  helperText: 'Helper text goes here.',
  value: '',
  variant: 'outlined',
  size: 'md',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  invalid: true,
  errorMessage: 'This field is required.',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const WithClearButton = Template.bind({});
WithClearButton.args = {
  ...Default.args,
  clearable: true,
};

export const PasswordToggle = Template.bind({});
PasswordToggle.args = {
  ...Default.args,
  type: 'password',
  togglePassword: true,
};