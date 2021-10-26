import styled from "styled-components";
import { PageContent } from "../global";

export const Container = styled.div``

export const Content = styled(PageContent)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;

    .card {
        background: var(--background-color);
        border-radius: 0.5rem;
        padding: 2rem 2rem 2rem 1.5rem;
        border: 1px solid transparent;
        box-shadow: 0px 4px 20px var(--box-shadow-color);
        transition: 0.2s;

        &:hover {
            border: 1px solid var(--primary-color-light);
            background: linear-gradient(
                95deg,
                var(--primary-color-light) -220%,
                rgba(255, 255, 255, 1) 45%
            );
            transform: translateY(-0.5rem);
        }

        a {
            text-decoration: none;
            display: flex;

            .img-mask {
                background: var(--primary-color-extra-light);
                border-radius: 0.75rem;
                padding: 1rem;
            }

            .card-info {
                flex: 1;
                margin-left: 2rem;

                strong {
                    font: 700 2.25rem 'Inter', sans-serif;
                    color: var(--primary-color-light);
                }
            }

            .card-info-title {
                font: 400 1.75rem 'Nunito', sans-serif;
                color: var(--gray-500);
                margin-bottom: 0.25rem;
            }
        }
    }
    
`