# 旧金山 · Old Gold Mountain v4.0

> 从过去挖掘人生智慧，把遗憾变成财富

## ✅ 已完成功能

### 核心功能
- **四类记录**：经验矿脉 / 后悔矿石 / 关键事件 / 意义矿脉
- **完整表单**：情境描述、情绪状态、核心教训、行动计划、生活领域、复盘提醒
- **复盘系统**：定时提醒（7/30/90/365天）、复盘标记、反思记录
- **矿藏库**：搜索、分类筛选、删除
- **数据统计**：趋势图、类型分布、领域分布、核心数据面板

### v4.0 新功能
- **🌿 每日经验推送**：首页每天自动推送一条未与现有记录重复的经验矿脉，可一键收录或预填为个人版本
- **✅ 意义矿脉打卡**：首页新增今日打卡卡片，快速记录今天真正有意义的一件事
- **🗂️ 矿藏库快速查阅**：按月份折叠分组、月份跳转、回到顶部，避免记录变多后一直下滑
- **🎨 主题切换**：金矿深色（原版）↔ Apple 白色（轻盈明亮），自动保存
- **🛡️ 行为准则页**：新底部导航入口，汇聚所有教训与行动计划
  - 📌 置顶重要准则
  - ✅ 行动计划完成标记
  - 📂 按生活领域分组展示
  - ⚠️ 高频遗憾警示（同领域后悔≥3次自动提醒）
- **✏️ 记录编辑**：在详情弹窗增加编辑按钮，支持修改所有字段
- **🗑️ 列表内删除**：矿藏库列表每条记录可直接删除，无需打开详情
- **💾 双重持久存储**：localStorage + IndexedDB 镜像，防止数据丢失
- **📤 增强导出**：移动端自动调起系统分享，包含主题配置
- **📋 草稿自动保存**：记录表单内容自动保存，切换页面不丢失

### PWA 功能
- 离线使用（Service Worker 缓存）
- 安装到桌面/主屏幕
- 全屏独立运行

## 📁 文件结构

```
index.html   # 主应用（HTML + CSS + JS 全部内联）
sw.js        # Service Worker（PWA 缓存，v4 版本）
README.md    # 项目说明
```

## 🗂️ 数据结构

### Record 对象
```json
{
  "id": "字符串（唯一ID）",
  "type": "experience | regret | event | meaning",
  "content": "当时情境描述",
  "lesson": "核心教训",
  "action": "行动计划",
  "emotion": "情绪标签",
  "emoji": "情绪emoji",
  "domain": "career | relationship | health | finance | family | study | mindset | other",
  "reminderDays": 30,
  "reminderDate": "ISO日期",
  "reviewed": false,
  "reviewCount": 0,
  "pinned": false,
  "actionDone": false,
  "reflections": [],
  "createdAt": "ISO日期",
  "updatedAt": "ISO日期"
}
```

### 存储键
| 键 | 用途 |
|---|---|
| `ogm_records_v2` | 所有矿藏记录 |
| `ogm_prefs_v1` | 用户偏好（主题、连击天数等） |
| `ogm_sync_v1` | 同步元数据 |
| `ogm_draft_v1` | 记录草稿 |
| IndexedDB: `ogm_persistent_storage` | 持久化镜像快照 |

## 🔀 底部导航（v3）

| 位置 | 页面 | 图标 |
|---|---|---|
| 1 | 首页 | fa-home |
| 2 | 矿藏库 | fa-gem |
| 中 | 记录（+） | fa-plus |
| 4 | **行为准则**（新）| fa-shield-alt |
| 5 | 今日复盘 | fa-sync-alt |

> 报告页（统计图表）通过设置面板进入，或直接在统计页卡片点击

## ⚠️ 尚未实现

- 云端同步（目前仅本地存储 + IDB 镜像）
- 真正的 AI 洞察（目前为本地规则引擎）
- 推送通知（浏览器权限申请）
- 记录图片/附件

## 🚀 推荐下一步

1. 考虑集成 GitHub Gist API 实现免费云同步
2. 为高频遗憾领域添加"对策模板"功能
3. 增加复盘周报/月报导出为 PDF
4. 添加简单的标签系统（tags 字段）

## 部署说明

- 将 `index.html` 和 `sw.js` 部署到同一路径下（GitHub Pages 等）
- 必须通过 HTTPS 访问才能启用 Service Worker 和 PWA 安装
- iOS Safari：点击分享按钮 → "添加到主屏幕" 安装
