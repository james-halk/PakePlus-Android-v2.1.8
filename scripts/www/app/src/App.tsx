import { useAdviceCalendar } from '@/hooks/useAdviceCalendar';
import { Calendar } from '@/components/Calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, RefreshCw, Sparkles, Calendar as CalendarIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const {
    currentAdvice,
    currentNumber,
    currentIndex,
    totalPerDay,
    todayAdviceNumbers,
    currentDate,
    isToday,
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
  } = useAdviceCalendar();

  const [isAnimating, setIsAnimating] = useState(false);
  const [displayAdvice, setDisplayAdvice] = useState('');

  // 当建议改变时添加动画效果
  useEffect(() => {
    if (currentAdvice) {
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayAdvice(currentAdvice);
        setIsAnimating(false);
      }, 150);
    }
  }, [currentAdvice]);

  // 切换到上一条
  const handlePrevious = () => {
    if (canGoPrevious) {
      setIsAnimating(true);
      setTimeout(() => {
        goToPrevious();
      }, 150);
    }
  };

  // 切换到下一条
  const handleNext = () => {
    if (canGoNext) {
      setIsAnimating(true);
      setTimeout(() => {
        goToNext();
      }, 150);
    }
  };

  // 切换到指定建议
  const handleGoToAdvice = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        goToAdvice(index);
      }, 150);
    }
  };

  // 格式化日期显示
  const formatDateDisplay = (date: Date): string => {
    const today = new Date();
    const isTodayDate = date.toDateString() === today.toDateString();
    
    if (isTodayDate) {
      return '今天';
    }
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekDay = weekDays[date.getDay()];
    
    return `${year}年${month}月${day}日 ${weekDay}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="w-8 h-8 animate-spin text-amber-600" />
          <p className="text-amber-700 text-sm">加载中...</p>
        </div>
      </div>
    );
  }

  const recordedCount = getRecordedDates().length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        {/* 标题区域 */}
        <header className="text-center mb-6 pt-4">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-amber-600 text-sm font-medium tracking-wider uppercase">Daily Wisdom</span>
            <Sparkles className="w-5 h-5 text-amber-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            宝贵的人生建议
          </h1>
          <p className="text-gray-500 text-sm">凯文·凯利 · 500条人生智慧</p>
        </header>

        {/* 日期栏 */}
        <div className="flex items-center justify-between mb-6 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-amber-500" />
            <span className={`text-sm font-medium ${isToday ? 'text-amber-600' : 'text-gray-600'}`}>
              {formatDateDisplay(currentDate)}
              {isToday && <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">今日</span>}
            </span>
          </div>
          <Calendar
            currentDate={currentDate}
            onSelectDate={switchToDate}
            hasRecord={hasRecord}
            getDatesInMonth={getDatesInMonth}
          />
        </div>

        {/* 三条建议指示器 */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: totalPerDay }, (_, i) => (
            <button
              key={i}
              onClick={() => handleGoToAdvice(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-amber-500 w-8'
                  : 'bg-gray-300 w-4 hover:bg-amber-300'
              }`}
            />
          ))}
        </div>

        {/* 主卡片 */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-6 sm:p-10">
            {/* 序号标签 */}
            <div className="flex justify-between items-center mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold text-lg shadow-lg">
                {currentNumber}
              </span>
              <span className="text-gray-400 text-sm">
                {currentIndex + 1} / {totalPerDay}
              </span>
            </div>

            {/* 建议内容 */}
            <div
              className={`min-h-[200px] flex items-center justify-center transition-all duration-300 ${
                isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 whitespace-pre-line text-center font-medium">
                {displayAdvice}
              </p>
            </div>

            {/* 导航按钮 */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
              <Button
                variant="outline"
                size="lg"
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className={`rounded-full px-6 transition-all duration-300 ${
                  canGoPrevious
                    ? 'hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700'
                    : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                上一条
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleNext}
                disabled={!canGoNext}
                className={`rounded-full px-6 transition-all duration-300 ${
                  canGoNext
                    ? 'hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700'
                    : 'opacity-30 cursor-not-allowed'
                }`}
              >
                下一条
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 今日三条列表 */}
        <div className="mt-8">
          <p className="text-center text-gray-500 text-sm mb-4">
            {isToday ? '今日三条建议' : '该日三条建议'}
          </p>
          <div className="flex justify-center gap-3">
            {todayAdviceNumbers.map((num, idx) => (
              <button
                key={idx}
                onClick={() => handleGoToAdvice(idx)}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium 
                  transition-all duration-300
                  ${idx === currentIndex
                    ? 'bg-amber-500 text-white shadow-lg scale-110 ring-2 ring-amber-300'
                    : 'bg-white text-gray-500 shadow hover:bg-amber-50 hover:text-amber-600'
                  }
                `}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* 日期统计 */}
        <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-gray-500 text-xs mb-1">已记录天数</p>
          <p className="text-3xl font-bold text-amber-600">
            {recordedCount}
            <span className="text-sm font-normal text-gray-400 ml-1">天</span>
          </p>
        </div>

        {/* 底部说明 */}
        <footer className="mt-8 text-center">
          <p className="text-gray-400 text-xs leading-relaxed">
            每天随机展示3条建议 · 点击日历可查看历史记录
            <br />
            轮播完成后才会出现新的组合
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
