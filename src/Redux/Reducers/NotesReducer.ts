import {createAction, createReducer, Reducer} from '@reduxjs/toolkit';

interface initialState {
  textNotes: string[];
  voiceNotes: string[];
  imageNotes: string[];
}

const initialState = {
  textNotes: [],
  voiceNotes: [],
  imageNotes: [],
} as initialState;

type action = {
  type: string;
  payload: any;
};

const addTextNotes = createAction('ADD_TEXT_NOTES');
const addVoiceNotes = createAction('ADD_VOICE_NOTES');
const addImageNotes = createAction('ADD_IMAGE_NOTES');

const NotesReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTextNotes, (state, action: action) => {
      state.textNotes = action.payload;
    })
    .addCase(addVoiceNotes, (state, action: action) => {
      state.voiceNotes = action.payload;
    })
    .addCase(addImageNotes, (state, action: action) => {
      state.imageNotes = action.payload;
    });
});

export default NotesReducer;
