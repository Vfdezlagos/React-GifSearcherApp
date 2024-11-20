import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // Validar que el input value no este vacio
        // const isValid = !!inputValue.trim();
        // if (isValid) setCategories([inputValue, ...categories]);

        const value = inputValue.trim();

        if (value.length <= 1) return;

        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(value);
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func,
    // categories: PropTypes.array.isRequired,
};
