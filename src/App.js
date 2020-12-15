import React, {useState, useEffect } from 'react';
import './tailwind.output.css';
import './App.css';
import CardsList from './components/CardsList';

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
  }
];

function App() {

  const [data, setData] = useState(movies);

  return (
    <div class="container mx-auto px-4">
      <CardsList movies={data} />
    </div>
  )
 
}

export default App;
