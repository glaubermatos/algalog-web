import styled from "styled-components";
import { PageContent } from "../global";

export const Container = styled.div``

export const Content = styled(PageContent)`

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        text-align: left;
        color: var(--gray-600);

        thead tr th {
            padding: 0.5rem 2rem;
            font: 700 0.75rem 'Nunito', sans-serif;
            text-transform: uppercase;
            line-height: 0.9375rem;
            color: var(--gray-500);
        }

        tbody tr td {
            padding: 1rem 2rem;
            background: var(--background-color);

            &:first-child {
                border-radius: 0.75rem 0 0 0.75rem;
                font: 600 1rem 'Inter', sans-serif;
                color: var(--gray-600);
            }

            &:last-child {
                border-radius: 0 0.75rem 0.75rem 0;
                text-align: right;
            }

            button {
                width: 3rem;
                height: 3rem;
                background: var(--body-color);
                border: 0;
                border-radius: 0.75rem;

                transition: filter 0.2s;

                & + button {
                    margin-left: 0.75rem;
                }

                &:hover {
                    filter: brightness(0.96);
                }
            }
        }
    }
`