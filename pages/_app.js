import { CSSReset } from "../src/components/CSSReset";

export default function MyApp({ Component, pageProps }) {
    console.log("Oláa");
    return (
        <>
        <CSSReset />
        <Component {...pageProps} />
        </>
    )
  }