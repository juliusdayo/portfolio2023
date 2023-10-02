import { AppShell, MantineProvider, Skeleton, Header } from "@mantine/core"



const Loading = ({ children }) => {
    return (

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
                navbar={<Header height={80} p="xs">
                    <Skeleton />
                </Header>}
            >
                {children}
            </AppShell>
        </MantineProvider>
    )
}
export default Loading;