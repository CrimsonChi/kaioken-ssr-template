import "./global.css"
import { PageContext } from "vike/types"
import { PageContextProvider } from "$/context/pageContext"
import { LayoutDefault } from "$/layouts/LayoutDefault"

export function App({ pageContext }: { pageContext: PageContext }) {
  const {
    data = {},
    config: { Layout: PageLayout, Page },
  } = pageContext

  return (
    <PageContextProvider pageContext={pageContext}>
      <LayoutDefault>
        {PageLayout ? (
          <PageLayout>
            <Page {...data} />
          </PageLayout>
        ) : (
          <Page {...data} />
        )}
      </LayoutDefault>
    </PageContextProvider>
  )
}
