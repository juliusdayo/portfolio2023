
import { Button, Avatar, Text, Paper, Grid } from "@mantine/core"
import SpotifyTopItems from "./SpotifyTopItems";



const SpotifyProfile = ({ profileData, topItemsData }) => {
    return (
        <>
            <Paper
                p="md"
                radius="lg"
                style={{
                    backgroundColor: "#1db954",
                }}
            >
                <Grid gutter={3} >
                    <Grid.Col xs={12} md={3} p={24}>
                        <Grid>
                            <Grid.Col xs={3} md={12}>
                                <Avatar color="green.1" alt="Spotify Avatar" src={profileData && profileData?.images?.[1].url} radius={200} size={160} />
                            </Grid.Col>
                            <Grid.Col xs={6} md={12}>
                                <Text fw={650} size={50} color="black.0">{profileData?.display_name}</Text>
                            </Grid.Col>
                        </Grid>
                    </Grid.Col>
                    <Grid.Col xs={12} md={9}>
                        <SpotifyTopItems topItemsData={topItemsData} />
                    </Grid.Col>
                </Grid>
            </Paper >

        </>
    )
}

export default SpotifyProfile;