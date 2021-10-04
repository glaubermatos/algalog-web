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
        button {
            height: 3rem;
            border: 0;
            padding: 0 1.5rem;
            text-transform: uppercase;
            letter-spacing: 0.07875rem; /*1.26px = 9%*/
            font: 600 0.9375rem "Inter", sans-serif; /*14px*/
            border-radius: 0.5rem;
            
            background: var(--primary-color-light);
            color: var(--background-color);

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }
`