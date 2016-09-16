module.exports = {
  info: 'Schedule Sockets are one of the available ways of running your Snippet Scripts. Thanks to Schedules you can execute Scripts at a desired date (e.g. every Thursday at 9PM) and/or time interval (e.g. every 5 minutes).',
  list: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Schedule = connection.Schedule;

Schedule.please().list({instanceName: "INSTANCE_NAME"}).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-list`,
    python: `import syncano
from syncano.models import Schedule

syncano.connect(api_key='ACCOUNT_KEY')

schedules = Schedule.please.list(instance_name="INSTANCE_NAME")

for schedule in schedules:
  print(schedule.label)
For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-list`,
curl: `
curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/schedules/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-list`
  },
  add: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Schedule = connection.Schedule;

var options = {
  label: "Drink potions daily",
  script: SCRIPT_ID,
  crontab: "0 9 * * *",
  instanceName: "INSTANCE_NAME"
};

Schedule.please().create(options).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-add`,
    python: `import syncano
from syncano.models import Schedule

syncano.connect(api_key='ACCOUNT_KEY')

Schedule.please.create(
    instance_name="INSTANCE_NAME",
    label="Drink potions daily",
    codebox=CODEBOX_ID,
    crontab="0 9 * * *")
For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-add`,
    curl: `curl -X POST \
-H "X-API-KEY: ACCOUNT_KEY" \
-H "Content-Type: application/json" \
-d '{"label":"Drink potions daily",
     "description": "Schedule description",
     "script": SCRIPT_ID, 
     "crontab": "0 9 * * *",
     "timezone": "UTC"}' \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/schedules/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-add`
  },
  details: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Schedule = connection.Schedule;

Schedule.please().get({instanceName: "INSTANCE_NAME", id: SCHEDULE_ID}).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-details`,
    python: `import syncano
from syncano.models import Schedule

syncano.connect(api_key='ACCOUNT_KEY')

schedule = Schedule.please.get(instance_name="INSTANCE_NAME", id=SCHEDULE_ID)

print(schedule.label)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-details`,
    curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/schedules/SCHEDULE_ID/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-details`
  },
  update: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Schedule = connection.Schedule;

var query = {
  id: 7,
  instanceName: "INSTANCE_NAME"
};
var update = {
  "label":"Drink potions every day",
  "crontab": "0 9 * * *"
};

Schedule.please().update(query, update).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-update-patch`,
    python: `from syncano.models import Schedule
import syncano

syncano.connect(api_key="ACCOUNT_KEY")

Schedule.please.update(
    instance_name="INSTANCE_NAME",
    id=SCHEDULE_ID,
    crontab="0 9 * * *" # new crontab to update to)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-update-patch`,
    curl: `curl -X PATCH \
-H "X-API-KEY: <ACCOUNT_KEY>" \
-H "Content-Type: application/json" \
-d '{"label":"Drink potions every day",
    "script":2,
    "crontab": "0 9 * * *",
    "timezone":"UTC",
    "description":"New Description"}' \
"https://api.syncano.io/v1.1/instances/<instance_name>/schedules/<schedule_id>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-update-patch`
        },
  delete: {
    javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var Schedule = connection.Schedule;

var query = {
  id: SCHEDULE_ID,
  instanceName: "INSTANCE_NAME"
};

Schedule.please().delete(query).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-delete`,
    python: `import syncano
from syncano.models import Schedule

syncano.connect(api_key='ACCOUNT_KEY')

Schedule.please.delete(instance_name="INSTANCE_NAME", id=SCHEDULE_ID)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-delete`,
    curl: `curl -X DELETE \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/schedules/<schedule_id>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-delete`
  },
  traces: {
    lists: {
      javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScheduleTrace = connection.ScheduleTrace;

ScheduleTrace.please().list({instanceName: "INSTANCE_NAME", scheduleId: SCHEDULE_ID}).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-traces-list`,
      python: `import syncano
from syncano.models import ScheduleTrace

syncano.connect(api_key='ACCOUNT_KEY')

traces = ScheduleTrace.please.list(
    instance_name="INSTANCE_NAME",
    schedule_id=SCHEDULE_ID
)

# Print the trace object itself, its status and the result of the trace
for trace in traces:
    print(trace.id)
    print(trace.status)
    print(trace.result)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-traces-list`,
      curl: `curl -X GET \
-H "X-API-KEY: ACCOUNT_KEY" \
"https://api.syncano.io/v1.1/instances/INSTANCE_NAME/schedules/SCHEDULE_ID/traces/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-traces-list`
    },
    details: {
      javascript: `var Syncano = require("syncano");
var connection = Syncano({accountKey: "ACCOUNT_KEY"});
var ScheduleTrace = connection.ScheduleTrace;

var query = {
  instanceName: "INSTANCE_NAME", 
  scheduleId: SCHEDULE_ID, 
  id: TRACE_ID
};

ScheduleTrace.please().get(query).then(callback)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-traces-details`,
      python: `import syncano
from syncano.models import ScheduleTrace

instance = syncano.connect(api_key='ACCOUNT_KEY')

# Schedule_id is the identifier for the schedule
# Id is the identifier for a specific trace
trace = ScheduleTrace.please.get(
    instance_name="INSTANCE_NAME",
    schedule_id=SCHEDULE_ID,
    id=TRACE_ID)

print(trace.status)
print(trace.result)

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-traces-details`,
      curl: `curl -X GET \
-H "X-API-KEY: <ACCOUNT_KEY>" \
"https://api.syncano.io/v1.1/instances/<instance_name>/schedules/<schedule_id>/traces/<trace_id>/"

For more info visit: http://docs.syncano.io/v0.1.1/docs/schedules-traces-details`
    }
  }
}