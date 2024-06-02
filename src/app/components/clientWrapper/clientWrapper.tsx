'use client';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import Sidebar from '../sideBar/sideBar';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <Sidebar />
      <div>{children}</div>
    </Provider>
  );
};

export default ClientWrapper;
