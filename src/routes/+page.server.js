// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**@type {import('./$types').PageServerLoad} */
export const load = async (event) => {

  const apiKey = 'w587nM7wFTtxxIgueRbxzuByVObMKcbUUKAwh24b';
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch data from NASA API');
    }

    const data = await res.json();

    const { url } = event;
    return {
      pathname: url.pathname,
      apodData: data // Store the fetched APOD data in the apodData property
    };
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);

    // Return an error response if needed
    return {
      error: error.message
    };
  }
};




