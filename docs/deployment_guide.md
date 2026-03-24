# StraightLens deployment guide

## Stack
- Frontend: Vercel
- API: Render
- Database: Neon
- Email: Resend

## Required environment variables
- DATABASE_URL
- DATABASE_MIGRATION_URL
- SECRET_KEY
- JWT_SECRET_KEY
- FRONTEND_URL
- CORS_ORIGINS
- RESEND_API_KEY
- MAIL_FROM

## Domains
- Production frontend: https://straightlens.com
- API example: https://api.straightlens.com

## Sequence
1. Push repository to GitHub.
2. Create Neon database and copy direct and runtime connection strings.
3. Create Render web service for API.
4. Run migrations.
5. Create Vercel project for frontend.
6. Configure GoDaddy DNS:
   - root/apex to frontend provider per instructions
   - api subdomain to Render
7. Create Resend verified sender and enable password reset and email verification.
8. Test signup, login, ask, retention, deletion, admin audit.

## GoDaddy note
Keep DNS management in GoDaddy, but point the required records to Vercel and Render targets.
