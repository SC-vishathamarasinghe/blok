import { Icon } from "@/components/ui/icon";
import { mdiInformationOutline } from "@mdi/js";

export const icon = {
  name: "icon",
  defaultComponent: (
    <Icon path={mdiInformationOutline} variant="default" />
  ),
  usage: [
    `import { Icon } from "@/components/ui/icon";`,
    `<Icon path={mdiInformationOutline} />`,
  ],
  components: {
    Variants: (
        <div className="flex items-center justify-center gap-4">
            <Icon path={mdiInformationOutline} variant="default" />
            <Icon path={mdiInformationOutline} variant="filled" />
        </div>
    ),
    Sizing: (
      <div className="flex items-center justify-center gap-4">
        <Icon path={mdiInformationOutline} size="sm" />
        <Icon path={mdiInformationOutline} size="md" />
        <Icon path={mdiInformationOutline} size="default" />
        <Icon path={mdiInformationOutline} size="lg" />
      </div>
    ),
    "Color Schemes": (
      <div className="flex items-center justify-center gap-4">
        <Icon path={mdiInformationOutline} colorScheme="neutral" />
        <Icon path={mdiInformationOutline} colorScheme="danger" />
        <Icon path={mdiInformationOutline} colorScheme="warning" />
        <Icon path={mdiInformationOutline} colorScheme="yellow" />
        <Icon path={mdiInformationOutline} colorScheme="success" />
        <Icon path={mdiInformationOutline} colorScheme="teal" />
        <Icon path={mdiInformationOutline} colorScheme="cyan" />
        <Icon path={mdiInformationOutline} colorScheme="primary" />
        <Icon path={mdiInformationOutline} colorScheme="blue" />
        <Icon path={mdiInformationOutline} colorScheme="pink" />
      </div>
    ),
  },
};
