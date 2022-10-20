import React from "react";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
import "./App.css";

const App = () => {
  const a = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return (
    <>
      <div className="ui container comments">
        {a.map((curr) => {
          return (
            <ApprovalCard key={faker.date.recent()}>
              <CommentDetail
                author={faker.name.firstName()}
                avatar={faker.image.avatar()}
                comment={faker.lorem.lines(1)}
                key={faker.date.recent()}
              />
            </ApprovalCard>
          );
        })}
      </div>
    </>
  );
};

export default App;
