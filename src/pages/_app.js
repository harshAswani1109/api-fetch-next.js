import "@/styles/globals.css";
import Header from "../../components/navbar";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
