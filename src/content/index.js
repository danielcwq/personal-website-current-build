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
      'an aspiring web developer. 🖥',
      2500,
      'an amateur runner. 🏃‍♂️',
      2500,
      'an Innovator at TKS.',
      2500,
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
    desc: `Hello! Thanks for dropping by my site. I'm a high school junior who is passionate about student leadership and education development. In my free time, I strive to improve my hard skills in the above stack.`,
    desc3: `I'm also an avid amateur distance runner and am someone who seeks to push my own physical and mental limits. Being a student athlete, excelling in school, and pursuing side hustles simulatenously is not an easy feat.`,
    desc4: "Want to know about my thoughts on running?"
  },

  contact: {
    title: 'Contact',
    header: 'Contact',
    desc2: `Reach out to me here:`
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
  }
};
