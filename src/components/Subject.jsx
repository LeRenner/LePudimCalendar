import React from "react";

const handleLink = (link) => {
  window.location.href = link;
}

function Materia (props) {
  return (
    <div>
      <h2 className="classTitle">{props.classTitle}</h2>
      <p className="classDescription">{props.classDescription}</p>
      <button className="classLink" onClick={ () => {handleLink(props.classLink)} }>Link da Aula</button>
    </div>
  )
}

export default Materia
