# OilMarket — Global Energy Trading Portal

Bilingual English/French energy portal deployed on Cloudflare Workers.

## Run locally

```sh
npm install
npm run dev
```

Use the Cloudflare CLI deploy command after building with Node 24.22 or newer:

```sh
npm run build
npm run deploy
```

## Connected sources and services

- `GET /api/news` reads LE BRIEF’s public RSS feed and caches headlines for 15 minutes.
- `GET /api/prices` reads daily Brent and WTI spot observations from the U.S. EIA through FRED. These observations are delayed and are not physical cargo quotations. The endpoint returns up to 365 observations for the chart.
- `POST /api/inquiries` validates consent and required fields, limits each email to five requests per hour, and stores inquiries and consent timestamps in the private Cloudflare D1 database `oilmarket-live`. There is no public read endpoint or email notification configured.
- Directory entries link to public operator pages. Listings are examples and directory companies are not verified as suppliers or counterparties.

## Sources

- LE BRIEF: https://www.lebrief.energy/ and https://www.lebrief.energy/rss.xml
- EIA daily spot prices distributed by FRED: https://fred.stlouisfed.org/series/DCOILBRENTEU and https://fred.stlouisfed.org/series/DCOILWTICO

For inquiries, the site uses Cloudflare D1 as its intake store. Configure an authenticated admin workflow and a verified email delivery service before adding notifications or exposing submitted business contact details to other users.
