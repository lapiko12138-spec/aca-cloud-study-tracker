// ACA 云计算认证 · 学习进度数据
// ⚠️ 本文件由 AI 导师维护更新；学员只需查看，无需编辑。
window.STUDY_DATA = {
  meta: {
    student: "Valerie",
    examName: "阿里云 ACA 云计算工程师认证",
    examNameEn: "Alibaba Cloud Certified Associate – Cloud Computing",
    startDate: "2026-06-23",
    examDate: "2026-07-17",          // 目标考试日（窗口 7/15–7/20 中段）
    examWindow: "2026-07-15 ~ 2026-07-20",
    dailyHours: "1–2 小时/天",
    lastUpdated: "2026-06-24",
    passLine: "60 / 100"
  },

  placement: {
    date: "2026-06-23",
    score: 6,
    total: 10,
    summary: "概念题全对，4 道错题集中在「产品缩写↔功能」映射（ECS/OSS/RDS/RAM）。"
  },

  phases: [
    { id: 1, name: "阶段一 · 计算地基",   dates: "6/23 – 6/29", topics: "云概念 · 地域可用区 · ECS · VPC 入门", status: "active" },
    { id: 2, name: "阶段二 · 存储与数据", dates: "6/30 – 7/6",  topics: "OSS · NAS · 云盘 · RDS · SLB · EIP · CDN", status: "locked" },
    { id: 3, name: "阶段三 · 安全运维+AI", dates: "7/7 – 7/13",  topics: "RAM · 云安全 · 云监控 · 弹性伸缩 · PAI/MaxCompute", status: "locked" },
    { id: 4, name: "阶段四 · 冲刺模考",   dates: "7/14 – 考试", topics: "全真模考 · 错题清零 · 高频速记", status: "locked" }
  ],

  knowledge: [
    { board: "云计算基础",        mastery: 80, note: "服务模型/部署模型/地域可用区 已掌握 ✅" },
    { board: "弹性计算 ECS",      mastery: 45, note: "Day1 五段式精讲中" },
    { board: "网络 VPC/SLB/CDN",  mastery: 25, note: "VPC、SLB 有概念，待系统学" },
    { board: "存储 OSS/NAS/云盘",  mastery: 10, note: "OSS 用途是错题，重点补" },
    { board: "数据库 RDS",        mastery: 15, note: "有 SQL 基础，建立对应即可" },
    { board: "安全 RAM/云盾",     mastery: 8,  note: "RAM 是错题，待学" },
    { board: "运维监控",          mastery: 0,  note: "未开始" },
    { board: "架构思维",          mastery: 5,  note: "未开始" }
  ],

  days: [
    {
      day: 1, date: "2026-06-23", title: "云计算概念 + ECS 入门", status: "active",
      goals: ["IaaS/PaaS/SaaS", "地域与可用区", "ECS 五段式精讲", "产品速记表"]
    }
  ],

  quizzes: [
    { date: "2026-06-23", name: "入学摸底测试", score: 6, total: 10 }
  ],

  // 核心产品速记卡（考试 + 销售面试硬通货）
  products: [
    { abbr: "ECS", full: "Elastic Compute Service",     desc: "云服务器，跑你的程序/网站", analogy: "租来的电脑" },
    { abbr: "OSS", full: "Object Storage Service",      desc: "对象存储，存海量图片/视频/备份", analogy: "无限大的网盘" },
    { abbr: "RDS", full: "Relational Database Service", desc: "托管关系型数据库(MySQL等)", analogy: "别人运维的数据库" },
    { abbr: "SLB", full: "Server Load Balancer",        desc: "负载均衡，把流量分给多台 ECS", analogy: "餐厅领位员" },
    { abbr: "VPC", full: "Virtual Private Cloud",       desc: "专有网络，私有网络空间", analogy: "你家的院墙/内网" },
    { abbr: "RAM", full: "Resource Access Management",  desc: "访问控制，管子账号权限", analogy: "公司门禁卡" },
    { abbr: "CDN", full: "Content Delivery Network",    desc: "内容分发，就近加速访问", analogy: "全国连锁便利店" },
    { abbr: "NAS", full: "Network Attached Storage",    desc: "文件存储，多机共享文件", analogy: "共享文件夹" }
  ],

  errors: [
    { date: "2026-06-23", topic: "ECS 定位", wrong: "以为 ECS 是对象存储", correct: "ECS = 弹性计算/IaaS，是云服务器（跑程序）", src: "入学测试 Q4" },
    { date: "2026-06-23", topic: "OSS 用途", wrong: "以为 OSS 用于数据库文件随机读写", correct: "OSS = 对象存储，存图片/视频/备份等海量非结构化数据；随机读写是云盘/数据库的活", src: "入学测试 Q5" },
    { date: "2026-06-23", topic: "RDS 定位", wrong: "以为 RDS 是负载均衡器", correct: "RDS = 托管的关系型数据库（MySQL/SQL Server/PostgreSQL）", src: "入学测试 Q8" },
    { date: "2026-06-23", topic: "RAM 用途", wrong: "未作答", correct: "RAM = 访问控制，管理子账号身份与权限（谁能访问哪些资源）", src: "入学测试 Q9" }
  ]
};
