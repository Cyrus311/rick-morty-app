import { GetCharacters } from "../services/characterService/__generated__/GetCharacters";

export interface IHomePageProps {}
export interface IHomePageState {
  characters: GetCharacters["characters"] | null;
  selectedCharacter: {};
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}
