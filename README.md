# PrivGuard Backend 🛡️

Backend API for PrivGuard cybersecurity platform.

This server handles:
- Email breach scanning
- Phone breach scanning
- Security risk analysis
- Exposure report generation

## Tech Stack

- Node.js
- Express.js

## API Endpoint

POST /api/exposure/scan

## Live API

API Server: [Backend API](https://privguard-backend-7r5j.onrender.com)

## Request Format

```json
{
  "email": "user@example.com",
  "phone": "9876543210"
}
```

## Response

Returns:
- Breach count
- Risk level
- Exposed fields
- Source databases

Built for Hackathon 2026 by Team PrivGuard
