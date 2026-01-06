export const tabs = {
  name: "tabs",
  defaultComponent: "tabs",
  usage: [
    `import {\n Tabs,\n TabsContent,\n TabsList,\n TabsTrigger\n} from "@/components/ui/tabs";`,
    `<Tabs defaultValue="account" className="max-w-[400px]">\n <TabsList>\n  <TabsTrigger value="account">Account</TabsTrigger>\n  <TabsTrigger value="password">Password</TabsTrigger>\n </TabsList>\n <TabsContent value="account">Make changes to your account here.</TabsContent>\n <TabsContent value="password">Change your password here.</TabsContent>\n</Tabs>`,
  ],
  components: {
    "Line Variant": "tabs-line",
    "Line Variant with Icons": "tabs-line-icon",
    "Soft Rounded Variant": "tabs-soft-rounded",
    "With Icons": "tabs-icons",
  },
};
