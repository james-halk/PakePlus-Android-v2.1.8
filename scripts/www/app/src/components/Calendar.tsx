import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface CalendarProps {
  currentDate: Date;
  onSelectDate: (date: Date) => void;
  hasRecord: (dateStr: string) => boolean;
  getDatesInMonth: (year: number, month: number) => string[];
}

// 获取某月的天数
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

// 获取某月第一天是星期几 (0=周日)
const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

// 格式化日期为 YYYY-MM-DD
const formatDateStr = (year: number, month: number, day: number): string => {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

// 检查是否是今天
const checkIsToday = (year: number, month: number, day: number): boolean => {
  const today = new Date();
  return (
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day
  );
};

// 检查是否是选中的日期
const checkIsSelected = (date: Date, year: number, month: number, day: number): boolean => {
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
};

export function Calendar({
  currentDate,
  onSelectDate,
  hasRecord: _hasRecord,
  getDatesInMonth,
}: CalendarProps) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  // 获取当前月的记录日期
  const recordedDatesInMonth = useMemo(() => {
    const dates = getDatesInMonth(year, month);
    return new Set(dates);
  }, [year, month, getDatesInMonth]);

  // 生成日历网格
  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days: (number | null)[] = [];

    // 上个月的填充
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // 当前月的天数
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }, [year, month]);

  // 月份名称
  const monthNames = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ];

  // 星期名称
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  // 切换月份
  const goToPreviousMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  // 选择日期
  const handleSelectDate = (day: number) => {
    const selectedDate = new Date(year, month, day);
    onSelectDate(selectedDate);
    setOpen(false);
  };

  // 快速回到今天
  const goToToday = () => {
    const today = new Date();
    setViewDate(today);
    onSelectDate(today);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-amber-200 hover:bg-amber-50 hover:border-amber-300 text-amber-700"
        >
          <CalendarDays className="w-4 h-4 mr-1" />
          日历
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px] p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="text-center text-lg font-semibold text-gray-800">
            选择日期
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4">
          {/* 月份导航 */}
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPreviousMonth}
              className="h-8 w-8 hover:bg-amber-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-base font-medium text-gray-700">
              {year}年 {monthNames[month]}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNextMonth}
              className="h-8 w-8 hover:bg-amber-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* 星期标题 */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-gray-400 py-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* 日期网格 */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="h-10" />;
              }

              const dateStr = formatDateStr(year, month, day);
              const hasRec = recordedDatesInMonth.has(dateStr);
              const isToday = checkIsToday(year, month, day);
              const isSelected = checkIsSelected(currentDate, year, month, day);

              return (
                <button
                  key={day}
                  onClick={() => handleSelectDate(day)}
                  className={`
                    h-10 w-10 rounded-full text-sm font-medium transition-all duration-200
                    flex items-center justify-center relative mx-auto
                    ${isSelected
                      ? 'bg-amber-500 text-white shadow-md scale-105 ring-2 ring-amber-300'
                      : isToday
                      ? 'bg-amber-100 text-amber-700 border-2 border-amber-400 hover:bg-amber-200'
                      : hasRec
                      ? 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                      : 'text-gray-400 hover:bg-gray-100'
                    }
                  `}
                >
                  {day}
                  {/* 有记录的标记 - 更明显的标记 */}
                  {hasRec && !isSelected && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 底部按钮 */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <Button
              onClick={goToToday}
              variant="outline"
              className="w-full rounded-full border-amber-200 hover:bg-amber-50 text-amber-700"
            >
              回到今天
            </Button>
          </div>

          {/* 图例 */}
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-amber-500 ring-2 ring-amber-300" />
              <span>选中</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-amber-100 border-2 border-amber-400" />
              <span>今天</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-amber-50 border border-amber-200 relative">
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
              </span>
              <span>有记录</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Calendar;
