import "@/styles/globals.css";
import { Inter, Lora, Lalezar } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lora = Lora({ subsets: ["latin"] });
export const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
