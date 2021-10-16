import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        /*Colors HUE*/
        --hue: 128;
        
        --hue-danger: 358;
        --hue-status-pedido-pendente: 209;
        --hue-status-pedido-finalizado: 128;
        /*===================================*/
        
        --body-color: hsla(var(--hue), 9%, 95%, 1);
        --background-color: #ffffff;
        
        --primary-color: hsla(var(--hue), 44%, 44%, 1);
        --primary-color-light: hsla(var(--hue), 39%, 54%, 1);
        --primary-color-extra-light: hsla(var(--hue), 33%, 96%, 1);

        --sidebar-width: 5.625rem;

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
        --danger-color: hsla(var(--hue-danger), 62%, 50%, 1);
        /*PENDENTE*/
        --status-pedido-pendente: hsla(var(--hue-status-pedido-pendente), 55%, 52%, 1);
        --status-pedido-pendente-light: hsla(var(--hue-status-pedido-pendente), 55%, 52%, 0.2 );

        /*CANCELADO*/
        --status-pedido-cancelado: var(--danger-color);
        --status-pedido-cancelado-light: hsla(var(--hue-danger), 62%, 50%, 0.2);

        /*FINALIZADO*/
        --status-pedido-finalizado: hsla(var(--hue-status-pedido-finalizado), 44%, 44%, 1);
        --status-pedido-finalizado-light: hsla(var(--hue), 44%, 44%, 0.2);
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

    a.button {
        display: inline-flex;
        text-decoration: none;
    }

    button {
        border: 0;
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .button {
        height: 3rem; /*48px*/
        padding: 0 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.07875rem; /*1.26px = 9%*/
        font: 600 0.9375rem "Inter", sans-serif; /*14px*/
        border-radius: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.9);
        }

        &.primary-light {
            background: var(--primary-color-light);
            color: var(--background-color);
        }

        &.default {
            background: var(--body-color);
            color: var(--primary-color-light);
        }
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