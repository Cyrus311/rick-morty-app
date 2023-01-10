import { GetCharacters } from "../services/characterService/__generated__/GetCharacters";

export interface ICharacterHomePageProps {}
export interface ICharacterHomePageState {
  characters: GetCharacters["characters"] | null;
  selectedCharacter: {};
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}
