import {NETLIFY_API_TOKEN} from "../APIKeys";

async function fetchNetlifyData(url) {
  try {
    const res = await fetch("https://api.netlify.com/api/v1/" + url, {
      headers: {
        "Authorization": "Bearer " + NETLIFY_API_TOKEN
      }
    });
    return await res.json();
  } catch (err) {
    console.error("Error fetching data: " + err);
  }
}

export {fetchNetlifyData}