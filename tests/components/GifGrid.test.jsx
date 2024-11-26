/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
    const category = "One Piece";

    test("Debe de mostrar el loading inicialmente", () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText("Cargando...")).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
        const gifs = [
            {
                id: "ABC",
                title: "OnePiece",
                url: "http://localhost/Onepiece.jpg",
            },
            {
                id: "123",
                title: "OnePiece Luffy",
                url: "http://localhost/OnepieceLuffy.jpg",
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
    });
});
