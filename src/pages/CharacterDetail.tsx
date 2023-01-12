import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ICharacterDetailPageProps } from "../interfaces/ICharacterDetailPage";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { getCharacter, reset } from "../store/reducers/characterSlice";
import TitlebarImageList from "../components/Characters/TitlebarImageList";
import { Button } from "@mui/material";
import Loader from "../components/UI/Loader/Loader";

const CharacterDetail = (props: ICharacterDetailPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { selectedCharacter, isLoading, isError, message } = useAppSelector(
    (state) => state.character
  );
  useEffect(() => {
    if (isError) {
      console.log("Error:", message);
    }

    const characterId = location.state.characterId;
    if (!characterId) {
      navigate("/");
    }

    dispatch(getCharacter(characterId));
    return () => {
      dispatch(reset());
    };
  }, [navigate, dispatch, isError, message, location]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1>DETAIL</h1>
      <h6>{selectedCharacter?.name}</h6>
    </>
  );
};

export default CharacterDetail;
