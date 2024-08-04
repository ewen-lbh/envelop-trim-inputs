# useTrimInputs

A [Envelop Plugin](https://envelop.dev/docs/plugins/) to automatically trim all strings on GraphQL variables before they are processed by the resolvers.

## Installation

```bash
npm i envelop-trim-inputs
```

## Usage

```ts
import { envelop } from "@envelop/core"
import { useTrimInputs } from "envelop-trim-inputs"

const getEnveloped = envelop({
  plugins: [
    useTrimInputs(),
    // other plugins...
  ],
})

// Then use getEnveloped with our GraphQL server (such as Yoga for example)
```

## Options

None atm.
