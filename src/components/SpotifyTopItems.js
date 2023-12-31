import { Container, Grid, Image, Paper, ScrollArea, Text } from "@mantine/core";


const SpotifyTopItems = ({ topItemsData }) => {

    const isTracks = topItemsData && topItemsData?.href?.includes("tracks")
    const tracks = topItemsData ? topItemsData.items : []
    console.log(topItemsData)
    return (
        <Container>
            <ScrollArea h={450} offsetScrollbars>
                <Grid gutter={24} >
                    {tracks && tracks.map((track, index) => {
                        return (
                            <Grid.Col span={3} >
                                <Paper p={12} shadow="xl" style={{ height: "100%" }}>
                                    <Image src={track?.album?.images?.[0].url} alt={`spot-${index}`} />
                                    <Text fw={650}>{track.name}</Text>
                                </Paper>
                            </Grid.Col>
                        )
                    })

                    }

                </Grid>
            </ScrollArea>
        </Container>
    )
}

export default SpotifyTopItems;