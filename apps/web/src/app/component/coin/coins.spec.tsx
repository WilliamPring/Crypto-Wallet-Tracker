import { render } from '@testing-library/react';

import Coins from './coins';

describe('Coins', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Coins />);
    expect(baseElement).toBeTruthy();
  });
});
