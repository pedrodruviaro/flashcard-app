import styled from "styled-components";

export const Flashcard = styled.article`
    border-top: 2px solid;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > button {
            outline: none;
            border: none;
            cursor: pointer;
            background-color: transparent;
            color: #0984e3;
            font-size: 1rem;
            width: fit-content;
            margin: 0 auto;

            &:hover, &:active {
                text-decoration: underline;
            }
    }


    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;

        > button {
            outline: none;
            border: none;
            cursor: pointer;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: #d63031;
        }
    }
`