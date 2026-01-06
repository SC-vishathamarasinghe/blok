export const draggable = {
  name: "draggable",
  defaultComponent: "draggable-basic",
  usage: [
    `import { DndContext, DragEndEvent } from "@/components/ui/dnd-context";
import { Draggable } from "@/components/ui/draggable";
import { Droppable } from "@/components/ui/droppable";`,
    `function App() {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      console.log(\`Dropped \${active.id} over \${over.id}\`);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Draggable id="draggable-1">
        <div>Drag me</div>
      </Draggable>
      <Droppable id="droppable-1">
        <div>Drop here</div>
      </Droppable>
    </DndContext>
  );
}`,
  ],
  components: {
    "Basic Drag and Drop": "draggable-basic",
    "Sortable List": "draggable-sortable-list",
    "Custom Handle": "draggable-custom-handle",
    "Drag, Drop & Sort": "draggable-sortable-drop"
  },
};