import { render } from '@testing-library/react';

import WhatschatUiComponents from './whatschat-ui-components';

describe('WhatschatUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhatschatUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
