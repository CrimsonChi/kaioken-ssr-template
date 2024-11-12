//https://vike.dev/pageContext#custom

declare global {
  namespace Vike {
    interface PageContext {
      abortReason?: string
      abortStatusCode?: number
      is404?: boolean

      config: {
        title: string | ((ctx: PageContext) => string)
        Page: Kaioken.FC
        Layout: Kaioken.FC[]
      }

      routeParams: Record<string, string>
      data: Record<string, unknown>
    }
  }
}

export {}
