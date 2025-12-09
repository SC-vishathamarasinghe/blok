"use client";

import * as React from "react";
import {
  DndContext as DndKitContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type CollisionDetection,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  type SortingStrategy,
} from "@dnd-kit/sortable";

export interface DndContextProps {
  children: React.ReactNode;
  onDragStart?: (event: DragStartEvent) => void;
  onDragMove?: (event: DragMoveEvent) => void;
  onDragOver?: (event: DragOverEvent) => void;
  onDragEnd?: (event: DragEndEvent) => void;
  onDragCancel?: () => void;
  collisionDetection?: CollisionDetection;
}

export function DndContext({
  children,
  onDragStart,
  onDragMove,
  onDragOver,
  onDragEnd,
  onDragCancel,
  collisionDetection = closestCenter,
}: DndContextProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndKitContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={onDragStart}
      onDragMove={onDragMove}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
    >
      {children}
    </DndKitContext>
  );
}

export interface SortableContainerProps {
  children: React.ReactNode;
  items: UniqueIdentifier[];
  strategy?: "vertical" | "horizontal" | "grid";
}

export function SortableContainer({
  children,
  items,
  strategy = "vertical",
}: SortableContainerProps) {
  const sortingStrategy: SortingStrategy =
    strategy === "horizontal"
      ? horizontalListSortingStrategy
      : strategy === "grid"
        ? rectSortingStrategy
        : verticalListSortingStrategy;

  return (
    <SortableContext items={items} strategy={sortingStrategy}>
      {children}
    </SortableContext>
  );
}

// Re-export utilities for convenience
export { arrayMove } from "@dnd-kit/sortable";
export { closestCenter, closestCorners, rectIntersection, pointerWithin } from "@dnd-kit/core";
export type { DragStartEvent, DragEndEvent, DragOverEvent, DragMoveEvent, UniqueIdentifier };

