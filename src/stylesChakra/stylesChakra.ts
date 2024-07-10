import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { tabsTheme } from "./tabsStyles";
// Definir la configuración del tema
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Extender el tema
const theme = extendTheme({
  config,
  components: {
    Tabs: tabsTheme,
}
});
export default theme;
