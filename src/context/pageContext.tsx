import { children, createContext, useContext } from "kaioken"

export { usePageContext, PageContextProvider }

const Context = createContext<Vike.PageContext & { isClient: boolean }>(
  null as any
)

function PageContextProvider({
  pageContext,
}: {
  pageContext: Vike.PageContext
}) {
  return (
    <Context.Provider
      value={{ ...pageContext, isClient: !!globalThis.window?.location }}
    >
      {children()}
    </Context.Provider>
  )
}

function usePageContext() {
  return useContext(Context)
}
