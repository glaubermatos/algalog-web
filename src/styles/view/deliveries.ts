import styled from "styled-components";
import { PageContent } from "../global";

export const Container = styled.div``

export const Content = styled(PageContent)`
    /* .tool-bar {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 1rem;
    } */
`

export const DeliveriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    .card {
        width: 100%;
        background: var(--background-color);
        border-radius: 0.5rem;

        box-shadow: 0px 4px 20px var(--box-shadow-color);
        border: 1px solid transparent;
        border-left: 4px solid transparent;

        &:hover {
            border-color: var(--primary-color-light);
            background: linear-gradient(
                95deg,
                var(--primary-color-light) -220%,
                rgba(255, 255, 255, 1) 45%
            );
            transition: 0.3s;
        }

        a {
            display: block;
            text-decoration: none;
            padding: 1.5rem 2rem 2rem 2rem;
        }

        .header {
            margin: -1.5rem -2rem 0 -2rem;
            padding: 1.5rem 2rem;
            border-bottom: 1px solid var(--gray-100);

            border-radius: 0.75rem 0.75rem 0 0;
            filter: brightness(0.99);

            display: flex;
            justify-content: space-between;
            align-items: center;

            > div {
                display: flex;
                flex-direction: column;
            }

            span {
                font: 400 0.75rem "Nunito", sans-serif;
                text-transform: uppercase;
                letter-spacing: 0.075rem;
                line-height: 0.9375rem; /*tamanho da font * 1.25 = 15px*/
                color: var(--gray-600);
                margin-bottom: 0.5rem;
            }

            strong {
                font: 600 1.125rem "Inter", sans-serif;
                color: var(--gray-600);
            }

            .status {
                padding: 0.25rem 0.75rem;
                border-radius: 0.5rem;
                font: 700 0.75rem "Inter", sans-serif;
                letter-spacing: 0.07875rem; /*9%*/
                text-transform: uppercase;

                &.pendente {
                    border: 1px solid var(--status-pedido-pendente);
                    background: var(--status-pedido-pendente-light);
                    color: var(--status-pedido-pendente);
                }

                &.cancelada {
                    border: 1px solid var(--status-pedido-cancelado);
                    background: var(--status-pedido-cancelado-light);
                    color: var(--status-pedido-cancelado);
                }

                &.finalizada {
                    border: 1px solid var(--status-pedido-finalizado);
                    background: var(--status-pedido-finalizado-light);
                    color: var(--status-pedido-finalizado);
                }
            }
        }

        .body {
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            
            label {
                text-transform: uppercase;
                color: var(--gray-400);
                margin-bottom: 0.5rem;
            }

            p {
                font-weight: 600;
                color: var(--gray-600);
            }
            
            strong {
                font-size: 1.5rem;
                color: var(--gray-600);
            }
            
            .cliente {
                display: flex;
                flex-direction: column;
            }

            .taxa {
                display: flex;
                flex-direction: column;
                text-align: right;
            }
        }
    }

    @media (min-width: 980px) {
        & {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;  
        }
    }
`