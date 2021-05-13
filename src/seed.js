/* eslint-disable no-plusplus */
// eslint-disable-next-line import/prefer-default-export
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'uSPPkYdUcQfYWcg2txDdgkmicIy1',
      username: 'Aman_Rathod',
      fullName: 'Aman Kumar Singh',
      emailAddress: 'aksrathod07@gmail.com',
      following: ['oEBaCTXag2ag26873VklObjqPNt2'],
      followers: [
        'oEBaCTXag2ag26873VklObjqPNt2',
        'bkuWtBO1cGZ3DeHv0Pay6FFbgip2',
        'Fv8nEUtuCZgjMI0Ex92JJjphqhy1'
      ],
      dateCreated: Date.now()
    },
    {
      userId: 'oEBaCTXag2ag26873VklObjqPNt2',
      username: 'Ranveer',
      fullName: 'Ranveer_Sequeira',
      emailAddress: 'bittu90670@gmail.com',
      following: [],
      followers: ['uSPPkYdUcQfYWcg2txDdgkmicIy1'],
      dateCreated: Date.now()
    },
    {
      userId: 'bkuWtBO1cGZ3DeHv0Pay6FFbgip2',
      username: 'Abhinav',
      fullName: 'Abhinav_Jha',
      emailAddress: 'as7677379564@gmail.com',
      following: [],
      followers: ['uSPPkYdUcQfYWcg2txDdgkmicIy1'],
      dateCreated: Date.now()
    },
    {
      userId: 'Fv8nEUtuCZgjMI0Ex92JJjphqhy1',
      username: 'Dummy',
      fullName: 'Dummy',
      emailAddress: 'dummy@gmail.com',
      following: [],
      followers: ['uSPPkYdUcQfYWcg2txDdgkmicIy1'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: 'oEBaCTXag2ag26873VklObjqPNt2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'Aman_Rathod',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'Abhinav_jha',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
