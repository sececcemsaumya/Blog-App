'use client';

const books = [
  {
    id: 1,
    image: "/Beneath the Crimson Sky.jpg",
    title: "Beneath the Crimson Sky",
    author: "Mark Sullivan",
    rating: 4.5,
    description:
      "Set in WWII Italy, a courageous teen joins the resistance to fight Nazi tyranny. \nHe risks everything to protect his loved ones and his homeland. \nA story of bravery, love, and sacrifice.",
  },
  {
    id: 2,
    image: "/Between Worlds.jpeg",
    title: "Between the Worlds",
    author: "Amara Frost",
    rating: 4.2,
    description:
      "Born between realms, a girl discovers her power to unite two warring worlds. \nShe embarks on a quest to restore balance between light and shadow. \nAn epic fantasy filled with magic and destiny.",
  },
  {
    id: 3,
    image: "/Beyond the Horizon.jpg",
    title: "Beyond the Horizon",
    author: "K.J. Cloutier",
    rating: 4.6,
    description:
      "A young woman sails beyond the familiar in search of truth. \nFamily secrets unravel across oceans and continents. \nA heartfelt journey of discovery and courage.",
  },
  {
    id: 4,
    image: "/Code of the Vanished.jpg",
    title: "Code the Vanished",
    author: "Nia Blake",
    rating: 4.1,
    description:
      "A hacker uncovers a digital trail linked to a missing civilization. \nAs she decodes clues, danger draws nearer. \nA fast-paced techno-thriller full of mystery and suspense.",
  },
  {
    id: 5,
    image: "/Dead Air.jpg",
    title: "Dead Air",
    author: "L. M. Grant",
    rating: 4.3,
    description:
      "Late-night calls send a radio host into a dark conspiracy. \nStrange voices lead to shocking truths. \nSuspense builds as the clock ticks toward danger.",
  },
  {
    id: 6,
    image: "/Dragonsong Rebellion.jpg",
    title: "Dragonsong Rebellion",
    author: "T. J. Green",
    rating: 4.7,
    description:
      "A bard’s magical song awakens dragons long thought dead. \nShe becomes the spark of a rebellion against tyranny. \nA thrilling fantasy of fire, freedom, and flight.",
  },
  {
    id: 7,
    image: "/Echoes from the Shore.jpg",
    title: "Echoes from the Shore",
    author: "Isla Thorn",
    rating: 4.4,
    description:
      "A grieving widow returns to the town where her love began. \nThe sea whispers secrets from the past. \nA poetic tale of loss, memory, and healing.",
  },
  {
    id: 8,
    image: "/Kingdom of Ash and Stars.jpg",
    title: "Kingdom of Ash and Stars",
    author: "Reina Vaughn",
    rating: 4.8,
    description:
      "An exiled princess returns to reclaim her shattered kingdom. \nMagic and war collide under a star-lit sky. \nAn epic saga of power, destiny, and hope.",
  },
  {
    id: 9,
    image: "/Shadows Deadline.jpg",
    title: "Shadows Deadline",
    author: "Cory Blaine",
    rating: 4.0,
    description:
      "A journalist investigates a high-profile cover-up. \nThe closer he gets, the more dangerous it becomes. \nA gripping race against time and corruption.",
  },
  {
    id: 10,
    image: "/The Clockmaker's Paradox.jpeg",
    title: "The Clockmaker's Paradox",
    author: "Davin Stone",
    rating: 4.6,
    description:
      "A brilliant clockmaker discovers how to bend time itself. \nBut every paradox has a price. \nA mind-bending tale of science, time, and consequence.",
  },
  {
    id: 11,
    image: "/The Last Ember.jpg",
    title: "The Last Ember",
    author: "R. J. Winters",
    rating: 4.5,
    description:
      "In a frozen wasteland, one girl guards the last flame of humanity. \nEnemies close in as survival grows uncertain. \nA post-apocalyptic tale of fire and resilience.",
  },
  {
    id: 12,
    image: "/The Ninth Key.jpg",
    title: "The Ninth Key",
    author: "Eva Monroe",
    rating: 4.2,
    description:
      "A cryptologist finds a key that opens ancient secrets. \nDanger follows every revelation. \nMystery and magic intertwine in this thrilling adventure.",
  },
  {
    id: 13,
    image: "/The Quantum Prophecy.jpg",
    title: "The Quantum Prophecy",
    author: "David Doyle",
    rating: 4.7,
    description:
      "A prophecy hidden in quantum theory foretells global disaster. \nCan one physicist stop the future from unfolding? \nA tense and intelligent sci-fi thriller.",
  },
  {
    id: 14,
    image: "/The Silent Witness.jpg",
    title: "The Silent Witness",
    author: "Rachel Kent",
    rating: 4.1,
    description:
      "A mute child may hold the key to a brutal murder case. \nA determined lawyer fights for truth in court. \nA legal drama with heart-pounding tension.",
  },
  {
    id: 15,
    image: "/Whispers of the Forgotten.jpg",
    title: "Whispers of the Forgotten",
    author: "Avery Scott",
    rating: 4.4,
    description:
      "An old mansion hides whispers from long-dead voices. \nA young woman is drawn into its secrets. \nA haunting tale of memories that refuse to fade.",
  },
];

const Book = ({ params }) => {
  const blogId = parseInt(params.blogId, 10);
  const book = books.find((b) => b.id === blogId);

  if (!book) {
    return <div className="blog1-page">Loading or Book not found...</div>;
  }

  return (
    <div className="blog1-page">
      <div className="book-1">
        <div>
          <img src={book.image} alt={book.title} className="book1-image" />
        </div>
        <div>
          <h3 className="book1-title">{book.title}</h3>
          <p className="book1-description">{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
