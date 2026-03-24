from pydantic import BaseModel

class Settings(BaseModel):
    app_name: str = "StraightLens"
    database_url: str = "postgresql://user:pass@localhost:5432/straightlens"
    frontend_url: str = "https://straightlens.com"
