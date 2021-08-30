import React, { useEffect, useState } from "react";
import { FlashcardsList } from "./styles";
import FlashCard from "../FlashCard";
import { useSended } from "../../contexts/SendedContext";
import toast, { Toaster } from "react-hot-toast";

export default function Index() {
    const [flashcards, setFlashcards] = useState([]);
    const { sended, setSended } = useSended();
    const [loading, setLoading] = useState(true);

    const notifySuccess = () => toast.success("FlashCard Deleted!")

    useEffect(() => {
        console.log("usei effect");
        fetch("http://localhost:5000/flashcards")
            .then((res) => res.json())
            .then((data) => setFlashcards(data))
            .then(() => {
                setSended(false)
                setLoading(false)
            })
    }, [sended, setSended]);


    async function handleDeleteFlashcard(id){
        await fetch(`http://localhost:5000/flashcards/${id}`, {
            method: "DELETE"
        })

        setSended(true)
        notifySuccess()
    }


    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <FlashcardsList>
            <ul>
                {flashcards &&
                    flashcards.map((card, i) => (
                        <FlashCard card={card} key={i} handleDeleteFlashcard={handleDeleteFlashcard} />
                    ))}
            </ul>

            <Toaster />
        </FlashcardsList>
    );
}
