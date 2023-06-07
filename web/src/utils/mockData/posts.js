export const postList = [{
    id: 1,
    owner: {
      name: 'Dani',
      vid: 'danitheturtle'
    },
    time: '2021-09-21T04:00:00.000Z',
    content: 'matrix overriding invoice Accountability Investor Savings flexibility Markets Borders ROI Iowa New Grocery copy Handmade Home Tasty Azerbaijan seamless'
  }, {
    id: 2,
    owner: {
      name: 'Dani',
      vid: 'danitheturtle'
    },
    time: '2021-09-19T19:19:59.000Z',
    content: 'Granite Squares Denar Games index RAM transmitter zero Self-enabling SMTP PNG innovate Accounts Practical Creative deposit bypassing Buckinghamshire Intranet Graniteth',
    replyPosts: [{
      id: 5,
      parent: 2,
      owner: {
        name: 'Alex',
        vid: 'slamongflobo'
      },
      time: '2021-09-19T19:19:59.000Z',
      content: 'hahahaha, thats fun',
      reactions: [
        { type: 'like', who: ['otterbotter', 'slamongflobo'] },
        { type: 'shock', who: ['otterbotter', 'rawb', 'profunikitty'] },
      ],
      replyPosts: [{
        id: 6,
        parent: 5,
        owner: {
          name: 'Dani',
          vid: 'danitheturtle'
        },
        time: '2021-09-15T19:19:59.000Z',
        content: 'I know right?!',
        replyPosts: [{
          id: 100,
          parent: 6,
          owner: {
            name: 'Alex',
            vid: 'slamongflobo'
          },
          time: '2021-09-15T19:20:15.000Z',
          content: 'Hell Yes?!'
        }]
      }]
    }, {
      id: 7,
      parent: 2,
      owner: {
        name: 'Meghan',
        vid: 'otterbotter'
      },
      time: '2021-09-19T19:19:59.000Z',
      content: 'The pancakes are infinite and so is my slap'
    }, {
      id: 8,
      parent: 2,
      owner: {
        name: 'Meghan',
        vid: 'otterbotter'
      },
      time: '2021-10-19T19:19:59.000Z',
      content: 'Random words are fun to write sometimes. yis'
    }, {
      id: 9,
      parent: 2,
      owner: {
        name: 'Dani',
        vid: 'danitheturtle'
      },
      time: '2021-11-01T19:19:59.000Z',
      content: 'yis'
    }]
  }, {
    id: 3,
    owner: {
      name: 'Dani',
      vid: 'danitheturtle'
    },
    time: '2021-09-19T19:19:59.000Z',
    content: 'this is a test3'
  }, {
    id: 4,
    owner: {
      name: 'Dani',
      vid: 'danitheturtle'
    },
    time: '2021-09-19T19:19:59.000Z',
    content: 'this is a test4'
  }];