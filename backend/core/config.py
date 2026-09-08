from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "AI-Powered Multi-Channel CRM Assistant"
    debug: bool = True

    mongodb_uri: str
    mongodb_database: str = "crm_database"

    jwt_secret_key: str
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60

    model_config = SettingsConfigDict(
        env_file="atlas-credentials.env",
        extra="ignore"
    )


settings = Settings()