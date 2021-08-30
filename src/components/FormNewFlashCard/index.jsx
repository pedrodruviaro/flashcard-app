import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FormNewFlashCard } from "./styles";
import {useSended} from '../../contexts/SendedContext'

export default function Index() {

    const {setSended} = useSended()

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const notifyError = () => toast.error("Missing something...");
    const notifySucess = () => toast.success("Flashcard Added...");

    async function handleNewFlashcard(e) {
        e.preventDefault();

        if (question.trim() === "" || answer.trim() === "") {
            notifyError();
            return;
        }

        const newCard = {question, answer, responded: false}

        await fetch('http://localhost:5000/flashcards', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newCard)
        })
        
        notifySucess()
        setAnswer("")
        setQuestion("")
        setSended(true)
    }

    return (
        <FormNewFlashCard>
            <form onSubmit={handleNewFlashcard}>
                <input
                    type="text"
                    placeholder="Question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <textarea
                    placeholder="Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button type="submit">Add Question</button>
            </form>

            <Toaster />
        </FormNewFlashCard>
    );
}
