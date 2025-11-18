import { BasicDragDrop } from "./draggable-basic";
import { SortableListDemo } from "./draggable-sortable-list";
import { CustomHandleDemo } from "./draggable-custom-handle";

export const draggable = {
  name: "draggable",
  defaultComponent: (
    <BasicDragDrop />
  ),
  usage: [
    `import {\n  DragDropProvider,\n  useDragDropContext,\n} from "@/components/ui/drag-drop-context";\nimport { Draggable } from "@/components/ui/draggable";\nimport { Droppable } from "@/components/ui/droppable";`,
    `<DragDropProvider>\n  <DragDropDemo />\n</DragDropProvider>`,
  ],
  components: {
    "Basic Drag and Drop": <BasicDragDrop />,
    "Sortable List": <SortableListDemo />,
    "Custom Handle": <CustomHandleDemo />
  },
};