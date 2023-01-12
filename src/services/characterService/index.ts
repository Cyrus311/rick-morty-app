import { apolloClient } from "../../graphql";
import { GET_CHARACTERS, GET_CHARACTER } from "./queries";
import { GetCharacters } from "./__generated__/GetCharacters";
import { GetCharacter } from "./__generated__/GetCharacter";

const getCharacter = async (id: Number): Promise<GetCharacter["character"]> => {
  try {
    const response = await apolloClient.query({
      query: GET_CHARACTER,
      variables: { id }
    });

    if (!response || !response.data) throw new Error("Can not get character!");

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCharacters = async (
  page: Number
): Promise<GetCharacters["characters"]> => {
  try {
    const response = await apolloClient.query({
      query: GET_CHARACTERS,
      variables: { page }
    });

    if (!response || !response.data)
      throw new Error("Can not get character list!");

    return response.data.characters;
  } catch (error) {
    throw error;
  }
};

const characterService = { getCharacter, getCharacters };
export default characterService;
