module.exports = {
  info: `Idea behind Script Endpoints is pretty simple:

  1. You create a Script Snippet.
  2. You want the Script to be run based on some external event.
  3. You create a Script Endpoint which essentially is an URL.
  4. When Script Endpoint URL is hit, it triggers a running the Script that it was connected to.
  5. Event from step 2 causes the website to make a HTTP request to the URL defined earlier
  `,

  list: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptEndpoint = connection.ScriptEndpoint;

ScriptEndpoint.please().list({instanceName: "INSTANCE_NAME"}).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-list`,
    python: `import syncano 
from syncano.models import ScriptEndpoint

syncano.connect(api_key='ACCOUNT_KEY')

script_endpoints = ScriptEndpoint.please.list(instance_name="INSTANCE_NAME")
for script_endpoint in script_endpoints:
    print(script_endpoints.name)

  For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-list`,
    curl: `curl -X GET \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/endpoints/scripts/"



For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-details`
  },

  add: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptEndpoint = connection.ScriptEndpoint;

var options = {
"name": NAME,
"script": SCRIPT_ID,
"public": true,
"instanceName": INSTANCE_NAME
};

ScriptEndpoint.please().create(options).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-add`,
    python: `import syncano
from syncano.models import ScriptEndpoint

syncano.connect(api_key='ACCOUNT_KEY')

ScriptEndpoint.please.create(
    instance_name='INSTANCE_NAME',
    name="SCRIPT_ENDPOINT_NAME",
    script=SCRIPT_ID,
    public=True
)

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-add`,
    curl: `curl -X POST \
-H "X-API-KEY: <ACCOUNT_KEY>" \
-H "Content-Type: application/json" \
-d '{"name": "say-hello",
     "script": SCRIPT_ID,
     "public":true}' \
"https://api.syncano.io/v1.1/instances/<instance_name>/endpoints/scripts/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-add`
  },

  details: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptEndpoint = connection.ScriptEndpoint;

ScriptEndpoint.please().get({instanceName: "INSTANCE_NAME", name: "NAME"}).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-details`,
    python: `import syncano 
from syncano.models import ScriptEndpoint

syncano.connect(api_key='ACCOUNT_KEY')

script_endpoint = ScriptEndpoint.please.get(
    instance_name="INSTANCE_NAME", 
    name="SCRIPT_ENDPOINT_NAME"
)

print(script_endpoint.script)

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-details`,
    curl: `curl -X GET \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/endpoints/scripts/<name>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-details`
  },

  update: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptEndpoint = connection.ScriptEndpoint;

var query = {instanceName: "INSTANCE_NAME", name: "NAME"};
var update = {script: SCRIPT_ID, public: false};

ScriptEndpoint.please().update(query, update).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-patch`,
    python: `import syncano
from syncano.models import ScriptEndpoint

syncano.connect(api_key='ACCOUNT_KEY')

ScriptEndpoint.please.update(
    instance_name='INSTANCE_NAME',
    name='SCRIPT_ENDPOINT_NAME',
    script=SCRIPT_ID,
    public=False
)

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-patch`,
    curl: `curl -X PATCH \
-H "X-API-KEY: <ACCOUNT_KEY>" \
-H "Content-Type: application/json" \
-d '{"script":1,
    "public":true,
    "description":"New description - say hello"}' \
"https://api.syncano.io/v1.1/instances/<instance_name>/endpoints/scripts/<name>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-patch`
  },

  run: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptEndpoint = connection.ScriptEndpoint;

var query = {instanceName: "INSTANCE_NAME", name: "NAME"};
var payload = {"payload":{"monster":"Manticore"}};

ScriptEndpoint.please().run(query, payload).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-run-get`,
    python: `import syncano 
from syncano.models import ScriptEndpoint

syncano.connect(api_key='ACCOUNT_KEY')

script_endpoint = ScriptEndpoint.please.get(
    instance_name='INSTANCE_NAME',
    name='SCRIPT_ENDPOINT_NAME'
)

run_script = script_endpoint.run()
print(run_script.result)

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-run-get`,
    curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
-H "Content-Type: application/json" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/endpoints/scripts/NAME/run/?monster=Manticore"

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-run-get`
  },

  delete: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptEndpoint = connection.ScriptEndpoint;

var query = {
  instanceName: "INSTANCE_NAME", 
  name: "NAME"
};

ScriptEndpoint.please().delete(query).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-delete`,
    python: `import python
from syncano.models import ScriptEndpoint

syncano.connect(api_key='ACCOUNT_KEY')

ScriptEndpoint.please.delete(instance_name='INSTANCE_NAME', name='SCRIPT_ENDPOINT_NAME')

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-delete`,
    curl: `curl -X DELETE \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/endpoints/scripts/<name>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-delete`
  },

  traces: {
    lists: {
      javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptEndpointTrace = connection.ScriptEndpointTrace;

var query = {instanceName: "INSTANCE_NAME", scriptEndpointName: "NAME"};

ScriptEndpointTrace.please().list(query).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-traces-list`,
      python: `import syncano
from syncano.models import ScriptEndpointTrace

syncano.connect(api_key='ACCOUNT_KEY')

traces = ScriptEndpointTrace.please.all(
    instance_name="INSTANCE_NAME",
    script_endpoint_name="SCRIPT_ENDPOINT_NAME"
)

for trace in traces:
    print(trace.id)
    print(trace.status)
    print(trace.result)



For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-traces-list`,
      curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/endpoints/scripts/NAME/traces/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-traces-list`
    },
    details: {
      javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptEndpointTrace = connection.ScriptEndpointTrace;

var query = {
  instanceName: "INSTANCE_NAME", 
  scriptEndpointName: "NAME",
  id: 7
};

ScriptEndpointTrace.please().get(query).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-traces-details`,
      python: `import syncano
from syncano.models import ScriptEndpointTrace

syncano.connect(api_key='ACCOUNT_KEY')

trace = ScriptEndpointTrace.please.get(
    instance_name="INSTANCE_NAME",
    script_endpoint_name='SCRIPT_ENDPOINT_NAME',
    id=TRACE_ID
)

print(trace.status)
print(trace.result)

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-traces-details`,
      curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/endpoints/scripts/NAME/traces/TRACE_ID/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/endpoints-scripts-traces-details`
    }
  }
}
