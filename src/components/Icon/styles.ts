import styled from 'styled-components'

interface IconSvgProps {
    color?: 'primary-light' | 'gray';
}

export const IconSvg = styled.svg<IconSvgProps>`
    /* width: 64px;
    height: 64px; */

    & path {
        stroke: ${(props) => {
            switch (props.color) {
                case 'gray':
                    return 'var(--gray-600)';

                case 'primary-light':
                    return 'var(--primary-color-light)';
            
                default:
                    return 'var(--background-color)';
            }
        }};

        
    }
`