module.exports = {
  info: 'A Script is a very powerful tool. Just like with code, you can do a lot with it. Additionally, Syncano gives you many ways to run Scripts. This is where you can get creative.',

  list: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Script = connection.Script;

Script.please().list({instanceName: "INSTANCE_NAME"}).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-scripts`,
    python: `import syncano 
from syncano.models import Script 

connection = syncano.connect(api_key="ACCOUNT_KEY")

scripts = Script.please.list(instance_name="INSTANCE_NAME")

for script in scripts:
    print(script.label

  For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-scripts`,
    curl: `curl -X GET \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/snippets/scripts/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-scripts`
  },

  add: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Script = connection.Script;

var options = { 
  "label":"Kill a Monster",
  "source":"ARGS.monster ? console.log(\"Killed\" + ARGS.monster) : console.log(\"Nothing to kill\")",
  "runtime_name":"nodejs",
  "description":"Kills chosen monster",
  "instanceName": "INSTANCE_NAME"
};

Script.please().create(options).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-add`,
    python: `import syncano
from syncano.models import Script

connection = syncano.connect(api_key="ACCOUNT_KEY")

Script.please.create(
  label="kill a monster",
  source="if \"monster\" in ARGS:\n print \"Killed \" + ARGS[\"monster\"]\nelse:\n print \"Nothing to kill\"",
  runtime_name="python",
  description="this codebox kills a monster",
  instance_name="INSTANCE_NAME")

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-add`,
    curl: `curl -X POST \
-H "X-API-KEY: <ACCOUNT_KEY>" \
-H "Content-Type: application/json" \
-d '{"label":"Kill a Monster",
     "source":"if \"monster\" in ARGS:\n print \"Killed \" + ARGS[\"monster\"]\nelse:\n print \"Nothing to kill\"",
     "runtime_name":"python",
     "description":"Kills chosen monster"}' \
"https://api.syncano.io/v1.1/instances/<instance_name>/snippets/scripts/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-add`
  },

  details: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Script = connection.Script;

Script.please().get({instanceName: "INSTANCE_NAME", id: 7}).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-details`,
    python: `import syncano 
from syncano.models import Script

connection = syncano.connect(api_key='ACCOUNT_KEY')

script = Script.please.get(id="SCRIPT_ID", instance_name="INSTANCE_NAME")

#prints codebox name
print(script.label)

# prints codebox source code
print(script.source)

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-details`,
    curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/snippets/scripts/SCRIPT_ID/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-details`
  },

  update: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Script = connection.Script;

var query = {
  instanceName: "INSTANCE_NAME", 
  id: 7
};
var update = { 
  label: "To Kill a Monster",
  description: "Kills any chosen monster"
};

Script.please().update(query, update).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-update-patch`,
    python: `import syncano 
from syncano.models import Script

connection = syncano.connect(api_key='ACCOUNT_KEY')

script = Script.please.update(
    id="SCRIPT_ID",
    instance_name="INSTANCE_NAME"
    description="new description")

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-update-patch`,
    curl: `curl -X PATCH \
-H "X-API-KEY: ACCOUNT_KEY" \
-H "Content-Type: application/json" 
-d '{"label":"Kill a MONSTER",
     "description":"Kills EVERY chosen monster"}' \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/snippets/scripts/SCRIPT_ID/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-update-patch`
  },

  run: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Script = connection.Script;

var query = {instanceName: "INSTANCE_NAME", id: 7};
var payload = {"payload":{"KEY":"VALUE"}}

Script.please().run(query, payload).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-run`,
    python: `import syncano 
from syncano.models import Script

connection = syncano.connect(api_key="ACCOUNT_KEY)

trace = Script.please.run(
    instance_name="INSTANCE_NAME", 
    id="SCRIPT_ID",
    payload={'KEY': 'VALUE'}
)

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-run`,

    curl: `curl -X POST \
-H "X-API-KEY: ACCOUNT_KEY" \
-H "Content-Type: application/json" \
-d '{"payload":{"KEY":"VALUE"}}' \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/snippets/scripts/SCRIPT_ID/run/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-run`
  },

  delete: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Script = connection.Script;

var query = {
  instanceName: "INSTANCE_NAME", 
  id: 7
};

Script.please().delete(query).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-delete`,
    python: `import syncano
from syncano.models import Script

connection = syncano.connect(api_key="ACCOUNT_KEY")

Script.please.delete(id="SCRIPT_ID", instance_name="INSTANCE_NAME")

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-delete`,
    curl: `curl -X DELETE \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/snippets/scripts/SCRIPT_ID/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-delete`
  },

  traces: {
    lists: {
      javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptTrace = connection.ScriptTrace;

ScriptTrace.please().list({instanceName: "INSTANCE_NAME", scriptId: 7}).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-traces`,
      python: `import syncano
from syncano.models import ScriptTrace

connection = syncano.connect(api_key="ACCOUNT_KEY)

traces = ScriptTrace.please.list(
    script_id="SCRIPT_ID",
    instance_name="INSTANCE_NAME")

for trace in traces:
    print(trace.status)
    print(trace.result)

    For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-traces`,
      curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/snippets/scripts/SCRIPT_ID/traces/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-traces`
    },
    details: {
      javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScriptTrace = connection.ScriptTrace;

var query = {
  instanceName: "INSTANCE_NAME", 
  scriptId: 7, 
  id: 7
};

ScriptTrace.please().get(query).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-details`,
      python: `import syncano
from syncano.models import ScriptTrace

connection = syncano.connect(api_key="ACCOUNT_KEY)

trace = ScriptTrace.please.get(
    script_id=SCRIPT_ID,
    id=TRACE_ID,
    instance_name="INSTANCE_NAME")

print(trace.status)
print(trace.result)

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-details`,
      curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/snippets/scripts/SCRIPT_ID/traces/TRACE_ID/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/script-list-details`
    }
  }
}
