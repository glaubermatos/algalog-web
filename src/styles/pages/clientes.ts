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

        tbody {
            background: var(--background-color);

            tr {
                opacity: 0.8;
                box-shadow: 0px 4px 20px var(--box-shadow-color);
                
                &:hover {
                    opacity: 1;
                    background: linear-gradient(
                        95deg,
                        var(--primary-color-light) -220%,
                            rgba(255, 255, 255, 1) 45%
                    );

                    & td {
                        border-top-color: var(--primary-color-light);
                        border-bottom-color: var(--primary-color-light);
                    }

                    & td:first-child {
                        border-left: 4px solid var(--primary-color-light);
                    }

                    & td:last-child {
                        border-right-color: var(--primary-color-light);
                    }
                }
    
                td {
                    padding: 1rem 2rem;
                    border-top: 1px solid transparent;
                    border-bottom: 1px solid transparent;
        
                    &:first-child {
                        padding-left: calc(2rem - 4px);
                        border-left: 4px solid transparent;
                        border-radius: 0.5rem 0 0 0.5rem;
                        font: 600 1rem 'Inter', sans-serif;
                        color: var(--gray-600);
                    }
        
                    &:last-child {
                        border-right: 1px solid transparent;
                        border-radius: 0 0.5rem 0.5rem 0;
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
        
                .edit {
                    stroke: var(--primary-color-light);
                }
        
                .trash {
                    stroke: var(--danger-color);
                }
            }
        }
    }

    .modal-delete-cliente {
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
    }

`