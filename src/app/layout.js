'use client'
import { Provider } from "react-redux"
import dynamic from 'next/dynamic'
import store from "./store"
import { Skeleton } from "@mantine/core"
import Loading from "@/components/LoadingSkeleton"
// import ThemeProviderComponent from "@/components/ThemeProvider"

const ThemeProviderComponent = dynamic(() => import('@/components/ThemeProvider'), {
  ssr: false,
  loading: () =>
    <>
      <Loading />
    </>
})

export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        <Provider store={store}>
          <ThemeProviderComponent >{children}</ThemeProviderComponent>
        </Provider>
      </body>
    </html>

  )
}
