/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharacter
// ====================================================

export interface GetCharacter_character_origin {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
}

export interface GetCharacter_character_location {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
}

export interface GetCharacter_character_episode {
  __typename: "Episode";
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The air date of the episode.
   */
  air_date: string | null;
}

export interface GetCharacter_character {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * The character's origin location
   */
  origin: GetCharacter_character_origin | null;
  /**
   * The character's last known location
   */
  location: GetCharacter_character_location | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (GetCharacter_character_episode | null)[];
}

export interface GetCharacter {
  /**
   * Get a specific character by ID
   */
  character: GetCharacter_character | null;
}

export interface GetCharacterVariables {
  id: string;
}
