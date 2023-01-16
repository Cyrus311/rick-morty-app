import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ICharacterDetailPageProps } from "../interfaces/ICharacterDetailPage";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { getCharacter, reset } from "../store/reducers/characterSlice";
import Loader from "../components/UI/Loader/Loader";
import ImageContainer from "../components/UI/ImageContainer/ImageContainer";

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
      {selectedCharacter ? (
        <div>
          <h3>{selectedCharacter.name}</h3>
          {selectedCharacter.image && (
            <ImageContainer
              src={selectedCharacter.image}
              alt={selectedCharacter.name ?? "Image"}
            />
          )}
          <span>
            <h6>
              <b>Status:</b> {selectedCharacter.status}
            </h6>
          </span>
          <span>
            <h6>
              <b>Species:</b> {selectedCharacter.species}
            </h6>
          </span>
          <span>
            <h6>
              <b>Gender:</b> {selectedCharacter.gender}
            </h6>
          </span>
          <span>
            <h6>
              <b>Origin:</b> {selectedCharacter.origin?.name}
            </h6>
          </span>
          <span>
            <h6>
              <b>Location:</b> {selectedCharacter.location?.name}
            </h6>
          </span>
        </div>
      ) : null}
    </>
  );
};

export default CharacterDetail;
