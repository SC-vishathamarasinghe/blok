export const alert = {
  name: "alert",
  defaultComponent: "alert",
  usage: [
    `import {\n  Alert,\n  AlertDescription,\n  AlertTitle,\n} from "@/components/ui/alert"`,
    `<Alert>\n  <AlertTitle>Alert</AlertTitle>\n  <AlertDescription>\n    This is an example of an alert with a title and description.\n  </AlertDescription>\n</Alert>`
  ],
  components: {
    Primary: "alert-primary",
    Success: "alert-success",
    Danger: "alert-danger",
    Warning: "alert-warning",
    Closable: "alert-closable",
    "With Button Link": "alert-button-link",
  },
};
