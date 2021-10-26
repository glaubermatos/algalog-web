import styled from "styled-components";
import { PageContent } from "../../../styles/global";

export const Content = styled(PageContent)`
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        stroke: var(--danger-color);
    }

    span {
        text-transform: uppercase;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        font: 500 1rem 'Inter', sans-serif;
        color: var(--gray-800);
    }

    p {
        margin-bottom: 3rem;
        font: 500 1.125rem 'Inter', sans-serif;
        line-height: 1.40625rem;
        max-width: 19rem;
        text-align: center;
        color: var(--gray-400);
    }

    .modal-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        button.default {
            color: var(--danger-color);
        }
    }
`