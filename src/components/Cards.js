import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg"
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from "../assets/image4.jpg"
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from "../assets/image7.jpg"
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'

const cards = [
  {
    id: 1,
    title: "86: Eighty Six",
    image: image1,
    text: "La República de San Magnolia. Durante mucho tiempo, este país ha sido asediado por su vecino, el Imperio Giadian, que creó una serie de drones no tripulados llamados Legion. Después de años de minuciosa investigación, la República finalmente desarrolló sus propios drones autónomos, convirtiendo la lucha unilateral en una guerra sin víctimas, o al menos, eso es lo que el gobierno afirma.",
    url: "https://es.wikipedia.org/wiki/86:_Eighty-Six",
  },
  {
    id: 2,
    title: "Kimetsu no Yaiba",
    image: image2,
    text: "Ambientada en la era Taisho, la historia se centra en Tanjirō Kamado; un joven inteligente y de buen corazón que vive con su familia en las montañas. Se ha convertido en la única fuente de ingresos tras el fallecimiento de su padre, haciendo viajes para vender carbón y vegetales. Su vida cotidiana cambia cuando regresa a casa solo para descubrir que su familia ha sido asesinada por un demonio, en la cual solo encuentra aún con vida a su hermana Nezuko.",
    url: "https://es.wikipedia.org/wiki/Kimetsu_no_Yaiba",
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    image: image3,
    text: "Yūji Itadori es un estudiante de secundaria que vive en Sendai con su abuelo. Se une al Club de Investigación de lo Oculto, a pesar de poseer un talento innato para el deporte. Va a visitar a su abuelo moribundo al hospital todos los días. En su lecho de muerte, su abuelo inculca dos poderosos mensajes dentro de Yuji: «siempre ayuda a la gente» y «muere rodeado de gente».",
    url: "https://es.wikipedia.org/wiki/Jujutsu_Kaisen",
  },
  {
    id: 4,
    title: "Haikyū!!",
    image: image4,
    text: "La historia empieza cuando Shōyō Hinata, aún siendo un estudiante de primaria, ve un partido de voleibol por la televisión, en el cual ve jugar al conocido ''Pequeño Gigante''. Desde entonces, desea convertirse en alguien como él, debido a que ambos son bajos de estatura, y comienza a aficionarse por el deporte.",
    url: "https://es.wikipedia.org/wiki/Haiky%C5%AB!!",
  },
  {
    id: 5,
    title: "Goblin Slayer",
    image: image5,
    text: "En un mundo de fantasía, los aventureros de todas partes se unen al Gremio, a fin de completar contratos de cualquier trabajo disponible que incluya la caza de diversos tipos de monstruos que vagan por la tierra u otro tipo de misión que sea ofrecida.",
    url: "https://es.wikipedia.org/wiki/Goblin_Slayer",
  },
  {
    id: 6,
    title: "Re:Zero",
    image: image6,
    text: "Subaru Natsuki es un hikikomori que saliendo de una tienda de conveniencia es transportado misteriosamente a un reino de otro mundo, donde lo primero que le ocurre es encontrarse con unos bandidos; sin embargo, lo rescata una hermosa chica semi-elfa de cabello plateado llamada ''Satella''.",
    url: "https://es.wikipedia.org/wiki/Re:Zero_kara_Hajimeru_Isekai_Seikatsu",
  },
  {
    id: 7,
    title: "Shingeki no Kyojin",
    image: image7,
    text: "La historia se centra en la isla «Paradis», ubicada al noreste del país de «Marley», en donde Eren Jaeger vive con su familia (entre ellos su hermana adoptiva Mikasa Ackerman) y su mejor amigo Armin Arlert. Su pueblo colinda con la «Muralla María», la más externa del Reino de las «tres murallas». Estos enormes muros fueron construidos hace cien años con el fin de protegerse de los «titanes»",
    url: "https://es.wikipedia.org/wiki/Shingeki_no_Kyojin",
  },
  {
    id: 8,
    title: "Akame ga Kill!",
    image: image8,
    text: "Tatsumi es un chico del campo que llega a la capital del Imperio para alistarse en el ejército con la intención de ascender rápidamente, ganar dinero y salvar a su pueblo del hambre debido a los grandes impuestos que tienen que pagar. Pero al llegar a la ciudad se da cuenta de que no todo es como él esperaba.",
    url: "https://es.wikipedia.org/wiki/Akame_ga_Kill!",
  },
  {
    id: 9,
    title: "Darling in the Franxx",
    image: image9,
    text: "En un futuro distante, la humanidad ha creado ciudades fortificadas llamadas Plantaciones, que funcionan como refugio, pues el suelo de la Tierra está arruinado. Dentro de estas, niños y niñas son entrenados para pilotar robots gigantes llamados Franxx, sin saber nada del mundo exterior. Estos jóvenes pilotos son conocidos como ''parásitos'' y son enviados a misiones a bordo de los Franxx para combatir a misteriosos enemigos llamados Klaxosaurios.",
    url: "https://es.wikipedia.org/wiki/Darling_in_the_Franxx",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row">
        {cards.map(({ title, image, text, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
