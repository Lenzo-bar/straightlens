
StraightLens V1.3 Alpha Rebuild

Purpose
StraightLens is a freemium SaaS knowledge platform that turns user questions into structured, visual, and action-oriented answers. It is designed to support human flourishing, practical problem solving, and safe guidance for the common good.

Product promise
- Clear answers
- Guided understanding
- Practical direction
- Compliance-aware design
- Rich, modern interface

Primary experience
A user asks any question. The platform returns a structured answer with:
- Summary
- Key dimensions
- Practical steps
- Perspectives
- Risks
- Positive direction
- Moderation note
- Follow-up paths

SaaS scope in this rebuilt package
- Next.js branded frontend
- FastAPI branded backend
- PostgreSQL-first configuration
- Email verification and password reset placeholders
- Retention, deletion, and audit concepts documented
- Render, Neon, Resend, and GoDaddy deployment guidance
- StraightLens domain alignment

Branding
Official name: StraightLens
Primary domain: https://straightlens.com
Suggested subdomain for API: https://api.straightlens.com
Tagline: Clear answers. Guided understanding. Practical direction for the common good.

Architecture
Frontend
- Next.js app router
- Rich card-based interface
- AI disclosure visible in the interface
- Structured answer rendering
- Account and compliance panels can be added from this base

Backend
- FastAPI
- /health endpoint
- /api/ask endpoint with structured response schema
- PostgreSQL-first settings scaffold
- Ready to extend with auth, audit, retention, and admin controls

Compliance posture
This rebuild supports a compliance-aware alpha but does not constitute legal certification.
Included concepts:
- visible AI disclosure
- moderation note in responses
- user retention and deletion planning
- role-restricted admin audit direction
- trustworthy deployment architecture

Deployment path
- Frontend: Vercel
- Backend: Render
- Database: Neon
- Email: Resend
- DNS: GoDaddy

Recommended next actions
1. Push the package to GitHub.
2. Create Neon production database.
3. Deploy API on Render.
4. Deploy frontend on Vercel.
5. Point straightlens.com to Vercel.
6. Point api.straightlens.com to Render.
7. Configure Resend and verify a sender domain.
8. Add auth middleware, migration scripts, and production audit storage.
