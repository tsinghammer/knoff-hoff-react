import React from 'react';
import { TableItem } from './types';

interface Props {
  onClick: (items: TableItem[]) => void;
}

export const ButtonBar: React.FunctionComponent<Props> = (props: Props) => {
  const onButtonClick = async () => {
    const response = await fetch('https://api.github.com/users/tsinghammer');
    const responseContent = await response.json();
    const items: TableItem[] = [
      {
        ...responseContent,
      },
    ];

    props.onClick(items);
  };

  return <input type="button" value="Button" onClick={onButtonClick} />;
};
