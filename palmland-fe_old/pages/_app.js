import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/_base.scss";
import Models from "@/components/Model/Models";
import Header from "@/components/CommonComponents/Header";
import Footer from "@/components/CommonComponents/Footer";
import Providers from "./Providers";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Providers>
        <Header />
        <Models />
        <Component {...pageProps} />
        <Footer />
      </Providers>
    </>
  );
}
