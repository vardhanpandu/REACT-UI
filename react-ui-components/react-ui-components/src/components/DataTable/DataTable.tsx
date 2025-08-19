import React from 'react';

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

const DataTable = <T,>({ data, columns, loading, selectable, onRowSelect }: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = React.useState<T[]>([]);

  const handleRowClick = (row: T) => {
    if (selectable) {
      const isSelected = selectedRows.includes(row);
      const newSelectedRows = isSelected
        ? selectedRows.filter(selectedRow => selectedRow !== row)
        : [...selectedRows, row];

      setSelectedRows(newSelectedRows);
      onRowSelect && onRowSelect(newSelectedRows);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key} className="border border-gray-200 p-2">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            onClick={() => handleRowClick(row)}
            className={`cursor-pointer ${selectedRows.includes(row) ? 'bg-blue-100' : ''}`}
          >
            {columns.map(column => (
              <td key={column.key} className="border border-gray-200 p-2">
                {row[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;