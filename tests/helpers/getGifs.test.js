/* eslint-disable no-undef */
import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs.js", () => {
    const category = "One piece";

    test("Debe retornar un array de gifs", async () => {
        const gifs = await getGifs(category);
        // console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});
