import { GetCharacters_characters } from "../services/characterService/__generated__/GetCharacters";

export interface IHomePageProps {}
export interface IHomePageState {
  characters: GetCharacters_characters | null;
  selectedCharacter: {};
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}
