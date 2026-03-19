"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Icon as UiIcon } from "@/components/ui/icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@/lib/icon";
import {
  mdiDotsHorizontal,
  mdiInformationOutline,
  mdiPencilOutline,
} from "@mdi/js";

const rows = [
  {
    id: 1,
    title: "Project Alpha",
    col1: "Text",
    col2: "Text",
    label: "In progress",
    userInitials: "JD",
    dateTime: "Jul 01, 2024 10:37 PM",
  },
  {
    id: 2,
    title: "Project Beta",
    col1: "Text",
    col2: "Text",
    label: "Complete",
    userInitials: "MK",
    dateTime: "Jun 28, 2024 3:20 PM",
  },
  {
    id: 3,
    title: "Project Gamma",
    col1: "Text",
    col2: "Text",
    label: "Draft",
    userInitials: "SA",
    dateTime: "Jun 25, 2024 11:00 AM",
  },
];

export default function TableLgDemo() {
  return (
    <Table size="lg">
      <TableHeader>
        <TableRow>
          <TableHead>Label</TableHead>
          <TableHead>Label</TableHead>
          <TableHead>Label</TableHead>
          <TableHead>Label</TableHead>
          <TableHead>Label</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <span className="flex items-center gap-2">
                <UiIcon
                  path={mdiInformationOutline}
                  variant="subtle"
                  colorScheme="neutral"
                  size="sm"
                  className="shrink-0"
                />
                <span className="font-semibold">{row.title}</span>
              </span>
            </TableCell>
            <TableCell>{row.col1}</TableCell>
            <TableCell>{row.col2}</TableCell>
            <TableCell>
              <Badge colorScheme="neutral" size="md">
                {row.label}
              </Badge>
            </TableCell>
            <TableCell>
              <span className="flex items-center gap-2">
                <Avatar className="size-8 bg-teal-600 text-white">
                  <AvatarFallback className="bg-teal-600 text-white text-sm">
                    {row.userInitials}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm">{row.dateTime}</span>
              </span>
            </TableCell>
            <TableCell className="text-right">
              <span className="inline-flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Edit"
                  className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <Icon path={mdiPencilOutline} size={1} className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="More actions"
                  className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <Icon path={mdiDotsHorizontal} size={1} className="size-4" />
                </button>
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
