import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
