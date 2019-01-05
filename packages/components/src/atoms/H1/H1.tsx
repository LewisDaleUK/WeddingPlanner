import * as React from 'react';
import { IH1Props } from './types';

import './H1.scss';

export const H1: React.SFC<IH1Props> = ({ children }) => (
  <h1 className="h1">{children}</h1>
);
