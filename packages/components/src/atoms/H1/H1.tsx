import * as React from 'react';
import { IH1Props } from './types';

export const H1: React.SFC<IH1Props> = ({ children }) => (
  <h1>{children}</h1>
);
