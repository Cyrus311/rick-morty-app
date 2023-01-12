import { GetCharacters } from "../services/characterService/__generated__/GetCharacters";
import { GetCharacter } from "../services/characterService/__generated__/GetCharacter";

export interface ICharacterHomePageProps {}
export interface ICharacterHomePageState {
  characters: GetCharacters["characters"] | null;
  selectedCharacter: GetCharacter["character"] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}
