export const textarea = {
  name: "textarea",
  defaultComponent: "textarea",
  usage: [
    `import { Textarea } from "@/components/ui/textarea";`,
    `<Textarea />`,
  ],
  components: {
    // Invalid state
    Invalid: "textarea-invalid",
    "With Label": "textarea-with-label",
    "With Label and Description": "textarea-with-label-and-description",
    Disabled: "textarea-disabled",
    Small: "textarea-small",
    Large: "textarea-large",
    "With Default Value": "textarea-with-default-value",
  },
};
