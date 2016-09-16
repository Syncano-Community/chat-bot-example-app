import Syncano from 'syncano';
import _ from 'lodash';

const connection = Syncano({
    apiKey: '<YOUR_API_KEY>',
    defaults: {
      instanceName: '<YOUR_INSTANCE_NAME>'
  }
});

const { DataObject } = connection;

module.exports = {

  addMessage: (message, callback) => {
    DataObject.please({className: 'messages'}).create(message)
      .then((msg) => {
        console.log('Message::', msg);
        const newMessage = {
          _id: msg.id,
          createdAt: msg.created_at,
          text: msg.text,
          user: msg.user,
          image: msg.image
        };
        callback(newMessage);
      });
  },

  getMessages: (callback) => {
    DataObject.please({className: 'messages'}).list().pageSize(10).orderBy('-created_at')
      .then((res, raw) => {
        const oldMessages = _.map(raw.objects, (msg) => {
          return {
            _id: msg.id,
            createdAt: msg.created_at,
            text: msg.text,
            user: msg.user,
            image: msg.image
          }
        });
        callback(oldMessages, res.hasNext(), res.next);
      });
  },

  loadMoreMessages: (nextPage, callback) => {
    nextPage()
      .then((objects) => {
        const oldMessages = _.map(objects, (msg) => {
          return {
            _id: msg.id,
            createdAt: msg.created_at,
            text: msg.text,
            user: msg.user,
            image: msg.image
          }
        });
        callback(oldMessages, objects.hasNext(), objects.next);
      });
  }

}
