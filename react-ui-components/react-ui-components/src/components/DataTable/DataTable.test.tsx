import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from './DataTable';

const mockData = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
];

const mockColumns = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: false },
];

describe('DataTable', () => {
  it('renders without crashing', () => {
    render(<DataTable data={mockData} columns={mockColumns} />);
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('displays the correct number of rows', () => {
    render(<DataTable data={mockData} columns={mockColumns} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockData.length + 1); // +1 for header row
  });

  it('handles row selection', () => {
    const onRowSelect = jest.fn();
    render(<DataTable data={mockData} columns={mockColumns} selectable onRowSelect={onRowSelect} />);
    
    const firstRow = screen.getByText('John Doe').closest('tr');
    fireEvent.click(firstRow);
    
    expect(onRowSelect).toHaveBeenCalledWith([{ id: 1, name: 'John Doe', age: 28 }]);
  });

  it('shows loading state', () => {
    render(<DataTable data={[]} columns={mockColumns} loading />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('shows empty state when no data is provided', () => {
    render(<DataTable data={[]} columns={mockColumns} />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});