# Outlook MY

A single daily outlook for Malaysia. Pick a location and it gives you one verdict — Clear to go, Hazy conditions, Wet weather likely, or Storm risk today — built from that location's forecast, active MET Malaysia warnings, and recent seismic activity, with a "why?" panel to see the reasoning behind it. A "Getting around today" card follows with what today's conditions mean for driving (fuel prices) and public transport (rail/bus ridership).

Six locations: Kuala Lumpur, Penang, Kedah, Perlis, Kelantan, Johor.

Built as part of an exercise comparing [data.gov.my](https://data.gov.my) against [data.gov.sg](https://data.gov.sg).

## Data sources

All content is a snapshot from `api.data.gov.my`:

- `GET /weather/forecast` — 7-day forecast ([reference](https://developer.data.gov.my/realtime-api/weather))
- `GET /weather/warning` — active weather warnings
- `GET /weather/warning/earthquake` — recent seismic events
- `GET /data-catalogue?id=fuelprice` — weekly fuel prices
- `GET /data-catalogue?id=ridership_headline` — daily rail/bus ridership (published ~6 weeks behind)

This is a static snapshot, not a live-polling app — the underlying findings on why are tracked in a separate field-notes log.
