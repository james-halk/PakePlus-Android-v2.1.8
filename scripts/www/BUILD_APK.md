# 构建 APK 指南

## 方法一：使用 Android Studio（推荐）

### 环境要求
- Android Studio Arctic Fox 或更高版本
- JDK 11 或更高版本

### 步骤

1. **解压项目**
```bash
tar -xzf life-wisdom-v3.tar.gz
cd life-wisdom-app
```

2. **用 Android Studio 打开**
- 打开 Android Studio
- 选择 "Open an existing Android Studio project"
- 选择 `android` 文件夹

3. **同步项目**
- 等待 Gradle 同步完成
- 点击 "Sync Now" 如果有提示

4. **构建 APK**
- 菜单栏选择 `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
- 或者使用快捷键

5. **获取 APK**
- 构建完成后，点击右下角提示的 "locate"
- APK 位置：`android/app/build/outputs/apk/debug/app-debug.apk`

---

## 方法二：使用命令行

### 环境要求
- JDK 11+ (必须包含编译器)
- Android SDK
- 设置环境变量

### 步骤

1. **安装 JDK**
```bash
# macOS
brew install openjdk@17

# Ubuntu/Debian
sudo apt-get install openjdk-17-jdk

# Windows
# 下载并安装 JDK 17
```

2. **安装 Android SDK**
```bash
# 通过 Android Studio 安装
# 或下载命令行工具
```

3. **设置环境变量**
```bash
export JAVA_HOME=/path/to/jdk-17
export ANDROID_HOME=/path/to/android-sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

4. **构建 APK**
```bash
cd life-wisdom-app/android
./gradlew assembleDebug
```

5. **获取 APK**
```bash
ls app/build/outputs/apk/debug/app-debug.apk
```

---

## 方法三：使用 Docker

如果你有 Docker 环境：

```bash
docker run --rm -v $(pwd):/project \
  -w /project/android \
  mingc/android-build-box \
  ./gradlew assembleDebug
```

---

## 方法四：使用在线构建服务

### 推荐服务
- **GitHub Actions**: 免费的 CI/CD 服务
- **Bitrise**: 移动应用专门构建服务
- **App Center**: Microsoft 的移动应用构建服务

### GitHub Actions 示例

创建 `.github/workflows/build.yml`:

```yaml
name: Build APK

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
          
      - name: Setup Android SDK
        uses: android-actions/setup-android@v2
        
      - name: Build APK
        run: |
          cd android
          ./gradlew assembleDebug
          
      - name: Upload APK
        uses: actions/upload-artifact@v3
        with:
          name: app-debug
          path: android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 常见问题

### 1. JAVA_COMPILER 错误
**问题**: `Toolchain installation does not provide the required capabilities: [JAVA_COMPILER]`

**解决**: 安装完整 JDK，不只是 JRE
```bash
# Ubuntu/Debian
sudo apt-get install openjdk-17-jdk

# 检查
javac -version
```

### 2. Gradle 下载失败
**问题**: 下载 Gradle 超时

**解决**: 设置镜像或使用代理
```bash
# 在 gradle.properties 中添加
systemProp.http.proxyHost=proxy.example.com
systemProp.http.proxyPort=8080
```

### 3. SDK 版本不匹配
**问题**: `compileSdkVersion` 错误

**解决**: 在 Android Studio 中安装对应版本的 SDK

---

## 项目文件说明

| 文件/目录 | 说明 |
|-----------|------|
| `android/` | Android 原生项目 |
| `dist/` | Web 构建输出 |
| `src/` | React 源码 |
| `capacitor.config.ts` | Capacitor 配置 |

---

## Web 版本（无需构建）

如果你只需要在浏览器中使用，直接打开 `dist/index.html` 即可。

或者使用在线版本：https://6nekxsslwvd7g.ok.kimi.link
