import styled from "styled-components";

export const Container = styled.header`
    border-bottom: 1px solid var(--gray-200);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .info-container {
        border-bottom: 1px solid var(--gray-600);
        padding-bottom: 1rem;

        display: flex;
        gap: 1.5rem;
    }

    .box-title {

        span {
            display: block;
            margin-top: 0.5rem;
            font-weight: 400;
            color: var(--gray-400);
        }
    }

    .actions {
        
    }
`