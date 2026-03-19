"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useMemo, useState } from "react";

const rows = [
  {
    id: 1,
    title: "Product search",
    col1: "Text",
    col2: "Text",
    col3: "Text",
    label: "Label",
    userInitials: "SA",
    dateTime: "Jul 01, 2024 10:37 PM",
  },
  {
    id: 2,
    title: "Pricing",
    col1: "Text",
    col2: "Text",
    col3: "Text",
    label: "Label",
    userInitials: "SA",
    dateTime: "Jul 01, 2024 10:37 PM",
  },
  {
    id: 3,
    title: "Features",
    col1: "Text",
    col2: "Text",
    col3: "Text",
    label: "Label",
    userInitials: "SA",
    dateTime: "Jul 01, 2024 10:37 PM",
  },
  {
    id: 4,
    title: "Support",
    col1: "Text",
    col2: "Text",
    col3: "Text",
    label: "Label",
    userInitials: "SA",
    dateTime: "Jul 01, 2024 10:37 PM",
  },
];

export default function TableDemo() {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const allSelected = useMemo(
    () => rows.length > 0 && selectedIds.size === rows.length,
    [selectedIds.size],
  );
  const someSelected = selectedIds.size > 0;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(rows.map((r) => r.id)));
    }
  };

  const toggleRow = (id: number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Table size="md">
      <TableHeader>
        <TableRow>
          <TableHead checkboxColumn>
            <Checkbox
              aria-label="Select all"
              checked={
                allSelected ? true : someSelected ? "indeterminate" : false
              }
              onCheckedChange={toggleAll}
            />
          </TableHead>
          <TableHead>Label</TableHead>
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
          <TableRow
            key={row.id}
            data-state={selectedIds.has(row.id) ? "selected" : undefined}
          >
            <TableCell checkboxColumn>
              <Checkbox
                aria-label={`Select ${row.title}`}
                checked={selectedIds.has(row.id)}
                onCheckedChange={() => toggleRow(row.id)}
              />
            </TableCell>
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
