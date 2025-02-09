import React from "react";

function Detail(props) {
  return (
    <>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </>
  );
}
export default Detail;
