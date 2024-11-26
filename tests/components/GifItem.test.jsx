/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem component", () => {
    const id = "idprueba";
    const title = "titlePrueba";
    const url = "http://urlprueba.com/";

    const image = { id, title, url };

    test("Debe coincidir con el snapshot", () => {
        const { container } = render(<GifItem key={id} {...image} />);
        expect(container).toMatchSnapshot();
    });

    test("Debe de mostrar la imagen con el url y el alt indicado", () => {
        render(<GifItem key={id} {...image} />);
        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test("Debe de mostrar el titulo en el componente", () => {
        render(<GifItem key={id} {...image} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
