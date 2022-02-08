import {AppState, AppStateStatus} from 'react-native';
import {QueryClient, focusManager, onlineManager, setLogger} from 'react-query';

const rootClientQuery = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      cacheTime: 3000,
      retry: true,
    },
  },
});

export default rootClientQuery