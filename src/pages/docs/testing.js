import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import { Header } from './sql';
import { SqlTitle } from './sql';

export default function Testing() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <SqlTitle>Pruebas (Testing)</SqlTitle>
          <hr className="border-text-primary" />
          <Header>Índice</Header>
          <ol className="indice">
            <li>
              <a href="#introduccion">Introducción</a>
            </li>
            <li>
              <a href="#pruebas">Pruebas</a>
            </li>
            <li>
              <a href="#afirmar">Afirmar</a>
              <ul>
                <li>
                  <a href="#desarrollo-guiado">Desarrollo Guiado por Pruebas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#select">Pruebas Unitarias</a>
            </li>
            <li>
              <a href="#pruebas-django">Pruebas en Django</a>
              <ul>
                <li>
                  <a href="#pruebas-cliente">Pruebas de Cliente</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#selenium">Selenium</a>
            </li>
            <li>
              <a href="#ci-cd">
                CI/CD (Integración Continua/Despliegue Continuo)
              </a>
            </li>
            <li>
              <a href="#acciones-github">Acciones de GitHub</a>
            </li>
            <li>
              <a href="#administrador-django">Docker</a>
            </li>
          </ol>
          <span id="introduccion" />
          <SectionTitle title="Introducción" />
          <article>
            <p>
              Hasta ahora, hemos discutido cómo construir páginas web simples
              utilizando HTML y CSS, y cómo utilizar Git y GitHub para realizar
              un seguimiento de los cambios en nuestro código y colaborar con
              otros. También nos familiarizamos con el lenguaje de programación
              Python, comenzamos a utilizar Django para crear aplicaciones web y
              aprendimos a utilizar los modelos de Django para almacenar
              información en nuestros sitios. Luego, introdujimos JavaScript y
              aprendimos a usarlo para hacer que las páginas web sean más
              interactivas, y hablamos sobre el uso de la animación y React para
              mejorar aún más nuestras interfaces de usuario. Hoy, aprenderemos
              sobre las mejores prácticas cuando se trata de trabajar en
              proyectos más grandes y lanzarlos.
            </p>
          </article>
          <SectionTitle title="Pruebas" />
          <article>
            <p>
              Una parte importante del proceso de desarrollo de software es la
              acción de probar el código que hemos escrito para asegurarnos de
              que todo funcione como esperamos. En esta conferencia,
              discutiremos varias formas en las que podemos mejorar la manera en
              que probamos nuestro código.
            </p>
          </article>
          <SectionTitle title="Afirmar" />
          <article>
            <p className="list-css-span">
              Una de las formas más simples de ejecutar pruebas en Python es
              mediante el uso del comando<span>assert</span>. Este comando va
              seguido de alguna expresión que debería ser verdadera. Si la
              expresión es verdadera, no sucede nada; sin embargo, si es
              <span>falsa</span>, se generará una excepción. Veamos cómo
              podríamos incorporar este comando para probar la función de
              cuadrado que escribimos al aprender Python por primera vez. Cuando
              la función está escrita correctamente, no sucede nada, ya que el
              <span>assert</span>es<span>verdadero</span>.
            </p>
            <Pre lang="python">{
              /*python */ `
                def square(x):
                return x * x
            
                assert square(10) == 100
            
                """ Output:
            
                """
                `
            }</Pre>
            <p>
              Y luego, cuando está escrita incorrectamente, se genera una
              excepción.
            </p>
            <Pre lang="python">{
              /*python */ `
                def square(x):
                return x + x
          
                assert square(10) == 100
          
                """ Output:
                Traceback (most recent call last):
                File "assert.py", line 4, in <module>
                assert square(10) == 100
                AssertionError
                """
                `
            }</Pre>
          </article>
          <ShareButton setTitle={Testing.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

Testing.title = 'Pruebas CI/CD';
