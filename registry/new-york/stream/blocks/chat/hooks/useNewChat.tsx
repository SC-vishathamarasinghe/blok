import { useSetAtom } from "jotai"

import { brandkitIdAtom } from "../store/atoms"
import { TOOL_ACTIONS, useToolDispatch } from "../store/tools"

export function useNewChat() {
  /* Atoms */
  const setBrandKitStateId = useSetAtom(brandkitIdAtom)
  const [, dispatchToolAction] = useToolDispatch()

  return (): void => {
    setBrandKitStateId("")
    dispatchToolAction({ type: TOOL_ACTIONS.RESET_ALL_TOOLS })
  }
}
