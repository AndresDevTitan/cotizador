import React, { Fragment } from "react";

const Resumen = ({ datos }) => {
  //extraer datos
  const { marca, year, plan } = datos;

  if (marca.trim() === "" || year.trim() === "" || plan.trim() === "")
    return null;

  return (
    <Fragment>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: </li>
        <li>Plan: </li>
        <li>Año del Auto: </li>
      </ul>
    </Fragment>
  );
};

export default Resumen;
