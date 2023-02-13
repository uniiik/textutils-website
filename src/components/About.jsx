import React from "react";
import { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setbtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });

      setbtnText("Enable light mode");
    } else {
      setmyStyle({ color: "white", backgroundColor: "black" });
      setbtnText("Enable Dark mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      {/*myStyle is an javascript object */}
      <h2>About Us....</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              style={
                myStyle
              } /* we have added style=mystyle object there  only where we want to make background as black and text as white */
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <button onClick={toggleStyle} className="btn btn-secondary my-2">
        {" "}
        Theme Button
      </button>
    </div>
  );
}
