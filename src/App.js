import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import FormNewFlashCard from "./components/FormNewFlashCard";
import FlashcardsList from "./components/FlashcardsList/index";
import styled from "styled-components";
import SendedContextProvider from './contexts/SendedContext'

const Main = styled.main`
    padding: 1.5rem;
`;

function App() {
    return (
        <SendedContextProvider>
            <Main>
                <GlobalStyles />
                <FormNewFlashCard />
                <FlashcardsList />
            </Main>
        </SendedContextProvider>
    );
}

export default App;
