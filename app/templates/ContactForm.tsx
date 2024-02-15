import { Button } from "../components/button/Button";
import { useState } from "react";

type Tform = {
  nombre: string;
  rut: string;
  edad: string;
  celular: string;
  comuna: string;
  email: string;
  rentaImponible: string;
  cantidadCargas: string;
  comentario: string;
};

export default function ContactForm() {
  const [formulario, setFormulario] = useState<Tform>({
    nombre: "",
    rut: "",
    edad: "",
    celular: "",
    comuna: "",
    email: "",
    rentaImponible: "", // Asegúrate de que este campo sea tratado correctamente como número
    cantidadCargas: "",
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
    <div>
      <header className="grid-2 text-center">
        <h1
          color="gray"
          className="mb-5 mt-4 text-2xl md:text-4xl text-primary-600"
        >
          Déjanos tus datos y te contactaremos para ayudarte a cotizar Planes de
          ISAPRE
        </h1>
      </header>

      <section className="flex justify-center items-center w-full">
        <form onSubmit={handleSubmit} className="w-full max-w-xl p-5">
          <div className="flex flex-wrap w-full ">
            {/* Nombre Completo - Ocupa todo el ancho */}
            <div className="w-full">
              <label className="text-gray-500 mt-2 text-xs">
                Nombre Completo
              </label>
              <input
                name="nombre"
                type="text"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Nombre Completo"
                className="px-4 py-2 w-full rounded border border-gray-500"
                required
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="mr-1">
                <label className="text-gray-500 mt-2 text-xs">R.U.T</label>
                <input
                  name="rut"
                  type="text"
                  value={formulario.rut}
                  onChange={manejarCambio}
                  placeholder="R.U.T"
                  className="px-4 py-2 r-1 w-full rounded border border-gray-500"
                />
              </div>
              <div className="ml-1">
                <label className="text-gray-500 mt-2 text-xs">Edad</label>
                <input
                  name="edad"
                  type="number"
                  value={formulario.edad}
                  onChange={manejarCambio}
                  placeholder="Edad"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                />
              </div>
              <div className="mr-1">
                <label className="text-gray-500 mt-2 text-xs">Celular</label>
                <input
                  name="celular"
                  type="tel"
                  value={formulario.celular}
                  onChange={manejarCambio}
                  placeholder="Celular"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                />
              </div>
              <div className="ml-1">
                <label className="text-gray-500 mt-2 text-xs">
                  Ciudad / Comuna
                </label>
                <input
                  name="comuna"
                  type="text"
                  value={formulario.comuna}
                  onChange={manejarCambio}
                  placeholder="Ciudad / Comuna"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                />
              </div>
              <div className="mr-1">
                <label className="text-gray-500 mt-2 text-xs">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="Email"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                />
              </div>
              <div className="ml-1">
                <label className="text-gray-500 mt-2 text-xs">
                  Renta Imponible
                </label>
                <input
                  name="rentaImponible"
                  type="text"
                  value={formulario.rentaImponible}
                  onChange={manejarCambio}
                  placeholder="Renta Imponible"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                />
              </div>
            </div>
            <div className="w-full content-center">
              <label className="text-gray-500 mt-2 text-xs">Comentario</label>
              <input
                name="comentario"
                type="textarea"
                value={formulario.comentario}
                onChange={manejarCambio}
                placeholder="Tu comentario.."
                className="px-4 py-2 w-full rounded border border-gray-500"
              />
            </div>
            <div className="w-full justify-center items-center cursor-pointer">
              <Button xl onClick={handleSubmit}>
                COTIZAR GRATIS{" "}
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
