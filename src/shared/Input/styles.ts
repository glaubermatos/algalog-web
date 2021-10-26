import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    & + & {
        margin-top: 1.5rem;
    }

    label {
        font: 400 0.9375rem 'Inter', sans-serif;
        line-height: 1.171875rem;
        color: var(--gray-500);
        margin-bottom: 0.5rem;
    }

    .input-group {
        display: flex;
        justify-content: flex-start;

        .input-group-addon {
            border-radius: 0.5rem 0 0 0.5rem;
            background: var(--background-color);
            border: 1.5px solid var(--input-border-color);
            color: var(--gray-600);
            padding: 0 1rem;

            display: flex;
            align-items: center;

            svg {
                opacity: 0.6;
            }
        }

        input {
            flex: 1;
            border-radius: 0 0.5rem 0.5rem 0;
            border-left: 1.5px solid transparent;
        }
    }

    input, textarea {
        font: 400 1rem 'Inter', sans-serif;
        padding: 0 1rem;
        border-radius: 0.5rem;
        border: 1.5px solid var(--input-border-color);
        background: var(--background-color);
        color: var(--gray-800);
        outline: none;

        &::placeholder {
            color: var(--gray-300);
        }

        &:hover {
            border: 1.5px solid var(--input-border-color-focus);
        }

        &:focus {
            border: 1.5px solid var(--input-border-color-focus);
            box-shadow: 2px 3px 4px var(--gray-100);
        }
    }

    textarea {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
`