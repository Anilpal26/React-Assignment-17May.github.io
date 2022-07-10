import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name : 'geektunes-slice',
    initialState : {
        playingTrack : ""
    },
    reducers : {
        changePlayerTrack(state , action){
            state.playingTrack = action.payload;
        }
    }
});

export default slice.reducer;
export const { changePlayerTrack } = slice.actions;