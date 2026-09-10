# Hazard Watch MY

A glanceable weather-hazard app for Malaysia — today's conditions, a 7-day forecast strip, active MET Malaysia warnings, and recent tremors, switchable across six locations (Kuala Lumpur, Penang, Kedah, Perlis, Kelantan, Johor).

Built as part of an exercise comparing [data.gov.my](https://data.gov.my) against [data.gov.sg](https://data.gov.sg), as a companion piece to Puddlewatch SG.

## Data source

All content is a snapshot from `api.data.gov.my`, documented at the [Weather API reference](https://developer.data.gov.my/realtime-api/weather):

- `GET /weather/forecast` — 7-day forecast
- `GET /weather/warning` — active weather warnings
- `GET /weather/warning/earthquake` — recent seismic events

This is a static snapshot, not a live-polling app — see the field notes for why.

## Notes

Technical, data-quality, and platform-comparison findings from building this are tracked separately in **MY Field Notes**.
