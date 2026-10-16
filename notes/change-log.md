# Change log

## 2026-10-15（上线）

- 客户授权上线：建立公开仓库 paofu456/grit-moto-ranch，使用免费 workers.dev 地址
- 配置 Cloudflare Workers Builds（native git 集成），绑定 Worker `grit-moto-ranch`
- 首次构建成功并校验线上内容
- 正式上线配置：`siteMode: production`、`contentStatus: ready`、canonical 指向 workers.dev 地址、robots.txt 允许索引
- 清理草稿说明文案（67 个产品详情页 + 品牌故事页），首页品牌理念区新增咨询电话与邮箱
- `npm run verify:delivery` 全部通过（73 页）
- 第二次推送触发自动构建（source=push_event）并校验更新内容，确认旧草稿文案已消失

## 2026-10-15（第三轮）

- 下架缺图产品「盾形笔记本支架」（draft），在售 67 款
- 新增静态询价表单（mailto 提交，不含假成功提示）

## 2026-10-15（第二轮）

- 品牌统一为 GRIT MOTO RANCH（客户选择方案 B）
- 接入客户 Logo：透明化，生成页头深色版、页脚白色版、完整组合标
- 电话 18878168876 上站
- 导航改为 首页 / 产品商城 / 品牌故事 / 帮助中心；新增 `/help/` 帮助中心页
- 落地客户提供的首屏文案、3 条核心卖点、按钮与品牌理念；新增 `src/data/copy.ts`
- 68 款产品中 67 款改用报价表内真实图片（Lanczos 放大 + 锐化，输出 420px）
- 产品卡片与详情页主图改为 object-contain 并限制显示尺寸，避免图片被裁切或过度放大
- 修复首屏标题高亮片段渲染为空的缺陷
- `npm run verify` 通过（74 页）；桌面 1440px 与手机 375px 共 10 个路由组合全部通过

## 2026-10-15（第一轮）

- 初始化客户项目（Forge 模板，catalog commit 566d684d8c13acca1c4e2fec626a8eabdae2a604）
- 中文配置、参考站视觉方向（深色首屏 + 红 #EF3340 强调 + 系统中文字体栈）
- 移除全部演示公司与演示产品内容
- 解析客户报价表，建立 5 个类目 68 款产品条目
