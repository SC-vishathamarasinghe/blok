import DemoTab from "@/components/demo-tab";
import { demos } from "@/app/demo/[name]/index";
import { Renderer } from "@/app/demo/[name]/renderer";
import { ReactNode } from "react";

export default async function TestPage() {
    const { components } = demos["button"];
    const codeMap = await import("./button-demo.json") as unknown as Record<string, string>;
    return (
        <div className="w-screen h-full p-12 flex items-center justify-center">
            <div className="w-3xl min-h-[200px] border rounded-md p-12 flex flex-col gap-12 items-center justify-center">
                {components &&
                    Object.entries(components).map(([key, node], index: number) => {
                        return (
                            <div key={index} className="flex flex-col gap-2">
                                <h3 className="font-semibold text-xl tracking-tight">{key}</h3>
                                <DemoTab 
                                    key={key} 
                                    code={codeMap[key] ?? ""} 
                                    component={componentDemo(node)} 
                                />
                            </div>
                        );
                })}
            </div>
        </div>
    )
}

const componentDemo = (component: ReactNode) => {
    return (
        <div className="relative rounded-lg overflow-hidden">
            <Renderer>{component}</Renderer>
        </div>
    );
}