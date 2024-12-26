const funFacts = [
    "Beethoven was completely deaf by the end of his life, yet he composed some of the most famous music.",
    "The world's largest grand piano was built by a 15-year-old in New Zealand.",
    "A group of flamingos is called a 'flamboyance'.",
    "The most expensive musical instrument ever sold is a Stradivarius violin, which sold for $16 million.",
    "The first music video played on MTV was 'Video Killed the Radio Star' by The Buggles.",
    "The longest recorded piece of music is 'As Slow As Possible' by John Cage, which lasts 639 years."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById('fun-fact').innerText = funFacts[randomIndex];
});
