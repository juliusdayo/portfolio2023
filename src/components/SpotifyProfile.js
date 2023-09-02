
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
                    height: "40em",

                }}
            >
                <Grid gutter={3} style={{ overflowY: "scroll", height: "100%" }}>
                    <Grid.Col span={3}>
                        <Avatar color="green.1" size={200} alt="Spotify Avatar" src={profileData && profileData?.images?.[1].url} radius={200} />
                        <Text>{profileData?.display_name}</Text>
                    </Grid.Col>
                    <Grid.Col span={9} >
                        <SpotifyTopItems topItemsData={topItemsData} />
                    </Grid.Col>
                </Grid>
            </Paper >

        </>
    )
}

export default SpotifyProfile;