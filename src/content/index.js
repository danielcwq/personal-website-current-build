export default {
  nav: {
    logo: 'Daniel Ching',
    contactText: 'Contact',
    blogText: 'Blog',
    resumeText: 'Resume'
  },
  header: {
    img:
      'https://i.ibb.co/QHbgHgC/Screenshot-2021-10-02-at-8-35-28-PM.png',
    imgPlaceholder:
      "image of Daniel's bitmoji.",
    text: ["Daniel Ching", 'I am'],
    typical: [
      ' an aspiring web developer. 🖥',
      3000,
      ' an Innovator at TKS.',
      3000,
      ' an amateur runner. 🏃‍♂️',
      3000,
      ' currently learning machine learning.',
      3000
      
    ],
    btnText: 'Discover More',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
      
    ],
    desc: `I'm a high school senior from Raffles Institution, Singapore. I'm passionate about all things tech, particularly cryptocurrencies and AI. I spend a majority of my time reading and meeting like-minded youths from around the world.`,
    desc2: `I'm currently diving deep into machine learning, building the foundations from fast.ai. Apart from that, I maintain a blog where I write technical and personal pieces.`,
    desc3: `As an amateur distance runner who seeks to push my own physical and mental limits, I look for new ways to live a deep and hard life. Being a student athlete, striving for excellence in school, and staying intentional is tough, but I relish the challenge.`,
    desc4: "My thoughts on running 🏃‍♂️"
  },

  contact: {
    title: 'Contact',
    header: 'Contact',
    desc2: `Reach out to me here:`,
    linkedinIcon: [
      {img: process.env.PUBLIC_URL + '/assets/linkedin.png',
      alt: 'linkedin'},
    ]
  },
  blog1:{
    title: 'Revision Techniques - How to Ace Your Exams',
    img: 'https://miro.medium.com/max/1400/0*KFnBavGp02JE5LJJ',
  },
  blog2:{
    title: 'How To Time Block and Do Deep Work Effectively'
  },
  blog3:{
    title: "Perspectives - What I've learnt from the Filipino Education System",
    img: "https://miro.medium.com/max/1400/1*WZNlfSy2bOG3xbOvbob7Qg.png"
  },
  arrow:{
    picture: '>'
  },
  resume:{
    img: 'https://i.ibb.co/K6zKLyV/Screenshot-2021-07-30-at-8-59-54-PM.png'
  },

};
