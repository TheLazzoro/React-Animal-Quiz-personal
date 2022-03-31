import Question from "./components/Question";

export default function App() {
  /*
  A question has:
    One right answer
    Three wrong answers

    One question component (image - "What animal is this?")
    Four option components

    One container for the image and four option 

    {
      "name": "Black-footed Cat",
      "latin_name": "Felis nigripes",
      "animal_type": "Mammal",
      "active_time": "Nocturnal",
      "length_min": "1.1",
      "length_max": "1.7",
      "weight_min": "3.3",
      "weight_max": "6.5",
      "lifespan": "5",
      "habitat": "Desert, savannah, and scrubland",
      "diet": "Mice, insects, spiders, lizards, and birds",
      "geo_range": "Southern Africa",
      "image_link": "https://upload.wikimedia.org/wikipedia/commons/d/da/Zoo_Wuppertal_Schwarzfusskatze.jpg",
      "id": 36
      },
    
    {
      name: name,
      imageUrl: imageUrl 
    }

    {
      correctId: 182,
      182: {
        name: name,
        imageUrl: imageUrl 
      },
      36: {
        name: name,
        imageUrl: imageUrl 
      },
      wrong: {
        name: name,
        imageUrl: imageUrl 
      },
      wrong: {
        name: name,
        imageUrl: imageUrl 
      },
    }

    {
      image: url,
      correct: "Duck",
      wrong: ["Tiger", "Cat", "Dog"]
    }

    Et component returnerer et image
    Options. Start med at printe de fire muligheder <p>
  */

  {
    /* <LayoutMain>
    <LayoutQuestion>
      <Question imageUrl={"url"} />
    </LayoutQuestion>
    <LayoutOptions>
      
      <Options correct={"Duck"} wrong={["Tiger", "Cat", "Dog"]} />
      
    </LayoutOptions>
  </LayoutMain>; */
  }

  return (
    <>
      <Question />
      {/* <Options /> */}
    </>
  );
}
