import React from "react";
import styled from "@emotion/styled"

const inputStyles = `
    background: #111;
    border: 1px solid #fff;
    box-sizing : border-box;
    color: #fff;
    display: block;
    margin-bottom: 1em;
    padding: 8px 12px;
    width: 100%;
`;

const StyledInput = styled.input`
    ${inputStyles}
`;

const StyledTextArea = styled.textarea`
    ${inputStyles}
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: .5em;
`;

const FormInput = ({ label, name, onChange, required=true, type="text", styleOverrides, value }) => (
    <>
        <StyledLabel htmlFor={`id_${name}`}>
            {label}
        </StyledLabel>
        {type === 'textarea' ? (
            <StyledTextArea 
                id={`id_${name}`}
                name={name}
                onChange={onChange}
                required={required}
                rows="5"
                type={type}
                value={value}
            />
        ) : (
            <StyledInput 
                id={`id_${name}`}
                name={name}
                onChange={onChange}
                required={required}
                type={type}
                value={value}
            />
        )}

    </>
)

export default FormInput