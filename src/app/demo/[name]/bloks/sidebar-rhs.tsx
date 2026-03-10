export const sidebarRhs = {
  name: "sidebar-rhs",
  preview: {
    defaultComponent: "sidebar-rhs",
  },
  usage: {
    usage: [
      `import { SidebarRHSProvider, SidebarRHS } from "@/components/bloks/sidebar-rhs";

<SidebarRHSProvider>
  <div className="relative w-full h-screen flex">
    <main className="flex-1 overflow-auto">
      {/* Your main content */}
    </main>
    <SidebarRHS title="My Sidebar" width="360px" height="100vh">
      <div>Sidebar content</div>
    </SidebarRHS>
  </div>
</SidebarRHSProvider>`,
    ],
  },
};
