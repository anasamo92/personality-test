import React from "react";
import TestPage from "../test-page";
import { shallow } from "enzyme";

describe("rendering component", () => {
    it("renders Test Page without crashing", () => {
        shallow(<TestPage />)
    })
})