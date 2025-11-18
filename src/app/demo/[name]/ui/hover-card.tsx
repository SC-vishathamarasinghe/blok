import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { mdiCalendar } from "@mdi/js";
import { Icon } from "@/lib/icon";

export const hoverCard = {
  name: "hover-card",
  defaultComponent: (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@blok</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" side="right">
        <div className="flex space-x-5">
          <Avatar>
            <AvatarImage src="/favicon.svg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-foreground">Blok</h4>
            <p className="text-sm text-muted-foreground">
              The Sitecore design system
            </p>
            <div className="mt-1 flex items-center gap-2">
              <Icon
                path={mdiCalendar}
                className="text-muted-foreground size-5"
              />
              <span className="text-muted-foreground text-xs">
                Created October 2025
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  usage: [
    `import {\n  HoverCard,\n  HoverCardContent,\n  HoverCardTrigger,\n} from "@/components/ui/hover-card";`,
    `<HoverCard>\n  <HoverCardTrigger asChild>\n    <Button variant="link">@blok</Button>\n  </HoverCardTrigger>\n  <HoverCardContent className="w-80" side="right">\n    <div className="flex space-x-5">\n      <Avatar>\n        <AvatarImage src="/favicon.svg" />\n        <AvatarFallback>VC</AvatarFallback>\n      </Avatar>\n      <div className="flex flex-col gap-1">\n        <h4 className="text-sm font-semibold text-foreground">Blok</h4>\n        <p className="text-sm text-muted-foreground">\n          The Sitecore design system\n        </p>\n        <div className="mt-1 flex items-center gap-2">\n          <Icon\n            path={mdiCalendar}\n            className="text-muted-foreground size-5"\n          />\n          <span className="text-muted-foreground text-xs">\n            Created October 2025\n          </span>\n        </div>\n      </div>\n    </div>\n  </HoverCardContent>\n</HoverCard>`,
  ],
};
