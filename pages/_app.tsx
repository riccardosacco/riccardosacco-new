import { AppProps } from "next/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// Styles
import "../styles/globals.css";

library.add(fab, fas, far);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
