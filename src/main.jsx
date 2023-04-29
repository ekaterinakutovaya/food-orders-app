import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import store from "./store/store";
import App from './App';
import './index.scss';

let persistor = persistStore(store);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App/>
        
    </PersistGate>
  </Provider>
  </QueryClientProvider>
  // </React.StrictMode>,
)
