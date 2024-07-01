import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TImelineComponent = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            scale: "40%",
          }}
        >
          <h3 className="vertical-timeline-element-title">HTML, CSS</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Python
          </h4>
          <p>
            Secondary High School, Ahmednagar college, ahmednagar
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            scale: "40%",
          }}
        >
          <h3 className="vertical-timeline-element-title">HTML, CSS, JAVASCRIPT</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Python, C++
          </h4>
          <p>
            Secondary High School, Ahmednagar college, ahmednagar
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            scale: "40%",
          }}
        >
          <h3 className="vertical-timeline-element-title">Web Designing</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Figma, Bootstrap, Material UI
          </h4>
          <p>B.Tech FY, KK wagh college, nashik</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            scale: "40%",
          }}
        >
          <h3 className="vertical-timeline-element-title">Web Designing, React</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Figma, Bootstrap, Material UI
          </h4>
          <p>B.Tech SY, KK wagh college, nashik</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TImelineComponent;
