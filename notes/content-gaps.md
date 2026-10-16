# Content gaps（待客户确认）

更新：2026-10-15（已上线）

## 上线状态

- 线上地址：https://grit-moto-ranch.fanfu749.workers.dev
- 仓库：https://github.com/paofu456/grit-moto-ranch （public，main 分支）
- Cloudflare Worker：`grit-moto-ranch`（Workers Builds 原生 git 集成，push 自动构建）
- `siteMode: production`、`contentStatus: ready`、robots 允许索引
- 未绑定自定义域名（客户选择免费地址）

## 已实现

- 5 个类目、**在售 67 款**产品（含真实图片）
- 品牌 GRIT MOTO RANCH、Logo 三版、电话 18878168876、邮箱 1349947774@qq.com
- 客户提供的首屏文案、3 条核心卖点、2 个按钮、品牌理念
- 导航：首页 / 产品商城 / 品牌故事 / 帮助中心
- 静态询价表单（mailto 提交）

## 询价表单的实际行为（诚实记录）

- 位置：`/contact/`，组件 `src/components/sections/ContactForm.astro`
- 提交后**不经过服务器**：把填写内容拼成 `mailto:`，打开访客自己的邮件客户端，由访客点击发送
- 页面有「这个表单怎么工作」说明栏；同时提供可点击的电话与邮箱
- **没有"提交成功"的假提示**：那会让访客以为已送达、而企业实际收不到
- 若要自动收信，需接入第三方表单服务或邮件 API（另一项工作）

## 内容缺口（不影响上线，补齐后即可替换）

| 项目 | 状态 |
|---|---|
| 盾形笔记本支架 产品图 | 缺，该款已下架；补图可恢复上架 |
| 适配机型 / 材质 / 夹持方式 | 缺，报价表无此数据 |
| 公司成立时间 / 所在地 / 产能 | 缺 |
| 质保、认证、测试标准、客户案例 | 缺 |
| 帮助中心 FAQ | 客户确认暂不做 |

## 待客户决定（可选优化）

1. "产品商城／立即选购"措辞是否保留（无在线下单，产品页已注明）
2. 装箱数量 / 外箱尺寸 / 毛重是否继续公开
3. 67 款是否拆成 5 个类目页（当前一页展示）
4. 是否需要自定义域名

## 已知技术事项

- 清理内容缓存需同时删除 `node_modules/.astro`。
- 产品条目由 `plans/website/moto-phone-mount-20261015/build_products.py` 生成；图片由同目录 `apply_real_images.py` 生成。
- `src/components/sections/CompanyIntro.astro` 已不在任何页面使用。
- 本机推送需 `-c credential.username=` 并清除 `GIT_ASKPASS`（详见 profile/deployment-state/grit-moto-ranch-deployment.md）。
