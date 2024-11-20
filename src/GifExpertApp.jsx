import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([""]);

    const onAddCategory = (newCategory) => {
        const isValid = !!newCategory; // !! significa not null and not undefined
        if (!isValid || categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gif Searcher App</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
