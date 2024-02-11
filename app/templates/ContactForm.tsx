"use client";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { Button } from "../components/button/Button";
import { useState } from "react";

export default function ContactForm() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    rut: "",
    edad: 0,
    celular: "",
    comuna: "",
    email: "",
    rentaImponible: 0,
    tipoPlan: "",
    cantidadCargas: 0,
    comentario: "",
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulario),
      });

      const data = await response.json();
      if (data.message) {
        console.log("Email sent successfully");
        // Handle success (e.g., show a success message)
      } else if (data.error) {
        console.error("Failed to send email:", data.error);
        // Handle failure (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error (e.g., show an error message)
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <header className="grid-2 text-center">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
          Contiza con nosotros
        </h1>
        <h2 color="gray" className="mb-5 mt-4 text-sm md:text-xl lg:text-2xl text-primary-600">
          Déjanos tus datos y te contactaremos para ayudarte a cotizar Planes de
          ISAPRE
        </h2>
      </header>
      <section className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xl p-5">
          <div className="flex flex-wrap -mx-2">
            {/* Nombre Completo - Ocupa todo el ancho */}
            <div className="w-full px-2 mb-4">
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Nombre Completo
              </Typography>
              <Input
                name="nombre"
                type="text"
                value={formulario.nombre}
                onChange={manejarCambio}
                size="lg"
                placeholder="Jose Tomás Bonilla Marín"
                required
              />
            </div>

            {/* Primera columna de campos */}
            <div className="w-full sm:w-1/2 px-2 mb-4">
              {/* Rut (chileno) */}
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Rut
              </Typography>
              <Input
                name="rut"
                type="text"
                value={formulario.rut}
                onChange={manejarCambio}
                size="lg"
                placeholder="12345678-9"
              />

              {/* Edad */}
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Edad
              </Typography>
              <Input
                name="edad"
                type="number"
                value={formulario.edad}
                onChange={manejarCambio}
                size="lg"
                placeholder="30"
              />

              {/* Celular */}
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Celular
              </Typography>
              <Input
                name="celular"
                type="tel"
                value={formulario.celular}
                onChange={manejarCambio}
                size="lg"
                placeholder="+569 1234 5678"
              />

              {/* Comuna */}
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Comuna
              </Typography>
              <Input
                name="comuna"
                type="text"
                value={formulario.comuna}
                onChange={manejarCambio}
                size="lg"
                placeholder="Santiago"
              />
            </div>

            {/* Segunda columna de campos */}
            <div className="w-full sm:w-1/2 px-2 mb-4">
              {/* Email */}
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Email
              </Typography>
              <Input
                name="email"
                type="email"
                value={formulario.email}
                onChange={manejarCambio}
                size="lg"
                placeholder="name@mail.com"
              />

              {/* Renta Imponible */}
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Renta Imponible
              </Typography>
              <Input
                name="rentaImponible"
                type="text"
                value={formulario.rentaImponible}
                onChange={manejarCambio}
                size="lg"
                placeholder="$1.000.000"
              />

              {/* Tipo de Plan */}
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Tipo de Plan
              </Typography>
              <Input
                name="tipoPlan"
                type="text"
                value={formulario.tipoPlan}
                onChange={manejarCambio}
                size="lg"
                placeholder="Plan Individual, Colectivo..."
              />

              {/* Cantidad de Cargas */}
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Cantidad de Cargas
              </Typography>
              <Input
                name="cantidadCargas"
                type="number"
                value={formulario.cantidadCargas}
                onChange={manejarCambio}
                size="lg"
                placeholder="0"
              />
            </div>

            {/* Comentario - Ocupa todo el ancho */}
            <div className="w-full px-2 mb-4">
              <Typography variant="h6" color="blue-gray" className="-mb-30">
                Comentario
              </Typography>
              <Input
                name="comentario"
                type="textarea"
                value={formulario.comentario}
                onChange={manejarCambio}
                size="lg"
                placeholder="Tu comentario.."
              />
            </div>

            <Button onClick={handleSubmit}>Enviar</Button>
          </div>
        </form>
      </section>
    </Card>
  );
}
