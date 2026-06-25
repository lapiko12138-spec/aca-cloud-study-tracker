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
    lastUpdated: "2026-06-26",
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
    { board: "云计算基础",        mastery: 88, note: "服务/部署模型、地域可用区 全对 ✅" },
    { board: "弹性计算 ECS",      mastery: 55, note: "ECS/神龙/弹性伸缩 概念在；Day2 深入实例/镜像/快照" },
    { board: "网络 VPC/SLB/CDN",  mastery: 40, note: "SLB 对；VPC 有概念" },
    { board: "存储 OSS/NAS/云盘",  mastery: 35, note: "OSS 已掌握；块存储/NAS 待巩固" },
    { board: "数据库 RDS",        mastery: 20, note: "⚠️ RDS↔SLB 反复混淆，重点盯" },
    { board: "安全 RAM/云盾",     mastery: 12, note: "⚠️ RAM 反复未答，重点盯" },
    { board: "运维监控",          mastery: 0,  note: "未开始" },
    { board: "架构思维",          mastery: 18, note: "多可用区高可用 概念建立中" }
  ],

  days: [
    {
      day: 1, date: "2026-06-23", title: "云计算概念 + 产品全家福 + 地域可用区", status: "done",
      goals: ["IaaS/PaaS/SaaS", "部署模式", "地域可用区", "产品全家福", "ECS/神龙", "存储三兄弟"]
    },
    {
      day: 2, date: "2026-06-27", title: "ECS 深入：实例/镜像/快照/安全组 + 云盘 + 弹性伸缩", status: "active",
      goals: ["实例规格族", "镜像/快照", "安全组", "云盘类型", "弹性伸缩"]
    }
  ],

  quizzes: [
    { date: "2026-06-23", name: "入学摸底测试", score: 6, total: 10 },
    { date: "2026-06-26", name: "Day1 测验", score: 6, total: 10 }
  ],

  // 核心产品速记卡（考试 + 销售面试硬通货）
  products: [
    { abbr: "ECS", full: "Elastic Compute Service",     desc: "云服务器，跑你的程序/网站", analogy: "租来的电脑" },
    { abbr: "OSS", full: "Object Storage Service",      desc: "对象存储，存海量图片/视频/备份", analogy: "无限大的网盘" },
    { abbr: "块存储", full: "Block Storage / 云盘",       desc: "挂给一台 ECS 当硬盘，随机读写", analogy: "电脑硬盘" },
    { abbr: "NAS", full: "Network Attached Storage",    desc: "多台 ECS 共享文件(NFS/CIFS)", analogy: "共享文件夹" },
    { abbr: "RDS", full: "Relational Database Service", desc: "托管关系型数据库(MySQL等)，D=Database", analogy: "别人运维的 MySQL" },
    { abbr: "SLB", full: "Server Load Balancer",        desc: "负载均衡，把流量分给多台 ECS", analogy: "餐厅领位员" },
    { abbr: "VPC", full: "Virtual Private Cloud",       desc: "专有网络，私有网络空间", analogy: "你家的院墙/内网" },
    { abbr: "RAM", full: "Resource Access Management",  desc: "访问控制，管子账号权限", analogy: "公司门禁卡" }
  ],

  errors: [
    { date: "6/23→6/26", topic: "⚠️ RDS 定位（反复错2次）", wrong: "以为 RDS 是负载均衡/网络（那是 SLB）", correct: "RDS=托管关系型数据库(MySQL/SQLServer等)，D=Database，属数据库类。看到 RDS 就想 MySQL", src: "入学Q8 + Day1测验Q7" },
    { date: "6/23→6/26", topic: "⚠️ RAM 用途（反复2次未答）", wrong: "两次均未作答", correct: "RAM=访问控制，建子账号+分权限，控制谁能访问哪些资源（像门禁卡）", src: "入学Q9 + Day1测验Q10" },
    { date: "2026-06-26", topic: "块存储 vs OSS", wrong: "不清楚「给ECS当硬盘/随机读写」用什么", correct: "块存储(云盘)=挂ECS当系统盘/数据盘、随机读写；OSS=海量文件、不当硬盘", src: "Day1测验Q5" },
    { date: "2026-06-26", topic: "NAS 文件存储", wrong: "不清楚「多台共享文件」用什么", correct: "NAS=共享文件夹，支持 NFS/CIFS，多台 ECS 共享同一份文件", src: "Day1测验Q6" },
    { date: "2026-06-26", topic: "场景概念待加强", wrong: "备案/弹性伸缩/多可用区 没答出来", correct: "国内业务要ICP备案；波动流量用弹性伸缩+按量付费；机房故障用多可用区容灾", src: "Day1场景题" }
  ]
};
