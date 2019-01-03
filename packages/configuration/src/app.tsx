import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { H1 } from 'components';

const div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(<H1>Hello World</H1>, div);
