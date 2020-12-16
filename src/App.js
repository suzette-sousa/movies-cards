import React, {useState, useEffect } from 'react';
import './tailwind.output.css';
import './App.css';
import CardsList from './components/CardsList';
import Header from './components/Header';

const movies = [
  {
    id: 1,
    title: "L'Effet Papillon",
    subtitle: "Drame",
    description: `Une théorie prétend que si l'on pouvait retourner dans le passé et changer quelques détails de notre vie, tout ce qui en découle serait modifié. On appelle cela "l'effet papillon". Evan Treborn a cette faculté. Fasciné, il va d'abord mettre ce don au service de ceux dont les vies ont été brisées dans leur enfance. Il peut enfin repartir dans le passé et sauver la seule jeune fille qu'il ait jamais aimée.
    Mais Evan va découvrir que ce pouvoir est aussi puissant qu'incontrôlable. Il va s'apercevoir que s'il change la moindre chose, il change tout. En intervenant sur le passé, il modifie le présent et se voit de plus en plus souvent obligé de réparer les effets indésirables de ses corrections...`,
    image: "https://fr.web.img2.acsta.net/medias/nmedia/18/35/19/79/18373133.jpg",
    rating: 4.2
  },
  {
    id: 2,
    title: "La ligne verte",
    subtitle: "Drame",
    description: "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain en 1935, il était chargé de veiller au bon déroulement des exécutions capitales en s’efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes. Intrigué par cet homme candide et timide aux dons magiques, Edgecomb va tisser avec lui des liens très forts.",
    image: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoURYqYNMqEMetdP3N5zt7HpmrzjbcSA2pwZxgB/jpg",
    rating: 4.6
  },
  {
    id: 3,
    title: "American Beauty",
    subtitle: "Romance | Drame",
    description: "Une maison de rêve, un pavillon bourgeois discrètement cossu dissimule dans une banlieue résidentielle, c'est ici que résident Lester Burnhamm, sa femme Carolyn et leur fille Jane. L'agitation du monde et sa violence semblent bien loin ici. Mais derrière cette respectable façade se tisse une étrange et grinçante tragi-comédie familiale ou désirs inavoués, frustrations et violences refoulées conduiront inexorablement un homme vers la mort.",
    image: "https://brozkinos.com/wp-content/uploads/2014/06/American-Beauty-Movie-Poster-e1464333773209.jpg",
    rating: 4.2
  },
  {
    id: 4,
    title: "Blood diamond",
    subtitle: "Aventure | Drame | Thriller",
    description: "Alors qu'il purge une peine de prison pour ses trafics, Archer rencontre Solomon Vandy, un pêcheur d'origine Mende. Arraché à sa famille et forcé de travailler dans les mines diamantifères, ce dernier a trouvé - et caché - un diamant rose extrêmement rare. Accompagnés de Maddy Bowen, une journaliste idéaliste, les deux hommes s'embarquent pour un dangereux voyage en territoire rebelle pour récupérer le fameux caillou. Un voyage qui pourrait bien sauver la famille de Salomon et donner à Archer la seconde chance qu'il n'espérait plus.",
    image: "https://fr.web.img6.acsta.net/medias/nmedia/18/63/12/34/18711805.jpg",
    rating: 4.1
  },
  {
    id: 5,
    title: "Wonder Woman",
    subtitle: "Action | Aventure | Fantastique",
    description: "Alors qu'il purge une peine de prison pour ses trafics, Archer rencontre Solomon Vandy, un pêcheur d'origine Mende. Arraché à sa famille et forcé de travailler dans les mines diamantifères, ce dernier a trouvé - et caché - un diamant rose extrêmement rare. Accompagnés de Maddy Bowen, une journaliste idéaliste, les deux hommes s'embarquent pour un dangereux voyage en territoire rebelle pour récupérer le fameux caillou. Un voyage qui pourrait bien sauver la famille de Salomon et donner à Archer la seconde chance qu'il n'espérait plus.",
    image: "https://images-na.ssl-images-amazon.com/images/I/713piRVSmzL._AC_SY606_.jpg",
    rating: 3.8
  },
  {
    id: 6,
    title: "Love Actually",
    subtitle: "Romance | Comédie",
    description: `L'amour est partout, imprévisible, inexplicable, insurmontable. Il frappe quand il veut et souvent, ça fait pas mal de dégâts...
    Pour le nouveau Premier Ministre britannique, il va prendre la jolie forme d'une jeune collaboratrice.
    Pour l'écrivain au coeur brisé parti se réfugier dans le sud de la France, il surgira d'un lac.
    Il s'éloigne de cette femme qui, installée dans une vie de couple ronronnante, suspecte soudain son mari de songer à une autre.
    Il se cache derrière les faux-semblants de ce meilleur ami qui aurait bien voulu être autre chose que le témoin du mariage de celle qu'il aime.
    Pour ce veuf et son beau-fils, pour cette jeune femme qui adore son collègue, l'amour est l'enjeu, le but, mais également la source d'innombrables complications.
    En cette veille de Noël à Londres, ces vies et ces amours vont se croiser, se frôler et se confronter...`,
    image: "https://fr.web.img6.acsta.net/medias/nmedia/18/35/15/06/18364463.jpg",
    rating: 3.9
  }
];

function App() {

  const [data, setData] = useState(movies);

  return (
    <div>
      <Header/>
      <CardsList movies={data} />
    </div>
  )
 
}

export default App;
