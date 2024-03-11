const { deleteTable, createTable, saveData } = require("../src/models/movies");

module.exports = async () => {
  try {
    await deleteTable();
    await createTable();
    const movies = [
      {
        image: "http://localhost:8000/image/image1.jpg",
        movie_name: "The Shawshank Redemption",
        category: ["Drama"],
        director: "Frank Darabont",
        casts: ["Tim Robbins", "Morgan Freeman"],
        release_date: "1994-09-23",
        duration_hour: 2,
        duration_minute: 22,
        synopsis:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      },
      {
        image: "http://localhost:8000/image/image2.jpg",
        movie_name: "The Godfather",
        category: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        casts: ["Marlon Brando", "Al Pacino", "James Caan"],
        release_date: "1972-03-24",
        duration_hour: 2,
        duration_minute: 55,
        synopsis:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      },
      {
        image: "http://localhost:8000/image/image3.jpg",
        movie_name: "Pulp Fiction",
        category: ["Crime", "Drama"],
        director: "Quentin Tarantino",
        casts: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        release_date: "1994-10-14",
        duration_hour: 2,
        duration_minute: 34,
        synopsis:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      },
      {
        image: "http://localhost:8000/image/image4.jpg",
        movie_name: "The Dark Knight",
        category: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
        casts: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        release_date: "2008-07-18",
        duration_hour: 2,
        duration_minute: 32,
        synopsis:
          "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      },
      {
        image: "http://localhost:8000/image/image5.jpg",
        movie_name: "Forrest Gump",
        category: ["Drama", "Romance"],
        director: "Robert Zemeckis",
        casts: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        release_date: "1994-07-06",
        duration_hour: 2,
        duration_minute: 22,
        synopsis:
          "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
      },
      {
        image: "http://localhost:8000/image/image6.jpg",
        movie_name: "Schindler's List",
        category: ["Biography", "Drama", "History"],
        director: "Steven Spielberg",
        casts: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
        release_date: "1993-12-15",
        duration_hour: 3,
        duration_minute: 15,
        synopsis:
          "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      },
      {
        image: "http://localhost:8000/image/image7.jpg",
        movie_name: "Inception",
        category: ["Action", "Adventure", "Sci-Fi"],
        director: "Christopher Nolan",
        casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        release_date: "2010-07-16",
        duration_hour: 2,
        duration_minute: 28,
        synopsis:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      },
      {
        image: "http://localhost:8000/image/image8.jpg",
        movie_name: "The Lion King",
        category: ["Animation", "Adventure", "Drama"],
        director: "Roger Allers, Rob Minkoff",
        casts: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        release_date: "1994-06-24",
        duration_hour: 1,
        duration_minute: 28,
        synopsis:
          "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
      },
      {
        image: "http://localhost:8000/image/image9.jpg",
        movie_name: "Black Widow",
        category: ["Action", "Adventure", "Sci-Fi"],
        director: "Cate Shortland",
        casts: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        release_date: "2021-07-09",
        duration_hour: 2,
        duration_minute: 14,
        synopsis:
          "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      },
      {
        image: "http://localhost:8000/image/image10.jpg",
        movie_name: "John Wick: Chapter 3 - Parabellum",
        category: ["Action", "Crime", "Thriller"],
        director: "Chad Stahelski",
        casts: ["Keanu Reeves", "Halle Berry", "Ian McShane"],
        release_date: "2019-05-17",
        duration_hour: 2,
        duration_minute: 10,
        synopsis:
          "Super-assassin John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head.",
      },
      {
        image: "http://localhost:8000/image/image11.jpg",
        movie_name: "The Witches",
        category: ["Adventure", "Comedy", "Family"],
        director: "Robert Zemeckis",
        casts: ["Anne Hathaway", "Octavia Spencer", "Stanley Tucci"],
        release_date: "2020-10-22",
        duration_hour: 1,
        duration_minute: 46,
        synopsis:
          "A young boy and his grandmother have a run-in with a coven of witches and their leader.",
      },
      {
        image: "http://localhost:8000/image/image12.jpg",
        movie_name: "Tenet",
        category: ["Action", "Sci-Fi"],
        director: "Christopher Nolan",
        casts: [
          "John David Washington",
          "Robert Pattinson",
          "Elizabeth Debicki",
        ],
        release_date: "2020-08-26",
        duration_hour: 2,
        duration_minute: 30,
        synopsis:
          "Armed with only one word, Tenet, and fighting for the survival of the world, a protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      },
      {
        image: "http://localhost:8000/image/image13.jpg",
        movie_name: "Spider-Man: Homecoming",
        category: ["Action", "Adventure", "Sci-Fi"],
        director: "Jon Watts",
        casts: ["Tom Holland", "Michael Keaton", "Robert Downey Jr."],
        release_date: "2017-07-07",
        duration_hour: 2,
        duration_minute: 13,
        synopsis:
          "Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture, a new villain who emerges to threaten New York City.",
      },
      {
        image: "http://localhost:8000/image/image14.jpg",
        movie_name: "Interstellar",
        category: ["Adventure", "Drama", "Sci-Fi"],
        director: "Christopher Nolan",
        casts: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        release_date: "2014-11-07",
        duration_hour: 2,
        duration_minute: 49,
        synopsis:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      },
      {
        image: "http://localhost:8000/image/image15.jpg",
        movie_name: "The Avengers",
        category: ["Action", "Adventure", "Sci-Fi"],
        director: "Joss Whedon",
        casts: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
        release_date: "2012-05-04",
        duration_hour: 2,
        duration_minute: 23,
        synopsis:
          "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      },
      {
        image: "http://localhost:8000/image/image16.jpg",
        movie_name: "Avatar",
        category: ["Action", "Adventure", "Fantasy"],
        director: "James Cameron",
        casts: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        release_date: "2009-12-18",
        duration_hour: 2,
        duration_minute: 42,
        synopsis:
          "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      },
      {
        image: "http://localhost:8000/image/image17.jpg",
        movie_name: "The Grand Budapest Hotel",
        category: ["Adventure", "Comedy", "Crime"],
        director: "Wes Anderson",
        casts: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
        release_date: "2014-03-28",
        duration_hour: 1,
        duration_minute: 39,
        synopsis:
          "A hotel concierge and his protégé embark on a series of adventures involving the theft and recovery of a priceless Renaissance painting and the battle for an enormous family fortune.",
      },
      {
        image: "http://localhost:8000/image/image18.jpg",
        movie_name: "La La Land",
        category: ["Comedy", "Drama", "Musical"],
        director: "Damien Chazelle",
        casts: ["Ryan Gosling", "Emma Stone", "John Legend"],
        release_date: "2016-12-09",
        duration_hour: 2,
        duration_minute: 8,
        synopsis:
          "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      },
      {
        image: "http://localhost:8000/image/image19.jpg",
        movie_name: "The Revenant",
        category: ["Action", "Adventure", "Drama"],
        director: "Alejandro G. Iñárritu",
        casts: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter"],
        release_date: "2015-12-25",
        duration_hour: 2,
        duration_minute: 36,
        synopsis:
          "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      },
      {
        image: "http://localhost:8000/image/image20.jpg",
        movie_name: "Mad Max: Fury Road",
        category: ["Action", "Adventure", "Sci-Fi"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      },

      {
        image:
          "http://localhost:8000/image/1710137849369-216198498_spiderman-homecoming.png",
        movie_name: "Spider-Man: Homecoming",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: false,
      },

      {
        image: "http://localhost:8000/image/1710137766645-767275661_tenet.svg",
        movie_name: "Tenet",
        category: ["Action", "Sci-Fi"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710137740226-507730239_the-witches.svg",
        movie_name: "The Witches",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710137677748-979471590_black-widow.svg",
        movie_name: "Black Widow",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710138209562-300844417_spiderman-homecoming.png",
        movie_name: "Spider-Man: Homecoming",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: false,
      },

      {
        image: "http://localhost:8000/image/1710138160086-501925904_tenet.svg",
        movie_name: "Tenet",
        category: ["Action", "Sci-Fi"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710138131883-185552247_the-witches.svg",
        movie_name: "The Witches",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710138077998-33748148_black-widow.svg",
        movie_name: "Black Widow",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710138322454-827027466_spiderman-homecoming.png",
        movie_name: "Spider-Man: Homecoming",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: false,
      },

      {
        image: "http://localhost:8000/image/1710138294361-853736112_tenet.svg",
        movie_name: "Tenet",
        category: ["Action", "Sci-Fi"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710138266346-192089440_the-witches.svg",
        movie_name: "The Witches",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710138232553-494788134_black-widow.svg",
        movie_name: "Black Widow",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2015-05-15",
        duration_hour: 2,
        duration_minute: 0,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        recommended: false,
      },
    ];

    for await (const movie of movies) {
      await saveData(movie);
    }

    console.log(`${movies.length} movies created`);
  } catch (err) {
    throw err;
  }
};
