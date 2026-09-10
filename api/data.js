// Serverless proxy for data.gov.my — runs server-side on Vercel, so there's no
// browser CORS issue and no CSP restriction (that's what blocks the published
// Artifact version from calling this directly). Fetches once per page load,
// cached at the edge for 15 min via the Cache-Control header below.
const BASE = 'https://api.data.gov.my';

async function getJSON(path) {
  const res = await fetch(BASE + path);
  if (!res.ok) throw new Error(path + ' -> HTTP ' + res.status);
  return res.json();
}

module.exports = async (req, res) => {
  try {
    const [forecast, warning, earthquake, fuel, ridership] = await Promise.all([
      getJSON('/weather/forecast?contains=St@location__location_id&limit=150'),
      getJSON('/weather/warning?limit=20'),
      getJSON('/weather/warning/earthquake?limit=50'),
      getJSON('/data-catalogue?id=fuelprice&limit=10&sort=-date'),
      getJSON('/data-catalogue?id=ridership_headline&limit=5&sort=-date'),
    ]);
    res.setHeader('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=1800');
    res.status(200).json({
      fetchedAt: new Date().toISOString(),
      forecast, warning, earthquake, fuel, ridership
    });
  } catch (err) {
    res.status(502).json({ error: 'upstream_fetch_failed', message: String((err && err.message) || err) });
  }
};
