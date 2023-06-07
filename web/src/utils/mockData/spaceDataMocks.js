export const managedSpaces = [{
    __typename: 'UserProfileSpace',
    vid: 'danitheturtle',
    uid: 'daniUserId',
    name: 'Dani',
    //both descriptions are max-length
    descriptionShort: 'Making humanitaria happen',
    descriptionLong: "Hi I'm Dani! Queer anarchist with solarpunk dreams. I like playing games and roleplaying with friends.",
    feature: {
        __typename: 'GalleryFeature',
        images: [
            { img: 'https://via.placeholder.com/360x600', title: '360x600 tall' },
            { img: 'https://via.placeholder.com/340x440', title: '240x340 tall' },
            { img: 'https://via.placeholder.com/300', title: '468 square' },
            { img: 'https://via.placeholder.com/336x300', title: '468 square' },
            { img: 'https://via.placeholder.com/468', title: '468 square' },
            { img: 'https://via.placeholder.com/362x220', title: '360x600 tall' },
            { img: 'https://via.placeholder.com/340x500', title: '240x340 tall' },
            { img: 'https://via.placeholder.com/295x90', title: '360x600 tall' }
        ]
    },
    stats: {
        Followers: '10',
        Ideas: '110',
        Age: '24',
        Pronouns: 'She / Her'
    },
    connectedSpaces: ['J', 'KF', 'R', 'HA', 'MJ', 'RE', 'NS']
}, {
    __typename: 'OrganizationProfileSpace',
    vid: 'mutualaidcinci',
    uid: 'daniUserId',
    name: 'Mutual Aid Cincinnati',
    descriptionShort: 'Mutually helping each other in the cincinnati area'
}];

export const joinedSpaces = [{
    __typename: 'CommunitySpace',
    vid: 'cincitrans',
    uid: 'diwonn4n2no2o2',
    name: 'Trans Cincinnati',
    descriptionShort: 'A community of trans people in the cinci area',
    descriptionLong: "Welcome to Trans Cincinnati! So glad you're here with us. Feel free to make friends with other trans folks, hang out and play games, and help each other out.",
    feature: {
        __typename: 'PictureFeature',
        src: { img: 'https://via.placeholder.com/300', title: '468 square' }
    },
    stats: {
        Members: '145',
        'Online Now': '25',
        Ideas: '110',
        Posts: '45'
    },
    members: [{
        role: {
            name: 'Mod',
            order: 0,
            permissions: []
        },
        space: {
            __typename: 'UserProfileSpace',
            vid: 'danitheturtle',
            uid: 'daniUserId',
            name: 'Dani',
        }
    }, {
        role: {
            name: 'Mod',
            order: 1,
            permissions: []
        },
        space: {
            __typename: 'UserProfileSpace',
            vid: 'sophieflowers',
            uid: 'sophieUserId',
            name: 'Sophie Flowers',
        }
    }, {
        role: {
            name: 'Member',
            order: 1,
            permissions: []
        },
        space: {
            __typename: 'UserProfileSpace',
            vid: 'astrid216',
            uid: 'astridUserId',
            name: 'Astrid',
        }
    }, {
        role: {
            name: 'Member',
            order: 2,
            permissions: []
        },
        space: {
            __typename: 'UserProfileSpace',
            vid: 'brookeaccalia',
            uid: 'brookeUserId',
            name: 'Brooke',
        }
    }, {
        role: {
            name: 'Member',
            order: 2,
            permissions: []
        },
        space: {
            __typename: 'UserProfileSpace',
            vid: 'lesbian_mami',
            uid: 'mamiUserId',
            name: 'Monica',
        }
    }, {
        role: {
            name: 'Member',
            order: 2,
            permissions: []
        },
        space: {
            __typename: 'UserProfileSpace',
            vid: 'kellyr',
            uid: 'kellyUserId',
            name: 'KellyR',
        }
    }]
}, {
    __typename: 'TopicSpace',
    vid: 'traaaaaaaaaaaans',
    uid: 'kwoeoroo2o2o',
    name: 'Traaaaaaaaaaaans',
    descriptionShort: 'Trans memes'
}, {
    __typename: 'TopicSpace',
    vid: 'botany',
    uid: 'robertEvans',
    name: 'Botany',
    descriptionShort: 'All things plants!'
}, {
    __typename: 'TopicSpace',
    vid: 'solarpunk',
    uid: 'dkwowormmsmw',
    name: 'Solarpunk',
    descriptionShort: 'An art aestetic about a brighter future'
}];

export const allSpaces = [{
    __typename: 'TopicSpace',
    vid: 'politics',
    uid: 'kwoeoroo2o2o',
    name: 'Politics',
    descriptionShort: 'Discussing politics'
}, {
    __typename: 'TopicSpace',
    vid: 'programming',
    uid: 'oinwdkiomvooxp',
    name: 'Programming',
    descriptionShort: 'A community for all things programming'
}, {
    __typename: 'TopicSpace',
    vid: 'magictcg',
    uid: 'dkwowormmsmw',
    name: 'MagicTCG',
    descriptionShort: 'A space to discuss Magic: The Gathering'
}];