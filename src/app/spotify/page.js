
'use client'
import { Button, Text, Paper, Container, Grid, Divider } from "@mantine/core"
import { headers } from "next/dist/client/components/headers";
import querystring from "querystring"

import { main, getAccessToken, fetchProfile, redirectToAuthCodeFlow, fetchTopItems } from "./functions";
import SpotifyProfile from "@/components/SpotifyProfile";
import { useEffect, useState } from "react";
import { setProfile, setTopItem } from "./spotifySlice";
import { useDispatch, useSelector } from "react-redux";
import SpotifyTopItems from "@/components/SpotifyTopItems";
const Page = () => {
    const dispatch = useDispatch()
    const { profile, topItems } = useSelector((state) => state.spotify)

    const fetchSpotifyData = async (code) => {
        const accessToken = await getAccessToken(code);
        const profileData = await fetchProfile(accessToken);
        const topItemData = await fetchTopItems(accessToken, "tracks")
        dispatch(setProfile(profileData))
        dispatch(setTopItem(topItemData))
    }


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (code && !profile && !topItems) {
            fetchSpotifyData(code)
        }
    }, [])

    return (
        <>
            <Container>
                <h1> Spotify Page</h1>
                <SpotifyProfile profileData={profile} topItemsData={topItems} />
                <Button onClick={redirectToAuthCodeFlow} color="green.0">Login</Button>
            </Container>
        </>
    )

}

export default Page