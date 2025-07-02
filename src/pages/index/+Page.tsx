import { Counter } from "$/components/Counter"
import { useComputed, useSignal } from "kaioken"

type RoomSocket = {
  socket: WebSocket
  send: (message: string) => void
}

export function Page() {
  const roomId = useSignal(1)
  const roomSocket = useComputed<RoomSocket>((prev) => {
    prev?.socket.close()
    const socket = new WebSocket(`ws://localhost:3000/ws/${roomId}`)
    return {
      socket,
      send: (message: string) => socket.send(message),
    }
  })
  return (
    <>
      <h1 className="text-3xl md:text-4xl md:leading-normal font-bold text-center">
        Welcome to your Kaioken SSR app!
      </h1>
      <Counter />
    </>
  )
}
