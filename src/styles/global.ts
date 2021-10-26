import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        /*Colors HUE*/
        --hue: 216;
        
        --hue-status-pedido-cancelado: 358;
        --hue-status-pedido-pendente: 209;
        --hue-status-pedido-finalizado: 128;
        /*===================================*/
        
        --body-color: hsla(var(--hue), 9%, 95%, 1);
        --background-color: #ffffff;
        
        --primary-color: hsla(var(--hue), 44%, 44%, 1);
        --primary-color-light: hsla(var(--hue), 39%, 54%, 1);
        --primary-color-extra-light: hsla(var(--hue), 33%, 96%, 1);
        --danger-color: hsla(var(--hue-status-pedido-cancelado), 55%, 52%, 1);
        
        --input-border-color: hsla(var(--hue), 12%, 80%, 1);
        --input-border-color-focus: hsla(var(--hue), 22%, 60%, 1);
        
        --gray-800: hsla(var(--hue), 80%, 0%, 0.8);
        --gray-600: hsla(var(--hue), 80%, 0%, 0.6);
        --gray-500: hsla(var(--hue), 80%, 0%, 0.5);
        --gray-400: hsla(var(--hue), 80%, 0%, 0.4);
        --gray-300: hsla(var(--hue), 80%, 0%, 0.3);
        --gray-200: hsla(var(--hue), 80%, 0%, 0.2);
        --gray-100: hsla(var(--hue), 80%, 0%, 0.1);
        
        --box-shadow-color: hsla(var(--hue), 49%, 34%, 0.05);
        
        /*Status dos Pedidos*/
        /*PENDENTE*/
        --status-pedido-pendente: hsla(var(--hue-status-pedido-pendente), 55%, 52%, 1);
        --status-pedido-pendente-light: hsla(var(--hue-status-pedido-pendente), 55%, 52%, 0.2 );
        
        /*CANCELADO*/
        --status-pedido-cancelado: hsla(var(--hue-status-pedido-cancelado), 62%, 50%, 1);
        --status-pedido-cancelado-light: hsla(var(--hue-status-pedido-cancelado), 62%, 50%, 0.2);
        
        /*FINALIZADO*/
        --status-pedido-finalizado: hsla(var(--hue-status-pedido-finalizado), 44%, 44%, 1);
        --status-pedido-finalizado-light: hsla(var(--hue-status-pedido-finalizado), 44%, 44%, 0.2);
        
        
        --sidebar-width: 5.625rem;
        --compenents-form-height: 3rem
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--body-color);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    a {
        display: inline-flex;
        text-decoration: none;
    }

    button {
        border: 0;
        cursor: pointer;
    }

    input,
    button {
        height: var(--compenents-form-height);
    }

    [disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .link-button {
        font: 500 0.9375rem 'Inter', sans-serif;
        line-height: 1.09375rem;
        color: var(--gray-800);
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.07875rem;
        height: 2rem;

        background: none;

        display: flex;
        align-items: center;

        transition: opacity 0.2s;

        &:hover {
            opacity: 0.6;
            text-decoration: underline;
        }

        svg {
            stroke: var(--gray-800);
            margin-right: 0.75rem;
        }
    }
    
    form {
        display: inline-block;
        width: 100%;

        h2 {
            text-transform: uppercase;
            font: 400 1rem "Inter", sans-serif;
            color: var(--gray-600);
            margin: 2rem 0 1.5rem 0;
        }

        /* .form-group {
            display: flex;
            flex-direction: column;

            & + .form-group {
                margin-top: 1.5rem;
            }

            label {
                font: 400 0.9375rem 'Inter', sans-serif;
                line-height: 1.171875rem;
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

            input, textarea {
                font: 400 1rem 'Inter', sans-serif;
                padding: 0 1rem;
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
                    box-shadow: 2px 3px 4px var(--gray-100);
                }
            }

            textarea {
                padding-top: 0.75rem;
                padding-bottom: 0.75rem;
            }
        } */

        .form-actions {
            margin-top: 2.5rem;
            display: flex;
            gap: 1rem;
        }
    }

    .react-modal-overlay {
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

        z-index: 200;
		
		display: flex;
		justify-content: flex-end;
	}

	.react-modal-content {
        height: 100%;
		width: 85%;
		max-width: 35rem;
		background: var(--background-color);
        padding: 4rem 3rem;

        transform: translateX(35rem);
        transition: all 400ms ease;
	}

    .ReactModal__Content--after-open {
        transform: translateX(0);
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: all 500ms ease-in-out;
    }

    .ReactModal__Overlay--after-open {
        opacity: 1;
    }

    .ReactModal__Overlay--before-close {
        opacity: 0;
    }
    
    .client-list {
        margin-top: 2.5rem;

        .client-list__item {
            cursor: pointer;
            padding-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            opacity: 0.75;
            transition: opacity 0.3s;

            &:hover {
                opacity: 1;
            }

            & + .client-list__item {
                border-top: 1px solid var(--gray-100);
                padding-top: 1.5rem;
            }
        }

        .client-list__item-info {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            strong {
                color: var(--gray-600);
            }

            span {
                color: var(--gray-500);
            }
        }
    }
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;

    & + & {
        margin-top: 1.5rem;
    }

    label {
        font: 400 0.9375rem 'Inter', sans-serif;
        line-height: 1.171875rem;
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

    input, textarea {
        font: 400 1rem 'Inter', sans-serif;
        padding: 0 1rem;
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
            box-shadow: 2px 3px 4px var(--gray-100);
        }
    }

    textarea {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
`

export const PageContent = styled.section`
    margin-top: 3rem;
`

export const Title = styled.h1`
    font: 400 2rem 'Nunito', sans-serif;
    line-height: 2.5rem;
    color: var(--gray-600);
`