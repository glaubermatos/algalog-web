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

        a {
            font: 500 0.75rem 'Inter', sans-serif;
            line-height: 1.09375rem;
            color: var(--gray-800);
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.07875rem;
            height: 2rem;

            display: flex;
            align-items: center;

            transition: opacity 0.2s;

            &:hover {
                opacity: 0.6;
            }

            svg, img {
                opacity: 0.8;
                margin-right: 1rem;
            }
        }
    }
`