import React from "react";
import QuestionCard from "../question-card";
import { shallow } from "enzyme";

describe("rendering component", () => {
    it("renders QuestionCard without crashing", () => {
        shallow(<QuestionCard />)
    })
})