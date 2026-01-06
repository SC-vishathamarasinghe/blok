export const calendar = {
  name: "calendar",
    defaultComponent: "calendar",
  usage: [
    `import { Calendar } from "@/components/ui/calendar";`,
    `const [date, setDate] = React.useState<Date | undefined>(new Date())\n\nreturn (\n  <Calendar\n    mode="single"\n    selected={date}\n    onSelect={setDate}\n    className="rounded-lg border"\n  />\n)`,
  ],
  components: {
    "Single": "calendar",
    "Two Months": "calendar-multiple",
  },
};
