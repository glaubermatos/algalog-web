import { ReactNode } from "react";
import { FormGroup } from "../../styles/global";
import InputMask from 'react-input-mask'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    addOn?: ReactNode;
    mask?: string | RegExp[] | undefined;
}

export function Input({label, addOn, mask, ...rest}: InputProps) {

    function formatLabel(): string | undefined{
        let labelFormated = label?.toLowerCase().replace(' ', '')
        return labelFormated || undefined;
    }


    return(
        <FormGroup className="form-group">
            <label htmlFor={formatLabel()}>{label}</label>
            {addOn ? (
                <div className="input-group">
                    <span className="input-group-addon">
                        {addOn}
                    </span>
                    {mask ? (
                        <InputMask
                            mask={mask}
                            id={formatLabel()}
                            {...rest}
                        />
                    ) : (
                        <input
                            id={formatLabel()}
                            {...rest}
                        />
                    )}
                </div>
            ) : (
                mask ? (
                    <InputMask
                        mask={mask}
                        id={formatLabel()}
                        {...rest}
                    />
                ) : (
                    <input
                        id={formatLabel()}
                        {...rest}
                    />
                )
            )}
        </FormGroup>
    );
}