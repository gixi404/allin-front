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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.1740537298047!2d-68.88135902464447!3d-33.03607917355645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e753e57c6b555%3A0xc1f20edf9b7b6c8f!2sAll%20In%20Inform%C3%A1tica%20by%20MICRO-TECH!5e1!3m2!1ses-419!2sbr!4v1724021132682!5m2!1ses-419!2sbr"
        />
      </div>
      <div className="w-full lg:w-3/6 h-[330px] flex flex-col justify-start items-center gap-y-3">
        <p className="w-full text-4xl lg:text-5xl tracking-tight text-balance font-[700] text-start mb-6">
          Ubicación
        </p>
        <p className="text-lg sm:text-[19px] font-[500] w-full text-start mb-4">
          Nos encontramos ubicados en <br /> San Martín 537, Luján de Cuyo,
          Mendoza.
        </p>
        <p className="text-lg sm:text-[19px] w-full text-start">
          Lunes a viernes 9:30 a 13:30 y 15:30 a 19:30
        </p>
        <p className="text-lg sm:text-[19px] w-full text-start">
          Sábados 10:00 a 14:00
        </p>
        <p className="text-lg sm:text-[19px] w-full text-start">
          Domingos y feriados cerrado
        </p>
      </div>
    </section>
  );
}

export default Location;
