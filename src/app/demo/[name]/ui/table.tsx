export const table = {
  name: "table",
  preview: {
    defaultComponent: "table",
  },
  usage: {
    usage: [
      `import {\n Table,\n TableHeader,\n TableBody,\n TableRow,\n TableCell,\n TableHead\n} from "@/components/ui/table";\nimport { Checkbox } from "@/components/ui/checkbox";`,
      `<Table size="md"> {/* size: "sm" | "md" (default) | "lg" — Sticky: maxHeight={320} stickyHeader — Pinned: pinnedColumnsCount={2}, use pinned on first column(s) — Max: maxWidth, maxHeight */}\n <TableHeader>\n  <TableRow>\n   <TableHead checkboxColumn><Checkbox aria-label="Select all" /></TableHead>\n   <TableHead>Name</TableHead>\n   <TableHead>Status</TableHead>\n  </TableRow>\n </TableHeader>\n <TableBody>\n  <TableRow>\n   <TableCell checkboxColumn><Checkbox aria-label="Select row" /></TableCell>\n   <TableCell className="font-medium">Item</TableCell>\n   <TableCell>Active</TableCell>\n  </TableRow>\n </TableBody>\n</Table>`,
    ],
  },
  components: {
    Small: { component: "table-sm" },
    Large: { component: "table-lg" },
    "Sticky header & scroll": { component: "table-sticky-scroll" },
    "Scroll & pin": { component: "table-pinned" },
  },
};
