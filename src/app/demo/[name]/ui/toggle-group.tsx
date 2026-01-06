export const toggleGroup = {
  name: "toggle-group",
  defaultComponent: "toggle-group-square",
  usage: [
    `import {\n ToggleGroup,\n ToggleGroupItem\n} from "@/components/ui/toggle-group";`,
    `<ToggleGroup>\n <ToggleGroupItem>\n  <Icon path={mdiFormatBold} />\n </ToggleGroupItem>\n</ToggleGroup>`,
  ],
  components: {
    "Square Variant": "toggle-group-square",
    "Rounded Variant": "toggle-group-rounded",
  },
};
