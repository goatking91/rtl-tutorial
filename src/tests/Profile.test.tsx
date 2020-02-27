import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../components/Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="goatking91" name="염승민" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<Profile username="goatking91" name="염승민" />);
    utils.getByText('goatking91'); // velopert 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(염승민)'); // (염승민) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/염/); // 정규식 /염/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
