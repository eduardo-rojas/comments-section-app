import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45"
        content="Informative. Thanks."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="John"
        timeAgo="Today at 2:25"
        content="Great!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Rick"
        timeAgo="Today at 8:00"
        content="Nice blog post."
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
