'use client'
import { AppShell, MantineProvider, Navbar, Header } from "@mantine/core"
import { Provider } from "react-redux"
import store from "./store"



export default function RootLayout({ children }) {
  return (

    <html>
      <body>
        <Provider store={store}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{

              colorScheme: "dark",
              colors: {
                green: ["#1db954", "#1ed760"],
                white: ["#ffffff"],
                black: ["#191414"]
              },
              fontFamily: 'Helvetica, Arial, sans-serif',
              primaryColor: "green"
            }}
          >
            <AppShell
              // navbar={<Navbar p="xs" width={{ base: 300 }}>content</Navbar>}
              header={<Header height={60} p="xs">{'This is the header'}</Header>}
            >
              {children}
            </AppShell>
          </MantineProvider>
        </Provider>
      </body>
    </html>

  )
}
