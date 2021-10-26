import styled, { css } from "styled-components";

interface ButtonProps {
    color: string
}

export const Container = styled.button<ButtonProps>`

    padding: 0 1rem;
    text-transform: uppercase;
    letter-spacing: 0.07875rem; /*1.26px = 9%*/
    font: 600 0.9375rem "Inter", sans-serif; /*14px*/
    border-radius: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 0.3s;

    &:hover:not(:disabled) {
        filter: brightness(0.9);
    }

    ${props => {
        switch (props.color) {
            case 'primary':
                return css`
                    background: var(--primary-color-light);
                    color: var(--background-color);
                `
            case 'danger':
                return css`
                    background: var(--danger-color);
                    color: var(--background-color);
                `

            default:
                return css`
                    background: var(--body-color);
                    color: var(--primary-color-light);
                `;
        }
    }}

    /* &.primary-light {
        background: var(--primary-color-light);
        color: var(--background-color);
    }

    &.default {
        background: var(--body-color);
        color: var(--primary-color-light);
    }

    &.danger {
        background: var(--danger-color);
        color: var(--background-color);
    } */

    svg {
        margin-right: 1rem;
    }
`