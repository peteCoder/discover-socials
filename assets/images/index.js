export const unionIcon = require("./Union.png");
export const rectangularBg = require("./Rectangle.png");
export const Logo = require("./Logo.png");
export const LogoutAvartar = require("./LogoutAvartar.png");
export const chatIcon = require("./tabIcons/chats.png");
export const homeIcon = require("./tabIcons/home.png");
export const personIcon = require("./tabIcons/person.png");
export const searchIcon = require("./tabIcons/search.png");
export const plusIcon = require("./tabIcons/plus.png");


// Human Images
const jane_profile = require("../images/girl_avatar.png");

// Chevron Icon
export const chevronIcon = require("../images/chevron.png");

// Dog Images
const dog1 = require("./dummyImages/dog1.png");
const dog2 = require("./dummyImages/dog2.png");
const dog3 = require("./dummyImages/dog3.png");
const dog4 = require("./dummyImages/dog4.png");
const dog5 = require("./dummyImages/dog5.png");
const dog6 = require("./dummyImages/dog6.png");
const dog7 = require("./dummyImages/dog7.png");
const dog8 = require("./dummyImages/dog8.png");
const dog9 = require("./dummyImages/dog9.png");
const dog10 = require("./dummyImages/dog10.png");
const dog11 = require("./dummyImages/dog11.png");
const dog12 = require("./dummyImages/dog12.png");
const dog13 = require("./dummyImages/dog13.png");
const dog14 = require("./dummyImages/dog14.png");



export const dogData = [
    {id: 1, name: "Chiwawa", image: dog1}, 
    {id: 2, name: "Chiwawa", image: dog2}, 
    {id: 3, name: "German shepherd", image: dog3}, 
    {id: 4, name: "Rotweller", image: dog4}, 
    {id: 5, name: "Boarbu", image: dog5}, 
    {id: 6, name: "Asichan", image: dog6}, 
    {id: 7, name: "Fotwaya", image: dog7}, 
    {id: 8, name: "Asichan", image: dog8}, 
    {id: 9, name: "Bull dog", image: dog9},
    {id: 10, name: "Yougano", image: dog10},
    {id: 11, name: "Pasu", image: dog11},
    {id: 12, name: "Bull dog", image: dog12},
    {id: 13, name: "Bull dog", image: dog13},
    {id: 14, name: "Pasu",  image: dog14},
    {id: 15, name: "Pasu",  image: dog10},
    {id: 16, name: "Asichan", image: dog6}, 
    {id: 17, name: "Fotwaya", image: dog7}, 
    {id: 18, name: "Asichan", image: dog8}, 
    {id: 19, name: "Bull dog", image: dog9},
    {id: 20, name: "Yougano", image: dog10},
    {id: 21, name: "Bull dog", image: dog13},
]


export const girlProfile = {
    id: 1,
    name: "Jane",
    city: "San francisco, ca",
    profile_photo: jane_profile,
    // All the dummy images will be here ...
    images_uploaded: [
        {
            id: 1,
            image: require("./profileImages/image1.png"),
        },
        {
            id: 2,
            image: require("./profileImages/image2.png"),
        },
        {
            id: 3,
            image: require("./profileImages/image3.png"),
        },
        {
            id: 4,
            image: require("./profileImages/image4.png"),
        },
        {
            id: 5,
            image: require("./profileImages/image5.png"),
        },
        {
            id: 6,
            image: require("./profileImages/image6.png"),
        },
    ]
}


// Chats Images
const chat1 = require("./chatImages/chat1.png");
const chat2 = require("./chatImages/chat2.png");
const chat3 = require("./chatImages/chat3.png");
const chat4 = require("./chatImages/chat4.png");
const chatSmall1 = require("./chatImages/chatSmall1.png");
const chatSmall2 = require("./chatImages/chatSmall2.png");

export const chatLists = {
    name: "Jane",
    id: 827737823,

    friends: [
        {
            id: 665656767,
            name: "James",
            profile_photo: chat1,
            messages: [
                {
                    id: 83782831,
                    name: "James",
                    message: "Thank you! That was very helpful!",
                    image: chat1

                },
                {  
                    id: 230162,
                    name: "Me",
                    message: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!  Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! ",
                    image: chatSmall2

                },
                {  
                    id: 3209298,
                    name: "James",
                    message: "Thank you! That was very helpful!",
                    image: chat1

                },

            ]
        },
        {
            id: 266678,
            name: "Will Kenny",
            profile_photo: chat2,
            messages: [
                {
                    id: 123267,
                    name: "Will Kenny",
                    message: "My photo are really fantastic, aren't they?",
                    image: chat2

                },
                {  
                    id: 228373,
                    name: "Me",
                    message: "These photos are really awesome... I know",
                    image: chatSmall2

                },
                {  
                    id: 3483343,
                    name: "Will Kenny",
                    message: "Thank you!",
                    image: chat2

                },

            ]
        },
        {
            id: 958678,
            name: "Beth Williams",
            profile_photo: chat3,
            messages: [
                {
                    id: 1333241,
                    name: "Beth Williams",
                    message: "The photos are undergoing production.",
                    image: chat3

                },
                {  
                    id: 2642344,
                    name: "Me",
                    message: "Please let me know when they are ready...",
                    image: chatSmall2

                },
                {  
                    id: 3323425,
                    name: "Beth Williams",
                    message: "I will. Thank you for your patience!",
                    image: chat3

                },

            ]
        },
        {
            id: 3774727,
            name: "Rev Shaw",
            profile_photo: chat4,
            messages: [
                {  
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4

                },
                
                {  
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4

                },

            ]
        },


    ]
}


export const discoverPost = [
    {
        id:  1,
        photo: require("./feeds/image1.png"),
        postedBy: {
            user_id: 192,
            name: "Ridhwan Nordin",
            username: "ridzjcob",
            profile_photo: require("./feeds/chat1.png")
        }
    },
    {
        id:  2,
        photo: require("./feeds/image2.png"),
        postedBy: {
            user_id: 152,
            name: "Ridhwan Nordin",
            username: "ridzjcob",
            profile_photo: require("./feeds/chat2.png")
        }
    },
    {
        id:  4,
        photo: require("./feeds/image1.png"),
        postedBy: {
            user_id: 192,
            name: "Ridhwan Nordin",
            username: "ridzjcob",
            profile_photo: require("./feeds/chat3.png")
        }
    },
    {
        id:  3,
        photo: require("./feeds/image3.png"),
        postedBy: {
            user_id: 202,
            name: "Ridhwan Nordin",
            username: "ridzjcob",
            profile_photo: require("./feeds/chat4.png")

        }
    },
    {
        id:  5,
        photo: require("./feeds/image4.png"),
        postedBy: {
            user_id: 902,
            name: "Ridhwan Nordin",
            username: "ridzjcob",
            profile_photo: require("./feeds/chat3.png")
        }
    },

]

export const cancelTimes = require("./feeds/times.png")



