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
    title: "Product A",
    col1: "Data 1",
    col2: "Data 2",
    col3: "Data 3",
    label: "Label",
    userInitials: "SA",
    dateTime: "Jul 01, 2024 10:37 PM",
  },
  {
    id: 2,
    title: "Product B",
    col1: "Data 1",
    col2: "Data 2",
    col3: "Data 3",
    label: "Label",
    userInitials: "JD",
    dateTime: "Jun 30, 2024 3:20 PM",
  },
  {
    id: 3,
    title: "Product C",
    col1: "Data 1",
    col2: "Data 2",
    col3: "Data 3",
    label: "Label",
    userInitials: "MK",
    dateTime: "Jun 29, 2024 11:00 AM",
  },
];

export default function TablePinnedDemo() {
  return (
    <Table size="md" maxWidth={560} pinnedColumnsCount={2}>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[140px]" pinned>
            Label
          </TableHead>
          <TableHead className="min-w-[80px] sticky left-[140px] z-20 bg-body-bg">
            Label
          </TableHead>
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
            <TableCell className="min-w-[140px] font-semibold" pinned>
              <span className="flex items-center gap-2">
                <UiIcon
                  path={mdiInformationOutline}
                  variant="subtle"
                  colorScheme="neutral"
                  size="sm"
                  className="shrink-0"
                />
                {row.title}
              </span>
            </TableCell>
            <TableCell className="min-w-[80px] sticky left-[140px] z-20 bg-body-bg">
              {row.col1}
            </TableCell>
            <TableCell>{row.col2}</TableCell>
            <TableCell>{row.col3}</TableCell>
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
