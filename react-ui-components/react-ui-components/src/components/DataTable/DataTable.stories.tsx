import React from 'react';
import { DataTable } from './DataTable';

export default {
  title: 'Components/DataTable',
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
  ],
  columns: [
    { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  ],
  loading: false,
  selectable: true,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  data: [],
  columns: [],
  loading: true,
  selectable: false,
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  data: [],
  columns: [
    { key: 'id', title: 'ID', dataIndex: 'id' },
    { key: 'name', title: 'Name', dataIndex: 'name' },
    { key: 'age', title: 'Age', dataIndex: 'age' },
  ],
  loading: false,
  selectable: false,
};