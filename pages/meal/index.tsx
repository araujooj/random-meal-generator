import React from "react";
import Head from "next/head";
import Helmet from "../../components/Helmet";
import GlobalStyles from "../../styles/global";

import { Container } from "./styles";

const Meal: React.FC = () => {
  return (
    <>
      <Helmet />
      <GlobalStyles />
      <Container>
        <h2>Brown Stew Chicken</h2>
        <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/xxyupu1468262513.jpg" />
        <h2>Ingredients</h2>
        <span>
          1 lb Salmon 1 tablespoon of Olive oil 1 tablespoon Soy Sauce 1
          tablespoon Sake 1 tablespoon Sesame Seed
        </span>

        <h2>Instructions</h2>
        <span>
          Heat oven to 200C/180C fan/gas 6 and line a baking tray with foil.
          Drain the chickpeas, pat dry and tip onto the prepared baking tray.
          Add the oil and paprika, toss to coat, then roast for 20-25 mins until
          browned and crisp, shaking halfway through cooking. Meanwhile, put the
          tomatoes and onion in a small bowl with the vinegar and set aside to
          pickle. Put the avocado in another bowl and mash with a fork, leaving
          some larger chunks. Stir in the lime juice and season well. Mix the
          soured cream with the harissa and set aside until ready to serve. Heat
          a griddle pan until nearly smoking. Add the tortillas , one at a time,
          charring each side until hot with griddle lines. Put everything on the
          table and build the fajitas : spread a little of the harissa cream
          over the tortilla, top with roasted chickpeas, guacamole, pickled
          salsa and coriander, if you like. Serve with the lime wedges for
          squeezing over.
        </span>
      </Container>
    </>
  );
};

export default Meal;
