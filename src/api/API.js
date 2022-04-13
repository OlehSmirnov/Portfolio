export const NETLIFY_API_TOKEN = "k-2-6jdrn1DiH_AMvQxB9rVgKscQfGuh88PeCrICg94";
export const NETLIFY_API_CALL = "https://api.netlify.com/api/v1/";

async function fetchNetlifyData(url) {
  try {
    const res = await fetch(NETLIFY_API_CALL + url, {
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