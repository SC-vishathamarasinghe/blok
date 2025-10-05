"use client"

import { type JSX } from "react"
import { mdiArrowBottomRight } from "@mdi/js"
import { useAtomValue } from "jotai"

import { cn } from "@/lib/utils"

import { useAiChatProvider } from "../chat/hooks/useAiChatProvider"
import { Icon } from "../chat/Icon"
import { configAtom } from "./store/atoms"

export type ExamplePrompt = {
  icon: JSX.Element
  content: string
}

const ExamplePrompts: ExamplePrompt[] = [
  {
    icon: (
      <Icon path={mdiArrowBottomRight} className="text-md neutral-fg ml-auto" />
    ),
    content: "Who is our target consumer?",
  },
  {
    icon: (
      <Icon path={mdiArrowBottomRight} className="text-md neutral-fg ml-auto" />
    ),
    content: "Can you describe to me our brand tone of voice?",
  },
  {
    icon: (
      <Icon path={mdiArrowBottomRight} className="text-md neutral-fg ml-auto" />
    ),
    content: "What is our brand big idea?",
  },
  {
    icon: (
      <Icon path={mdiArrowBottomRight} className="text-md neutral-fg ml-auto" />
    ),
    content: "Brainstorm some headline ideas for my new campaign",
  },
  {
    icon: (
      <Icon path={mdiArrowBottomRight} className="text-md neutral-fg ml-auto" />
    ),
    content: "Create a brief for my new campaign targeting my consumers",
  },
]

export type MemoizedEmptyScreenBoxes = {}

export function EmptyScreenBoxes({}: MemoizedEmptyScreenBoxes) {
  /* Hooks */
  const { setInput } = useAiChatProvider()

  /* Atoms */
  const config = useAtomValue(configAtom)

  /* Computed */
  const Prompts = !!config?.examplePrompts?.length
    ? config.examplePrompts
    : ExamplePrompts

  const onClick = (content: string) => {
    setInput(content)
  }

  return (
    <div className="grid grid-cols-3 items-stretch gap-4 p-1">
      {Prompts.map(({ content, icon }, index) => (
        <button
          key={`${content}}-${index}`}
          className={cn(
            "text-body-text flex w-full flex-col items-center justify-between gap-5 rounded-xl bg-gray-50 p-5 hover:bg-gray-100",
            {
              "col-span-2": index === Prompts.length - 1,
            }
          )}
          onClick={() => onClick(content)}
        >
          <p className="text-body-text m-0 line-clamp-3 text-center text-lg">
            {content}
          </p>

          <div className="flex w-full">
            {icon ? (
              icon
            ) : (
              <Icon
                path={mdiArrowBottomRight}
                className="text-md neutral-fg ml-auto"
              />
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
