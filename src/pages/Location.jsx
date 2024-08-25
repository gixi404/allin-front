import { LOCATION } from "../utils/consts";

function Location() {
  return (
    <section className="w-[100vw] lg:w-full flex flex-col lg:flex-row text-black justify-between items-start rounded-lg gap-6 lg:min-w-[1100px] h-full lg:min-h-[300px] px-4 lg:px-0">
      <div className="w-full lg:w-3/6 h-[400px] flex justify-center items-center lg:px-6">
        <iframe
          allowFullScreen
          title="Mapa de All In"
          allow="geolocation"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-2 border-slate-500 rounded-sm"
          src={LOCATION}
        />
      </div>
      <div className="w-full lg:w-3/6 h-[330px] flex flex-col justify-start items-center gap-y-4 lg:gap-y-8">
        <h2 className="w-full text-4xl lg:text-5xl tracking-tight text-balance font-[700] text-start">
          Ubicación
        </h2>
        <p className="text-[19px] font-[500] w-full text-start">
          Nos encontramos ubicados en <br /> San Martín 537, Luján de Cuyo,
          Mendoza.
        </p>
      </div>
    </section>
  );
}

export default Location;
