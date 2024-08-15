import {describe, it, expect} from "vitest";
import {add} from "index";

describe("Add tests", ()=>{
    it("should add", ()=> {
        expect(add(1, 2)).toBe(3);
    })
})