module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hi Developer, sure! Just type what do you need to know and I tell you all what I know :)',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Syncano',
      avatar: 'https://pbs.twimg.com/profile_images/692354435738161152/UAkVM9-p.png'
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hi Syncano, I want to build some awesome application on Syncano, could you tell me something about how to do this?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer'
    },
  },
];
