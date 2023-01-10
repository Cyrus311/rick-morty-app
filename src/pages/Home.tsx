import React, { useEffect, useState } from "react";
import { IHomePageProps } from "../interfaces/IHomePage";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { getCharacters } from "../store/reducers/characterSlice";
import TitlebarImageList from "../components/Characters/TitlebarImageList";
import { Button } from "@mui/material";
import Loader from "../components/UI/Loader/Loader";

const Home = (props: IHomePageProps) => {
  const [page, setPage] = useState(1);
  const [charList, setCharList] = useState([]);
  const { characters, isLoading } = useAppSelector((state) => state.character);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters(page));
    if (characters) {
      setCharList((prevState) => [
        ...new Set(prevState.concat(characters.results as any))
      ]);
    }
  }, [dispatch, page, characters]);

  return (
    <>
      {charList ? <TitlebarImageList data={charList} /> : null}
      {isLoading ? <Loader /> : null}
      {characters?.info?.next !== null ? (
        <Button
          variant="text"
          onClick={() => setPage((prevState) => prevState + 1)}
          style={{ marginBottom: "10px" }}
        >
          Load more...
        </Button>
      ) : null}
    </>
  );
};

export default Home;
