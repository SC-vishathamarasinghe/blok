import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export interface StackNavigationItem {
  name: string;
  path: string;
  icon: ReactNode;
  badge?: ReactNode;
  className?: string;
}

export interface StackNavigationDivider {
  type: "divider";
  className?: string;
}

export type StackNavigationElement = StackNavigationItem | StackNavigationDivider;

export interface StackNavigationProps {
  items: StackNavigationElement[];
  renderItem?: (item: StackNavigationItem) => ReactNode;
  renderDivider?: (divider: StackNavigationDivider, index: number) => ReactNode;
  className?: string;
  navClassName?: string;
  width?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

function DefaultNavItem({ item }: { item: StackNavigationItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center overflow-hidden",
        "w-14 h-14 min-w-14 min-h-14",
        "p-1.5 gap-1",
        "rounded-md transition-colors",
        "text-md text-neutral-fg font-normal",
        "hover:bg-sidebar-accent cursor-pointer",
        "relative opacity-100",
        isActive && "bg-primary-bg text-primary-fg hover:bg-primary-bg hover:text-primary-fg font-semibold",
        item.className
      )}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div aria-hidden="true" className="shrink-0 w-[22px] h-[22px] flex items-center justify-center">
        {item.icon}
      </div>
      <span
        className="text-center align-middle overflow-hidden text-ellipsis whitespace-nowrap w-full block text-sm leading-[150%] tracking-normal"
        title={item.name}
      >
        {item.name}
      </span>
      {item.badge && (
        <div className="absolute top-1 right-1">{item.badge}</div>
      )}
    </div>
  );
}

function DefaultDivider({ divider }: { divider: StackNavigationDivider }) {
  return (
    <div
      className={cn("w-14 h-px opacity-100 bg-border", divider.className)}
    />
  );
}

export function StackNavigation({
  items,
  renderItem,
  renderDivider,
  className,
  navClassName,
  width = "w-[72px]",
  header,
  footer,
}: StackNavigationProps) {
  return (
    <aside
      className={cn(
        width,
        "bg-sidebar text-sidebar-foreground min-h-full flex flex-col opacity-100",
        className
      )}
    >
      {header && <div className="shrink-0 flex w-full justify-center">{header}</div>}

      <div className="py-6 px-2 flex-1 overflow-auto">
        <nav className={cn("flex flex-col gap-1", navClassName)}>
          {items.map((item, index) => {
            if ("type" in item && item.type === "divider") {
              return renderDivider ? (
                <div key={`divider-${index}`}>
                  {renderDivider(item, index)}
                </div>
              ) : (
                <DefaultDivider key={`divider-${index}`} divider={item} />
              );
            }

            const navItem = item as StackNavigationItem;
            return (
              <div key={navItem.path || `item-${index}`}>
                {renderItem ? (
                  renderItem(navItem)
                ) : (
                  <DefaultNavItem item={navItem} />
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {footer && <div className="shrink-0 flex justify-center overflow-hidden mx-2 py-2 text-xs text-neutral-fg">{footer}</div>}
    </aside>
  );
}