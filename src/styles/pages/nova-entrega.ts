import styled from "styled-components";
import { PageContent } from "../global";

export const Container = styled.div``

export const Content = styled(PageContent)`
    background: var(--background-color);
    border-radius: 0.75rem;

    box-shadow: 0px 4px 20px var(--box-shadow-color);
    
    padding: 2.5rem;

    form {
        display: inline-block;
        width: 100%;

        h2 {
            text-transform: uppercase;
            font: 400 1rem "Inter", sans-serif;
            color: var(--gray-600);
            margin: 2rem 0 1.5rem 0;
        }

        .form-group {
            display: flex;
            flex-direction: column;

            & + .form-group {
                margin-top: 1.5rem;
            }

            label {
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

            input {
                font: 400 1rem 'Inter', sans-serif;
                padding: 0.75rem 1rem 0.75rem 1rem;
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
                    box-shadow: 0 4px 4px var(--gray-200);
                }
            }
        }

        .form-actions {
            margin-top: 2.5rem;
            display: flex;
            gap: 1rem;
        }
    }
    
    /* devices: > 1024 */
    @media (min-width: 1024px) {
        .form-inline {
            display: grid;
            grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
            column-gap: 1rem;
            row-gap: 1.5rem;
            
            .form-group + .form-group {
                margin-top: 0;
            }
        }
    }

    /* devices: > 1200 */
    @media (min-width: 1200px) {
        .form-inline {
            grid-template-columns:
            calc(30% - 1rem) calc(20% - 1rem) calc(20% - 1rem)
            30%;
            column-gap: 1rem; 
            
            .form-group + .form-group {
                margin-top: 0;
            }
        }
    }
`