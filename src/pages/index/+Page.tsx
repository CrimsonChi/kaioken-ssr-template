import { Counter } from "$/components/Counter"
import { signal } from "kaioken"

export function Page() {
  const count = signal(0)
  return (
    <>
      <h1 className="text-3xl md:text-4xl md:leading-normal font-bold text-center">
        Welcome to your Kaioken SSR app!
      </h1>
      <button onclick={() => count.value++}>{count}</button>
      <Counter />
    </>
  )
}
