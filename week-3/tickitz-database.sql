DROP TABLE IF EXISTS users, movies, schedules, bookings, genres, movies_genres;

--CREATE TABLE
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
   	password TEXT NOT NULL
);

CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    image TEXT NOT NULL,
    movie_name VARCHAR(255) NOT NULL,
    category VARCHAR(255)[] NOT NULL,
    director VARCHAR(255) NOT NULL,
    casts VARCHAR(255)[] NOT NULL,
    release_date DATE NOT NULL,
    duration_hour INT NOT NULL,
    duration_minute INT NOT NULL,
    synopsis TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE schedules (
    schedule_id SERIAL PRIMARY KEY,
    movie_id SERIAL NOT NULL,
    price REAL NOT NULL,
    cinema VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date_start DATE NOT NULL,
    date_end DATE NOT NULL,
    time TIME[] NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    CONSTRAINT fk_movies FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE
);

CREATE TABLE bookings (
	booking_id SERIAL PRIMARY KEY,
	user_id SERIAL NOT NUll,
	schedule_id SERIAL NOT NUll,
	date DATE NOT NUll,
	time TIME NOT NULL,
	seat_choosed VARCHAR(255)[] NOT NUll,
	total_payment REAL NOT NUll,
	payment_method VARCHAR(255) NOT NUll,
	created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
	CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
	CONSTRAINT fk_schedules FOREIGN KEY (schedule_id) REFERENCES schedules(schedule_id) ON DELETE CASCADE
);

CREATE TABLE genres (
	genre_id SERIAL PRIMARY KEY,
	genre_name VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE movies_genres (
	movie_id SERIAL NOT NULL,
	genre_id SERIAL NOT NULL,
	CONSTRAINT fk_movies FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE,
	CONSTRAINT fk_genres FOREIGN KEY (genre_id) REFERENCES genres(genre_id) ON DELETE CASCADE
);

--INSERT DATA INTO TABLE
--users
insert into users (first_name, last_name, email, phone_number, password) values 
('Collete', 'Scholler', 'cscholler0@php.net', '9475375897', 'iN2`*+rYD3m'),
('Sanford', 'Chardin', 'schardin1@techcrunch.com', '3469227573', 'jI3P`0v!C'),
('Teresa', 'Ruggen', 'truggen2@feedburner.com', '2712882459', 'oO3KKJq)Xr.*<I'),
('Eziechiele', 'Ricciardo', 'ericciardo3@twitter.com', '9135688036', 'uG1D7nI/R'),
('Aigneis', 'O''Fogarty', 'aofogarty4@house.gov', '6495483866', 'yX2!e=Tq(Sqx'),
('Janine', 'Greensmith', 'jgreensmith5@springer.com', '5157473394', 'iQ0<R%zlQv5C'),
('Philipa', 'Bather', 'pbather6@eventbrite.com', '7896128652', 'eX9H.4"5$/'',XVHr'),
('Norris', 'Mara', 'nmara7@economist.com', '2262612389', 'sK3Y1vx'''),
('Etty', 'Lampett', 'elampett8@washington.edu', '8737835810', 'jZ2f~P!XPf/|'),
('Alfie', 'Alvarado', 'aalvarado9@hostgator.com', '7797245853', 'jD2N/*r8j`Ng'',X>'),
('Dulcea', 'Pietri', 'dpietria@ted.com', '9201012240', 'nL4p\frt&k'),
('Bertina', 'Bugdale', 'bbugdaleb@flavors.me', '7512014243', 'hX3_Fso,6*5x'),
('Ferdinanda', 'Toulmin', 'ftoulminc@loc.gov', '4416528690', 'yH80s)Wx|WCuV'),
('Rooney', 'Thormwell', 'rthormwelld@myspace.com', '7389082287', 'vH6''@@4aU'),
('Brandice', 'Dobsons', 'bdobsonse@php.net', '9821170873', 'uI8I=WGE0h3'),
('Lauretta', 'Champain', 'lchampainf@yellowbook.com', '5948278928', 'pU6Kd\M8"?'),
('Deloris', 'MacGaughey', 'dmacgaugheyg@hubpages.com', '7856953836', 'aV8mj2+}''6`p'),
('Lotta', 'Nott', 'lnotth@latimes.com', '1483669962', 'pS9Jq2OB#l7'),
('Anderson', 'Cubley', 'acubleyi@nymag.com', '3347591633', 'cX8k,6zl7_0Ej'),
('Tamas', 'De la Perrelle', 'tdelaperrellej@dedecms.com', '2153707253', 'lA5B=K.lco%');

--movies
INSERT INTO movies (image, movie_name, category, director, casts, release_date, duration_hour, duration_minute, synopsis)
VALUES
('image1', 'The Shawshank Redemption', '{"Drama"}', 'Frank Darabont', ARRAY['Tim Robbins', 'Morgan Freeman'], '1994-09-23', 2, 22, 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'),
('image2', 'The Godfather', '{"Crime", "Drama"}', 'Francis Ford Coppola', ARRAY['Marlon Brando', 'Al Pacino', 'James Caan'], '1972-03-24', 2, 55, 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'),
('image3', 'Pulp Fiction', '{"Crime", "Drama"}', 'Quentin Tarantino', ARRAY['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'], '1994-10-14', 2, 34, 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'),
('image4', 'The Dark Knight', '{"Action", "Crime", "Drama"}', 'Christopher Nolan', ARRAY['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'], '2008-07-18', 2, 32, 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.'),
('image5', 'Forrest Gump', '{"Drama", "Romance"}', 'Robert Zemeckis', ARRAY['Tom Hanks', 'Robin Wright', 'Gary Sinise'], '1994-07-06', 2, 22, 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.'),
('image6', 'Schindler''s List', '{"Biography", "Drama", "History"}', 'Steven Spielberg', ARRAY['Liam Neeson', 'Ben Kingsley', 'Ralph Fiennes'], '1993-12-15', 3, 15, 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.'),
('image7', 'Inception', '{"Action", "Adventure", "Sci-Fi"}', 'Christopher Nolan', ARRAY['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'], '2010-07-16', 2, 28, 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'),
('image8', 'The Lion King', '{"Animation", "Adventure", "Drama"}', 'Roger Allers, Rob Minkoff', ARRAY['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'], '1994-06-24', 1, 28, 'Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.'),
('image9', 'Black Widow', '{"Action", "Adventure", "Sci-Fi"}', 'Cate Shortland', ARRAY['Scarlett Johansson', 'Florence Pugh', 'David Harbour'], '2021-07-09', 2, 14, 'Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.'),
('image10', 'John Wick: Chapter 3 - Parabellum', '{"Action", "Crime", "Thriller"}', 'Chad Stahelski', ARRAY['Keanu Reeves', 'Halle Berry', 'Ian McShane'], '2019-05-17', 2, 10, 'Super-assassin John Wick is on the run after killing a member of the international assassin''s guild, and with a $14 million price tag on his head.'),
('image11', 'The Witches', '{"Adventure", "Comedy", "Family"}', 'Robert Zemeckis', ARRAY['Anne Hathaway', 'Octavia Spencer', 'Stanley Tucci'], '2020-10-22', 1, 46, 'A young boy and his grandmother have a run-in with a coven of witches and their leader.'),
('image12', 'Tenet', '{"Action", "Sci-Fi"}', 'Christopher Nolan', ARRAY['John David Washington', 'Robert Pattinson', 'Elizabeth Debicki'], '2020-08-26', 2, 30, 'Armed with only one word, Tenet, and fighting for the survival of the world, a protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'),
('image13', 'Spider-Man: Homecoming', '{"Action", "Adventure", "Sci-Fi"}', 'Jon Watts', ARRAY['Tom Holland', 'Michael Keaton', 'Robert Downey Jr.'], '2017-07-07', 2, 13, 'Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture, a new villain who emerges to threaten New York City.'),
('image14', 'Interstellar', '{"Adventure", "Drama", "Sci-Fi"}', 'Christopher Nolan', ARRAY['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'], '2014-11-07', 2, 49, 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.'),
('image15', 'The Avengers', '{"Action", "Adventure", "Sci-Fi"}', 'Joss Whedon', ARRAY['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'], '2012-05-04', 2, 23, 'Earth''s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.'),
('image16', 'Avatar', '{"Action", "Adventure", "Fantasy"}', 'James Cameron', ARRAY['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'], '2009-12-18', 2, 42, 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'),
('image17', 'The Grand Budapest Hotel', '{"Adventure", "Comedy", "Crime"}', 'Wes Anderson', ARRAY['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'], '2014-03-28', 1, 39, 'A hotel concierge and his protégé embark on a series of adventures involving the theft and recovery of a priceless Renaissance painting and the battle for an enormous family fortune.'),
('image18', 'La La Land', '{"Comedy", "Drama", "Musical"}', 'Damien Chazelle', ARRAY['Ryan Gosling', 'Emma Stone', 'John Legend'], '2016-12-09', 2, 8, 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.'),
('image19', 'The Revenant', '{"Action", "Adventure", "Drama"}', 'Alejandro G. Iñárritu', ARRAY['Leonardo DiCaprio', 'Tom Hardy', 'Will Poulter'], '2015-12-25', 2, 36, 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.'),
('image20', 'Mad Max: Fury Road', '{"Action", "Adventure", "Sci-Fi"}', 'George Miller', ARRAY['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'], '2015-05-15', 2, 0, 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.');

--schedules
INSERT INTO schedules (movie_id, price, cinema, location, date_start, date_end, time) VALUES
(1, 12.50, 'ebv.id', 'Purwokerto', '2024-02-10', '2024-02-15', ARRAY['14:00'::TIME, '18:30'::TIME]),
(2, 11.75, 'CineOne21', 'Purwokerto', '2024-02-12', '2024-02-17', ARRAY['15:30'::TIME, '20:00'::TIME]),
(3, 13.25, 'hiflix Cinema', 'Purwokerto', '2024-02-14', '2024-02-19', ARRAY['13:45'::TIME, '17:30'::TIME]),
(4, 14.00, 'ebv.id', 'Banjarnegara', '2024-02-16', '2024-02-21', ARRAY['16:15'::TIME, '21:00'::TIME]),
(5, 12.75, 'CineOne21', 'Banjarnegara', '2024-02-18', '2024-02-23', ARRAY['12:30'::TIME, '19:45'::TIME]),
(6, 10.50, 'hiflix Cinema', 'Banjarnegara', '2024-02-20', '2024-02-25', ARRAY['14:45'::TIME, '18:00'::TIME]),
(7, 13.75, 'ebv.id', 'Purbalingga', '2024-02-22', '2024-02-27', ARRAY['15:00'::TIME, '20:30'::TIME]),
(8, 15.50, 'CineOne21', 'Purbalingga', '2024-02-24', '2024-02-29', ARRAY['17:15'::TIME, '22:00'::TIME]),
(9, 11.00, 'hiflix Cinema', 'Purbalingga', '2024-02-26', '2024-03-02', ARRAY['12:00'::TIME, '18:15'::TIME]),
(10, 12.25, 'ebv.id', 'Wonosobo', '2024-02-28', '2024-03-04', ARRAY['13:30'::TIME, '19:00'::TIME]),
(11, 14.75, 'CineOne21', 'Wonosobo', '2024-03-01', '2024-03-06', ARRAY['15:45'::TIME, '21:30'::TIME]),
(12, 16.00, 'hiflix Cinema', 'Wonosobo', '2024-03-03', '2024-03-08', ARRAY['16:30'::TIME, '22:15'::TIME]),
(13, 13.00, 'ebv.id', 'Kebumen', '2024-03-05', '2024-03-10', ARRAY['18:00'::TIME, '23:45'::TIME]),
(14, 12.50, 'CineOne21', 'Kebumen', '2024-03-07', '2024-03-12', ARRAY['14:15'::TIME, '19:30'::TIME]),
(15, 11.75, 'hiflix Cinema', 'Kebumen', '2024-03-09', '2024-03-14', ARRAY['15:30'::TIME, '20:45'::TIME]),
(16, 13.25, 'ebv.id', 'Magelang', '2024-03-11', '2024-03-16', ARRAY['17:45'::TIME, '22:30'::TIME]),
(17, 14.00, 'CineOne21', 'Magelang', '2024-03-13', '2024-03-18', ARRAY['18:15'::TIME, '23:00'::TIME]),
(18, 12.75, 'hiflix Cinema', 'Magelang', '2024-03-15', '2024-03-20', ARRAY['12:45'::TIME, '19:00'::TIME]),
(19, 10.50, 'ebv.id', 'Temanggung', '2024-03-17', '2024-03-22', ARRAY['14:00'::TIME, '18:30'::TIME]),
(20, 13.75, 'CineOne21', 'Temanggung', '2024-03-19', '2024-03-24', ARRAY['15:30'::TIME, '20:00'::TIME]);

--bookings
INSERT INTO bookings (user_id, schedule_id, date, time, seat_choosed, total_payment, payment_method) VALUES
(1, 1, '2024-02-11', '14:00', '{"A1", "A2", "A3"}', 37.50, 'PayPal'),
(2, 3, '2024-02-13', '13:45', '{"B4", "B5", "B6"}', 39.75, 'BCA'),
(3, 5, '2024-02-15', '12:30', '{"C7", "C8", "C9"}', 38.25, 'Dana'),
(4, 7, '2024-02-17', '15:00', '{"D10", "D11", "D12"}', 41.25, 'OVO'),
(5, 9, '2024-02-19', '12:00', '{"E13", "E14", "E15"}', 33.00, 'Gpay'),
(6, 11, '2024-02-21', '15:45', '{"F16", "F17", "F18"}', 49.75, 'Visa Credit Card'),
(7, 13, '2024-02-23', '18:00', '{"G19", "G20", "G21"}', 40.50, 'Gopay'),
(8, 15, '2024-02-25', '17:15', '{"H22", "H23", "H24"}', 36.75, 'PayPal'),
(9, 17, '2024-02-27', '18:15', '{"I25", "I26", "I27"}', 44.00, 'Dana'),
(10, 19, '2024-03-01', '13:30', '{"J28", "J29", "J30"}', 36.75, 'BCA'),
(11, 2, '2024-03-03', '16:30', '{"K31", "K32", "K33"}', 47.25, 'Gopay'),
(12, 4, '2024-03-05', '18:00', '{"L34", "L35", "L36"}', 56.00, 'Visa Credit Card'),
(13, 6, '2024-03-07', '14:15', '{"M37", "M38", "M39"}', 32.50, 'PayPal'),
(14, 8, '2024-03-09', '15:30', '{"N40", "N41", "N42"}', 39.75, 'BCA'),
(15, 10, '2024-03-11', '17:45', '{"O43", "O44", "O45"}', 42.50, 'Dana'),
(16, 12, '2024-03-13', '18:15', '{"P46", "P47", "P48"}', 49.00, 'OVO'),
(17, 14, '2024-03-15', '12:45', '{"Q49", "Q50", "Q51"}', 39.75, 'Gpay'),
(18, 16, '2024-03-17', '14:00', '{"R52", "R53", "R54"}', 45.50, 'PayPal'),
(19, 18, '2024-03-19', '15:30', '{"S55", "S56", "S57"}', 38.25, 'Dana'),
(20, 20, '2024-03-21', '15:30', '{"T58", "T59", "T60"}', 41.75, 'Visa Credit Card');

--genres
INSERT INTO genres (genre_name) VALUES
('Action'),
('Adventure'),
('Animation'),
('Biography'),
('Comedy'),
('Crime'),
('Drama'),
('Fantasy'),
('History'),
('Horror'),
('Musical'),
('Mystery'),
('Romance'),
('Sci-Fi'),
('Sport'),
('Thriller'),
('War'),
('Western'),
('Family'),
('Documentary');

--movies-genres
INSERT INTO movies_genres
SELECT temp_movies.movie_id, g.genre_id
FROM ( SELECT movie_id, TRIM(UNNEST(category)) AS genre
	   FROM movies
	 ) AS temp_movies
JOIN genres AS g ON temp_movies.genre = g.genre_name;

--UPDATE DATA
--users
UPDATE users
SET email = 'jojo@example.com'
WHERE user_id = 19;

--movies
UPDATE movies
SET category = '{"Action", "Sci-Fi", "Thriller"}'
WHERE movie_name = 'Tenet';

--schedules
UPDATE schedules
SET time = ARRAY['13:30'::TIME, '18:00'::TIME]
WHERE schedule_id = 19;

--bookings
UPDATE bookings
SET total_payment = 45.50
WHERE booking_id = 19;

--genres
UPDATE genres
SET genre_name = 'Classical'
WHERE genre_id = 11;

--DELETE DATA
DELETE FROM users WHERE user_id = 20;
DELETE FROM movies WHERE movie_id = 20;
DELETE FROM schedules WHERE schedule_id = 20;
DELETE FROM bookings WHERE booking_id = 20;
DELETE FROM genres WHERE genre_id = 20;

--QUERY MOVIES BASED ON MOVIE NAME
SELECT *
FROM movies
WHERE movie_name LIKE 'The%'
LIMIT 5 OFFSET 5;

--QUERY MOVIES BASED ON MOVIE NAME, RELEASE YEAR, GENRE
SELECT m.movie_name, EXTRACT(YEAR FROM m.release_date)::TEXT release_year, g.genre_name
FROM movies m
JOIN movies_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
WHERE m.movie_name LIKE 'The%' 
	AND EXTRACT(YEAR FROM m.release_date) BETWEEN 2010 AND 2020 
	AND  g.genre_name = 'Action'
LIMIT 5 OFFSET 1;

--QUERY MOVIES BASED ON MOVIE NAME, RELEASE YEAR, GENRE
SELECT m.movie_name, EXTRACT(YEAR FROM m.release_date)::TEXT release_year, g.genre_name
FROM movies m
JOIN movies_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
WHERE g.genre_name = 'Action' OR g.genre_name = 'Adventure'
LIMIT 5 OFFSET 1;
