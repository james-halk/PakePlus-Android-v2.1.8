import { useState, useEffect, useCallback } from 'react';
import { advices } from '@/data/advices';

interface DailyAdvices {
  date: string;
  indices: number[];
  currentIndex: number;
}

interface RotationState {
  remainingIndices: number[];
  currentBatch: number[];
  batchIndex: number;
}

const DAILY_ADVICES_KEY = 'daily_advices';
const ROTATION_STATE_KEY = 'rotation_state';
const ADVICES_PER_DAY = 3;

// 获取今天的日期字符串
const getTodayString = (): string => {
  return new Date().toISOString().split('T')[0];
};

// 从localStorage获取数据
const getStorageData = <T,>(key: string, defaultValue: T): T => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
};

// 保存数据到localStorage
const setStorageData = <T,>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
};

// Fisher-Yates 洗牌算法
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 生成新的随机顺序
const generateNewRotation = (): RotationState => {
  const allIndices = Array.from({ length: advices.length }, (_, i) => i);
  const shuffled = shuffleArray(allIndices);
  
  return {
    remainingIndices: shuffled.slice(ADVICES_PER_DAY),
    currentBatch: shuffled.slice(0, ADVICES_PER_DAY),
    batchIndex: 0
  };
};

// 获取下一批建议
const getNextBatch = (state: RotationState): RotationState => {
  if (state.remainingIndices.length < ADVICES_PER_DAY) {
    // 如果剩余不够，重新生成
    return generateNewRotation();
  }
  
  const nextBatch = state.remainingIndices.slice(0, ADVICES_PER_DAY);
  const newRemaining = state.remainingIndices.slice(ADVICES_PER_DAY);
  
  return {
    remainingIndices: newRemaining,
    currentBatch: nextBatch,
    batchIndex: state.batchIndex + 1
  };
};

export const useAdviceRotation = () => {
  const [dailyAdvices, setDailyAdvices] = useState<DailyAdvices | null>(null);
  const [, setRotationState] = useState<RotationState | null>(null);
  const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 初始化数据
  useEffect(() => {
    const today = getTodayString();
    const savedDaily = getStorageData<DailyAdvices | null>(DAILY_ADVICES_KEY, null);
    const savedRotation = getStorageData<RotationState | null>(ROTATION_STATE_KEY, null);

    if (savedDaily?.date === today && savedRotation) {
      // 今天已经有数据了
      setDailyAdvices(savedDaily);
      setRotationState(savedRotation);
      setCurrentAdviceIndex(savedDaily.currentIndex);
    } else {
      // 新的一天，生成新的批次
      const newRotation = savedRotation && savedRotation.remainingIndices.length >= ADVICES_PER_DAY
        ? getNextBatch(savedRotation)
        : generateNewRotation();
      
      const newDaily: DailyAdvices = {
        date: today,
        indices: newRotation.currentBatch,
        currentIndex: 0
      };
      
      setDailyAdvices(newDaily);
      setRotationState(newRotation);
      setCurrentAdviceIndex(0);
      
      setStorageData(DAILY_ADVICES_KEY, newDaily);
      setStorageData(ROTATION_STATE_KEY, newRotation);
    }
    
    setIsLoading(false);
  }, []);

  // 获取当前显示的建议
  const getCurrentAdvice = useCallback((): string => {
    if (!dailyAdvices || isLoading) return '';
    const adviceIndex = dailyAdvices.indices[currentAdviceIndex];
    return advices[adviceIndex] || '';
  }, [dailyAdvices, currentAdviceIndex, isLoading]);

  // 获取当前是第几条
  const getCurrentNumber = useCallback((): number => {
    if (!dailyAdvices || isLoading) return 0;
    return dailyAdvices.indices[currentAdviceIndex] + 1;
  }, [dailyAdvices, currentAdviceIndex, isLoading]);

  // 切换到上一条
  const goToPrevious = useCallback(() => {
    if (currentAdviceIndex > 0) {
      const newIndex = currentAdviceIndex - 1;
      setCurrentAdviceIndex(newIndex);
      if (dailyAdvices) {
        const updated: DailyAdvices = { ...dailyAdvices, currentIndex: newIndex };
        setDailyAdvices(updated);
        setStorageData(DAILY_ADVICES_KEY, updated);
      }
    }
  }, [currentAdviceIndex, dailyAdvices]);

  // 切换到下一条
  const goToNext = useCallback(() => {
    if (currentAdviceIndex < ADVICES_PER_DAY - 1) {
      const newIndex = currentAdviceIndex + 1;
      setCurrentAdviceIndex(newIndex);
      if (dailyAdvices) {
        const updated: DailyAdvices = { ...dailyAdvices, currentIndex: newIndex };
        setDailyAdvices(updated);
        setStorageData(DAILY_ADVICES_KEY, updated);
      }
    }
  }, [currentAdviceIndex, dailyAdvices]);

  // 是否可以前进/后退
  const canGoPrevious = currentAdviceIndex > 0;
  const canGoNext = currentAdviceIndex < ADVICES_PER_DAY - 1;

  // 获取今日三条建议的序号
  const getTodayAdviceNumbers = useCallback((): number[] => {
    if (!dailyAdvices) return [];
    return dailyAdvices.indices.map(i => i + 1);
  }, [dailyAdvices]);

  return {
    currentAdvice: getCurrentAdvice(),
    currentNumber: getCurrentNumber(),
    currentIndex: currentAdviceIndex,
    totalPerDay: ADVICES_PER_DAY,
    todayAdviceNumbers: getTodayAdviceNumbers(),
    canGoPrevious,
    canGoNext,
    goToPrevious,
    goToNext,
    isLoading
  };
};

export default useAdviceRotation;
