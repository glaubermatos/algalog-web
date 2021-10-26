import styled from "styled-components";
import { PageContent } from "../global";

export const Container = styled.div``

export const Content = styled(PageContent)`
    background: var(--background-color);
    border-radius: 0.75rem;

    box-shadow: 0px 4px 20px var(--box-shadow-color);
    
    padding: 2.5rem;
    
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