const SURVEY = {
  id: 1,
  title: "Today Awesome Survey",
  image: "https://48tools.com/wp-content/uploads/2015/09/shortlink.png",
  questions: [
    {
      text: "Which fruit juice is more awesome?",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CTliZMdBtokse5q-gttkegAAAA%26pid%3DApi&f=1",
      lifetimeSeconds: 15,
      options: [
        {
          id: 11,
          text: "Apple",
        },
        {
          id: 12,

          text: "Strawery",
        },
        {
          id: 13,
          text: "Watermelon",
        },
        {
          id: 14,
          text: "Blueberry",
        },
      ],
    },
    {
      text: "In how many minutes do you eat a piece of lemon pie?",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9F1G5jw2-Lq8Cwd4hV-m5wHaE8%26pid%3DApi&f=1",
      lifetimeSeconds: 15,
      options: [
        {
          id: 21,
          text: "2 minutes",
        },
        {
          id: 22,

          text: "5  Minutes",
        },
        {
          id: 23,
          text: "10 Minutes",
        },
        {
          id: 24,
          text: "20 Minutes",
        },
      ],
    },
    {
      text: "How do you like meat?",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8Ahd-fMlXpYiRrsqZ51k7wHaDt%26pid%3DApi&f=1",
      lifetimeSeconds: 5,
      options: [
        {
          id: 31,
          text: "Rare",
        },
        {
          id: 32,

          text: "Medium rare",
        },
        {
          id: 33,
          text: "Medium",
        },
        {
          id: 34,

          text: "Medium well",
        },
        {
          id: 35,
          text: "Well done",
        },
      ],
    },
    {
      text: "Which citric is more acid?",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hyNfa8Rg6w-nksddQ-7vkQHaEu%26pid%3DApi&f=1",
      lifetimeSeconds: 5,
      options: [
        {
          id: 41,
          text: "Orange",
        },
        {
          id: 42,

          text: "Lemon",
        },
        {
          id: 43,
          text: "Grapefruit",
        },
      ],
    },
    {
      text: "Which is the best argentinian dessert?",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FQK_MNVl1AU6unu0GDUbDAHaDb%26pid%3DApi&f=1",
      lifetimeSeconds: 10,
      options: [
        {
          id: 51,
          text: "Alfajor",
        },
        {
          id: 52,
          text: "Medialunas",
        },
        {
          id: 53,
          text: "Chocotorta",
        },
        {
          id: 54,
          text: "Pasta frola",
        },
        {
          id: 55,
          text: "Flan",
        },
      ],
    },
  ],
};

const getSurvey: () => Promise<{
  id: number;
  title: string;
  image: string;
  questions: {
    text: string;
    image: string;
    lifetimeSeconds: number;
    options: {
      id: number;
      text: string;
    }[];
  }[];
}> = () => Promise.resolve(SURVEY);

export { getSurvey };
