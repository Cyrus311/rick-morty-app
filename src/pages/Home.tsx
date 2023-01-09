import React, { useEffect } from "react";
import { IHomePageProps } from "../interfaces/IHomePage";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { getCharacters } from "../store/reducers/characterSlice";
import TitlebarImageList from "../components/Characters/TitlebarImageList";

const Home = (props: IHomePageProps) => {
  const chars = useAppSelector((state) => state.character);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters(1));
  }, [dispatch]);

  return chars.characters ? (
    <TitlebarImageList data={chars.characters.results} />
  ) : null;
};

export default Home;
