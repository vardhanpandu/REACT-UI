import React from 'react';
import InputField from './components/InputField';
import DataTable from './components/DataTable';

const App: React.FC = () => {
  const sampleData = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
  ];

  const columns = [
    { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">React UI Components</h1>
      <InputField
        label="Search"
        placeholder="Type to search..."
        helperText="Enter a name to search"
        variant="outlined"
        size="md"
      />
      <DataTable
        data={sampleData}
        columns={columns}
        loading={false}
        selectable={true}
        onRowSelect={(selectedRows) => console.log(selectedRows)}
      />
    </div>
  );
};

export default App;