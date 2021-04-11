import React from 'react';
import { TableItem } from './types';

interface Props {
  items: TableItem[];
}

export const ResultsTable: React.FunctionComponent<Props> = (props: Props) => {
  const { items } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Login</th>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.login}
            className={item.login.startsWith('m') ? 'specialItem' : undefined}
          >
            <td>{item.login}</td>
            <td>{item.name}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
