import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    bg:"red",
    _selected: {
      bg:'#F9F9F9',
      border: '1px solid black',
      borderBottom:"none"
    },
  },
  tabpanel: {
    bg:"",
  },
  tablist: {
    bg:"white",
  },
});

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle });
