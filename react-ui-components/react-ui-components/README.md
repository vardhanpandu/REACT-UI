# React UI Components

This project contains a set of reusable UI components built with React, TypeScript, and styled using TailwindCSS. The components are designed to be flexible, accessible, and easy to integrate into any React application.

## Components

### InputField

A flexible input component that supports various states and styles.

#### Features:
- Text input with label, placeholder, helper text, and error message
- States: disabled, invalid, loading
- Variants: filled, outlined, ghost
- Sizes: small, medium, large
- Optional features: clear button, password toggle
- Supports light and dark themes

#### Usage Example:
```tsx
<InputField
  value={value}
  onChange={handleChange}
  label="Username"
  placeholder="Enter your username"
  helperText="This will be your display name"
  errorMessage={error}
  disabled={false}
  invalid={!!error}
  variant="outlined"
  size="md"
/>
```

### DataTable

A data table component that displays tabular data with sorting and selection capabilities.

#### Features:
- Display tabular data
- Column sorting
- Row selection (single/multiple)
- Loading state
- Empty state

#### Usage Example:
```tsx
<DataTable
  data={data}
  columns={columns}
  loading={isLoading}
  selectable={true}
  onRowSelect={handleRowSelect}
/>
```

## Getting Started

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-ui-components
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```

### Running Storybook

To view the components in Storybook, run:
```
npm run storybook
```

### Running Tests

To run the unit tests, use:
```
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.