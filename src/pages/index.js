import Link from 'next/link';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';
import { YouTubeVideoSection } from '../components/YouTubeVideoSection';
import { MarqueeLogos } from '../sections/Brands';
import { Meteors } from '../components/magicui/MeteorsPegassus';

const HomeBlock = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-lg text-center py-16">
        {children}
      </div>
    </div>
  );
};

const HomeBlockTitle = ({ Tag = 'h2', children }) => {
  return <Tag className="text-4xl font-bold sm:text-5xl mb-10">{children}</Tag>;
};

export default function Home() {
  return (
    <div className="bg-page-dark-bg text-white">
      <Nav />
      <Meteors />
      <HomeHeader />
      <HomeBlock>
        <HomeBlockTitle>Configurá tu CPE</HomeBlockTitle>
        <h2>Videos de configuración</h2>
        <ul className="inline-flex text-left m-auto mt-2 mb-4 gap-6">
          <li className="custom-text-shadow">✅ Rápido</li>
          <li className="custom-text-shadow">✅ Fácil</li>
          <li className="custom-text-shadow">✅ Práctico</li>
        </ul>
        <YouTubeVideoSection />
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Características</HomeBlockTitle>

        <section className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="p-4 rounded-lg border-white border-opacity-10 border">
            <span className="text-xl font-bold mb-4">Práctico</span>
            <p>
              Neotecs es una guía rápida para aprender a configurar CPE
              inalámbricos Tp-Link, Ubiquiti, Mikrotik
            </p>
          </div>
          <div className="p-4 rounded-lg border-white border-opacity-10 border">
            <span className="text-xl font-bold mb-4">Tutoriales</span>
            <p>
              Neotecs tiene un canal de youtube con videos muy bien explicados
              en poco tiempo.
            </p>
          </div>
          <div className="p-4 rounded-lg border-white border-opacity-10 border">
            <span className="text-xl font-bold mb-4">Documentación</span>
            <p>
              Sí, Neotecs tiene documentación más extensa sobre varios modelos y
              marcas de dispositivos inalámbricos
            </p>
          </div>
          <div className="p-4 rounded-lg border-white border-opacity-10 border">
            <span className="text-xl font-bold mb-4">Paso a paso</span>
            <p>
              Se explican los distintos tipos de configuración detalladamete en
              la documentación con imágenes y figuras.
            </p>
          </div>
        </section>
      </HomeBlock>

      <HomeBlock className="bg-[url-de-tu-imagen] bg-cover">
        <HomeBlockTitle>Aprende ahora</HomeBlockTitle>
        <p>Configura tu dispositovo inalámbrico</p>
        <p className="mt-4">
          <Link
            href="/docs/"
            className="bg-[#484848] text-white rounded-full px-8 py-4 font-bold text-xl inline-flex duration-200 hover:shadow-lg sm:hover:shadow-2xl hover:border-opacity-0 hover:opacity-[.8] hover:scale-[1.05]"
          >
            Comencemos
          </Link>
        </p>
      </HomeBlock>

      <MarqueeLogos />

      <Footer />
    </div>
  );
}
