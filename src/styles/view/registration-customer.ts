import styled from "styled-components";
import { PageContent } from "../global";

export const Container = styled.div``

export const Content = styled(PageContent)`
    background: var(--background-color);
    border-radius: 0.75rem;

    box-shadow: 0px 4px 20px var(--box-shadow-color);

    padding: 2.5rem;

    .form-inline {
        margin-top: 1.5rem;
    }
    
    /* devices: > 1024 */
    @media (min-width: 1024px) {
        .form-inline {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 1rem;
            
            .form-group + .form-group {
                margin-top: 0;
            }
        }
    }
`