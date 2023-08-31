
import { spotify } from "@/config"

export const main = async () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    console.log(clientId)
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!code) {
        redirectToAuthCodeFlow(clientId);
    } else {
        const accessToken = await getAccessToken(code);
        const profile = await fetchProfile(accessToken);
        return profile
    }

}


export const redirectToAuthCodeFlow = async () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    console.log(clientId, "CLIENTID")
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/spotify");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

const generateCodeVerifier = (length) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const generateCodeChallenge = async (codeVerifier) => {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export const getAccessToken = async (code) => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    try {
        const verifier = localStorage.getItem("verifier");

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", "http://localhost:3000/spotify");
        params.append("code_verifier", verifier);

        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        });
        console.log(result, 'RESULT')
        const { access_token } = await result.json();
        return access_token;
    } catch (error) {
        console.error(error)
    }

}

export const fetchProfile = async (token) => {
    try {
        const result = await fetch(`${spotify.baseUrl}/v1/me`, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
        return await result.json();
    } catch (error) {
        console.error(error)
    }

}

export const fetchTopItems = (type) => {

}