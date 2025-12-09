"use client";

import * as React from "react";
import { useDroppable, type UniqueIdentifier } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

export interface DroppableProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {
  /** Unique identifier for this droppable area */
  id: UniqueIdentifier;
  /** Whether dropping is disabled */
  disabled?: boolean;
  /** Optional data to pass along with drop events */
  data?: Record<string, unknown>;
  /** Element type to render (default: div) */
  as?: React.ElementType;
  children: React.ReactNode;
}

export function Droppable({
  id,
  disabled = false,
  data,
  children,
  className,
  as: Component = "div",
  ...props
}: DroppableProps) {
  const { setNodeRef, isOver, active } = useDroppable({
    id,
    disabled,
    data,
  });

  return (
    <Component
      ref={setNodeRef}
      data-droppable-id={id}
      data-drop-target={isOver}
      data-has-active={!!active}
      className={cn(
        "transition-all duration-200",
        isOver && "ring-2 ring-primary ring-offset-2",
        disabled && "opacity-60",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Re-export the hook for custom implementations
export { useDroppable } from "@dnd-kit/core";
