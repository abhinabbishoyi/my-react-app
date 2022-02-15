// import reactDom from "react-dom";
// import React from 'react';
  function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  }
  
//   ReactDOM.render(
//     <Goal isGoal={false} />,
//     document.getElementById('root')
//   );


export default Goal;