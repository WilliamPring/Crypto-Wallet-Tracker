import styles from './app.module.scss';
import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import React, { FC } from 'react';
import { Routing } from './Routing';
export const App: FC = () => (
  <>
    <Routing />
  </>
);

export default App;
