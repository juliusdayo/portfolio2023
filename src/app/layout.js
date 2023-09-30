'use client'
import { Provider } from "react-redux"
import store from "./store"
import ThemeProviderComponent from "@/components/ThemeProvider"


export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        <Provider store={store}>
          <ThemeProviderComponent > {children}</ThemeProviderComponent>
        </Provider>
      </body>
    </html>

  )
}
