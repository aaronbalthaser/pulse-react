import * as React from 'react';

type BaseProps = Pick<React.HTMLAttributes<any>, 'children'> & React.RefAttributes<any>
export type ElementTypeProps = Readonly<BaseProps & {
  from: string;
}>
