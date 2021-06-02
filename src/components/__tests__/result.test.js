import React from "react";
import ResultPage from "../result";
import { shallow } from "enzyme";

describe("rendering component", () => {
    it("renders Result without crashing", () => {
        shallow(<ResultPage />)
    })
})