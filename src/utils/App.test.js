import * as React from "react"
import { render } from "@testing-library/react"

import { App } from "../App"

test("render correct content", () => {
    const { getByText } = render(<App/>);

    getByText("SEPER");

});