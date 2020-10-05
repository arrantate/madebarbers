import React from "react";

export default class Widget extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://booksy.com/widget/code.js?id=7616&country=gb&lang=en";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return <div />;
  }
}
