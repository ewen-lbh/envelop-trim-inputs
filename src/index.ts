import { isPlainObject } from "is-plain-object"
import type { Plugin } from "@envelop/core"

export const useTrimInputs = (): Plugin => {
  const trimStrings = <T>(input: T): T => {
    if (typeof input === "string") {
      return input.trim() as T
    } else if (Array.isArray(input)) {
      return input.map(trimStrings) as unknown as T
    } else if (input && isPlainObject(input)) {
      const trimmedObject: { [key: string]: unknown } = {}
      for (const [key, value] of Object.entries(input))
        trimmedObject[key] = trimStrings(value)

      return trimmedObject as T
    }
    return input
  }

  return {
    onExecute({ args }: any) {
      // Apply trimming to variables
      if (args.variableValues)
        args.variableValues = trimStrings(args.variableValues)
    },
  }
}
