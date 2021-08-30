import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Flashcard } from "./styles";

export default function Index({ card, handleDeleteFlashcard }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <Flashcard>
            <header>
                <h3>{card.question}</h3>
                <button onClick={() => handleDeleteFlashcard(card.id)}>
                    <MdDeleteForever />
                </button>
            </header>
            <button onClick={() => setShowAnswer(!showAnswer)}>{!showAnswer ? "Show" : "Hide"} Answer</button>
            {showAnswer && (
                <main>
                    <p>{card.answer}</p>
                </main>
            )}
        </Flashcard>
    );
}
