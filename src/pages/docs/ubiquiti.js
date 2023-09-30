import React, { useState } from 'react';
import { FaMousePointer, FaSignInAlt, FaWindows } from 'react-icons/fa';
import { Nav } from '../../components/Nav';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { SectionTitle } from '../../components/SectionTitle';
import { DocsNav } from '../../components/DocsNav';
import { BrandsSwitch } from '../../components/BrandsSwitch';
import { Pre } from '../../components/Pre';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import Modal from 'react-modal';

export default function UbiquitiDocs() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed w-full h-12 z-10" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <DocsNav />
        <div className="w-full max-w-none prose px-4 md:px-8">
          <BrandsSwitch inline />
          <SectionTitle title="Configuración Ubiquiti" />

          <section className="text-white">
            <p>
              Este artículo aplica a los siguientes modelos:
              <strong className="text-text-strong">
                Lite Beam M5 - Grid M5 - M2 - airMAX - NanoStation M5 - M2
              </strong>
            </p>
            <hr />
            <h3 className="text-[cornflowerblue]">
              Iniciar sesión y configurar UBNT Lite Beam M5 como punto de acceso
            </h3>
            <p>
              Los dispositivos Lite Beam se pueden conectar con cualquier punto
              de acceso de marca en modo estación. Para configurar un
              dispositivo de la serie Lite Beam M como modo de estación con
              estaciones base de diferentes marcas, primero es necesario
              configurarlo. Para iniciar sesión en el dispositivo Lite Beam en
              la configuración del modo predeterminado, debe conectarse
              físicamente con el dispositivo. Esta guía del usuario le ayudará a
              iniciar sesión y configurar ubnt lite beam como modo de punto de
              acceso para la estación base. Para actualizar el firmware ,
              configurar el modo inalámbrico, cambiar la dirección IP de la LAN
              y cambiar la contraseña de inicio de sesión, debe acceder a la
              configuración del Lite Beam mediante la dirección IP.
            </p>
            <ul>
              <li>
                Los dispositivos Lite Beam M5 y Lite Beam M2 tienen un único
                puerto Ethernet con PoE habilitado.
              </li>

              <li>
                El adaptador PoE de 24 voltios viene con un dispositivo, una
                antena y un juego de abrazaderas para el montaje.
              </li>
              <li>Dispositivo + PoE:</li>
              <div className="images-client flex justify-left m-auto">
                <img
                  src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/poe-injector-ubiquiti-poe-24-24w-g-gigabit-removebg-preview.png?raw=true"
                  alt="imágen menú principal pharos os"
                  id="imgAP"
                  onClick={openModal}
                  style={{ cursor: 'pointer' }}
                />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Image Modal"
                >
                  <img
                    src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/poe-injector-ubiquiti-poe-24-24w-g-gigabit.jpg?raw=true"
                    alt="imágen menú principal pharos os"
                    style={{
                      width: '100%',
                      maxHeight: '80vh',
                      objectFit: 'contain',
                    }}
                  />
                  <button
                    onClick={closeModal}
                    className="bg-slate-800 px-2 py-1 rounded-full text-md font-semibold text-red-400 hover:scale-[1.1]"
                  >
                    Cerrar
                  </button>
                </Modal>
              </div>
            </ul>
            <p>Configuración desde la PC:</p>
            <p>
              Desde una PC con Sistema Operativo de Windows, nos dirigimos a
              panel de control, para acceder a él, presionamos el botón
              <FaWindows className="inline-flex mx-2 text-xl mb-1 text-[cornflowerblue]" />
              + R y escribimos el siguiente comando:
            </p>
            <Pre>ncpa.cpl</Pre>
            <p>
              <FaSignInAlt className="inline-flex mr-2" />
              enter, veremos la siguiente ventana:
            </p>
            <div className="images-client">
              <img
                src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/protocolo-ip-ubiquiti.png?raw=true"
                alt="imágen menú principal ubiquiti os"
                id="imgAP"
                onClick={openModal}
                style={{ cursor: 'pointer' }}
              />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
              >
                <img
                  src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/protocolo-ip-ubiquiti.png?raw=true"
                  alt="imágen menú principal ubiquiti os"
                  style={{
                    width: '100%',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                  }}
                />
                <button
                  onClick={closeModal}
                  className="bg-slate-800 px-2 py-1 rounded-full text-md font-semibold text-red-400 hover:scale-[1.1]"
                >
                  Cerrar
                </button>
              </Modal>
            </div>
            <p>Vamos a "Propiedades".</p>
            <p>
              Luego seleccionamos propiedades del protocolo TCP /IP y colocamos
              lo siguiente:
            </p>
            <Pre>
              Dirección IP: 198.168.1.25 || Máscara de Subred: 255.255.255.0
            </Pre>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://github.com/solidsnk86/NeoTecs-NextJS/blob/master/public/images/protocolo-ip-ubiquiti.png?raw=true"
                alt="imágen menú principal pharos os"
                id="imgAP"
              />
            </div>
            <SectionTitle title="URL y Login Ubiquiti" />
            <p>Nos dirijimos al navegador y colocamos la url:</p>
            <Pre>198.168.1.20</Pre>
            <p>
              Nos aparecera una interfaz para el login de la antena algo así:
            </p>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://mikrotrik.com/wp-content/uploads/2020/02/ubnt-lite-beam-m2-access-point-mode.jpg"
                alt="imágen menú inalámbrico pharos os."
                id="imgAP"
              />
            </div>
            <p>Seleccionamos el país, aceptamos los términos y hacemos...</p>
            <p>
              Click en
              <span className="bg-[#CCCCCC] text-black border-[#000] border-[1px] px-3 py-1 cursor-default mx-1">
                Login
              </span>
              <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] text-[#FFFFFF] border-[#000]" />
            </p>
            <p>
              Veremos una interfaz de usuario parecida a ésta. (la imagen de la
              foto ya está configurada y muestra el estado general de la
              antena.)
            </p>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://img.community.ui.com/7c899a6c-3b35-47f1-88ca-c35f9cd19a95/questions/2139dfc0-1464-497a-982f-b3011d1f910d/da5c6eb2-ec74-43c5-9757-72721f3546c6"
                alt="imágen menú inalámbrico pharos os2"
                id="imgAP"
              />
            </div>
            <p>
              Les dejo éste video de configuración UBNT Grid M2 que en sí los
              despliegues de la configuración son bastantes parecidos de acuerdo
              a la interfaz del sistema airOS de Ubiquiti; modo estación:
            </p>
            <iframe
              src="https://www.youtube.com/embed/Q9bFZgllF7k?si=O4xYo-ZCdiM_9sQ5"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
              className="rounded-lg w-96 h-64 flex justify-center m-auto max-sm:w-[100%]"
            />
            <SectionTitle title="Cambio de contraseña" />
            <p>
              Cambiar la contraseña de inicio de sesión de UBNt Lite Beam M5
              Haga clic en el mensaje emergente la primera vez que inicie sesión
              o vaya a la pestaña Sistema en el menú de pestañas. Busque la
              opción Cuentas del sistema Nombre de usuario del administrador:
              ubnt (cambie el nombre de usuario aquí) Contraseña actual: escriba
              la contraseña actual que utilizó para iniciar sesión. Por defecto
              es "ubnt" Nueva contraseña: escriba la nueva contraseña que desea
              establecer. Verificar nueva contraseña: confirme la nueva
              contraseña nuevamente.
            </p>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://mikrotrik.com/wp-content/uploads/2020/02/ubnt-lite-beam-m5-login-password-change.jpg"
                alt="imágen menú inalámbrico pharos os2"
                id="imgAP"
              />
            </div>
            <p>
              Presione el botón Cambiar y Aplicar desde las ventanas PoP para
              guardar la configuración. Espere hasta que Lite Beam se reinicie y
              guarde la configuración.
            </p>
            <p>
              Click en
              <span className="bg-[#CCCCCC] text-black border-[#000] border-[1px] px-3 py-1 cursor-default mx-1">
                Change
              </span>
              <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] text-[#FFFFFF] border-[#000]" />
            </p>
            <SectionTitle title="Configuración modo estación" />
            <ol>
              <li>
                Configuración inalámbrica básica: Modo inalámbrico: Estación
              </li>
              <li>
                WDS (Modo Puente Transparente): Habilite esta opción solo si la
                estación base también es un dispositivo UBNT.
              </li>
              <li>
                SSID: escriba el nombre del nodo WiFi al que se quiere conectar
                o seleccione el botón
                <span className="bg-[#CCCCCC] ml-1 text-black border-[#000] border-[1px] px-3 py-1 cursor-default">
                  Select
                </span>
                <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] text-[#FFFFFF] border-[#000]" />
              </li>
              <li>
                Ahora puede la antena escanear y puede seleccionar la antena o
                nodo más próximo a conectar, que tenga buena intensidad de señal
                en Dbi por ejemplo:
                <ul>
                  <li className="text-green-400 uppercase">
                    [-42Dbi o -55Dbi] óptimo.
                  </li>
                  <li className="text-orange-400 uppercase">
                    [-62Dbi o -75Dbi] es bueno.
                  </li>
                  <li className="text-red-400 uppercase">
                    [-82Dbi o -95Dbi] es débil.
                  </li>
                </ul>
              </li>
              <li>
                Ancho del canal: 40 MHz -
                <span className="bg-gray-400 mx-1 px-1 py-1 text-[#fafafa] rounded">
                  Si la conexión a Internet es inferior a 20 Mbps utilice 20 MHz
                  para evitar interferencias en el canal.
                </span>
              </li>
              <li>
                Frecuencia: 5210 (seleccione el canal y use el analizador
                inalámbrico para elegir el canal con mejor rendimiento en el
                área).
              </li>
              <li> Antena: seleccione la ganancia de la antena.</li>
              <li>
                Potencia de salida: use la potencia máxima o reduzca según la
                distancia para la conectividad que desea usar con el dispositivo
                Lite Beam.
              </li>
            </ol>
            <p>
              En ésta imagen puede observar la pestaña
              <span className="bg-[#DBDFE4] text-[#56575A] text-[bold] px-2 py-1 mx-2 rounded-sm uppercase">
                Wireless
              </span>
            </p>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://i.imgur.com/wwzwKTO.png"
                alt="imágen menú inalámbrico pharos os2"
                id="imgAP"
              />
            </div>
            <p>Tienen que ver una interfaz similar a ésta:</p>

            <div className="images-client flex justify-center m-auto">
              <img
                src="http://i.imgur.com/mUZX5Fq.png"
                alt="imágen menú inalámbrico"
                id="imgAP"
                onClick={openModal}
                style={{ cursor: 'pointer' }}
              />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
              >
                <img
                  src="http://i.imgur.com/mUZX5Fq.png"
                  alt="imágen menú inalámbrico escaneo"
                  style={{
                    width: '100%',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                  }}
                />
                <button
                  onClick={closeModal}
                  className="bg-slate-800 px-2 py-1 rounded-full text-md font-semibold text-red-400 hover:scale-[1.1]"
                >
                  Cerrar
                </button>
              </Modal>
            </div>

            <p>Puede hacer click en el botón:</p>
            <span
              className="bg-[#CCCCCC] ml-1 text-black border-[#000] border-[1px] px-3 py-1 cursor-default mb-2"
              title="Esto es tan solo una ilustración"
            >
              Seleccionar
            </span>
            <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] text-[#FFFFFF] border-[#000]" />
            <br />

            <p>
              En ésta imagen puede observar la pestaña
              <span className="bg-[#DBDFE4] text-[#56575A] text-[bold] px-2 py-1 rounded-sm uppercase mx-2">
                main
              </span>
            </p>

            <p>
              Aquí puede explorar la calidad de la conexión, intensidad,
              transmisión, ruido de la señal, nombre AP, MAC, etc.
            </p>

            <div className="images-client flex justify-center m-auto">
              <img
                src="https://wifisafe.b-cdn.net/wp-content/uploads/2012/02/3_main_enlazado.png"
                alt="imágen menú inalámbrico"
                id="imgAP"
                onClick={openModal}
                style={{ cursor: 'pointer' }}
              />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
              >
                <img
                  src="https://wifisafe.b-cdn.net/wp-content/uploads/2012/02/3_main_enlazado.png"
                  alt="imágen menú inalámbrico"
                  style={{
                    width: '100%',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                  }}
                />
                <button
                  onClick={closeModal}
                  className="bg-slate-800 px-2 py-1 rounded-full text-md font-semibold text-red-400 hover:scale-[1.1]"
                >
                  Cerrar
                </button>
              </Modal>
            </div>

            <p>Damos por hecho la conexíon viendo éste último panel.</p>
            <p>
              Muchas gracias por llegar hasta aquí, pueden ver el vídeo
              explicativo en mi canal
            </p>

            <SectionTitle title="Video Explicativo" />

            <iframe
              src="https://www.youtube.com/embed/Q9bFZgllF7k?si=O4xYo-ZCdiM_9sQ5"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
              className="rounded-lg w-96 h-64 flex justify-center m-auto max-sm:w-[100%] mb-5"
            />
            <ShareButton />
          </section>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
UbiquitiDocs.title = 'NeoTecs - Ubiquiti Configuración';
