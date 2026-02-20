import { useState, useEffect, useCallback } from 'react';
import { advices } from '@/data/advices';

// 单条建议记录
interface AdviceRecord {
  index: number;
  read: boolean;
}

// 每日记录
interface DailyRecord {
  date: string;
  advices: AdviceRecord[];
  currentIndex: number;
  createdAt: number;
}

// 轮播状态
interface RotationState {
  remainingIndices: number[];
  lastShuffleTime: number;
}

const HISTORY_KEY = 'advice_history_v2';
const ROTATION_KEY = 'advice_rotation_v2';
const ADVICES_PER_DAY = 3;
const TOTAL_ADVICES = 500;

// 获取日期字符串 YYYY-MM-DD
const getDateString = (date: Date = new Date()): string => {
  return date.toISOString().split('T')[0];
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
  const allIndices = Array.from({ length: TOTAL_ADVICES }, (_, i) => i);
  return {
    remainingIndices: shuffleArray(allIndices),
    lastShuffleTime: Date.now()
  };
};

// 获取指定日期的记录，如果不存在则创建
const getOrCreateDailyRecord = (
  dateStr: string,
  rotation: RotationState
): { record: DailyRecord; newRotation: RotationState } => {
  const history = getStorageData<Record<string, DailyRecord>>(HISTORY_KEY, {});
  
  if (history[dateStr]) {
    return { record: history[dateStr], newRotation: rotation };
  }
  
  let currentRotation = { ...rotation };
  
  if (currentRotation.remainingIndices.length < ADVICES_PER_DAY) {
    currentRotation = generateNewRotation();
  }
  
  const selectedIndices = currentRotation.remainingIndices.slice(0, ADVICES_PER_DAY);
  const newRemaining = currentRotation.remainingIndices.slice(ADVICES_PER_DAY);
  
  const newRecord: DailyRecord = {
    date: dateStr,
    advices: selectedIndices.map(index => ({ index, read: false })),
    currentIndex: 0,
    createdAt: Date.now()
  };
  
  history[dateStr] = newRecord;
  setStorageData(HISTORY_KEY, history);
  
  const newRotation: RotationState = {
    remainingIndices: newRemaining,
    lastShuffleTime: currentRotation.lastShuffleTime
  };
  setStorageData(ROTATION_KEY, newRotation);
  
  return { record: newRecord, newRotation };
};

// 更新记录
const updateDailyRecord = (dateStr: string, updates: Partial<DailyRecord>): void => {
  const history = getStorageData<Record<string, DailyRecord>>(HISTORY_KEY, {});
  if (history[dateStr]) {
    history[dateStr] = { ...history[dateStr], ...updates };
    setStorageData(HISTORY_KEY, history);
  }
};

export const useAdviceCalendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentRecord, setCurrentRecord] = useState<DailyRecord | null>(null);
  const [rotation, setRotation] = useState<RotationState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewedIndex, setViewedIndex] = useState(0);

  // 初始化
  useEffect(() => {
    const savedRotation = getStorageData<RotationState | null>(ROTATION_KEY, null);
    const initialRotation = savedRotation || generateNewRotation();
    setRotation(initialRotation);
    
    const today = getDateString();
    const { record } = getOrCreateDailyRecord(today, initialRotation);
    setCurrentRecord(record);
    setViewedIndex(record.currentIndex);
    setIsLoading(false);
  }, []);

  // 切换到指定日期
  const switchToDate = useCallback((date: Date) => {
    if (!rotation) return;
    
    const dateStr = getDateString(date);
    const { record, newRotation } = getOrCreateDailyRecord(dateStr, rotation);
    
    setCurrentDate(date);
    setCurrentRecord(record);
    setViewedIndex(record.currentIndex);
    setRotation(newRotation);
  }, [rotation]);

  // 切换到上一条建议
  const goToPrevious = useCallback(() => {
    if (viewedIndex > 0) {
      const newIndex = viewedIndex - 1;
      setViewedIndex(newIndex);
      const dateStr = getDateString(currentDate);
      updateDailyRecord(dateStr, { currentIndex: newIndex });
      if (currentRecord) {
        setCurrentRecord({ ...currentRecord, currentIndex: newIndex });
      }
    }
  }, [viewedIndex, currentDate, currentRecord]);

  // 切换到下一条建议
  const goToNext = useCallback(() => {
    if (viewedIndex < ADVICES_PER_DAY - 1) {
      const newIndex = viewedIndex + 1;
      setViewedIndex(newIndex);
      const dateStr = getDateString(currentDate);
      updateDailyRecord(dateStr, { currentIndex: newIndex });
      if (currentRecord) {
        setCurrentRecord({ ...currentRecord, currentIndex: newIndex });
      }
    }
  }, [viewedIndex, currentDate, currentRecord]);

  // 切换到指定建议
  const goToAdvice = useCallback((index: number) => {
    if (index >= 0 && index < ADVICES_PER_DAY) {
      setViewedIndex(index);
      const dateStr = getDateString(currentDate);
      updateDailyRecord(dateStr, { currentIndex: index });
      if (currentRecord) {
        setCurrentRecord({ ...currentRecord, currentIndex: index });
      }
    }
  }, [currentDate, currentRecord]);

  // 获取当前显示的建议
  const getCurrentAdvice = useCallback((): string => {
    if (!currentRecord || isLoading) return '';
    const adviceRecord = currentRecord.advices[viewedIndex];
    return advices[adviceRecord?.index] || '';
  }, [currentRecord, viewedIndex, isLoading]);

  // 获取当前建议的全局序号
  const getCurrentNumber = useCallback((): number => {
    if (!currentRecord || isLoading) return 0;
    return currentRecord.advices[viewedIndex]?.index + 1 || 0;
  }, [currentRecord, viewedIndex, isLoading]);

  // 获取今日三条建议的序号
  const getTodayAdviceNumbers = useCallback((): number[] => {
    if (!currentRecord) return [];
    return currentRecord.advices.map(a => a.index + 1);
  }, [currentRecord]);

  // 检查是否是今天
  const isToday = useCallback((): boolean => {
    return getDateString(currentDate) === getDateString(new Date());
  }, [currentDate]);

  // 获取所有有记录的日期
  const getRecordedDates = useCallback((): string[] => {
    const history = getStorageData<Record<string, DailyRecord>>(HISTORY_KEY, {});
    return Object.keys(history).sort();
  }, []);

  // 获取某月的记录日期
  const getDatesInMonth = useCallback((year: number, month: number): string[] => {
    const history = getStorageData<Record<string, DailyRecord>>(HISTORY_KEY, {});
    const prefix = `${year}-${String(month + 1).padStart(2, '0')}`;
    return Object.keys(history)
      .filter(date => date.startsWith(prefix))
      .sort();
  }, []);

  // 检查日期是否有记录
  const hasRecord = useCallback((dateStr: string): boolean => {
    const history = getStorageData<Record<string, DailyRecord>>(HISTORY_KEY, {});
    return !!history[dateStr];
  }, []);

  // 是否可以前进/后退
  const canGoPrevious = viewedIndex > 0;
  const canGoNext = viewedIndex < ADVICES_PER_DAY - 1;

  return {
    currentAdvice: getCurrentAdvice(),
    currentNumber: getCurrentNumber(),
    currentIndex: viewedIndex,
    totalPerDay: ADVICES_PER_DAY,
    todayAdviceNumbers: getTodayAdviceNumbers(),
    currentDate,
    isToday: isToday(),
    canGoPrevious,
    canGoNext,
    goToPrevious,
    goToNext,
    goToAdvice,
    switchToDate,
    getRecordedDates,
    getDatesInMonth,
    hasRecord,
    isLoading
  };
};

export default useAdviceCalendar;
