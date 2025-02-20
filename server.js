const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());

// Serve the frontend (index.html) if placed in the same directory
app.use(express.static(path.join(__dirname, "public")));

    const facts = [
    "Honey never spoils; archaeologists found 3,000-year-old honey still edible.",
    "A bolt of lightning is five times hotter than the sun’s surface.",
    "Bananas are berries, but strawberries aren’t.",
    "Octopuses have three hearts and blue blood.",
    "Your bones are about five times stronger than steel.",
    "Water can boil and freeze at the same time.",
    "There are more trees on Earth than stars in the Milky Way.",
    "The Eiffel Tower grows taller in summer due to heat expansion.",
    "The heart of a blue whale weighs about 400 pounds.",
    "Sloths can hold their breath longer than dolphins.",
    "A cloud can weigh over a million pounds.",
    "Sharks existed before trees.",
    "There’s a species of jellyfish that can live forever.",
    "Wombat poop is cube-shaped.",
    "A shrimp’s heart is in its head.",
    "A crocodile can’t stick out its tongue.",
    "Some turtles breathe through their butts.",
    "A flea can jump 350 times its body length.",
    "An ostrich’s eye is bigger than its brain.",
    "Bats always turn left when leaving a cave.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "Space smells like burnt steak.",
    "Water bears (tardigrades) can survive in space.",
    "Bananas glow blue under UV light.",
    "There’s a fish that can climb trees.",
    "A snail can sleep for three years.",
    "The fingerprints of a koala are nearly identical to humans.",
    "The shortest war in history lasted only 38 minutes.",
    "A day on Venus is longer than a year on Venus.",
    "Cows have best friends and get stressed when separated.",
    "A day on Mercury lasts 176 Earth days.",
    "Bees can recognize human faces.",
    "Some frogs freeze solid and then thaw back to life.",
    "There’s enough gold in Earth’s core to cover the planet.",
    "Butterflies taste with their feet.",
    "The moon is moving away from Earth at 3.8 cm per year.",
    "The human body has about 37.2 trillion cells.",
    "A giraffe’s tongue is about 45 cm long.",
    "Spiders can’t fly, but some can glide.",
    "Hummingbirds can fly backward.",
    "The smell of freshly cut grass is a distress signal.",
    "Venus is the hottest planet in the solar system.",
    "An octopus has nine brains.",
    "Newborn kangaroos are smaller than a cherry.",
    "A dragonfly can fly backward.",
    "The unicorn is Scotland’s national animal.",
    "The longest hiccup spree lasted 68 years.",
    "Mosquitoes are attracted to the color blue.",
    "A blue whale’s tongue weighs as much as an elephant.",
    "There’s a species of fungus that turns ants into zombies.",
    "Cows produce more milk when listening to relaxing music.",
    "A hippopotamus’ sweat is pink.",
    "The Great Wall of China is not visible from the moon.",
    "An armadillo’s shell is bulletproof.",
    "Some turtles can live for over 150 years.",
    "A woodpecker’s tongue wraps around its brain.",
    "The first oranges weren’t orange; they were green.",
    "The Amazon rainforest produces 20% of Earth’s oxygen.",
    "A single spaghetti noodle is called a 'spaghetto.'",
    "The human sneeze can travel up to 100 mph.",
    "The Sahara Desert was once a lush rainforest.",
    "The word 'alphabet' comes from Greek 'alpha' and 'beta.'",
    "The strongest muscle in the human body is the jaw.",
    "Water can cut through steel when highly pressurized.",
    "The longest recorded flight of a chicken is 13 seconds.",
    "A baby octopus is the size of a flea when born.",
    "The Pacific Ocean is larger than all landmasses combined.",
    "A strawberry isn’t actually a berry.",
    "There’s a lake in Australia that stays neon pink.",
    "You share about 60% of your DNA with bananas.",
    "The shortest complete sentence in English is 'Go.'",
    "Lightning bolts can be up to five miles long.",
    "The moon has moonquakes.",
    "The inventor of the lightbulb wasn’t Thomas Edison; it was actually Humphry Davy.",
    "A day on Pluto is 153.3 Earth hours long.",
    "A candle flame contains millions of tiny diamonds.",
    "Your brain generates enough electricity to power a lightbulb.",
    "Bubble wrap was originally designed to be wallpaper.",
    "The human body glows in the dark, but it’s too faint to see.",
    "Cats can’t taste sweetness.",
    "A snowflake can have up to 200 branches.",
    "Snakes can sense earthquakes before they happen.",
    "Peanuts aren’t nuts; they’re legumes.",
    "A jellyfish is 95% water.",
    "There’s a gas cloud in space that smells like raspberries.",
    "Banging your head against a wall burns 150 calories an hour.",
    "A bolt of lightning can reach 30,000°C.",
    "A cloud can travel faster than a cheetah.",
    "Dolphins have names for each other.",
    "A group of owls is called a parliament.",
    "Cows can walk upstairs but not downstairs.",
    "You can’t hum while holding your nose.",
    "Hummingbirds are the only birds that can hover in place.",
    "A leopard’s spots are unique, like human fingerprints.",
    "A raindrop falls at about 20 mph.",
    "Venus rotates in the opposite direction to most planets.",
    "A flea accelerates faster than a space shuttle when jumping.",
    "There's enough water in Lake Superior to flood all of North and South America in one foot of water.",
    "Giraffes only need 5-30 minutes of sleep per day.",
    "A hummingbird's heart beats over 1,200 times per minute.",
    "Your stomach gets a new lining every 3 to 4 days.",
    "Worms can regrow parts of their bodies if cut in half.",
    "A cat's purr has healing properties for bones and tissues."
];

// Function to get the fact of the day
function getFactOfTheDay() {
    const today = new Date();
    const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / 86400000
    );
    return facts[dayOfYear % facts.length];
}

// Route to serve a fresh fact every time the page requests it
app.get("/fact", (req, res) => {
    res.json({ fact: getFactOfTheDay() });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});