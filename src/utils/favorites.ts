export interface FavoriteJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  category: string;
  features: string[];
  addedAt: number;
}

const FAVORITES_KEY = 'favorite_jobs';

// お気に入り一覧を取得
export const getFavorites = (): FavoriteJob[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('お気に入りの取得に失敗しました:', error);
    return [];
  }
};

// お気に入りに追加
export const addToFavorites = (job: Omit<FavoriteJob, 'addedAt'>): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const favorites = getFavorites();
    const existingIndex = favorites.findIndex(fav => fav.id === job.id);
    
    if (existingIndex === -1) {
      const newFavorite: FavoriteJob = {
        ...job,
        addedAt: Date.now()
      };
      favorites.push(newFavorite);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('お気に入りの追加に失敗しました:', error);
  }
};

// お気に入りから削除
export const removeFromFavorites = (jobId: string): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const favorites = getFavorites();
    const filteredFavorites = favorites.filter(fav => fav.id !== jobId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filteredFavorites));
  } catch (error) {
    console.error('お気に入りの削除に失敗しました:', error);
  }
};

// お気に入りかどうかをチェック
export const isFavorite = (jobId: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const favorites = getFavorites();
    return favorites.some(fav => fav.id === jobId);
  } catch (error) {
    console.error('お気に入りチェックに失敗しました:', error);
    return false;
  }
};

// お気に入り数を取得
export const getFavoritesCount = (): number => {
  if (typeof window === 'undefined') return 0;
  
  try {
    const favorites = getFavorites();
    return favorites.length;
  } catch (error) {
    console.error('お気に入り数の取得に失敗しました:', error);
    return 0;
  }
}; 