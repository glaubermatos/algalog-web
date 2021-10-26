import { ReactNode } from "react";
import { Container } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    addOn?: ReactNode;
}

export function Input({label, addOn, ...rest}: InputProps) {

    function formatLabel(): string | undefined{
        let labelFormated = label?.toLowerCase().replace(' ', '')
        return labelFormated || undefined;
    }

    return(
        <Container className="form-group">
            <label htmlFor={formatLabel()}>{label}</label>
            {addOn ? (
                <div className="input-group">
                    <span className="input-group-addon">
                        {addOn}
                    </span>
                    <input
                        id={formatLabel()}
                        {...rest}
                    />
                </div>
            ) : (
                <input
                    id={formatLabel()}
                    {...rest}
                />
            )}
        </Container>
    );
}