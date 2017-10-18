import React from "react";
import { shallow } from "enzyme";

import Greeter from "./Greeter";

describe("The Greeter component", () => {
  it("renders without crashing", () => {
    shallow(<Greeter />);
  });

  it("should greet the passed name", () => {
    const greeter = shallow(<Greeter name="Maurice" />);
    expect(greeter.find(".greeter").text()).toBe("Hello Maurice");
  });


  it("should greet the passed name", () => {
    const greeter = shallow(<Greeter name="John" />);
    expect(greeter.find(".greeter").text()).toBe("Hello John");
  });
});
