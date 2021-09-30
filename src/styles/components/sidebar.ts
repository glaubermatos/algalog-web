import styled, { css } from 'styled-components'

interface MenuItemProps {
    active?: Boolean;
}

export const Menu = styled.aside`
    background: var(--primary-color-light);
    width: 5.625rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    nav {
        width: 100%;

        ul {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
    }
`

export const MenuItem = styled.li<MenuItemProps>`
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    position: relative;

    ${props => props.active && css`
        opacity: 1;
    `}

    &::before {
        ${props => props.active && css`
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0.25rem;
            height: 100%;
            background: var(--background-color);
            border-radius: 0 0.3125rem 0.3125rem 0;
        `}
    } 
    
    &:hover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0.25rem;
        height: 100%;
        background: var(--background-color);
        border-radius: 0 0.3125rem 0.3125rem 0;
    }

    a {
        display: inline-block;
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`