import hello from "../src/hello"
import { expect } from "chai"

describe("Hello module", () => {
    it("should return a greeting customized for the supplied name", () => {
        expect(hello("Andrew")).to.equal("Hello Andrew")
    })
})