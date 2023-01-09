import { apolloClient } from "../../graphql";
import { GET_CHARACTERS } from "./queries";
import { GetCharacters } from "./__generated__/GetCharacters";

const getCharacters = async (page: Number): Promise<GetCharacters> => {
  try {
    const response = await apolloClient.query({
      query: GET_CHARACTERS,
      variables: { page }
    });

    if (!response || !response.data)
      throw new Error("Cannot get character list!");

    console.log("DATA: ", response.data);

    return response.data;
  } catch (error) {
    throw error;
  }
};

const characterService = { getCharacters };
export default characterService;
