import reactRefresh from "@vitejs/plugin-react-refresh";
import WindiCSS from "vite-plugin-windicss"
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    reactRefresh(),
    ssr(),
    WindiCSS({
      scan: {
        // By default only `src/` is scanned
        dirs: ["pages"],
        // You only have to specify the file extensions you actually use.
        fileExtensions: ["vue", "js", "ts", "jsx", "tsx", "html", "pug"]
      }
    })
  ],
};

export default config;
