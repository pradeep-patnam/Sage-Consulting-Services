// /pages/api/auth/token.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    const tokenUrl = 'https://complianceapproval-rok5k4-prod.pegalaunchpad.com/dx/uas/oauth/token';

    // Prepare the form data for the POST request
    const body = new URLSearchParams({
        grant_type: 'client_credentials', // Ensure this matches the OAuth2 flow
        client_id: process.env.NEXT_PUBLIC_CLIENTID,
        client_secret: process.env.NEXT_PUBLIC_CLIENTSECRET,
    });

    try {
        // Send POST request to get the token
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Correct content type
            },
            body: body,
        });

        // Log the response for debugging purposes
        const responseBody = await response.text(); // Read the response body as text

        if (!response.ok) {
            // Log the full error response
            console.error('OAuth2 Error Response:', responseBody);
            throw new Error(`Failed to retrieve access token: ${response.statusText}`);
        }

        // Parse the response JSON
        const data = JSON.parse(responseBody);

        // Return the access token to the client
        res.status(200).json({ access_token: data.access_token });
    } catch (error) {
        console.error('Error getting access token:', error);
        res.status(500).json({ error: 'Failed to retrieve access token' });
    }
}
