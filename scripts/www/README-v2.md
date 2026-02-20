# 人生建议 - 每日随机展示应用 v2

基于凯文·凯利《宝贵的人生建议》500条人生智慧的每日随机展示应用。

## 在线体验

**Web版本**：https://6nekxsslwvd7g.ok.kimi.link

直接在浏览器中使用，支持手机端访问，所有数据保存在本地。

---

## 功能特点

### 核心功能
- 📱 **每天随机展示3条建议** - 从500条人生建议中智能选取
- 🔄 **轮播不重复** - 在全部500条轮播完成之前不会重复
- 🎲 **每次顺序不同** - 每天的3条建议顺序随机
- 💾 **本地存储** - 所有数据保存在浏览器localStorage中

### v2 新增功能
- 📅 **日历功能** - 可视化日历，查看所有有记录的日期
- 🗓️ **日期切换** - 点击日历可查看任意历史日期的建议
- 📊 **阅读统计** - 显示已记录天数和今日阅读进度
- ✅ **阅读标记** - 每条建议显示已读/未读状态
- 🔙 **回到今天** - 一键快速返回今天的建议

---

## 使用方式

### 方式一：Web版本（推荐）

直接在浏览器中打开即可使用，所有数据自动保存在本地。

### 方式二：构建APK（Android应用）

#### 环境要求
- Node.js 18+
- Android Studio
- Android SDK
- Java JDK 11+

#### 构建步骤

1. 解压 `life-wisdom-v2.tar.gz`

2. 安装依赖
```bash
cd app
npm install
```

3. 同步Capacitor
```bash
npx cap sync android
```

4. 构建APK
```bash
cd android
./gradlew assembleDebug
```

构建完成后，APK文件位于：
`android/app/build/outputs/apk/debug/app-debug.apk`

---

## 数据存储说明

所有数据保存在浏览器的 **localStorage** 中：

| Key | 说明 |
|-----|------|
| `advice_history` | 历史记录，包含每天的3条建议 |
| `advice_rotation` | 轮播状态，记录剩余未展示的建议 |

### 数据结构

```typescript
// 每日记录
interface DailyRecord {
  date: string;           // 日期 YYYY-MM-DD
  advices: {
    index: number;        // 建议索引 0-499
    read: boolean;        // 是否已读
  }[];
  currentIndex: number;   // 当前查看的索引
  createdAt: number;      // 创建时间戳
}
```

---

## 轮播算法

1. **初始化**：将500条建议的索引随机打乱
2. **每日分配**：每天取前3条作为当日建议
3. **历史保存**：每次切换日期时自动保存记录
4. **循环重置**：当所有建议展示完毕后，重新随机排序

---

## 项目结构

```
├── android/              # Android原生项目
├── dist/                 # Web构建输出
├── src/
│   ├── components/
│   │   └── Calendar.tsx  # 日历组件
│   ├── data/
│   │   └── advices.ts   # 500条人生建议数据
│   ├── hooks/
│   │   └── useAdviceCalendar.ts  # 日历逻辑Hook
│   └── App.tsx          # 主应用组件
├── capacitor.config.ts  # Capacitor配置
└── package.json
```

---

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Capacitor

---

## 数据来源

《宝贵的人生建议》 - 凯文·凯利 (Kevin Kelly)

中文版包含500条建议（英文原版460条 + 中文版独家40条）

---

## License

MIT
