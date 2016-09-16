module.exports = {
  info: 'Apart from directly running Snippet Scripts, or using CodBoxes and Schedules, Trigger Sockets are another way of executing Scripts. Trigger Sockets execute a Script when a Data Object inside selected Data Class is created, updated or deleted (depends on "signal" field value)',
  list: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Trigger = connection.Trigger;

Trigger.please().list({instanceName: "INSTANCE_NAME"}).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-list`,
    python: `import syncano
from syncano.models import Trigger

syncano.connect(api_key="ACCOUNT_KEY")

trigger_list = Trigger.please.all(instance_name="INSTANCE_NAME")

for trigger in trigger_list:
    print(trigger.label)
For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-list`,
    curl: `curl -X GET \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/triggers/"
For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-list`
  },
  add: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Trigger = connection.Trigger;

var options = {
  "label": TRIGGER_LABEL,
  "codebox": 1,
  "class": CLASS_NAME,
  "signal": "post_create",
  "instanceName": "INSTANCE_NAME"
};

Trigger.please().create(options).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-add`,
    python: `import syncano
from syncano.models import Trigger

syncano.connect(api_key="ACCOUNT_KEY")

Trigger.please.create(
    label="TRIGGER_LABEL",
    script=SCRIPT_ID,
    class_name="CLASS_NAME",
    signal="post_create",
    instance_name="INSTANCE_NAME")

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-add`,
    curl: `curl -X POST \
-H "X-API-KEY: ACCOUNT_KEY" \
-H "Content-Type: application/json" \
-d '{"label":"TRIGGER_LABEL",
     "script":1,
     "class":"DATA_CLASS_NAME",
     "signal":"post_create"}' \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/triggers/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-add`
  },
  details: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Trigger = connection.Trigger;

Trigger.please().get({instanceName: "INSTANCE_NAME", id: TRIGGER_ID}).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-details`,
    python: `import syncano
from syncano.models import Trigger

syncano.connect(api_key="ACCOUNT_KEY")

my_trigger = Trigger.please.get(id=TRIGGER_ID, instance_name="INSTANCE_NAME")

print(my_trigger.label)

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-details`,
    curl: `curl -X GET \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/triggers/<trigger_id>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-details`
  },
  delete: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Trigger = connection.Trigger;

var query = {
  instanceName: "INSTANCE_NAME",
  id: 7
};

Trigger.please().delete(query).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-delete`,
    python: `import syncano
from syncano.models import Trigger

syncano.connect(api_key="ACCOUNT_KEY")

Trigger.please.delete(id=TRIGGER_ID,instance_name="INSTANCE_NAME")

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-delete`,
    curl: `curl -X DELETE \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/triggers/<trigger_id>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-delete`
  },
  update: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Trigger = connection.Trigger;

var query = {
  instanceName: "INSTANCE_NAME",
  id: 7
};
var update = {
  "label":TRIGGER_LABEL,
  "script": 1,
  "class": CLASS_NAME,
  "signal":"post_create"
};

Trigger.please().update(query, update).then(callback);

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-update-patch`,
    python: `import syncano
from syncano.models import Trigger

connection = syncano.connect(api_key='ACCOUNT_KEY')

Trigger.please.update(
    id=TRIGGER_ID,
    signal="post_update", # Updated signal
    instance_name="INSTANCE_NAME")

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-update-patch`,
    curl: `curl -X PATCH \
-H "X-API-KEY: <ACCOUNT_KEY>" \
-H "Content-Type: application/json" \
-d '{"label":"TRIGGER_LABEL",
     "script":1,
     "class":"DATA_CLASS_NAME",
     "signal":"post_create"}' \
"https://api.syncano.io/v1.1/instances/<instance_name>/triggers/<trigger_id>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-update-patch`
  },
  traces: {
    lists: {
      javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var TriggerTrace = connection.TriggerTrace;

TriggerTrace.please().list({instanceName: "INSTANCE_NAME", triggerId: 7}).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-traces-list`,
      python: `import syncano
from syncano.models import TriggerTrace

syncano.connect(api_key='ACCOUNT_KEY')

traces = TriggerTrace.please.all(
    instance_name="INSTANCE_NAME",
    trigger_id=TRIGGER_ID)

for trace in traces:
    print(trace.id)
    print(trace.status)
    print(trace.result)

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-traces-list`,
      curl: `curl -X GET \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/triggers/<trigger_id>/traces/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-traces-list`
    },
    details: {
      javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var TriggerTrace = connection.TriggerTrace;

var query = {
  instanceName: "INSTANCE_NAME", 
  triggerId: TRIGGER_ID, 
  id: TRACE_ID
};

TriggerTrace.please().get(query).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-traces-details`,
      python: `import syncano
from syncano.models import TriggerTrace

syncano.connect(api_key="API_KEY")

traces = TriggerTrace.please.get(
    instance_name="INSTANCE_NAME",
    trigger_id=TRIGGER_ID,
    id=TRACE_ID)

print(traces.status)
print(traces.result)

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-traces-details`,
      curl: `curl -X GET \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/triggers/<trigger_id>/traces/<trace_id>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/triggers-traces-details`
    }
  }
}