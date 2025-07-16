'use client';

import { useState, useEffect } from 'react';
import { isFavorite, addToFavorites, removeFromFavorites } from '@/utils/favorites';

interface FavoriteButtonProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
    category: string;
    features: string[];
  };
  className?: string;
  showDeleteConfirm?: boolean;
  onFavoriteRemoved?: () => void;
}

export default function FavoriteButton({ 
  job, 
  className = '', 
  showDeleteConfirm = false,
  onFavoriteRemoved 
}: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    setIsFavorited(isFavorite(job.id));
  }, [job.id]);

  const handleToggleFavorite = async () => {
    // お気に入り一覧ページで追加済みボタンを押した場合の確認
    if (showDeleteConfirm && isFavorited) {
      setShowConfirmDialog(true);
      return;
    }

    await performToggleFavorite();
  };

  const performToggleFavorite = async () => {
    setIsLoading(true);
    
    try {
      if (isFavorited) {
        removeFromFavorites(job.id);
        setIsFavorited(false);
        if (onFavoriteRemoved) {
          onFavoriteRemoved();
        }
      } else {
        addToFavorites(job);
        setIsFavorited(true);
      }
    } catch (error) {
      console.error('お気に入り操作に失敗しました:', error);
    } finally {
      setIsLoading(false);
      setShowConfirmDialog(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <>
      <button
        onClick={handleToggleFavorite}
        disabled={isLoading}
        className={`inline-flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
          isFavorited
            ? 'bg-yellow-100 text-yellow-700 border border-yellow-300 hover:bg-yellow-200'
            : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
        } ${className}`}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
        ) : isFavorited ? (
          <span className="text-lg mr-1">★</span>
        ) : (
          <span className="text-lg mr-1">♡</span>
        )}
        {isFavorited ? '追加済み' : 'お気に入り'}
      </button>

      {/* 削除確認ダイアログ */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
            <div className="text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                お気に入りから削除しますか？
              </h3>
              <p className="text-gray-600 mb-6">
                「{job.title}」をお気に入りから削除します。この操作は取り消せません。
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleCancelDelete}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  キャンセル
                </button>
                <button
                  onClick={performToggleFavorite}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                  ) : (
                    '削除する'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 