const movies = {
  "movies": [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "posterUrl": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      "stars": 5,
      "likes": 100,
      "genres": ["Crime", "Drama"],
      "actors": [
        "Tim Robbins",
        "Morgan Freeman",
        "Bob Gunton"
      ],
      "director": "Frank Darabont",
      "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red."
    },
    {
      "id": 2,
      "title": "The Godfather",
      "posterUrl": "https:\/\/m.media-amazon.com\/images\/M\/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
      "stars": 4,
      "likes": 101,
      "genres": ["Crime", "Drama"],
      "actors": [
        "Marlon Brando",
        "Al Pacino",
        "James Caan"
      ],
      "director": "Francis Ford Coppola",
      "description": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen"
    },
    {
      "id": 3,
      "title": "The Godfather: Part II",
      "posterUrl": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
      "stars": 4,
      "likes": 1,
      "genres": ["Crime", "Drama"],
      "actors": [
        "Al Pacino",
        "Robert De Niro",
        "Robert Duvall"
      ],
      "director": "Francis Ford Coppola",
      "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red"
    },
    {
      "id": 4,
      "title": "The Dark Knight",
      "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
      "stars": 2,
      "likes": 22,
      "genres": ["Crime", "Drama", "Action"],
      "actors": [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart"
      ],
      "director": "Nolan",
      "description": "Despite his tarnished reputation after the events of The Dark Knight, in which he took the rap for Dent's crimes, Batman feels compelled to intervene to assist the city and its police force which is struggling to cope with Bane's plans to destroy the city"
    },
    {
      "id": 5,
      "title": "12 Angry Men",
      "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
      "stars": 4,
      "likes": 12,
      "genres": ["Drama"],
      "actors": [
        "Henry Fonda",
        "Lee J. Cobb",
        "Martin Balsam"
      ],
      "director": "Sidney Lumet",
      "description": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room"
    },
    {
      "id": 6,
      "title": "Schindler's List",
      "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg",
      "stars": 4,
      "likes": 111,
      "genres": ["Drama"],
      "actors": [
        "Liam Neeson",
        "Ralph Fiennes",
        "Ben Kingsley"
      ],
      "director": "Steven Allan Spielberg",
      "description": "Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us"
    },
    {
      "id": 7,
      "title": "Pulp Fiction",
      "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg",
      "stars": 4,
      "likes": 606,
      "genres": ["Crime", "Drama"],
      "actors": [
        "John Travolta",
        "Uma Thurman",
        "Samuel L. Jackson"
      ],
      "director": "Quentin Tarantino",
      "description": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his weight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents."
    },
    {
      "id": 8,
      "title": "The Lord of the Rings: The Return of the King",
      "posterUrl": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      "stars": 4,
      "likes": 123,
      "genres": ["Adventure", "Drama", "Fantasy"],
      "actors": [
        "Elijah Wood",
        "Viggo Mortensen",
        "Ian McKellen"
      ],
      "director": "Sir Peter Robert Jackson",
      "description": "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy the \"one ring\", while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith."
    },
    {
      "id": 9,
      "title": "Il buono, il brutto, il cattivo",
      "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY500_CR0,0,328,500_AL_.jpg",
      "stars": 4,
      "likes": 345,
      "genres": ["Adventure"],
      "actors": [
        "Clint Eastwood",
        "Eli Wallach",
        "Lee Van Cleef"
      ],
      "director": "Sergio Leone",
      "description": "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold. All he needs is for the two to ..."
    },
    {
      "id": 10,
      "title": "Fight Club",
      "posterUrl": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
      "stars": 4,
      "likes": 999,
      "genres": ["Drama"],
      "actors": [
        "Brad Pitt",
        "Edward Norton",
        "Meat Loaf"
      ],
      "director": "David Andrew Leo Fincher",
      "description": "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is"
    },
    {
      "id": 11,
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "posterUrl": "https:\/\/m.media-amazon.com\/images\/M\/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg",
      "stars": 4,
      "likes": 123,
      "genres": ["Adventure", "Drama", "Fantasy"],
      "actors": [
        "Elijah Wood",
        "Ian McKellen",
        "Orlando Bloom"
      ],
      "director": "Sir Peter Robert Jackson",
      "description": "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!"
    },
    {
      "id": 12,
      "title": "Star Wars: Episode V - The Empire Strikes Back",
      "posterUrl": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg",
      "stars": 4,
      "likes": 5,
      "genres": ["Adventure"],
      "actors": [
        "Mark Hamill",
        "Harrison Ford",
        "Carrie Fisher"
      ],
      "director": "Irvin Kershner",
      "description": "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader."
    },
    {
      "id": 13,
      "title": "Forrest Gump",
      "posterUrl": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      "stars": 4,
      "likes": 0,
      "genres": ["Drama"],
      "actors": [
        "Tom Hanks",
        "Robin Wright",
        "Gary Sinise"
      ],
      "director": "Robert Lee Zemeckis",
      "description": "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone."
    },
    {
      "id": 14,
      "title": "Inception",
      "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
      "stars": 4,
      "likes": 123,
      "genres": ["Drama", "Adventure"],
      "actors": [
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt",
        "Ellen Page"
      ],
      "director": "Nolan",
      "description": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming."
    },
    {
      "id": 15,
      "title": "The Lord of the Rings: The Two Towers",
      "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY256_SX175_AL_.jpg",
      "stars": 4,
      "likes": 15,
      "genres": ["Adventure", "Drama", "Fantasy"],
      "actors": [
        "Elijah Wood",
        "Ian McKellen",
        "Viggo Mortensen"
      ],
      "director": "Sir Peter Robert Jackson",
      "description": "While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays their part in the battle against the evil wizard Saruman and his armies of Isengard."
    }
  ]
}
export default movies;