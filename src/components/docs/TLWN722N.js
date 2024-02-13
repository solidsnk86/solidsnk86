import { FaWindows, FaMousePointer } from 'react-icons/fa';
import { SectionTitle } from '../SectionTitle';
import IndexTitle from '../IndexTitle';
import Link from 'next/link';

export const TlWn722n = () => {
  return (
    <section className="max-w-800 text-text-primary">
      <SectionTitle title="Configuración Adaptador inalámbrico USB TL-WN722n" />
      <IndexTitle>Introducción</IndexTitle>
      <p>Guía de Configuración:</p>
      <p>
        Te guiaré paso a paso a través del proceso de instalación del driver
        para el adaptador de red inalámbrica TP-Link TL-WN722N en sistemas
        operativos Windows 10. Si has tenido dificultades para conectar este
        dispositivo a tu PC, ¡no te preocupes más! Esta solución definitiva
        resolverá tus problemas y te permitirá disfrutar de una conexión WiFi
        estable.
      </p>
      <ol>
        <li>
          Primer paso: Descargamos el driver desde la web de TP-Link
          <Link
            href="https://www.tp-link.com/ar/support/download/tl-wn722n/v1/#Driver"
            className="mx-1 text-text-strong"
          >
            aquí.
          </Link>
        </li>
        <figure>
          <div className="images-client">
            <img
              src="/images/descarga-driver.png"
              alt="Descarga driver tp Link"
              loading="lazy"
            />
          </div>
        </figure>
        <li>Segundo paso: Guardamos el archivo .rar y descomprimir</li>
        <p className="list-css-span">
          Veremos una carpeta con el nombre de<span>Drivers Files</span>
        </p>
        <figure>
          <div className="images-client">
            <img
              src="/images/driver-files.png"
              alt="Descarga driver tp Link"
              loading="lazy"
            />
          </div>
        </figure>
        <p>
          En este caso si tenemos Windows 10 en 64 bits instalado, vamos a
          seleccionar la carpeta de Windows 8 64bit.
        </p>
        <li>
          Tercer paso: Tenemos que instalar de manera manual el driver del
          adaptador USB
        </li>
        <p className="list-css-span">
          Para eso vamos a hacer click derecho en el inicio de windows
          <FaWindows className="inline-flex text-xl mb-1 mx-2 text-[cornflowerblue]" />
          y seleccionamos<span>Administrador de Dispositivos</span>
        </p>
        <p>Veremos una ventana como ésta:</p>
        <figure>
          <div className="images-client">
            <img
              src="/images/administrador-d.png"
              alt="Descarga driver tp Link"
              loading="lazy"
            />
          </div>
        </figure>
        <p className="list-css-span">
          En<span>Otros dispositivos</span>veremos el adaptador que windows 10
          no ha podido instalar de manera automática con las actualizaciones.
          Por lo cual debemos hacerlo manualmente.
        </p>
        <p className="list-css-span">
          Hacemos doble click en<span>USB2.0 WLAN</span>para actualizar el
          controlador.
        </p>
        <p>Tenemos la siguiente ventana:</p>
        <figure>
          <div className="images-client">
            <img
              src="/images/actualizar-controlador.png"
              alt="Descarga driver tp Link"
              loading="lazy"
            />
          </div>
        </figure>
        <p>Seleccionamos Buscar controladores en mi equipo.</p>
        <figure>
          <div className="images-client">
            <img
              src="/images/actualizar-controlador.png"
              alt="Descarga driver tp Link"
              loading="lazy"
            />
          </div>
        </figure>
        <p>
          <span className="bg-[#CCCCCC] text-black border-[#000] border-[1px] px-3 py-1 cursor-default mx-1">
            Siguiente
          </span>
          <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] dark:text-[#FFFFFF] text-black border-[#000]" />
          Veremos la siguiente ventana:
        </p>
        <figure>
          <div className="images-client">
            <img
              src="/images/elegir-lista.png"
              alt="Descarga driver tp Link"
              loading="lazy"
            />
          </div>
        </figure>
        <p>Elegimos la lista de controladores disponobles en el equipo:</p>
        <figure>
          <div className="images-client">
            <img
              src="/images/utilizar-disco.png"
              alt="Descarga driver tp Link"
              loading="lazy"
            />
          </div>
        </figure>
        <p>
          <span className="bg-[#CCCCCC] text-black border-[#000] border-[1px] px-3 py-1 cursor-default mx-1">
            Usar Disco...
          </span>
          <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] dark:text-[#FFFFFF] text-black border-[#000]" />
        </p>
        <p className="list-css-span">
          Haremos click en Examinar y nos dirigimos a la carpeta donde
          descargamos nuestros drivers, buscando así el requerido, en este caso
          dentro de la carpta<span>Windows 8 64bit</span>e instalamos el archivo
          <span>athuw8x</span>:
        </p>
        <figure>
          <div className="images-client">
            <img
              src="/images/driver.png"
              alt="Descarga driver tp Link"
              loading="lazy"
            />
          </div>
        </figure>
        <p>
          Una vez hayamos completado ésto, ya estará lista nuestra instalación
          manual.
        </p>
        <li>Cuarto paso: Buscar y seleccionar nuestro enrutador Wifi.</li>
      </ol>
      <p>
        Con estos pasos hemos terminado la configuración, espero que puedan
        solucionar el incoveniente con éste adaptador en Windows 10
      </p>
      <p>
        Sin más para comentar les dejo éste video donde explico los pasos
        detalladamente:
      </p>
      <div className="flex items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Rbfx0pzzRgA?si=gIMn9ahz-s-Hh1JT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        Muchas gracias por llegar hasta aquí, si quieren visitar el
        <Link
          href={'https://www.youtube.com/@tutosNeoTecs'}
          className="mx-1 underline text-[cornflowerblue]"
        >
          canal de YouTube.
        </Link>
      </p>
      <p>
        ¿Dudas? escribir al
        <Link
          href={'/docs/feedback'}
          className="mx-1 underline text-text-strong"
        >
          feedback.
        </Link>
      </p>
    </section>
  );
};