// import { Sidebar } from "@/registry/new-york/ui/sidebar"
import { NavigationMenu } from "@/registry/new-york/ui/navigation-menu"
import { AccordionDemo } from "@/components/accordion-demo"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/new-york/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/new-york/ui/accordion";
import { Alert } from "@/registry/new-york/ui/alert";
import { AlertDialog } from "@/registry/new-york/ui/alert-dialog";
import { Badge } from "@/registry/new-york/ui/badge";
import { Breadcrumb } from "@/registry/new-york/ui/breadcrumb";
import { Button } from "@/registry/new-york/ui/button";
import { Card } from "@/registry/new-york/ui/card";
import { Checkbox } from "@/registry/new-york/ui/checkbox";
import { Dialog } from "@/registry/new-york/ui/dialog";
import { Input } from "@/registry/new-york/ui/input";
import { Menubar } from "@/registry/new-york/ui/menubar";
import { NavigationMenuDemo } from "@/components/navigation-menu-demo";
import { Pagination } from "@/registry/new-york/ui/pagination";
import { RadioGroup } from "@/registry/new-york/ui/radio-group";
import { Select } from "@/registry/new-york/ui/select";
import { Sonner } from "@/registry/new-york/ui/sonner";
import { Switch } from "@/registry/new-york/ui/switch";
import { Table } from "@/registry/new-york/ui/table";
import { TabsDemo } from "@/components/tabs-demo";
import { Textarea } from "@/registry/new-york/ui/textarea";
import { Toggle } from "@/registry/new-york/ui/toggle";
import { ToggleGroup } from "@/registry/new-york/ui/toggle-group";
import { Tooltip } from "@/registry/new-york/ui/tooltip";
import { AlertDemo } from "@/components/alert-demo";
import { AlertDialogDemo } from "@/components/alert-dialog-demo";
import { BadgeDemo } from "@/components/badge-demo";
import { BreadcrumbDemo } from "@/components/breadcrumb-demo";
import { ButtonDemo } from "@/components/button-demo";
import { CardDemo } from "@/components/card-demo";
import { CheckboxDemo } from "@/components/checkbox-demo";
import { DialogDemo } from "@/components/dialog-demo";
import { InputDemo } from "@/components/input-demo";
import { MenubarDemo } from "@/components/menubar-demo";
import { PaginationDemo } from "@/components/pagination-demo";
import { RadioGroupDemo } from "@/components/radio-group-demo";
import { SelectDemo } from "@/components/select-demo";
import { SonnerDemo } from "@/components/sonner-demo";
import { SwitchDemo } from "@/components/switch-demo";
import { TableDemo } from "@/components/table-demo";
import { TextareaDemo } from "@/components/textarea-demo";
import { ToggleDemo } from "@/components/toggle-demo";
import { ToggleGroupDemo } from "@/components/toggle-group-demo";
import { TooltipDemo } from "@/components/tooltip-demo";

export default function Playground() {
  return (
    <div className="flex flex-col">
      {/* Topbar */}
      <NavigationMenu />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome to the Playground</h1>
        <p className="mt-2 text-sm text-gray-600">
          This is a page for comparing the registry component with the demo components.
        </p>

        <Tabs defaultValue="tab-1" className="mt-6">
          <TabsList className="mb-4 overflow-x-auto">
            <TabsTrigger value="tab-1">Accordion</TabsTrigger>
            <TabsTrigger value="tab-2">Alert</TabsTrigger>
            <TabsTrigger value="tab-3">Alert Dialog</TabsTrigger>
            <TabsTrigger value="tab-4">Badge</TabsTrigger>
            <TabsTrigger value="tab-5">Breadcrumb</TabsTrigger>
            <TabsTrigger value="tab-6">Button</TabsTrigger>
            <TabsTrigger value="tab-7">Card</TabsTrigger>
            <TabsTrigger value="tab-8">Checkbox</TabsTrigger>
            <TabsTrigger value="tab-9">Dialog</TabsTrigger>
            <TabsTrigger value="tab-10">Input</TabsTrigger>
            <TabsTrigger value="tab-11">Menubar</TabsTrigger>
            <TabsTrigger value="tab-12">Navigation Menu</TabsTrigger>
            <TabsTrigger value="tab-13">Pagination</TabsTrigger>
            <TabsTrigger value="tab-14">Radio Group</TabsTrigger>
            <TabsTrigger value="tab-15">Select</TabsTrigger>
            <TabsTrigger value="tab-16">Sonner</TabsTrigger>
            <TabsTrigger value="tab-17">Switch</TabsTrigger>
            <TabsTrigger value="tab-18">Table</TabsTrigger>
            <TabsTrigger value="tab-19">Tabs</TabsTrigger>
            <TabsTrigger value="tab-20">Text Area</TabsTrigger>
            <TabsTrigger value="tab-21">Toggle</TabsTrigger>
            <TabsTrigger value="tab-22">Toggle Group</TabsTrigger>
            <TabsTrigger value="tab-23">Tooltip</TabsTrigger>
          </TabsList>
          <TabsContent value="tab-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Accordion</h2>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                    <AccordionContent>
                      Content for the first accordion item.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                    <AccordionContent>
                      Content for the second accordion item.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Accordion Demo</h2>
                <AccordionDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Alert</h2>
                <Alert>This is a registry alert.</Alert>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Alert Demo</h2>
                <AlertDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Alert Dialog</h2>
                <AlertDialog>This is a registry alert dialog.</AlertDialog>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Alert Dialog Demo</h2>
                <AlertDialogDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Badge</h2>
                <Badge>This is a registry badge.</Badge>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Badge Demo</h2>
                <BadgeDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Breadcrumb</h2>
                <Breadcrumb>This is a registry breadcrumb.</Breadcrumb>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Breadcrumb Demo</h2>
                <BreadcrumbDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Button</h2>
                <Button>This is a registry button.</Button>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Button Demo</h2>
                <ButtonDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-7">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Card</h2>
                <Card>This is a registry card.</Card>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Card Demo</h2>
                <CardDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Checkbox</h2>
                <Checkbox>This is a registry checkbox.</Checkbox>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Checkbox Demo</h2>
                <CheckboxDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-9">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Dialog</h2>
                <Dialog>This is a registry dialog.</Dialog>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Dialog Demo</h2>
                <DialogDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Input</h2>
                <Input placeholder="This is a registry input." />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Input Demo</h2>
                <InputDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-11">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Menubar</h2>
                <Menubar>This is a registry menubar.</Menubar>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Menubar Demo</h2>
                <MenubarDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-12">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Navigation Menu</h2>
                <NavigationMenu>This is a registry navigation menu.</NavigationMenu>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Navigation Menu Demo</h2>
                <NavigationMenuDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-13">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Pagination</h2>
                <Pagination>This is a registry pagination.</Pagination>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Pagination Demo</h2>
                <PaginationDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-14">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Radio Group</h2>
                <RadioGroup>This is a registry radio group.</RadioGroup>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Radio Group Demo</h2>
                <RadioGroupDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-15">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Select</h2>
                <Select>This is a registry select.</Select>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Select Demo</h2>
                <SelectDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-16">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Sonner</h2>
                <Sonner />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Sonner Demo</h2>
                <SonnerDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-17">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Switch</h2>
                <Switch>This is a registry switch.</Switch>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Switch Demo</h2>
                <SwitchDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-18">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Table</h2>
                <Table>This is a registry table.</Table>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Table Demo</h2>
                <TableDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-19">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Tabs</h2>
                <Tabs>This is a registry tabs.</Tabs>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Tabs Demo</h2>
                <TabsDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-20">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Text Area</h2>
                <Textarea>This is a registry text area.</Textarea>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Text Area Demo</h2>
                <TextareaDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-21">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Toggle</h2>
                <Toggle>This is a registry toggle.</Toggle>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Toggle Demo</h2>
                <ToggleDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-22">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Toggle Group</h2>
                <ToggleGroup type="single">This is a registry toggle group.</ToggleGroup>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Toggle Group Demo</h2>
                <ToggleGroupDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-23">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Registry Tooltip</h2>
                <Tooltip>This is a registry tooltip.</Tooltip>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Tooltip Demo</h2>
                <TooltipDemo />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
