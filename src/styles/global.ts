import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        /*Colors */
        --hue: 128;
        
        --body-color: hsla(var(--hue), 9%, 95%, 1);
        --background-color: #ffffff;

        
        --primary-color: hsla(var(--hue), 44%, 44%, 1);
        --primary-color-light: hsla(var(--hue), 39%, 54%, 1);
        --primary-color-extra-light: hsla(var(--hue), 33%, 96%, 1);

        --sidebar-width: 5.625rem;

        
        --gray-600: hsla(var(--hue), 80%, 0%, 0.6);
        --gray-500: hsla(var(--hue), 80%, 0%, 0.5);
        --gray-400: hsla(var(--hue), 80%, 0%, 0.4);
        --gray-200: hsla(var(--hue), 80%, 0%, 0.2);

        --box-shadow-color: hsla(var(--hue), 49%, 34%, 0.05);
        
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

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
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