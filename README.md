# instagram-realtime

Get Instagram posts, stories, reels and carousels in real time over a
WebSocket. Instagram has no public streaming API and Meta's Graph API won't
give you arbitrary public accounts, so this is one of the few ways to actually
watch accounts live without building scraping infra.

Uses the [1322](https://1322.io) Instagram feed (managed, real-time, runs
independent of Meta's API — no IG developer credentials needed). Useful for
brand monitoring, influencer/drop tracking, leak detection.

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
