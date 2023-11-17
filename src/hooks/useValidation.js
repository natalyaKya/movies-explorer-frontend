import { useState, useCallback } from "react";

export function useValidation(defaultValue) {
    const [values, setValues] = useState(defaultValue || {});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    function handleChange(item) {
        setValues({ ...values, [item.target.name]: item.target.value });
        setErrors({ ...errors, [item.target.name]: item.target.validationMessage });
        setIsValid(item.target.closest("form").checkValidity());
    }
    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, resetForm, errors, isValid, setIsValid, setValues }
}