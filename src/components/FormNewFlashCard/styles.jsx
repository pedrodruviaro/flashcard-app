import styled from "styled-components";

export const FormNewFlashCard = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        flex-direction: column;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;

        input, textarea {
            width: 100%;
            font-size: 1rem;
            padding: .5rem;
            outline: none;
            border-radius: 4px;
            border: 1px solid;
        }

        textarea {
            resize: vertical;
            min-height: 120px;
        }
        
        button {
            outline: none;
            border: none;
            background-color: #333;
            color: #fdfdfd;
            padding: .25em .5em;
            cursor: pointer;
            font-size: 1rem;
            border-radius: 4px;
        }
    }
`