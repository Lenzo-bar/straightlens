
StraightLens Deployment and Domain Guide

What you already have
You purchased straightlens.com at GoDaddy. That is your domain registrar. You can keep the domain there and connect hosting services to it.

Recommended production setup
- straightlens.com -> Vercel frontend
- www.straightlens.com -> Vercel frontend
- api.straightlens.com -> Render backend
- PostgreSQL -> Neon
- transactional email -> Resend

DNS plan at GoDaddy
Root domain
Point the apex domain to the Vercel target shown in the Vercel dashboard.
WWW
Add a CNAME for www to the Vercel target shown in the Vercel dashboard.
API
Add a CNAME for api to the Render service URL or target shown in the Render dashboard.

Application environment variables
Frontend
- NEXT_PUBLIC_API_BASE_URL=https://api.straightlens.com

Backend
- FRONTEND_URL=https://straightlens.com
- CORS_ORIGINS=https://straightlens.com,https://www.straightlens.com
- DATABASE_URL=<Neon runtime connection string>
- DATABASE_MIGRATION_URL=<Neon direct connection string>
- RESEND_API_KEY=<Resend API key>
- MAIL_FROM=noreply@straightlens.com

Live alpha checklist
- health endpoint returns ok
- homepage loads from straightlens.com
- signup flow works
- verification email is delivered
- password reset email is delivered
- ask endpoint returns structured answer
- deletion and retention controls are visible
- admin audit routes are restricted

Important limitation
This package is deployment-ready, not already deployed. Account setup inside Neon, Render, Vercel, Resend, and GoDaddy DNS must still be completed by you.
