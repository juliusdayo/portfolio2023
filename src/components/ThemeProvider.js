import { AppShell, MantineProvider, Navbar } from "@mantine/core"
import { useSelector } from "react-redux"


import Header from "./Header"

const ThemeProviderComponent = ({ children }) => {
    const { isDark } = useSelector((state) => state.general)
    return (

        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: isDark ? "dark" : "light",
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
                header={
                    <Header isDark={isDark} />
                }
            >
                {children}
            </AppShell>
        </MantineProvider>
    )
}
export default ThemeProviderComponent