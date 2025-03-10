const tarotCards = {
    "The Fool": ["New beginnings, spontaneity, a free spirit", "Recklessness, foolishness, lack of direction"],
    "The Magician": ["Manifestation, resourcefulness, power", "Manipulation, poor planning, deceit"],
    "The High Priestess": ["Intuition, divine knowledge, subconscious", "Secrets, disconnected intuition, confusion"],
    "The Empress": ["Fertility, abundance, nurturing", "Neglect, dependence, creative block"],
    "The Emperor": ["Authority, stability, father figure", "Tyranny, rigidity, lack of control"],
    "The Lovers": ["Love, relationships, harmony, choices", "Disharmony, imbalance, separation"],
    "The Chariot": ["Control, determination, willpower", "Lack of direction, aggression, obstacles"],
    "Strength": ["Inner strength, courage, patience", "Self-doubt, insecurity, weakness"],
    "The Hermit": ["Introspection, inner wisdom, solitude", "Isolation, loneliness, withdrawal"],
    "Death": ["Endings, transformation, new beginnings", "Resisting change, fear of transformation"],
    "The Star": ["Hope, inspiration, spirituality", "Despair, lack of faith, disillusionment"],
    "The Moon": ["Illusions, dreams, subconscious", "Confusion, fear, deception"],
    "The Sun": ["Happiness, success, vitality", "Temporary sadness, lack of clarity"],
    "Judgment": ["Self-reflection, awakening, absolution", "Doubt, self-loathing, refusal to learn"],
    "The World": ["Completion, fulfillment, accomplishment", "Lack of closure, unfinished business"]
};

function getRandomCards(num = 6) {
    let deck = Object.keys(tarotCards);
    let selectedCards = [];
    
    for (let i = 0; i < num; i++) {
        let randomIndex = Math.floor(Math.random() * deck.length);
        let cardName = deck[randomIndex];
        let orientation = Math.random() > 0.5 ? "Upright" : "Reversed";
        let meaning = orientation === "Upright" ? tarotCards[cardName][0] : tarotCards[cardName][1];
        selectedCards.push({ cardName, orientation, meaning });
        deck.splice(randomIndex, 1);
    }

    return selectedCards;
}

function generateOracleSummary(cards) {
    let meanings = cards.map(card => card.meaning).join(" ");
    return `You came seeking answers, but the cards—they never lie, they only reflect what already is.

The universe whispers secrets, but can you hear them?

${meanings}

Most people move through life asleep. They obey illusions, clinging to comfort, avoiding pain. But pain… pain is the mother of wisdom. A storm comes to test your strength. Will you shatter, or will you rise?

The cards do not promise comfort. They only show truth. And truth is the most dangerous thing of all.

The question is not whether fate will favor you. The question is: are you ready for the truth?`;
}

function performReading() {
    let question = document.getElementById("question").value.trim();
    if (!question) {
        alert("Please enter a question!");
        return;
    }

    let drawnCards = getRandomCards();
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<strong>Question:</strong> ${question}\n\n`;

    drawnCards.forEach(card => {
        resultDiv.innerHTML += `🔹 <strong>${card.cardName}</strong> (${card.orientation})\nMeaning: ${card.meaning}\n\n`;
    });

    resultDiv.innerHTML += `<hr><strong>Oracle's Reflection:</strong>\n${generateOracleSummary(drawnCards)}`;
}