/* 
This file contains data. In the real-world, we would probably get this data from a database. However for now - we're hardcoding the data here.
*/

// users: A list of User Objects. None of the feilds are nullable.
// let users = [
//     {
//       userId: "A0",
//       name: "Tania Lorina",
//       emailId: "loriLori13@jmail.com",
//       age: 18,
//     },
//     {
//       userId: "A1",
//       name: "Boitumelo Ayaan",
//       emailId: "Boitumelo1@jmail.com",
//       age: 38,
//     },
//     {
//       userId: "A2",
//       name: "Gayatri Padma",
//       emailId: "gpadma@dotmail.com",
//       age: 33,
//     },
//     {
//       userId: "A3",
//       name: "Jennifer Ismene",
//       emailId: "jIsmene21@chahoo.com",
//       age: 21,
//     },
//     {
//       userId: "A4",
//       name: "Júlio Anacleto",
//       emailId: "julioA00@dotmail.com",
//       age: 29,
//     },
//     {
//       userId: "A5",
//       name: "Delilah Javiera Botello",
//       emailId: "djb98@iceberg.net",
//       age: 48,
//     },
//     {
//       userId: "A6",
//       name: "Salli Vaishnavi Del Río",
//       emailId: "salliSpice2022@iceberg.net",
//       age: 23,
//     },
//     {
//       userId: "A7",
//       name: "Horatia Bushra Mortensen",
//       emailId: "morseen33@iceberg.net",
//       age: 21,
//     },
//     {
//       userId: "A8",
//       name: "Etel Tyrell",
//       emailId: "eyrell_elle_56@dotmail.com",
//       age: 40,
//     },
//     {
//       userId: "A9",
//       name: "Phyliss Droit",
//       emailId: "righDroi_2@jmail.com",
//       age: 51,
//     },
//     {
//       userId: "A10",
//       name: "Max Nelson",
//       emailId: "nelsonMax@megasoft.net",
//       age: 25,
//     },
//     {
//       userId: "A11",
//       name: "Maha Sheikh",
//       emailId: "Maha1@megasoft.net",
//       age: 32,
//     },
//     {
//       userId: "A12",
//       name: "Henricus Ó Coileáin",
//       emailId: "ocoileianHenry@chahoo.com",
//       age: 29,
//     },
//     {
//       userId: "A13",
//       name: "Nesim Keil",
//       emailId: "keilCoder1@jmail.com",
//       age: 19,
//     },
//     {
//       userId: "A14",
//       name: "Priya Movva",
//       emailId: "movvapriya22@dotmail.com",
//       age: 37,
//     },
//     {
//       userId: "A15",
//       name: "Sarah Burns",
//       emailId: "fireBurnz73@dotmail.com",
//       age: 27,
//     },
//     {
//       userId: "A16",
//       name: "Jamsheed Sundström",
//       emailId: "jamsheedsundstrom17@chahoo.com",
//       age: 18,
//     },
//     {
//       userId: "A17",
//       name: "Ángeles Gómez",
//       emailId: "gomezNex22@jmail.com",
//       age: 25,
//     },
//     {
//       userId: "A18",
//       name: "Gregoria Fontana",
//       emailId: "7gregoriaf@chahoo.com",
//       age: 35,
//     },
//     {
//       userId: "A19",
//       name: "Angelita Mora",
//       emailId: "profAMora@workeley.edu",
//       age: 42,
//     },
//     {
//       userId: "A20",
//       name: "Bo Mah",
//       emailId: "bomah67@chahoo.com",
//       age: 20,
//     },
//     {
//       userId: "A21",
//       name: "Yahui Song",
//       emailId: "yahuiSong@jmail.com",
//       age: 60,
//     },
//     {
//       userId: "A22",
//       name: "Keala Nguyen",
//       emailId: "kealaN92@chahoo.com",
//       age: 44,
//     },
//     {
//       userId: "A23",
//       name: "Malai Hoàng",
//       emailId: "mhoang1@workeley.edu",
//       age: 16,
//     },
//     {
//       userId: "A24",
//       name: "Kawehi Wattana",
//       emailId: "WaKawehi61@jmail.com",
//       age: 49,
//     },
//     {
//       userId: "A25",
//       name: "Marie-Noëlle Perrault",
//       emailId: "mnperrault32@abook.net",
//       age: 28,
//     },
//     {
//       userId: "A26",
//       name: "Hoa Denis",
//       emailId: "hoaBDenis21@jj.com",
//       age: 30,
//     },
//     {
//       userId: "A27",
//       name: "Nicole Rayne",
//       emailId: "nicole1998@iceberg.net",
//       age: 24,
//     },
//     {
//       userId: "A28",
//       name: "Fanny Colbert",
//       emailId: "colberWinzA8@jmail.com",
//       age: 55,
//     },
//     {
//       userId: "A29",
//       name: "Sung-Hyun Im",
//       emailId: "Sung-Hyun99@abook.net",
//       age: 43,
//     },
//     {
//       userId: "A30",
//       name: "Minh Nguyen",
//       emailId: "minhMinhN@scool.edu",
//       age: 17,
//     },
//     {
//       userId: "A31",
//       name: "Akanksha Bachchan",
//       emailId: "aBachaaaan0098@abook.net",
//       age: 39,
//     },
//     {
//       userId: "A32",
//       name: "Shailaja Das",
//       emailId: "sDas44571@jmail.com",
//       age: 32,
//     },
//     {
//       userId: "A33",
//       name: "Michelle D'Souza",
//       emailId: "mfae43@scool.edu",
//       age: 22,
//     },
//     {
//       userId: "A34",
//       name: "Nawra Ahmad",
//       emailId: "popcornAhmad88@abook.net",
//       age: 47,
//     },
//     {
//       userId: "A35",
//       name: "Bahija Hakim",
//       emailId: "hakimB84@megasoft.net",
//       age: 48,
//     },
//     {
//       userId: "A36",
//       name: "Toini Lahti",
//       emailId: "oini_lahi_41@megasoft.net",
//       age: 18,
//     },
//     {
//       userId: "A37",
//       name: "Aada Martikainen",
//       emailId: "AAADa@megasoft.net",
//       age: 25,
//     },
//     {
//       userId: "A38",
//       name: "Leena Järvi",
//       emailId: "leenaJarvi23@chahoo.com",
//       age: 34,
//     },
//     {
//       userId: "A39",
//       name: "Sveta Romanov",
//       emailId: "svemanov09@chahoo.com",
//       age: 52,
//     },
//     {
//       userId: "A40",
//       name: "Amintaou Okonkwo",
//       emailId: "aokonkwo@workeley.edu",
//       age: 18,
//     },
//     {
//       userId: "A41",
//       name: "Mia Shelton",
//       emailId: "profMShelton@workeley.edu",
//       age: 38,
//     },
//     {
//       userId: "A42",
//       name: "Kendall Airaldi",
//       emailId: "kAiraldi54@crown.edu",
//       age: 33,
//     },
//     {
//       userId: "A43",
//       name: "Darcy Kitchens",
//       emailId: "kitchensDarcy@crown.edu",
//       age: 23,
//     },
//     {
//       userId: "A44",
//       name: "Kamilla Jørgensen",
//       emailId: "kamillaJorgensen@scool.edu",
//       age: 25,
//     },
//     {
//       userId: "A45",
//       name: "Jessica Johansen",
//       emailId: "jjLovesCandy@chahoo.com",
//       age: 53,
//     },
//     {
//       userId: "A46",
//       name: "Gerallt Slusser",
//       emailId: "slusserGerallt@crown.edu",
//       age: 22,
//     },
//     {
//       userId: "A47",
//       name: "Anton Kavanah",
//       emailId: "kavanah_A@megasoft.net",
//       age: 23,
//     },
//     {
//       userId: "A48",
//       name: "Neelam Chlebek",
//       emailId: "chlebekNeelam@crown.edu",
//       age: 41,
//     },
//     {
//       userId: "A49",
//       name: "Mattie Schmitz",
//       emailId: "schmizzzM27@megasoft.net",
//       age: 50,
//     }
//   ];




// eventIdsToUserIds: A dictionary with eventIds for keys and a list of userIds for values.

let eventIdsToUserIds = {
    "E0": ["A0", "A3", "A5", "A10", "A14", "A20", "A22", "A29", "A30", "A31", "A39", "A40", "A41", "A44", "A49"],
    "E1": ["A2", "A4", "A7", "A13", "A15", "A18", "A23", "A25", "A33", "A38", "A39"],
    "E2": ["A4", "A6", "A8", "A11", "A17", "A26", "A34", "A36", "A37", "A42", "A43", "A45", "A46"],
    "E3": ["A3", "A6", "A11", "A14", "A15", "A28", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A47"],
    "E4": ["A10", "A12", "A13", "A18", "A22", "A24", "A35", "A45", "A47", "A48"],
    "E5": ["A1", "A4", "A7", "A8", "A9", "A10", "A12", "A21", "A23", "A26", "A29", "A34", "A41", "A42", "A43"],
    "E6": ["A0", "A3", "A5", "A19", "A20", "A21", "A33"],
    "E7": ["A7", "A8", "A9", "A12", "A13", "A15", "A16", "A19", "A20", "A22", "A25", "A39"],
    "E8": ["A0", "A1", "A2", "A10", "A11", "A20", "A24", "A26", "A32", "A38", "A41"],
    "E9": ["A3", "A4", "A6", "A9", "A34", "A37", "A40", "A41", "A45", "A48"],
    "E10": ["A4", "A8", "A14", "A18", "A24", "A27", "A28", "A31", "A39", "A40", "A49"],
    "E11": ["A0", "A1", "A5", "A12", "A16", "A18", "A26", "A33", "A34", "A43"],
    "E12": ["A2", "A7", "A12", "A13", "A25", "A31", "A38", "A43", "A45", "A46"],
    "E13": ["A1", "A6", "A11", "A14", "A15", "A28", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A47"],
    "E14": ["A11", "A12", "A17", "A18", "A22", "A24", "A35", "A45", "A47", "A48"],
    "E15": ["A1", "A4", "A7", "A8", "A10", "A12", "A21", "A23", "A26", "A29", "A34", "A41", "A42", "A43"],
    "E16": ["A2", "A3", "A5", "A19", "A20", "A21", "A33"],
    "E17": ["A7", "A8", "A9", "A12", "A13", "A15", "A16", "A19", "A20", "A22", "A25", "A39"],
    "E18": ["A0", "A2", "A10", "A14", "A20", "A24", "A26", "A32", "A38", "A41"],
    "E19": ["A3", "A4", "A6", "A9", "A34", "A37", "A40", "A41", "A45", "A48"],
    "E20": ["A1", "A3", "A5", "A10", "A14", "A20", "A22", "A29", "A30", "A31", "A39", "A40", "A41", "A44", "A49"],
    "E21": ["A2", "A4", "A7", "A13", "A15", "A18", "A23", "A25", "A33", "A38", "A39"],
    "E22": ["A4", "A6", "A8", "A11", "A17", "A26", "A34", "A36", "A37", "A42", "A43", "A45", "A46"],
    "E23": ["A3", "A6", "A11", "A14", "A15", "A28", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A47"],
    "E24": ["A10", "A12", "A13", "A18", "A22", "A24", "A35", "A45", "A47", "A48"],
    "E25": ["A1", "A4", "A7", "A8", "A9", "A10", "A12", "A21", "A23", "A26", "A29", "A34", "A41", "A42", "A43"],
    "E26": ["A0", "A3", "A5", "A19", "A20", "A21", "A33"],
    "E27": ["A7", "A8", "A9", "A12", "A13", "A15", "A16", "A19", "A20", "A22", "A25", "A39"],
    "E28": ["A0", "A1", "A2", "A10", "A11", "A20", "A24", "A26", "A32", "A38", "A41"],
    "E29": ["A3", "A4", "A6", "A9", "A34", "A37", "A40", "A41", "A44"],
    
  };

  // events: A list of Event Objects. None of the feilds are nullable.
  // let events = [
  //     {
  //       eventId: "E0",
  //       name: "Into the Unkown Web3 World",
  //       description: "Sometimes you just gotta let it go.",
  //       eventType: "POSTER_SESSION"
  //     },
  //     {
  //       eventId: "E1",
  //       eventType: "PRESENTATION",
  //       name: "NFTs and the Environment",
  //       description: "Dive into the details of NFTs and their environmental impact."
  //     },
  //     {
  //       eventId: "E2",
  //       eventType: "WORKSHOP",
  //       name: "Rust is Among Us",
  //       description: "Learn about the fundamentals of Rust."
  //     },
  //     {
  //       eventId: "E3",
  //       eventType: "POSTER_SESSION",
  //       name: "Artificial Intelligence For All",
  //       description: "How to use AI to make accessible technology."
  //     },
  //     {
  //       eventId: "E4",
  //       eventType: "PRESENTATION",
  //       name: "Things I wish I new before joining the tech workforce",
  //       description: "Hindsight is 20/20. And my 2020 was terrible."
  //     },
  //     {
  //       eventId: "E5",
  //       eventType: "PRESENTATION",
  //       name: "Kudos to you for actually reading the data :)",
  //       description: "You might wanna continue working on the rest of the project now :P"
  //     },
  //     {
  //       eventId: "E6",
  //       eventType: "WORKSHOP",
  //       name: "DANCE DANCE!",
  //       description: "A Fun dance workshop to relieve stress!"
  //     },
  //     {
  //       eventId: "E7",
  //       eventType: "POSTER_SESSION",
  //       name: "Hopping into Grace Hopper",
  //       description: "How to give a great Grace Hopper talk."
  //     },
  //     {
  //       eventId: "E8",
  //       eventType: "POSTER_SESSION",
  //       name: "Change your Career",
  //       description: "Switching careers is tricky - but not impossible. Learn how you can make a clean career switch."
  //     },
  //     {
  //       eventId: "E9",
  //       eventType: "WORKSHOP",
  //       name: "Starting Straight Away",
  //       description: "A workshop to help you learn how to adapt to change - starting straight away."
  //     },
  //     {
  //       eventId: "E10",
  //       eventType: "PANEL",
  //       name: "Next is Now - WFH is now, so it might be next",
  //       description: "This panel focuses on how to stay focused in a work from home environment."
  //     },
  //     {
  //       eventId: "E11",
  //       eventType: "PRESENTATION",
  //       name: "Ethics of self driving vehicles",
  //       description: "Ethical choices. Every second. Everyday. Learn how automated vehicles do this."
  //     },
  //     {
  //       eventId: "E12",
  //       eventType: "WORKSHOP",
  //       name: "Code & Deploy Your Own Website",
  //       description: "This workshop will help you start coding a vanilla javascript, react, and css website."
  //     },
  //     {
  //       eventId: "E13",
  //       eventType: "PANEL",
  //       name: "Intro to Open Source",
  //       description: "This panel brings together a group of diverse women in CS to introduce you to open source tech."
  //     },
  //     {
  //       eventId: "E14",
  //       eventType: "PRESENTATION",
  //       name: "Have the most fun!",
  //       description: "Learn how to have the most fun - on the job!"
  //     },
  //     {
  //       eventId: "E15",
  //       eventType: "PRESENTATION",
  //       name: "How Technology Advocates for Underrepresented Voices",
  //       description: "In this talk, learn about how technology can help us increase diversity."
  //     },
  //     {
  //       eventId: "E16",
  //       eventType: "WORKSHOP",
  //       name: "Intern Networking Session",
  //       description: "Get to know your peers at this intern networking session!"
  //     },
  //     {
  //       eventId: "E17",
  //       eventType: "POSTER_SESSION",
  //       name: "You're Asking the Wrong Questions!",
  //       description: "Learn how to ask the right ones"
  //     },
  //     {
  //       eventId: "E18",
  //       eventType: "POSTER_SESSION",
  //       name: "Mixed Reality Research",
  //       description: "Have you ever wondered what the difference is between AR, VR, and mixed reality? Well - it's time to find out!"
  //     },
  //     {
  //       eventId: "E19",
  //       eventType: "WORKSHOP",
  //       name: "Turn a Social Club into an Impactful Program",
  //       description: "Create a sense of community at your company."
  //     },
  //     {
  //       eventId: "E20",
  //       eventType: "POSTER_SESSION",
  //       name: "Next is Inclusion",
  //       description: "Inclusion is now. Inclusion is the future. What can you do to improve it?"
  //     },
  //     {
  //       eventId: "E21",
  //       eventType: "PRESENTATION",
  //       name: "You let me down - but I won't let you down",
  //       description: "How to work with people you're not a fan of."
  //     },
  //     {
  //       eventId: "E22",
  //       eventType: "WORKSHOP",
  //       name: "Change Agents",
  //       description: "Learn about to drive change and make next, now."
  //     },
  //     {
  //       eventId: "E23",
  //       eventType: "POSTER_SESSION",
  //       name: "Research - C++ Smart Pointer Improvements",
  //       description: "Dive into the novel C++ Smart Pointer Changes"
  //     },
  //     {
  //       eventId: "E24",
  //       eventType: "MENTORING_CIRCLES",
  //       name: "Do you know what's wrong?",
  //       description: "Join us and learn how to identify the now problems and fix them asap."
  //     },
  //     {
  //       eventId: "E25",
  //       eventType: "PRESENTATION",
  //       name: "Git Revert",
  //       description: "Undo mistakes now - so what's next is fine"
  //     },
  //     {
  //       eventId: "E26",
  //       eventType: "WORKSHOP",
  //       name: "Eat & Meet!",
  //       description: "Eat & Meet fellow people in tech who all advocate for a more inclusive environment."
  //     },
  //     {
  //       eventId: "E27",
  //       eventType: "POSTER_SESSION",
  //       name: "GraphQL Basics",
  //       description: "GraphQL Basics"
  //     },
  //     {
  //       eventId: "E28",
  //       eventType: "POSTER_SESSION",
  //       name: "Fireship Basics",
  //       description: "An intro to fireship and why its great."
  //     },
  //     {
  //       eventId: "E29",
  //       eventType: "TECH_MEETUP",
  //       name: "NP Hard",
  //       description: "Learn how to prove P=NP ... just kidding :D"
  //     },
  //   ];

// eventIdsToUserActivityIds: A dictionary with eventIds for keys and a list of UserActivityIds for values.
let eventIdsToUserActivityIds = {
  "E0": ["UA0", "UA1"],
  "E1": ["UA2"],
  "E2": ["UA3", "UA4", "UA5"],
  "E3": [],
  "E4": ["UA6", "UA30"],
  "E5": ["UA31"],
  "E6": ["UA7", "UA35"],
  "E7": ["UA39"],
  "E8": ["UA8", "UA9"],
  "E9": ["UA33"],
  "E10": ["UA10", "UA11"],
  "E11": ["UA12"],
  "E12": ["UA13", "UA14", "UA15"],
  "E13": [],
  "E14": ["UA16"],
  "E15": ["UA36", "UA37"],
  "E16": ["UA17"],
  "E17": [],
  "E18": ["UA18", "UA19"],
  "E19": [],
  "E20": ["UA20", "UA21"],
  "E21": ["UA22"],
  "E22": ["UA23", "UA24", "UA25"],
  "E23": ["UA38"],
  "E24": ["UA26"],
  "E25": [],
  "E26": ["UA27"],
  "E27": ["UA34"],
  "E28": ["UA28", "UA29"],
  "E29": ["UA32"]
};

// userActivityIdToUserId: A dictionary with userActivityId for keys and an userIds for values.
let userActivityIdToUserId = {
  "UA0": "A0",
  "UA1": "A20",
  "UA2": "A2",
  "UA3": "A8",
  "UA4": "A11",
  "UA5": "A34",
  "UA6": "A10",
  "UA7": "A5",
  "UA8": "A24",
  "UA9": "A38",
  "UA10": "A14",
  "UA11": "A40",
  "UA12": "A33",
  "UA13": "A46",
  "UA14": "A43",
  "UA15": "A25",
  "UA16": "A18",
  "UA17": "A21",
  "UA18": "A41",
  "UA19": "A26",
  "UA20": "A29",
  "UA21": "A30",
  "UA22": "A39",
  "UA23": "A4",
  "UA24": "A17",
  "UA25": "A6",
  "UA26": "A13",
  "UA27": "A15",
  "UA28": "A41",
  "UA29": "A32",
  "UA30": "A12",
  "UA31": "A23",
  "UA32": "A3",
  "UA33": "A4",
  "UA34": "A22",
  "UA35": "A33",
  "UA36": "A42",
  "UA37": "A43",
  "UA38": "A28",
  "UA39": "A19",
};

let userIdToActivityIds = {
  "A0": ["UA0"],
  "A1": [],
  "A2": ["UA2"],
  "A3": ["UA32"],
  "A4": ["UA23", "UA33"],
  "A5": [],
  "A6": ["UA25"],
  "A7": [],
  "A8": ["UA3"],
  "A9": [],
  "A10": ["UA6"],
  "A11": ["UA4"],
  "A12": ["UA30"],
  "A13": ["UA26"],
  "A14": ["UA10"],
  "A15": ["UA27"],
  "A16": [],
  "A17": ["UA24"],
  "A18": ["UA16"],
  "A19": ["UA39"],
  "A20": ["UA1"],
  "A21": ["UA17"],
  "A22": ["UA34"],
  "A23": ["UA31"],
  "A24": [],
  "A25": ["UA15"],
  "A26": ["UA19"],
  "A27": [],
  "A28": ["UA38"],
  "A29": ["UA20"],
  "A30": ["UA21"],
  "A31": [],
  "A32": ["UA29"],
  "A33": ["UA12", "UA35"],
  "A34": ["UA5"],
  "A35": [],
  "A36": [],
  "A37": [],
  "A38": [],
  "A39": ["UA22"],
  "A40": ["UA11"],
  "A41": ["UA18", "UA28"],
  "A42": ["UA36"],
  "A43": ["UA14", "UA37"],
  "A44": [],
  "A45": [],
  "A46": ["UA13"],
  "A47": [],
  "A48": [],
  "A49": [],
}

// userActivites: A list of userActivity Objects. None of the feilds are nullable.
let userActivites = [
    {
      activityId: "UA0",
      timestamp: "2020-06-13T18:30:00.000Z",
      activity: "ENTERING"
    },
    {
      activityId: "UA1",
      timestamp: "2020-06-15T18:30:00.000Z",
      activity: "LIKE"
    },
    {
      activityId: "UA2",
      timestamp: "2020-06-19T16:30:04.000Z",
      activity: "CONFUSED"
    },
    {
      activityId: "UA3",
      timestamp: "2020-07-13T18:30:00.000Z",
      activity: "ENTERING"
    },
    {
      activityId: "UA4",
      timestamp: "2020-07-20T18:30:00.000Z",
      activity: "LIKE"
    },
    {
      activityId: "UA5",
      timestamp: "2020-07-20T19:30:00.000Z",
      activity: "EXITING"
    },
    {
      activityId: "UA6",
      timestamp: "2020-07-20T20:10:00.000Z",
      activity: "DISLIKE"
    },
    {
      activityId: "UA7",
      timestamp: "2020-07-20T21:10:00.000Z",
      activity: "DISLIKE"
    },
    {
      activityId: "UA8",
      timestamp: "2020-08-20T21:10:00.000Z",
      activity: "DISLIKE"
    },
    {
      activityId: "UA9",
      timestamp: "2020-08-21T21:10:00.000Z",
      activity: "DISLIKE"
    },
    {
      activityId: "UA10",
      timestamp: "2020-08-23T21:10:00.000Z",
      activity: "ENTERING"
    },
    {
      activityId: "UA11",
      timestamp: "2020-08-27T21:10:00.000Z",
      activity: "CONFUSED"
    },
    {
      activityId: "UA12",
      timestamp: "2020-08-27T21:10:05.000Z",
      activity: "LIKE"
    },
    {
      activityId: "UA13",
      timestamp: "2020-08-27T21:13:05.000Z",
      activity: "LIKE"
    },
    {
      activityId: "UA14",
      timestamp: "2020-08-27T21:14:05.000Z",
      activity: "CONFUSED"
    },
    {
      activityId: "UA15",
      timestamp: "2020-08-28T21:14:05.000Z",
      activity: "DISLIKE"
    },
    {
      activityId: "UA16",
      timestamp: "2020-08-29T21:14:05.000Z",
      activity: "ENTERING"
    },
    {
      activityId: "UA17",
      timestamp: "2020-08-29T23:14:05.000Z",
      activity: "ENTERING"
    },
    {
      activityId: "UA18",
      timestamp: "2020-08-30T21:14:05.000Z",
      activity: "DISLIKE"
    },
    {
      activityId: "UA19",
      timestamp: "2020-08-3OT22:14:05.000Z",
      activity: "ENTERING"
    },
    {
      activityId: "UA20",
      timestamp: "2020-09-01T00:14:05.000Z",
      activity: "LIKE"
    },
    {
      activityId: "UA21",
      timestamp: "2020-09-01T00:14:06.000Z",
      activity: "LIKE"
    },
    {
      activityId: "UA22",
      timestamp: "2020-09-01T00:14:07.000Z",
      activity: "EXITING"
    },
    {
      activityId: "UA23",
      timestamp: "2020-09-01T00:14:08.000Z",
      activity: "DISLIKE"
    },
    {
      activityId: "UA24",
      timestamp: "2020-09-01T00:14:09.000Z",
      activity: "EXITING"
    },
    {
      activityId: "UA25",
      timestamp: "2020-09-01T00:14:15.000Z",
      activity: "LOVE"
    },
    {
      activityId: "UA26",
      timestamp: "2020-09-01T00:14:25.000Z",
      activity: "ENTERING"
    },
    {
      activityId: "UA27",
      timestamp: "2020-09-01T00:14:26.000Z",
      activity: "ENTERING"
    },
    {
      activityId: "UA28",
      timestamp: "2020-09-01T00:14:28.000Z",
      activity: "LOVE"
    },
    {
      activityId: "UA29",
      timestamp: "2022-04-11T06:01:15.514Z",
      activity: "PARTY_FACE"
    },
    {
      activityId: "UA30",
      timestamp: "2022-04-11T06:08:09.473Z",
      activity: "LOVE"
    },
    {
      activityId: "UA31",
      timestamp: "2022-04-11T06:08:20.302Z",
      activity: "EXITING"
    },
    {
      activityId: "UA32",
      timestamp: "2022-04-11T06:08:28.584Z",
      activity: "PARTY_FACE"
    },
    {
      activityId: "UA33",
      timestamp: "2022-04-11T06:08:28.585Z",
      activity: "DISLIKE"
    },
    {
      activityId: "UA34",
      timestamp: "2022-04-11T06:08:44.835Z",
      activity: "PARTY_FACE"
    },
    {
      activityId: "UA35",
      timestamp: "2022-04-11T06:08:44.836Z",
      activity: "EXITING"
    },
    {
      activityId: "UA36",
      timestamp: "2022-04-11T06:08:44.837Z",
      activity: "CONFUSED"
    },
    {
      activityId: "UA37",
      timestamp: "2022-04-11T06:09:06.500Z",
      activity: "PARTY_FACE"
    },
    {
      activityId: "UA38",
      timestamp: "2022-04-11T06:09:16.189Z",
      activity: "LOVE"
    },
    {
      activityId: "UA39",
      timestamp: "2022-04-11T06:09:43.495Z",
      activity: "CONFUSED"
    },
    
  ];


// export function dbGetEvents() {
//     return events;
// }

// export function dbSetEvents() {
//   return events;
// }

// export function dbGetUsers() {
//     return users;
// }

// export function dbAddUser(user) {
//   return users.push(user);
// }

export function dbGetEventIdsToUserIds() {
    return eventIdsToUserIds;
}

// export function dbIsValidEvent(eventId) {
//     let eventIdRegex = /^E\d+$/;
//     const eventNumber = Number(eventId.match(/\d+/));
//     return eventIdRegex.test(eventId) && events.length > eventNumber;
// }

// export function dbIsValidUser(userId) {
//     let userIdRegex = /^A\d+$/;
//     const userNumber = Number(userId.match(/\d+/));
//     console.log("isV");
//     console.log( userIdRegex.test(userId));
//     console.log(userNumber);
//     console.log(users.slice(-1));
//     console.log(users.length );
//     return userIdRegex.test(userId) && users.length > userNumber;
// }

export function dbIsValidUserActivityId(userActivitId) {
    let userActivityIdRegex = /^UA\d+$/;
    const userActivityNumber = Number(userActivitId.match(/\d+/));
    return userActivityIdRegex.test(userActivitId) && userActivites.length > userActivityNumber;
}


export function dbGetUserActivityIdToUserId() {
    return userActivityIdToUserId;
}

export function dbGetUserActivity() {
    return userActivites;
}

export function dbUserIdToActivityIds() {
    return userIdToActivityIds;
}

export function dbGetEventIdsToUserActivityIds() {
    return eventIdsToUserActivityIds;
}


