// components/Providers.tsx
"use client"
import { Provider } from 'react-redux';
import store from '../store/store';

const StoreProviders = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProviders;

