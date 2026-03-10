"use client";

import { SidebarRHS, SidebarRHSProvider } from "@/components/bloks/sidebar-rhs";
import { useSidebarRHS } from "@/components/bloks/sidebar-rhs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SidebarContent() {
  const { isCollapsed, toggleCollapse, isDocked, toggleDock } = useSidebarRHS();

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Sidebar Controls</CardTitle>
          <CardDescription>
            Use the buttons in the header to control the sidebar
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="text-sm">
            <strong>Collapsed:</strong> {isCollapsed ? "Yes" : "No"}
          </div>
          <div className="text-sm">
            <strong>Docked:</strong> {isDocked ? "Yes" : "No"}
          </div>
          <Button onClick={toggleCollapse} variant="outline" size="sm">
            Toggle Collapse
          </Button>
          <Button onClick={toggleDock} variant="outline" size="sm">
            Toggle Dock
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sample Content</CardTitle>
          <CardDescription>
            This is sample content for the sidebar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The Sidebar RHS component can be collapsed to the right and
            docked/undocked with a button click. When undocked, it becomes a
            floating dialog that can be positioned anywhere on the screen.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>Right-hand side positioning</li>
            <li>Resizable by dragging the left border</li>
            <li>Collapsible to the right</li>
            <li>Dockable/undockable</li>
            <li>Customizable width with min/max constraints</li>
            <li>Accessible controls</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SidebarRHSDemo() {
  return (
    <SidebarRHSProvider>
      <div className="relative w-full h-screen flex border border-border rounded-lg overflow-hidden bg-body-bg">
        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Main Content Area</h2>
            <p className="text-muted-foreground">
              This is the main content area. The sidebar appears on the right
              side. You can resize it by dragging the left border of the
              sidebar.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                • Hover over the left border of the sidebar to see the resize
                cursor
              </p>
              <p className="text-sm">
                • Click and drag to resize the sidebar width
              </p>
              <p className="text-sm">
                • Click the collapse button on the sidebar border to open and
                close it
              </p>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <SidebarRHS
          title="Sidebar RHS"
          width="360px"
          minWidth="250px"
          maxWidth="600px"
          height="100vh"
        >
          <SidebarContent />
        </SidebarRHS>
      </div>
    </SidebarRHSProvider>
  );
}
