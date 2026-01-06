import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const avatar = {
  name: "avatar",
  defaultComponent: "avatar",
  usage: [
    `import {\n  Avatar,\n  AvatarFallback,\n  AvatarImage,\n} from "@/components/ui/avatar"`,
    `<Avatar>\n  <AvatarImage src="https://ca.slack-edge.com/T1S2RKGUA-U015TJJS8MS-b581732f917e-512" alt="Frank Grinaert" />\n  <AvatarFallback>\n    <span>CN</span>\n  </AvatarFallback>\n</Avatar>`
  ],
  components: {
    Fallback: "avatar-fallback",
    Large: "avatar-large",
    Interactive: "avatar-interactive",
    Menu: "avatar-menu",
  },
};