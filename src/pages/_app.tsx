import "@/styles/globals.css";
import "@/styles/tailwind.css";
import "@/styles/animate.css";
// import "react-tabs/style/react-tabs.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
