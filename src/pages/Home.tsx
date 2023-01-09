import React, { useEffect } from "react";
import { IHomePageProps } from "../interfaces/IHomePage";
import characterService from "../services/characterService";

const Home = (props: IHomePageProps) => {
  const fetchCharacter = async () => {
    const characters = await characterService.getCharacters(1).catch((err) => {
      console.log("Error: ", err);
    });

    console.log(characters);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return <h1>Home</h1>;
};

export default Home;
