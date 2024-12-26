# Funfacts
GEN AI-101 PIESES COPILOT
A fun fact generator on music 
Enjoy it and Learn new things!
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Fun Facts Generator</title>
    <style>
        body {
            background-color: #f0f8ff;
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            text-align: center;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #ff6347;
        }

        button {
            background-color: #ff6347;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #ff4500;
        }

        p {
            margin-top: 20px;
            font-size: 18px;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Music Fun Facts Generator</h1>
        <button id="generate-fact">Generate Fun Fact</button>
        <p id="fun-fact"></p>
    </div>
    <script>
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
    </script>
</body>
</html>
