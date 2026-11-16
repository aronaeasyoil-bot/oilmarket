# OilMarket — Global Energy Trading Portal

Bilingual English/French front-end for the OilMarket energy trade portal.

## Run locally

```sh
npm install
npm run dev
```

## Deploy to Cloudflare Workers

```sh
npm run deploy
```

## Current prototype scope

- Navigation and product, directory, market, listing, news, insights, about and trade inquiry pages in English and French.
- Prices are explicitly unavailable until a licensed feed is connected. CSV export preserves that status and does not invent quotations.
- Directory cards are illustrative and are not verified company records.
- The trade inquiry form prepares an email in the visitor's email application. No user account or private document storage is active.
- The News page is ready for the LE BRIEF editorial feed, but a LE BRIEF URL or API credential was not included in the provided materials. The included cards are original OilMarket reference guides.

Before production use, connect authorized market data, the LE BRIEF feed, secure user authentication, server-side RFQ processing, moderation, and a documented supplier review process.
