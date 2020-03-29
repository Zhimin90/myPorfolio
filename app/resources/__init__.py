#from .example import ns as example_ns
from .example import ns_airtable as ns_airtable

from ..utils import PatchedApi

api = PatchedApi()

#api.add_namespace(example_ns)
api.add_namespace(ns_airtable)
