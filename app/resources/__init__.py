from .example import ns as example_ns
from flask_restplus import Resource
import requests
import os

from ..utils import PatchedApi

api = PatchedApi()

api.add_namespace(example_ns)

airtableAPIKey = os.environ['VUE_APP_AIRTABLEKEY']

@api.route('/airtable_api')
class AirTable(Resource):
    def get(self):
        resp = requests.get(
            'https://api.airtable.com/v0/appcQDvLw3YiggMPP/Projects/?maxRecords=3&view=All%20projects', headers={'Authorization': 'Bearer ' + airtableAPIKey})
        data = resp.json()
        return data
