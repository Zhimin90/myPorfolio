import os


class Config:
    ERROR_404_HELP = False

    SECRET_KEY = os.getenv('APP_SECRET', 'secret key')

    SQLALCHEMY_DATABASE_URI = 'sqlite:///tutorial.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    DOC_USERNAME = 'api'
    DOC_PASSWORD = 'password'

    airtableAPIKey = os.environ['VUE_APP_AIRTABLEKEY']


class DevConfig(Config):
    DEBUG = True


class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite://'
    TESTING = True
    DEBUG = True


class ProdConfig(Config):
    DEBUG = False


config = {
    'development': DevConfig,
    'testing': TestConfig,
    'production': ProdConfig
}
