import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICharacterHomePageState } from "../../interfaces/ICharacterHomePage";
import characterService from "../../services/characterService/index";

const initialState: ICharacterHomePageState = {
  characters: null,
  selectedCharacter: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

//! Get all characters
export const getCharacters = createAsyncThunk(
  "characters/getAll",
  async (page: number, thunkAPI) => {
    try {
      const result = await characterService.getCharacters(page);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//! Get character
export const getCharacter = createAsyncThunk(
  "characters/getDetail",
  async (id: number, thunkAPI) => {
    try {
      const result = await characterService.getCharacter(id);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.characters = payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        if (action.payload) {
          state.message = action.payload;
        } else {
          state.message = action.error;
        }
        state.characters = null;
      })
      .addCase(getCharacter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.selectedCharacter = payload;
      })
      .addCase(getCharacter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        if (action.payload) {
          state.message = action.payload;
        } else {
          state.message = action.error;
        }
        state.selectedCharacter = null;
      });
  }
});

export const { reset } = characterSlice.actions;
export default characterSlice.reducer;
