import {
  ComboboxWithCheckbox,
  FrameworkCombobox,
  TimezoneCombobox,
  UserCombobox,
} from "@/components/ui/combobox";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
const users = [
  {
    id: "1",
    username: "ChristianHahn",
  },
  {
    id: "2",
    username: "ThomasKelly",
  },
  {
    id: "3",
    username: "FrankGrinaert",
  },
  {
    id: "4",
    username: "SpyridonMisichronis",
  },
  {
    id: "5",
    username: "LasithGunaratne",
  }
] as const;
const timezones = [
  {
    label: "Americas",
    timezones: [
      { value: "America/New_York", label: "(GMT-5) New York" },
      { value: "America/Los_Angeles", label: "(GMT-8) Los Angeles" },
      { value: "America/Chicago", label: "(GMT-6) Chicago" },
      { value: "America/Toronto", label: "(GMT-5) Toronto" },
      { value: "America/Vancouver", label: "(GMT-8) Vancouver" },
      { value: "America/Sao_Paulo", label: "(GMT-3) São Paulo" },
    ],
  },
  {
    label: "Europe",
    timezones: [
      { value: "Europe/London", label: "(GMT+0) London" },
      { value: "Europe/Paris", label: "(GMT+1) Paris" },
      { value: "Europe/Berlin", label: "(GMT+1) Berlin" },
      { value: "Europe/Rome", label: "(GMT+1) Rome" },
      { value: "Europe/Madrid", label: "(GMT+1) Madrid" },
      { value: "Europe/Amsterdam", label: "(GMT+1) Amsterdam" },
    ],
  },
  {
    label: "Asia/Pacific",
    timezones: [
      { value: "Asia/Tokyo", label: "(GMT+9) Tokyo" },
      { value: "Asia/Shanghai", label: "(GMT+8) Shanghai" },
      { value: "Asia/Singapore", label: "(GMT+8) Singapore" },
      { value: "Asia/Dubai", label: "(GMT+4) Dubai" },
      { value: "Australia/Sydney", label: "(GMT+11) Sydney" },
      { value: "Asia/Seoul", label: "(GMT+9) Seoul" },
    ],
  },
] as const;

export const combobox = {
  name: "combobox",
  defaultComponent: (
    <div className="p-1">
      <FrameworkCombobox frameworks={[...frameworks]} />
    </div>
  ),
  usage: [
    `import {\n  Command,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n} from "@/components/ui/command"\nimport {\n  Popover,\n  PopoverContent,\n  PopoverTrigger,\n} from "@/components/ui/popover"`,
    `<Popover open={open} onOpenChange={setOpen}>\n  <PopoverTrigger asChild>\n    <Button\n      variant="outline"\n      role="combobox"\n      aria-expanded={open}\n      className="w-[200px] justify-between"\n    >\n      {value\n        ? frameworks.find((framework) => framework.value === value)?.label\n        : "Select framework..."}\n      <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />\n    </Button>\n  </PopoverTrigger>\n  <PopoverContent className="w-[200px] p-0">\n    <Command>\n      <CommandInput placeholder="Search framework..." />\n      <CommandList>\n        <CommandEmpty>No framework found.</CommandEmpty>\n        <CommandGroup>\n          {frameworks.map((framework) => (\n            <CommandItem\n              key={framework.value}\n              value={framework.value}\n              onSelect={(currentValue) => {\n                setValue(currentValue === value ? "" : currentValue)\n                setOpen(false)\n              }}\n            >\n              {framework.label}\n            </CommandItem>\n          ))}\n        </CommandGroup>\n      </CommandList>\n    </Command>\n  </PopoverContent>\n</Popover>`,
  ],
  components: {
    "Framework Combobox": (
      <div className="p-1">
        <FrameworkCombobox frameworks={[...frameworks]} />
      </div>
    ),
    "User Combobox": (
      <div className="p-1">
        <UserCombobox users={[...users]} selectedUserId={users[0].id} />
      </div>
    ),
    "Timezone Combobox": (
      <div className="p-1">
        <TimezoneCombobox
          timezones={[...timezones]}
          selectedTimezone={timezones[0].timezones[0]}
        />
      </div>
    ),
    "Combobox With Checkbox": (
      <div className="p-1">
        <ComboboxWithCheckbox frameworks={[...frameworks]} />
      </div>
    ),
  },
};
