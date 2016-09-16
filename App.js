import React from 'react';
import _ from 'lodash';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import PushNotification from 'react-native-push-notification';
import Navbar from './Navbar';

import DefaultMessages from './data/messages';
import Dictionary from './data/dictionary';

import ActionsMessages from './api/messages';
import ActionsDevices from './api/devices';


PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
      console.log(token);
      ActionsDevices.addDevice(token);
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION::', notification );
    },

    // // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications) 
    senderID: "<YOUR_SENDER_ID>",

    // // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // // Should the initial notification be popped automatically
    // // default: true
    popInitialNotification: true,

    // /**
    //   * (optional) default: true
    //   * - Specified if permissions (ios) and token (android and ios) will requested or not,
    //   * - if not, you must call PushNotificationsHandler.requestPermissions() later
    //   */
    requestPermissions: false,
});
PushNotification.requestPermissions();


export default class SyncanoChatBot extends React.Component {
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

  componentWillMount() {
    this._isMounted = true;
    this.setState({ messages: DefaultMessages });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    if (!this.state.nextPage) {
      ActionsMessages.getMessages(this.setOldMessages)
    } else {
      ActionsMessages.loadMoreMessages(this.state.nextPage, this.setOldMessages)
    }
  }

  setOldMessages(oldMessages, hasNextPage, nextPage) {
    this.setState({ isLoadingEarlier: true });

    if (this._isMounted === true) {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.prepend(previousState.messages, oldMessages),
          isLoadingEarlier: false,
          hasNextPage,
          nextPage
        };
      });
    };
  }

  onSend(messages = []) {
    const lastMessage = messages[0];

    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, lastMessage),
      };
    });

    ActionsMessages.addMessage(lastMessage, () => {
      this.setState({ typingText: 'Syncano is typing...' });
      this.answerDocs(lastMessage);
    });
  }

  answerDocs(message) {
    let lowerMsgText = _.toLower(message.text);
    lowerMsgText = lowerMsgText.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, '');

    let messageArray = lowerMsgText.split(' ');
    const tempMessageArray = _.remove(messageArray, (item) => item === 'script' || item === 'scripts' || item === 'endpoint' || item === 'endpoints');

    if (tempMessageArray.length >= 2)
      messageArray.push('script endpoint')
    else
      messageArray = _.concat(messageArray, tempMessageArray);

    const receive = this.setAnswer(messageArray);
    this.onReceive(receive);
  }

  setAnswer(messageArray) {
    const answer = this.mapDictionary(messageArray);

    const customMsg = answer.info ? answer.info : `Sorry, I don't know anything :( It looks like you should more refine yout message.`

    return (!answer.hasOwnProperty('image') && _.isObject(answer)) ? customMsg : answer;
  }

  mapDictionary(messageArray) {
    let tempAnswer = Dictionary;
    const keys = _.keys(tempAnswer);
    const times = keys.length * messageArray.length;

    messageArray = _.map(messageArray, (word) => Dictionary.helper(word));

    _.times(times, () => {
      _.map(messageArray, (word) => {
        tempAnswer = tempAnswer[word] || tempAnswer;
      });
    })

    return tempAnswer;
  }

  onReceive(obj) {
    const newMessage = {
      text: obj.text || obj,
      user: {
        _id: 2,
        name: 'Syncano',
        avatar: 'https://pbs.twimg.com/profile_images/692354435738161152/UAkVM9-p.png'
      },
      image: obj.image || null
    }

    ActionsMessages.addMessage(newMessage, (newMessage) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, newMessage),
          typingText: null
        };
      });
    });
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }  

  render() {
    return (
      <View style={styles.appContainer}>
        <Navbar />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          loadEarlier={this.state.hasNextPage}
          onLoadEarlier={this.onLoadEarlier}
          isLoadingEarlier={this.state.isLoadingEarlier}

          user={{
            _id: 1, 
            name: 'Developer'
          }}

          renderFooter={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});
