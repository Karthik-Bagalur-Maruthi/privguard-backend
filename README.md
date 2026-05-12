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
This API uses the LeakCheck API, which aggregates data from publicly known breaches. Not all websites are included because many breaches are undisclosed, restricted, or stored in private databases. Legal, privacy, and ethical limitations also prevent full access to all leaked data, so complete coverage of every website is not possible

Note : This API, powered by the LeakCheck API, scans emails and phone numbers for exposure in known data breaches. It accepts input via a REST endpoint and returns structured results including breach sources, leaked data fields, risk level, and exposure score, enabling clear and efficient frontend visualization.

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
