module.exports = {
  info: 'Data Classes are templates for data objects you will store in Syncano. In order to be able to add Data Objects, you have to define a Data Class for that type of data object. ',
  list: {
    javascript: `var Syncano = require('syncano');
var connection = Syncano({accountKey: 'ACCOUNT_KEY'});
var Class = connection.Class;

Class.please().list({instanceName: 'INSTANCE_NAME'}).then(callback);
      
For more info visit: http://docs.syncano.io/v0.1.1/docs/classes-list`,
    python: `import syncano 
from syncano.models import Class

connection = syncano.connect(api_key='ACCOUNT_KEY')

classes = Class.please.list(instance_name="INSTANCE_NAME")

For more info visit: http://docs.syncano.io/v0.1.1/docs/classes-list`,
    curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/classes/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/classes-list`
  },
  add: {
    javascript: `var Syncano = require('syncano');
var connection = Syncano({accountKey: 'ACCOUNT_KEY'});
var Class = connection.Class;

var cls = {
  "name":"witchers",
  "instanceName": "INSTANCE_NAME",
  "description":"List of all known Witchers",
  "schema":[
    {"type":"string","name":"name"},   
    {"type":"string","name":"city","filter_index":true}
  ]
};

Class.please().create(cls).then(callback);
      
For more info visit: http://docs.syncano.io/v0.1.1/docs/class-add`,
    python: `import syncano
from syncano.models import Class

connection = syncano.connect(api_key="ACCOUNT_KEY")

book_class = Class.please.create(
    instance_name='INSTANCE_NAME',
    name='witchers',
    description='List of all known Witchers',
    schema=[
        {"name": "name", "type": "string"},
        {"name": "city", "type": "string", "filter_index": True}
    ])

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-add`,
    curl: `curl -X POST \
-H "X-API-KEY: ACCOUNT_KEY" \
-H "Content-Type: application/json" \
-d '{"name":"witchers",
     "description":"List of all known Witchers",
     "schema":[
          {"type":"string","name":"name"},
          {"type":"string","name":"city", "filter_index":true}]}' \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/classes/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-add`
  },
  details: {
    javascript: `var Syncano = require('syncano');
var connection = Syncano({accountKey: 'ACCOUNT_KEY'});
var Class = connection.Class;

Class.please().get({instanceName: 'INSTANCE_NAME', name: 'CLASS_NAME'}).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-details`,
    python: `import syncano
from syncano.models import Class

syncano.connect(api_key='ACCOUNT_KEY')

my_class = Class.please.get(instance_name="INSTANCE_NAME", name='CLASS_NAME')
print(my_class.description)
print(my_class.schema)

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-details`,
    curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/classes/DATA_CLASS_NAME/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-details`
  },
  update: {
    javascript: `var Syncano = require('syncano');
var connection = Syncano({accountKey: 'ACCOUNT_KEY'});
var Class = connection.Class;

var query = {
  "name":"witchers",
  "instanceName": "INSTANCE_NAME"
};
var update = {
  "description":"List of all known Witchers"
};

Class.please().update(query, update).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-edit-patch`,
    python: `import syncano 
from syncano.models import Class

syncano.connect(api_key='ACCOUNT_KEY')

class_instance = Class.please.get(instance_name='INSTANCE_NAME', name='CLASS_NAME')

class_instance.description = "New description"
class_instance.schema.add(
    {"name": "name", "type": "string"},
    {"name": "illustrator", "type": "string"}
)
class_instance.save()

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-edit-patch`,
    curl: `curl -X PATCH \
-H "X-API-KEY: ACCOUNT_KEY" \
-H "Content-Type: application/json" \
-d '{"description":"List of all known witchers",
     "schema":[
          {"type":"string","name":"name"},
          {"type":"string","name":"city", "filter_index":true}]}' \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/classes/DATA_CLASS_NAME/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-edit-patch`
  },
  delete: {
    javascript: `var Syncano = require('syncano');
var connection = Syncano({accountKey: 'ACCOUNT_KEY'});
var Class = connection.Class;

var query = {
  "name":"witchers",
  "instanceName": "INSTANCE_NAME"
};

Class.please().delete(query).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-delete`,
    python: `import syncano 
from syncano.models import Class

syncano.connect(api_key='ACCOUNT_KEY')

Class.please.delete(instance_name="INSTANCE_NAME", name="CLASS_NAME")

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-delete`,
    curl: `curl -X DELETE \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/classes/DATA_CLASS_NAME/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/class-delete`
  }
};
