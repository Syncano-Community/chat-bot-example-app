import welcome from './welcome';

import scripts from './scripts';
import scriptsEndpoint from './scriptsEndpoint';
import help from './help';
import classes from './classes';
import triggers from './triggers';
import schedules from './schedules';
import { knowIt, thanks, bye } from './other';

module.exports = {
  welcome,
  help,
  scripts,
  scriptsEndpoint,
  classes,
  triggers,
  schedules,
  knowIt,
  thanks,
  bye,

  helper: (tag) => {
    return {
      welcome: 'welcome',
      hi: 'welcome',
      hey: 'welcome',
      hello: 'welcome',

      help: 'help',
      h: 'help',

      python: 'python',
      curl: 'curl', 

      add: 'add',
      create: 'add',

      delete: 'delete',
      remove: 'delete',

      update: 'update',
      edit: 'update',
      change: 'update',

      details: 'details',
      detail: 'details',
      informations: 'details',
      information: 'details',

      lists: 'lists',
      list: 'lists',

      run: 'run',
      execute: 'run',
      launch: 'run',
      start: 'run',

      traces: 'traces',
      trace: 'traces',

      script: 'scripts',
      scripts: 'scripts',

      'script endpoint': 'scriptsEndpoint',
      'script endpoints': 'scriptsEndpoint',

      classes: 'classes',
      class: 'classes',

      triggers: 'triggers',
      trigger: 'triggers',

      schedules: 'schedules',
      schedule: 'schedules',

      javascript: 'javascript',
      js: 'javascript',

      know: 'knowIt',

      thanks: 'thanks',
      great: 'thanks',

      bye: 'bye',
      goodbye: 'bye',

    }[tag]
  }
};
