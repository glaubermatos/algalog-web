import styled from "styled-components";
import { PageContent } from "../global";

export const Container = styled.div``

export const Content = styled(PageContent)`
    background: var(--background-color);
    border-radius: 0.75rem;

    box-shadow: 0px 4px 20px var(--box-shadow-color);
    
    padding: 0 2.5rem 2.5rem 2.5rem;

    .header {
        margin: 0 -2.5rem 0 -2.5rem;
        border-radius: 0.75rem 0.75rem 0 0;
        padding: 2rem 3rem 1.5rem 3rem;
        border-bottom: 1px solid var(--gray-100);
        background: var(--background-color);
        filter: brightness(0.99);

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            span {
                text-transform: uppercase;
                font: 400 0.75rem "Nunito", sans-serif;
                letter-spacing: 0.075rem;
                color: var(--gray-500);
            }

            strong {
                font: 500 1.25rem "Inter", sans-serif;
                color: var(--gray-800);
            }   
        }

        select {
            height: 2.5rem;
            font: 600 0.9375rem "Inter", sans-serif;
            text-transform: uppercase;
            border-radius: 0.5rem;
            padding: 0 1rem;
        }

        select.pendente {
            background: var(--status-pedido-pendente-light);
            border: 1.5px solid var(--status-pedido-pendente);
            color: var(--status-pedido-pendente)
        }

        select.cancelado {
            background: var(--status-pedido-cancelado-light);
            border: 1.5px solid var(--status-pedido-cancelado);
            color: var(--status-pedido-cancelado)
        }

        select.finalizado {
            background: var(--status-pedido-finalizado-light);
            border: 1.5px solid var(--status-pedido-finalizado);
            color: var(--status-pedido-finalizado)
        }

        select option {
            background: var(--background-color);
            color: var(--gray-600);
        }

    }

    .body {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;

        .dados {
            width: 100%;
            margin-right: 3rem;
        }

        .separator {
            border-bottom: 1px solid var(--gray-100);
            display: flex;
            justify-content: space-between;

            h3 {
                display: inline;
                font: 400 1rem "Nunito", sans-serif;
                color: var(--gray-800);
                text-transform: uppercase;
                letter-spacing: 0.1rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid var(--gray-300);
            }
        }

        .box-separator {
            border-right: 1px solid var(--gray-100);
            margin-right: -3rem;
            margin-top: 2rem;
            padding-right: 3rem;
        }

        .endereco .separator {
            margin-top: 3rem;
            margin-bottom: 2rem;
        }

        .ocorrencias {
            width: 100%;
            margin-left: 3rem;

            .ocorrencias-total {
                display: inline-block;
                color: var(--gray-600);
            }

            .actions {
                margin-top: 1.5rem;
                margin-bottom: 2rem;
                display: flex;
                justify-content: flex-end;
            }

            ul { 
                list-style: none;

                li {
                    padding: 1rem 1.5rem;
                    border-radius: 0.5rem;

                    & + li {
                        margin-top: 0.5rem;
                    }

                    &.finalizado {                        
                        border: 1px solid var(--status-pedido-finalizado-light);
                        border-left: 0.375rem solid var(--status-pedido-finalizado);
                    }

                    &.danger {                        
                        border: 1px solid var(--status-pedido-cancelado-light);
                        border-left: 0.375rem solid var(--danger-color);
                    }

                    strong {
                        display: block;
                        font: 400 1rem "Inter", sans-serif;
                        color: var(--gray-800);
                        margin-bottom: 0.5rem;
                    }

                    span {
                        font: 400 0.875rem "Inter", sans-serif;
                        color: var(--gray-600);
                    }
                }
            }
        }

        .input-group {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            & + .input-group {
                margin-top: 1.5rem;
            }

            span {
                color: var(--gray-300);
            }

            p {
                color: var(--gray-800);
            }
        }

        .inline {
            display: flex;
            gap: 3rem;

            .input-group {
                margin-top: 1.5rem;
            }
        }
    }
`