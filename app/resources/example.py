from flask_restplus import Namespace, Resource, fields
import requests
import os

#ns = Namespace('example', description='Examples')
ns_airtable = Namespace('airtable', description='Airtable')

#success_model = ns.model('Success', {
#    'message': fields.String
#})

airtable_model = ns_airtable.model('Success', {
    'message': fields.String
})

airtableAPIKey = os.environ['VUE_APP_AIRTABLEKEY']

@ns_airtable.route('', endpoint='index')
class IndexPage(Resource):

    #@ns.marshal_with(success_model)
    #def get(self):
    #    """
    #    Example url
    #    """
    #    return {'message': 'Success'}

    @ns_airtable.marshal_with(airtable_model)
    def get(self):
        """
        Example url
        """
        resp = requests.get(
            'https://api.airtable.com/v0/appcQDvLw3YiggMPP/Projects/?maxRecords=3&view=All%20projects', headers={'Authorization': 'Bearer '  + airtableAPIKey})
        data = resp.json()
        print(data)
        return 'dummy'

