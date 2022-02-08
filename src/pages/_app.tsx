import "../../styles/globals.css";

import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import rootClientQuery from "../config/reactClientQuery";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={rootClientQuery}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
