User.create!([
  {username: "Iceman", password_digest: "$2a$10$xxNg1ecEJm4eedPVn3MKpuiV2D1r15oNaY/9FqfHH0zTEXDFjV/Qu", session_token: "rD5VOCmnwFjOd50rX3mErA", email: "Ice@navy.gov", description: "", photo_url: "https://www.filepicker.io/api/file/MUaIvSeSZH0SJ1DPxiOg"},
  {username: "Viper", password_digest: "$2a$10$F1YXZh0BFm1rP2D7ItcB/OMPzjAzy/DwOGrI.Un3QFD1eGd/LqBme", session_token: "tonU4xBaiPWa6AIIi2Z52w", email: "viper@navy.gov", description: "", photo_url: "https://www.filepicker.io/api/file/wzfIXFZnSwyNiHLE6agK"},
  {username: "Jester", password_digest: "$2a$10$rU5hnVqDrra46rwK0p/XqOhTMh2NJP1zxCeq7F/tU/1iadYKq/ygy", session_token: "pwFbq7jhtw8MPPCRXXrN2A", email: "jester@navy.gov", description: "I've been flying for a long time, and you'd better pay attention if I'm trying to teach you something.", photo_url: "https://www.filepicker.io/api/file/6lTg6fAFTN2Cas0lI6fV"},
  {username: "Maverick", password_digest: "$2a$10$nICaOo9Y3xKVgzbJIpqML.5cS8m.pzvOEuPlcA49zfHkV4zwD.trC", session_token: "MYHKPMsgcXupPD9P1rmPkw", email: "maverick@navy.gov", description: "I feel the need. The need for speed.", photo_url: "https://www.filepicker.io/api/file/NR20vvInTkOUJOSsAc7a"},
  {username: "aplarson", password_digest: "$2a$10$KmMt2KhXeHND.8rCi3hY7.5ggX/aTfGGoYcGB39KIJdhH9MuQcEc6", session_token: "Fud3rz3pQ9-ZRXbpiW-oVQ", email: "andrew.p.larson@gmail.com", description: "I love vintage airplanes, coffee, and javascript.", photo_url: "https://www.filepicker.io/api/file/Wy0iXviQRSqJ9THagwuR"},
  {username: "Klinsi", password_digest: "$2a$10$mnwJ7ybLE9jYyb/Z.UeGeeciatBZweBCC5BG.4Nd/D/Rz.uBcIABG", session_token: "QKNcjSdZ95jdivpi95PIeg", email: "jurgen@ussoccer.com", description: "In addition to flying helicopters, I'm a bit of a soccer nut.", photo_url: "https://www.filepicker.io/api/file/Z8GqoHnRTD2S52F9oYbw"},
  {username: "Burt", password_digest: "$2a$10$Wb3j6fzdhp/9cyDMINMXa.dIyLWTGWoanE31dQMn6Ask2MJ94SCTy", session_token: "9L9rkjh-S-QDUONCRyrVIw", email: "burt@rutan.com", description: "I've been building and flying airplanes for a long time.", photo_url: "https://www.filepicker.io/api/file/5ZRAAp53S62q6MMVQfj8"}
])
Airport.create!([
  {icao_code: "KOAK", iata_code: "OAK", name: "Oakland International Airport", latitude: 37.7214, longitude: -122.2208},
  {icao_code: "KOSH", iata_code: "OSH", name: "Wittman Regional Airport", latitude: 43.9844, longitude: -88.5569},
  {icao_code: "KORD", iata_code: "ORD", name: "Chicago O'Hare", latitude: 41.9786, longitude: -87.9047},
  {icao_code: "KSFO", iata_code: "SFO", name: "San Francisco International Airport", latitude: 37.6188, longitude: -122.3754},
  {icao_code: "KDVO", iata_code: "NOT", name: "Marin County Airport", latitude: 38.1436, longitude: -122.5561},
  {icao_code: "KSJC", iata_code: nil, name: "San Jose International Airport", latitude: 37.3628, longitude: -121.9292},
  {icao_code: "KCCR", iata_code: nil, name: "Buchanan Field Airport", latitude: 37.9897, longitude: -122.0569},
  {icao_code: "KHWD", iata_code: nil, name: "Hayward Executive Airport", latitude: 37.6589, longitude: -122.1217},
  {icao_code: "KLVK", iata_code: nil, name: "Livermore Municipal Airport", latitude: 37.6934, longitude: -121.8203},
  {icao_code: "KAPC", iata_code: nil, name: "Napa County Airport", latitude: 38.2132, longitude: -122.2806},
  {icao_code: "KPAO", iata_code: nil, name: "Palo Alto Airport", latitude: 37.4611, longitude: -122.115},
  {icao_code: "KRHV", iata_code: nil, name: "Reid-Hillview Airport", latitude: 37.3328, longitude: -121.8197},
  {icao_code: "KSQL", iata_code: nil, name: "San Carlos Airport", latitude: 37.5119, longitude: -122.2494},
  {icao_code: "KSTS", iata_code: nil, name: "Charles M. Schulz-Sonoma County Airport", latitude: 38.5089, longitude: -122.8128}
])
Flight.create!([
  {owner_id: 1, departure_date: "2014-12-17", departure_airport_id: 1, aircraft: "F-14", description: "Heated dogfight with Viper", passengers: 1, price: 1500, photo_url: "https://www.filepicker.io/api/file/zbw7cR3Q1WFR8JT7zUxI"},
  {owner_id: 1, departure_date: "2014-12-31", departure_airport_id: 1, aircraft: "F-18", description: "Getting familiar with a new plane.", passengers: 1, price: 1230, photo_url: "https://www.filepicker.io/api/file/GEmiyWETyyXLoHoyK7Xy"},
  {owner_id: 1, departure_date: "2014-12-21", departure_airport_id: 7, aircraft: "F-14", description: "Cruising up the coast with Iceman", passengers: 1, price: 1725, photo_url: "https://www.filepicker.io/api/file/XJQqB6sJTwChqSe78Wha"},
  {owner_id: 5, departure_date: "2014-12-19", departure_airport_id: 5, aircraft: "F-35", description: "Putting a brand new plane through its paces; should be a wild ride.", passengers: 1, price: 800, photo_url: "https://www.filepicker.io/api/file/SRqSf9YTxSQeQKLPHStV"},
  {owner_id: 6, departure_date: "2014-12-26", departure_airport_id: 5, aircraft: "Cirrus SR22", description: "Heading out over the Marin headlands before turning north along the coast", passengers: 3, price: 400, photo_url: "https://www.filepicker.io/api/file/CCBkUiYXTBi6CICd5hYc"},
  {owner_id: 6, departure_date: "2015-01-08", departure_airport_id: 11, aircraft: "T-34", description: "This is a friend's plane, but I'm taking it up to fly around the Napa and Sonoma valleys. It's a great way to see wine country in a new way.", passengers: 2, price: 400, photo_url: "https://www.filepicker.io/api/file/nIPYE98bRui8DijYTtPc"},
  {owner_id: 7, departure_date: "2015-01-13", departure_airport_id: 2, aircraft: "T-28", description: "I'm planning to head south until I hit Santa Cruz, then come back north along the coast", passengers: 2, price: 620, photo_url: "https://www.filepicker.io/api/file/ayui7cyMQ4ixdaWLcceb"},
  {owner_id: 8, departure_date: "2014-12-28", departure_airport_id: 14, aircraft: "DC-3", description: "The DC-3 is an absolute classic, and I'll be taking a scenic route around the San Francisco Bay.", passengers: 20, price: 1700, photo_url: "https://www.filepicker.io/api/file/oTSlOZ70ShOIzuGuqbo8"},
  {owner_id: 8, departure_date: "2015-02-11", departure_airport_id: 8, aircraft: "SBD", description: "I'm planning to head out over the ocean and have some fun in a rare warbird. The only passenger seat is the tail gunner position, facing backwards, but not many people get to go up in one of these.", passengers: 1, price: 220, photo_url: "https://www.filepicker.io/api/file/oFspkuTOTMGhsbJWEo7d"},
  {owner_id: 9, departure_date: "2015-01-28", departure_airport_id: 9, aircraft: "MD-500e", description: "I'm heading to Lake Tahoe, and I have room for a few passengers.", passengers: 4, price: 715, photo_url: "https://www.filepicker.io/api/file/AbhxnGmzR6umNm2WGdF7"},
  {owner_id: 9, departure_date: "2014-12-19", departure_airport_id: 12, aircraft: "R22", description: "Heading down to Monterey for the weekend", passengers: 1, price: 600, photo_url: "https://www.filepicker.io/api/file/VilCxxi2Sxyao1YEnKiA"},
  {owner_id: 9, departure_date: "2015-02-19", departure_airport_id: 15, aircraft: "G2", description: "Taking a spin over Somoma; only room for 1, I'm afraid.", passengers: 1, price: 1000, photo_url: "https://www.filepicker.io/api/file/7KUs6lDZRiGyYW22Gxzk"},
  {owner_id: 10, departure_date: "2015-02-10", departure_airport_id: 10, aircraft: "Boomerang", description: "This design is a new favorite of mine. I'd love to show you what it can do.", passengers: 4, price: 200, photo_url: "https://www.filepicker.io/api/file/VGx6uVmRgCsKheF8jzIQ"},
  {owner_id: 10, departure_date: "2015-03-01", departure_airport_id: 13, aircraft: "Long-EZ", description: "This is one of my early designs, and I still love getting to fly it.", passengers: 1, price: 150, photo_url: "https://www.filepicker.io/api/file/FxHNmmORt6AJ9zWcs7eA"}
])
Comment.create!([
  {author_id: 5, commentable_id: 24, commentable_type: "Flight", content: "I wasn't sure about Maverick at first, but he's shown that he's a great pilot. He is always very attentive to his passengers, and he takes personal responsibility for making sure that they enjoy the flight. He can be my wingman any time."},
  {author_id: 6, commentable_id: 25, commentable_type: "Flight", content: "Iceman is one of the best pilots I've ever met. He'll absolutely give you your money's worth in the air. Unfortunately, he doesn't always have the best attitude towards passenger requests; don't assume that you can talk him into flying where you want if that wasn't his plan."},
  {author_id: 6, commentable_id: 22, commentable_type: "Flight", content: "Maverick does things his own way, and that's usually a good thing. If you need special accommodation, or you're averse to buzzing towers, I would look elsewhere, though."},
  {author_id: 7, commentable_id: 27, commentable_type: "Flight", content: "Viper is an old friend of mine, and I was very excited when he told me he was going up in one of these. They're old, but sometimes its nice to ride in a classic. Highly recommended."},
  {author_id: 1, commentable_id: 26, commentable_type: "Flight", content: "Viper may not be quite as good a pilot as I am, but I always enjoy flying with him. He's happy to teach you about the plane, and he'll point anything important out as he sees it. I try to ride with him whenever I can."}
])
Reservation.create!([
  {flight_id: 24, user_id: 5, passengers: 1},
  {flight_id: 25, user_id: 7, passengers: 1},
  {flight_id: 28, user_id: 1, passengers: 2},
  {flight_id: 26, user_id: 1, passengers: 1}
])

