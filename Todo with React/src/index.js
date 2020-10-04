import React from "react";
import ReactDOM from "react-dom";
import Todo from './js/components/Todo';
import './css/main.scss';

const Index = () => {
  return (
    <div>
        <Todo />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));