import StepperExample from "./stepper-example";
import StepperCurrentStep from "./stepper-current-step";
import StepperVertical from "./stepper-vertical";

export const stepper = {
  name: "stepper",
  defaultComponent: <StepperExample />,
  usage: [
    `import { Stepper } from "@/components/ui/stepper";`,
    `<Stepper steps={steps} />`,
  ]
};
