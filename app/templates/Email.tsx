import * as React from 'react';
import { Html } from '@react-email/html';

interface EmailProps {
    nombre: string;
    rut: string;
    edad: string;
    celular: string;
    comuna: string;
    email: string;
    rentaImponible: string;
    comentario: string;
  }

export default function Email(props: EmailProps) {
  const { nombre, rut, edad, celular, comuna, email, rentaImponible, comentario } = props;

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
      <p>Comentario: {comentario}</p>
    </Html>
  );
}
