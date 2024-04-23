// likedStore.js
import create from "zustand";

const useLikedStore = create((set) => ({
  likedSongs: [],
  addLikedSong: (song) =>
    set((state) => ({
      likedSongs: [...state.likedSongs, song],
    })),
  removeLikedSong: (songId) =>
    set((state) => ({
      likedSongs: state.likedSongs.filter((song) => song.id !== songId),
    })),
}));

export default useLikedStore;
