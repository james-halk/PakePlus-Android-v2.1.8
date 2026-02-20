# 人生建议 - 每日随机展示应用 v3

基于凯文·凯利《宝贵的人生建议》500条人生智慧的每日随机展示应用。

---

## 在线体验

**Web版本**：https://6nekxsslwvd7g.ok.kimi.link

直接在浏览器中使用，所有数据保存在本地 localStorage。

---

## 功能特点

### 核心功能
- 📱 **每天随机展示3条建议** - 从500条人生建议中智能选取
- 🔄 **轮播不重复** - 在全部500条轮播完成之前不会重复
- 🎲 **每次顺序不同** - 每天的3条建议顺序随机
- 💾 **本地存储** - 所有数据保存在浏览器 localStorage 中

### v3 功能
- 📅 **日历功能** - 可视化日历，查看所有有记录的日期
- 🗓️ **日期切换** - 点击日历可查看任意历史日期的建议
- 📊 **日期统计** - 显示已记录天数
- 🎯 **日历标记** - 有记录的日期显示特殊标记
- 📄 **单文件HTML** - 提供独立的HTML文件版本

---

## 使用方式

### 方式一：Web版本（推荐）

访问：https://6nekxsslwvd7g.ok.kimi.link

### 方式二：单文件HTML

直接打开 `人生建议.html` 文件即可使用，无需服务器。

### 方式三：构建APK

参考 `BUILD_APK.md` 文件，使用 Android Studio 或命令行构建。

---

## 数据存储

所有数据保存在浏览器的 **localStorage** 中：

| Key | 说明 |
|-----|------|
| `advice_history_v3` | 历史记录，包含每天的3条建议 |
| `advice_rotation_v3` | 轮播状态，记录剩余未展示的建议 |

---

## 项目结构

```
├── android/              # Android原生项目
├── dist/                 # Web构建输出
├── src/
│   ├── components/
│   │   └── Calendar.tsx  # 日历组件
│   ├── data/
│   │   └── advices.ts   # 500条人生建议
│   ├── hooks/
│   │   └── useAdviceCalendar.ts
│   └── App.tsx
├── 人生建议.html         # 单文件HTML版本
├── capacitor.config.ts   # Capacitor配置
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
