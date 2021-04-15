import React from "react";
import Subject from './Subject';

function Grade (props) {
  console.log("classInformation = ", props.classInformation);
  const classComponents = props.classInformation.map(
    (info) => <Subject classTitle={info.classTitle} classDescription={info.classDescription} classLink={info.classLink} />
  );

  return (
    <div className="mainContainer">
      <div className="content">
        <h1 className="gradeTitle">Grade Horária</h1>
        <p className="diaDaSemana">({props.dia})</p>
        {classComponents}
        <br />
      </div>
    </div>
  )
}

export default Grade
