import styled from "styled-components";

export const FlashcardsList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem auto 0 auto;
    max-width: 1440px;

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-content: center;
        justify-items: center;
        gap: 1.5rem;
        width: 100%;
    }
`