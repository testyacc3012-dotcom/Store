// ===========================================================================
// Brainrot catalog data.
// This is the ONLY file you need to touch to update names, prices, images,
// or descriptions. Each entry becomes one storefront card + one details page.
//
// "price" can be a plain number (e.g. 2399) or a range string (e.g. "5,000 – 16,000").
// "image" is a path relative to the site root.
// ===========================================================================

const BRAINROTS = [
  {
    id: 1,
    name: "Digi Narwhal",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-1.webp",
    description: "Half narwhal, half glitch. Digi Narwhal phases through the server whenever nobody's watching, then reappears somewhere it definitely shouldn't be."
  },
  {
    id: 2,
    name: "Vulturino Skeletono",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-2.webp",
    description: "A vulture that lost its feathers and never lost its attitude. Vulturino Skeletono circles the map looking for whatever's left after everyone else is done."
  },
  {
    id: 3,
    name: "Abyssaloco",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-3.webp",
    description: "Pulled up from somewhere deeper than anyone wanted to check. Abyssaloco doesn't say much — it doesn't need to."
  },
  {
    id: 4,
    name: "Examen Bros",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-4.png",
    description: "Two brothers, one shared brain cell, zero studying done. Examen Bros show up right before deadlines and leave right after."
  },
  {
    id: 5,
    name: "Pizza and Ranch",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-5.png",
    description: "An unstoppable combo that should not work as well as it does. Pizza and Ranch travel together, always, no exceptions."
  },
  {
    id: 6,
    name: "Noo my Examen",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-6.png",
    description: "The sequel nobody asked for. Noo my Examen shows up right when you thought it was over, panicking louder than the last one."
  },
  {
    id: 7,
    name: "Dragon Cannelloni",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-7.webp",
    description: "Part dragon, part pasta, fully unbothered. Dragon Cannelloni breathes fire that somehow smells like a Sunday dinner."
  },
  {
    id: 8,
    name: "Noo my Resume",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-8.webp",
    description: "Distant cousin of Noo my Examen. Noo my Resume appears whenever it's time to be responsible and immediately regrets it."
  },
  {
    id: 9,
    name: "67",
    rarity: "Secret",
    price: 2399,
    image: "assets/images/brainrot-9.webp",
    description: "Nobody knows what 67 actually is. It just is. Ask around and you'll get a different answer every time."
  },
  {
    id: 10,
    name: "Strawberry Elephant",
    rarity: "OG",
    price: "5,000 \u2013 16,000",
    image: "assets/images/brainrot-10.jpeg",
    description: "One of the originals. Strawberry Elephant has been around since before the server had rules, and it shows."
  }
];

// Where the "Buy" button sends people when no promo has been applied.
// Point this at your real Roblox purchase page / profile.
const ROBLOX_PROFILE_URL = "https://www.roblox.com/users/10529406848/profile?friendshipSourceType=PlayerSearch";
