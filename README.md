# chat-bot-example-app

For sure you use a Messanger everyday. What about create a mobile application which is similar to that, but bot will receive for the messages from user and you can expand a keywords on which ones bot will know the answers?

We will also implement Push Notifications Socket thanks to Syncano which will send notifications to all devices where your application has run.
What more we will create one application which will be ready to use on both platform iOS and Android.

In this application user can ask about everything, and bot will answer on that what you defined him. In our example bot know answers from Syncano Documentation and API References. So, you can ask for example 

`How to create Class in javascript?`

and bot tell you that. Thanks to Syncano all a conversation will be saved, but for simplification all users will be able to see history all conversation. What more all users devices which will use this chat will be saved in Syncano. Thanks to this you will be able to send Notifications to their devices.

![](https://www.syncano.io/blog/content/images/2016/09/demo.gif)

Practise which we will use is creation Schedule for send Notifications on specific time. It can be weekly reminders from our bot. You can also improve this application and send Notification every time when new message came like Messanger do it.

For this application we will use some helpers. For sure the biggest will be react-native as main a framework for building native apps. Secondly, of course we will need Syncano as our backend service. For faster development we will bring into play library named `Gifted Chat` for react-native what will save us time on creating views. Thanks to that we will can focus only on logic and integration our application with Syncano.

This tutorial will guide you through all steps from set up Syncano Instance, write logic of your application in React Native to run your ChatBot on your device.

But, if you want see results before build your own custom application please, visit [Github Project ----- LINK] where you can download and setup this application for both platforms iOS and Android.

#Step 1: Setting up Syncano

I hope that you have already created account and instance in Syncano. Next, you must create structure for our messages data. That means you have to create Data Class in Syncano. Second what you have to do in Syncano is set config for Push Notifications on Instance which one your application will be launched.

You can create it using our Dashboard interface or by API calls. In this article, we will show you how do that using your [Syncano Dashboard](https://dashboard.syncano.io/).

##Create Class for Messages

* Log in to the [Dashboard](https://dashboard.syncano.io/). Don’t have an account yet? [Create a new one](https://dashboard.syncano.io/#/signup)
* Choose existing Instance (Project), or add a new one
* Go to the Data Classes panel from the left sidebar and click the `ADD` button located at the top right corner
* Create a Data Class named `messages` with a schema that matches the screenshot below:

![Messages class on Syncano](https://www.syncano.io/blog/content/images/2016/09/messages--class-2.png)

##Add config to Push Notifications
For both platforms process of configuration Push Notification Socket looks different. For full tutorial how to configure that I refer you to our Documentation where it is explained step by step.

[Android - GCM Socket Configuration](http://docs.syncano.io/docs/push-notification-sockets-android)

[iOS - APNs Socket Configuration](http://docs.syncano.io/docs/push-notification-sockets-ios)

>Note: In our application we will need `Sender ID` from your app in Google Developers Console, so be sure that you made both this steps.

##Create script for send Notifications

* Go to the `Scripts` in Snippets section from left sidebar and click the `ADD` button located at the top right corner
* Fill `Label` (for example `send_random_notification`)
* We wrote our script in NodeJS `Runtime Environment`, but you can write it in your favourite language
* `Description` field is optional, but good practise is describing all, especially when we have much Sockets or Snippets.

After created script you can write code responsible for sends messages.
###Sample code:
``` language-javascript
var Syncano = require("syncano");
var _ = require("lodash");

var connection = Syncano({
    apiKey: '<YOUR_API_KEY>',
    defaults: {
      instanceName: '<YOUR_INSTANCE_NAME>'
  }
});

var sampleMessages = [
    "Hello, how are you?",
    "Do you remember about me?",
    "Ask me something about Syncano",
    "Syncano is the best! :)"
];

var randomMessage = _.sample(sampleMessages);

var GCMDevice = connection.GCMDevice;
var GCMMessage = connection.GCMMessage;

var APNSDevice = connection.APNSDevice;
var APNSMessage = connection.APNSMessage;

GCMDevice.please().list().then(function(devices) {
    var registration_ids = _.map(devices, (device) => device.registration_id);
    var content = {
            registration_ids,
            environment: 'development',
            data: {message: randomMessage}
    };

    GCMMessage.please().create({content}).then(function(message) {
        console.log('Android Message sent:', message.content.data.message);
    });
});

APNSDevice.please().list().then(function(devices) {
    var registration_ids = _.map(devices, (device) => device.registration_id);
    var content = {
            registration_ids,
            environment: 'development',
            aps: {alert: randomMessage}
    };
    APNSMessage.please().create({content}).then(function(message) 
        console.log('iOS Message sent:', message.content.aps.alert);
    });
});
```

Thanks to this code whenever you run your script notification will be send to everyone device which we added by our application. What's mean every device whereof users launched our chatbot get this notification. Awesome, right?

##Configure Schedule for regular notifications
Now, we can create schedule for our new script. Thanks to this we would be able to send device regularly. For example every week at Monday we will be able to send some motivation notification encouraging to talk with our bot.

* Go to Sockets list, click `ADD` button located at the top right corner. Then again click `ADD` in `Schedule` section
* Fill `Label` by name your new Schedule
* Choose script which you created before
* Decide how often you want the script should be runs. You can choose between interval or crontab. More about `Crontabs` you can read [here](http://docs.syncano.io/docs/schedules#section-creating-schedule-socket-with-a-crontab-parameter)

#Create your ChatBot step-by-step
If you don't want make this application from zero you can go to a [Github Project ---- Link] and download ready project and only connect it to your instance on Syncano.

First, I refer you to React Native documentation for look at [Getting Started Section](https://facebook.github.io/react-native/docs/getting-started.html). It's basic installation React Native CLI. Thanks to this we can very simply create our first project in React Native. As it says `You will need Xcode, node.js, the React Native command line tools, and Watchman.` So, be sure that you have all of them.

##Dependencies
Next, we have to install all dependencies to our project. For that be sure that your `package.json` looks like: 
```  language-json
  "dependencies": {
    "lodash": "4.15.0",
    "react": "15.3.1",
    "react-native": "0.33.0",
    "react-native-gifted-chat": "0.0.10",
    "react-native-push-notification": "2.1.0",
    "react-native-system-notification": "0.1.11",
    "syncano": "1.0.26"
  },
  "devDependencies": {
    "babel-plugin-add-module-exports": "0.2.1",
    "babel-plugin-lodash": "^3.2.8",
    "babel-plugin-transform-inline-environment-variables": "6.8.0",
    "babel-preset-es2015": "6.14.0",
    "babel-preset-react-native": "1.9.0"
  }
```
After that run command `npm install` in your project folder.

##Use this same code for both platforms
To use from this same code on both platforms we will use a little trick.
Fill your `index.ios.js` and `index.android.js` files by this same code:
```  language-javascript
import {
  AppRegistry,
} from 'react-native';

import App from './App';

AppRegistry.registerComponent('chatbotSyncano', () => App);
```

Thanks to this our application will use `App` file as main Component for both platforms. For that we have to create this file named `App.js` in main folder our project.
Full preview of this file you can see on Github, so for this tutorial I will just explain you what's going on.

##Main Component
First of all, on component constructor we have to defined our initial state and bind all methods for properly context.

``` language-javascript
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      nextPage: null,
      hasNextPage: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.setOldMessages = this.setOldMessages.bind(this);
  }
```

###What all of this methods do?

####this.onSend()
Method which calls whenever user type and send message to our bot. Tasks for this function are:

* append new message to state from where all messages displays
* call action to our API for saved new message to Data Class on Syncano and set information in state about that bot is currently typing answer
* call next function where user message will be prepare to seek answer

####this.onReceive()
This function first prepare answer from bot for save it to state and Syncano Data Class and saved it. What's more, in this method our logic associated with answering ends, so we set `typingText: null` for don't display footer with info about that bot actually is typing.

####this.onLoadEarlier()
Here we check that is there more messages than we have had actually. This function is call whenever user clicks button for load more messages. For sure, on first call this method we don't have `nextPage` so we call function from api which is responsible for get first 10 messages from history. We probably have more than 10 messages in history in normal uses chat application. So, in second and each next click on button we probably have `nextPage`. For that we call other method from api called `lodadMoreMessages` which do nothing more like make function which was return from Syncano. Task for that is gets next page of our Data Objects. We can define how much messages should be returned on each call this function by set parameter `pageSize()` in our call to Syncano.
As callback to these api method we are having this same function named `setOldMessages`. 

####this.setOldMessages()
What we do here? Nothing specially, we just pick up parameters which are returned from our api functions and set these to our store for later use in our application lifecycle.

* oldMessages- messages returned from Data Object in Syncano. We set `pageSize` parameter to 10, so we usually have here 10 messages returned from Syncano. One case when we don't have returned 10 objects is that we don't have 10 more messages which wasn't downloaded early. In this case we have second parameter
* hasNextPage- it's boolean parameter from called `res.hasNext()` function which return Syncano. It's just check that we have more Data Objects in our Data Class to gets.
* nextPage- this method return also Syncano for possibility gets our Data Objects in portion. We rarely want to get all our Data Objects in one call, usually we have paggination or something like that for sharing our data in smaller portions.

####this. renderFooter()
We use this functions as props for GiftedChat Component. Thanks to this we can show info about that bot type actually in small popup. So in body this function we just check that bot is actually writing and if it's true return styled popup which will be rendered by GiftedChat Component in correct place.

###Methods for answer logic:

####this.answerDocs()
Here message which user has send are prepare in respect of exceptions. For example in this function we get rid of all special characters like question or exclamation mark. For our bot it is unnecessary. Due to the fact that answers our bot are fragments from Syncano Documentation and API references we have to distinguish that for example user ask about Script or Script Endpoint, so it's happen exactly in this method and next call `setAnswer()` function for search correct answer for user inquiry, saved it to variable and transmission it to the last step of responding.

####this.setAnswer()
In previous method we have prepared user message. Here we will prepare answer message. First, we call `mapDictionary` helper where the greater part of our magic-logic happens. Next we set custom answer which will be reply if inquiry from user won't be precise. We expect also that bot response could have image, so if it haven't it and it's still object means that inquiry wasn't precise. In other case we return founded answer to `setAnswer` method.

####this.mapDictionary()
First, we define our temp answer as big object with all of our possible responses. Next, we are getting all keys from current object as array. Then number of keys from this array multiplied by length of our array with each word send from user give us confidence that each word from user will be tested with all of our possible responses. Here keys from our object with possible responses are important, but that we will later. In the meantime we use our next helper where we can define which words have to be associated with responses. For example if user ask about `scripts` it should lead to this same response what `script`. This same in case `js` => `javascript` or `add` => `create`. On the end we just return founded answer.

##Data for bot answers
For that we just created new folder named `data` where we will fill responses for our bot. We can divide thematically by create separately files for each theme of response. We divided it as each Socket, and also we added some standard answers for messages from user as `hi` or `welcome`. Next we should take care about that our user could ask our bot properly. For that we can create `help` command on which bot will answer how to ask that he knew the answer. The more defined answers that our bot will be more flexible.

All of our possible answers we linked in one file named `dictionary.js`. That here we import all of our files with answers for better tidiness. What more here is our helper for define which words should be combined to which answers.

##Save devices for later uses by Notifications
For send notifications to devices we have to have registration id each device. For that we will use `react-native-push-notification` library. If you followed for this tutorial you should have this library installed.

###Get at registration ID

Next, as documentation of this library says we have to properly configure this for get registration id from users devices. For that we have to need this piece of code:
``` language-javascript
PushNotification.configure({
    onRegister: function(token) {
      console.log(token);
      ActionsDevices.addDevice(token);
    },
    onNotification: function(notification) {
        console.log( 'NOTIFICATION::', notification );
    }, 
    senderID: "<YOUR_SENDER_ID>",
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },
    popInitialNotification: true,
    requestPermissions: false,
});
PushNotification.requestPermissions();
```

As you probably see, you will need your `sender ID` from your app in Google Developers Console. If you don't know how to get this ID I invite you to Syncano Documentation: [Create your app in Google Developers Console ](http://docs.syncano.io/docs/push-notification-sockets-android#create-your-app-in-google-developers-console)

At the end configuration this library we have to install it on android and iOS platform. For do that I recommend you see to README of this library [for iOS](https://github.com/zo0r/react-native-push-notification#ios-installation) and [for Android](https://github.com/zo0r/react-native-push-notification#android-installation).

###Save device on Syncano

We also used this configuration for saved device to Syncano whenever user launch your application on his device. We do that by called `ActionsDevices.addDevice(token)` which we defined in our API. As parameter we pass token which is object with registration id and operating system of the user device.
So, let's look at this method in our api:
``` language-javascript
  addDevice: ({ token, os }) => {
    const device = {
      label:"DEVICE_NAME",
      registration_id: token
    };
    console.log(os);

    os === 'android' && GCMDevice.please().list().then((devices) => {
      console.log('Android Devices::', devices);
      const isDevice = _.find(devices, { registration_id: token });

      !isDevice && GCMDevice.please().create(device).then((device) => {
        console.log('Android Device::', device);
      });
    });

    os === 'ios' && APNSDevice.please().list().then((devices) => {
      console.log('iOS Devices::', devices);
      const isDevice = _.find(devices, { registration_id: token });

      !isDevice && APNSDevice.please().create(device).then((device) => {
        console.log('iOS Device::', device);
      });
    });
  }
```

First, our passed token is object with two keys: registration id and operating system. So here we can pick up it with a little tricky way. Instead of passed just token and then appeal like `token.token` and `token.os` we can use destructing and use `({ token, os })` notation. Now we have two variables with registration id of user device and his operation system. So, based on OS we can make properly call to api for iOS and android devices. Of course first we have to check if current device wasn't already saved in Syncano. For that we list all devices and try to find current user device in all saved devices. If we don't find it, we save new device. For now we can send notifications to this device. For test it you can launch chatbot application in your device and run your script which push messages to devices.

#How to run chatbot on your device
Very clearly it's described on official documentation for react native, so I refer you there. You can find how to run your project on [Android](https://facebook.github.io/react-native/docs/running-on-device-android.html) and [iOS](https://facebook.github.io/react-native/docs/running-on-device-ios.html).
There is also other way for development your application. We can run it on device emulator. For do that run your xcode project which you can find in `ios` folder in your project root directory. Then just click `Run` and wait until your app build.

![screen-how-to-run-ios-emulator](https://www.syncano.io/blog/content/images/2016/09/run-ios-emulator.png)

#How you can improve your mobile application
Your application always can be better, below we give you some ideas, how you can made your `Messanger` best application.
##Real-time data with Channels
Thanks to connection with [Real-time channel](http://docs.syncano.io/docs/realtime-communication) you will be able to create chat in real time. It is really use case when you want to change your bot to real people whose could talking together. Then they could get new messages without refresh application.

##Users and Groups
You can also implement Users & Groups to implement register and login to your chat. It give you possibility to load messages history only current user which is actually logged in. Secondly, you would be able to create Groups where could belongs specific Users.

##Triggers for notifications whenever you teach your bot new answers
If you move all your bot answers to new Data Class you can use Trigger to notifications whenever you add new answer to this Data Class. For example, you learned your bot answers from computer games domain. Then Trigger will send notifications to all of your users something like: `Hi, no you can ask me about computer games domain`.

#Conclusion
In this tutorial you learned how simply is build mobile application for iOs and Android platform with push notifications by react native and Syncano. Now you are able to send notifications to all devices which launched your chatbot. Use that to remind your users about your application and information about new features which you will create. Some of ideas for improve the application you can find above, so check this out and let us know what you think about it on Twitter by tweeting [@Syncano](https://twitter.com/syncano).

Also feel free to ask any questions you have in the comments under this post, by [joining our Slack community](https://www.syncano.io/slack-invite/) channel, or by writing to our support team at [support@syncano.io](mailto:support@syncano.io). Good luck!
