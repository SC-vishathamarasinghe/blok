export const card = {
  name: "card",
  defaultComponent: "card",
  usage: [
    `import {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"`,
    `<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Card Content</p>\n  </CardContent>\n  <CardFooter>\n    <p>Card Footer</p>\n  </CardFooter>\n</Card>`
  ],
  components: {
    "Elevation": "card-elevation",
    "Style": "card-style",
    "Padding": "card-padding",
    "Styled Card": "card-styled",
  },
};
