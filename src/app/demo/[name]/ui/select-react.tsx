import { SelectReact, type SelectReactOption } from "@/components/ui/select-react";

const productOptions: SelectReactOption[] = [
  { value: "XMCloud", label: "XM Cloud" },
  { value: "contentHub", label: "Content Hub" },
  { value: "CDP", label: "CDP" },
  { value: "Blok", label: "Blok", disabled: true },
];

const frameworkOptions: SelectReactOption[] = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export const selectReact = {
  name: "select-react",
  defaultComponent: (
    <div className="p-2 w-[280px]">
      <SelectReact
        options={productOptions}
        placeholder="Select a product"
        aria-label="Select a product"
      />
    </div>
  ),
  usage: [
    `import { SelectReact, type SelectReactOption } from "@/components/ui/select-react";`,
    `const options: SelectReactOption[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3", disabled: true },
];

<SelectReact
  options={options}
  placeholder="Select an option"
/>`,
  ],
  components: {
    "Searchable": (
      <div className="p-2 w-[280px]">
        <SelectReact
          options={frameworkOptions}
          placeholder="Search frameworks..."
          isSearchable
          aria-label="Search frameworks"
        />
      </div>
    ),
    "Multi Select": (
      <div className="p-2 w-[280px]">
        <SelectReact
          options={frameworkOptions}
          placeholder="Select frameworks..."
          isMulti
          aria-label="Select multiple frameworks"
        />
      </div>
    ),
    "Disabled": (
      <div className="p-2 w-[280px]">
        <SelectReact
          options={productOptions}
          placeholder="Disabled"
          isDisabled
          aria-label="Disabled select"
        />
      </div>
    ),
    "Loading": (
      <div className="p-2 w-[280px]">
        <SelectReact
          options={productOptions}
          placeholder="Loading..."
          isLoading
          aria-label="Loading select"
        />
      </div>
    ),
  },
};

