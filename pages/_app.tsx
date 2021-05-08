import { AppProps } from "next/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Styles
import "../styles/globals.css";

library.add(fab);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
