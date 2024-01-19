import {
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { Button } from '../components/button/Button';

const Contacto = () => (
  <Card color="transparent" shadow={false}>
    <div className="flex items-start">
    <h1 className="text-2xl text-gray-700" >
      Contiza con nosotros
    </h1>
    <h2 color="gray" className="ml-3 mt-1 text-primary-600">
      Obtén el mejor plan de ISAPRE
    </h2>
    </div>
    <section className="flex justify-center items-center">
      <form className="w-full max-w-4xl p-5">
        <div className="flex flex-wrap -mx-2">
          {/* Nombre Completo - Ocupa todo el ancho */}
          <div className="w-full px-2 mb-4">
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Nombre Completo
            </Typography>
            <Input size="lg" placeholder="Jose Tomás Bonilla Marín" />
          </div>

          {/* Primera columna de campos */}
          <div className="w-full sm:w-1/2 px-2 mb-4">
            {/* Rut (chileno) */}
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Rut
            </Typography>
            <Input size="lg" placeholder="12345678-9" />

            {/* Edad */}
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Edad
            </Typography>
            <Input size="lg" placeholder="30" />

            {/* Celular */}
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Celular
            </Typography>
            <Input size="lg" placeholder="+569 1234 5678" />

            {/* Comuna */}
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Comuna
            </Typography>
            <Input size="lg" placeholder="Santiago" />
          </div>

          {/* Segunda columna de campos */}
          <div className="w-full sm:w-1/2 px-2 mb-4">
            {/* Email */}
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Email
            </Typography>
            <Input size="lg" placeholder="name@mail.com" />

            {/* Renta Imponible */}
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Renta Imponible
            </Typography>
            <Input size="lg" placeholder="$1.000.000" />

            {/* Tipo de Plan */}
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Tipo de Plan
            </Typography>
            <Input size="lg" placeholder="Plan Individual, Colectivo..." />

            {/* Cantidad de Cargas */}
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Cantidad de Cargas
            </Typography>
            <Input size="lg" placeholder="2" />

          </div>

          {/* Comentario - Ocupa todo el ancho */}
          <div className="w-full px-2 mb-4">
            <Typography variant="h6" color="blue-gray" className="-mb-30">
              Comentario
            </Typography>
            <Input type="textarea" size="lg" placeholder="Tu comentario" />
          </div>

          <Button className="mt-6 w-full sm:w-auto" >
            Enviar
          </Button>
        </div>
      </form>
    </section>
  </Card>
);

export { Contacto };
