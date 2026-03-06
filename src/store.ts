import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformIds?: number[];
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  resetQuery: () => void;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  resetQuery: () => set(() => ({ gameQuery: {} })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => {
      if (platformId === -1) {
        return { gameQuery: { genreId: store.gameQuery.genreId, sortOrder: store.gameQuery.sortOrder } };
      }
      const selectedPlatformIds = store.gameQuery.platformIds
        ? store.gameQuery.platformIds.includes(platformId)
          ? store.gameQuery.platformIds.filter((id) => id !== platformId)
          : [platformId, ...store.gameQuery.platformIds]
        : [platformId];

      console.log(selectedPlatformIds);

      if (selectedPlatformIds.length === 0)
        return { gameQuery: { genreId: store.gameQuery.genreId, sortOrder: store.gameQuery.sortOrder } };

      return {
        gameQuery: { ...store.gameQuery, platformIds: [...selectedPlatformIds] },
      };
    }),
  setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
