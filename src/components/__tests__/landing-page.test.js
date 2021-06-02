import React from "react";
import LandingPage from "../landing-page";
import { shallow } from "enzyme";

describe("rendering component", () => {
    it("renders Landing Page without crashing", () => {
        shallow(<LandingPage />)
    })
})