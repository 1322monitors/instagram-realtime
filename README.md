# instagram-realtime

Get Instagram posts, Stories, Reels and carousels from public accounts in real time over a WebSocket (Node). Instagram has no public streaming API and Meta's Graph API is built for accounts you own, so this is an Instagram monitoring API alternative for watching other people's public accounts live, without scraping infrastructure on your side. It uses the 1322 Instagram feed, which delivers around 350ms median (published on 1322.io/speed). Useful for brand monitoring, influencer and drop tracking, and Instagram Story tracking before Stories expire. Maintained by the 1322 team.

Platform page: https://1322.io/platforms/instagram
Tracking stories in real time (they expire within 24h): https://1322.io/blog/instagram-story-tracker

## run

```bash
npm install
API_KEY=your-key WS_URL=wss://1322.io/your-ws-path node index.js
```

## events

posts, reels, carousels and stories. carousels arrive with all media items;
context badges (Collab / Paid partnership / Pinned / Location) are included when
instagram exposes them.

```json
{ "platform": "instagram", "eventType": "post", "handle": "someaccount",
  "content": "new drop", "media": [{ "kind": "image", "url": "..." }],
  "hashtags": ["drop"], "timestamp": "2026-06-12T12:00:00Z" }
```

## Related

- [1322-client](https://github.com/SisoSol/1322-client) - typed TypeScript/JavaScript client for the 1322 feeds
- [social-monitor-examples/instagram](https://github.com/SisoSol/social-monitor-examples/tree/main/instagram) - the minimal Python consumer
- [Instagram story tracker guide](https://1322.io/blog/instagram-story-tracker)
