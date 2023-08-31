
'use client'
import { Button, Text, Paper, Container, Grid } from "@mantine/core"
import { headers } from "next/dist/client/components/headers";
import querystring from "querystring"

import { main, getAccessToken, fetchProfile, redirectToAuthCodeFlow } from "./functions";
import SpotifyProfile from "@/components/SpotifyProfile";
import { useEffect, useState } from "react";
import { setProfile } from "./spotifySlice";
import { useDispatch, useSelector } from "react-redux";
const Page = () => {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.spotify.profile)
    const fetchSpotifyData = async (code) => {
        const accessToken = await getAccessToken(code);
        const data = await fetchProfile(accessToken);
        dispatch(setProfile(data))
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (code && !profile) {
            fetchSpotifyData(code)
        }
    }, [])

    return (
        <>
            <Container>
                <h1> Spotify Page</h1>
                <SpotifyProfile profileData={profile} />

                <Button onClick={redirectToAuthCodeFlow}>Login</Button>
                <Button onClick={fetchSpotifyData} color="green.0">test</Button>
            </Container>
        </>
    )

}

export default Page

// country
// :
// "PH"
// display_name
// :
// "Shin"
// email
// :
// "ecaruscoros@gmail.com"
// explicit_content
// :
// {filter_enabled: false, filter_locked: false}
// external_urls
// :
// {spotify: 'https://open.spotify.com/user/s9u6cpb0qp5rw2tz8t05nbiwg'}
// followers
// :
// {href: null, total: 0}
// href
// :
// "https://api.spotify.com/v1/users/s9u6cpb0qp5rw2tz8t05nbiwg"
// id
// :
// "s9u6cpb0qp5rw2tz8t05nbiwg"
// images
// :
// []
// product
// :
// "premium"
// type
// :
// "user"
// uri
// :
// "spotify:user:s9u6cpb0qp5rw2tz8t05nbiwg"
