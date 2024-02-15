import * as React from 'react';
import { Html } from '@react-email/html';

interface EmailProps {
    nombre: string;
    rut: string;
    edad: number;
    celular: string;
    comuna: string;
    email: string;
    rentaImponible: number;
    tipoPlan: string;
    cantidadCargas: number;
    comentario: string;
  }

export default function Email(props: EmailProps) {
  const { nombre, rut, edad, celular, comuna, email, rentaImponible, tipoPlan, cantidadCargas, comentario } = props;

  return (
    <Html lang="es">
      <h1>Detalle de Información</h1>
      <p>Nombre: {nombre}</p>
      <p>RUT: {rut}</p>
      <p>Edad: {edad}</p>
      <p>Celular: {celular}</p>
      <p>Comuna: {comuna}</p>
      <p>Email: {email}</p>
      <p>Renta Imponible: {rentaImponible}</p>
      <p>Tipo de Plan: {tipoPlan}</p>
      <p>Cantidad de Cargas: {cantidadCargas}</p>
      <p>Comentario: {comentario}</p>
    </Html>
  );
}
