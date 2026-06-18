const SITE = {
  name: "Guangshun Wei",
  cnName: "魏广顺",
  role: "Associate Research Fellow",
  affiliation: "School of Software, Shandong University",
  email: "guangshunwei@gmail.com",
  email2: "gswei@sdu.edu.cn",
  github: "https://github.com/GSW-D",
  scholar: "https://scholar.google.com.hk/citations?hl=zh-CN&user=Sf6-vDIAAAAJ",
  photo: "source_files/gswei.jpg"
};

const NEWS = [
  {date: "03/2026", text: "One paper was accepted by IEEE Transactions on Medical Imaging (TMI). Congrats to Yeying."},
  {date: "02/2026", text: "One paper was accepted by CVPR 2026. Congrats to Shaojie."},
  {date: "01/2026", text: "One paper was accepted by Computational Visual Media Conference 2026. Congrats to Fangtian."},
  {date: "11/2025", text: "One paper was accepted by AAAI 2026 as an oral presentation. Congrats to Honghao."},
  {date: "10/2025", text: "One paper was accepted by IEEE BIBM 2025. Congrats to Xiangyu."},
  {date: "09/2025", text: "One paper was accepted by IEEE TVCG 2025. Congrats to Yuan Feng."},
  {date: "07/2025", text: "One paper was accepted by IEEE TVCG 2025. Congrats to Yuhan."},
  {date: "2025", text: "One paper was accepted by MICCAI 2025. Congrats to Xinyue."},
  {date: "2025", text: "One paper was accepted by TPAMI 2025. Congrats to Chuanxiang."},
  {date: "2025", text: "One paper was accepted by GMP 2025 and received the Best Paper Award. Congrats to Yeying."},
  {date: "2025", text: "PCDreamer was accepted by CVPR 2025."},
  {date: "2024", text: "One paper was accepted by Pattern Recognition 2024. Congrats to Yangke."}
];

const PUBLICATIONS = [
  {
    title: "DoubleGaussianAvatar: Double Gaussians for Driveable Head Avatars with Dynamic Facial Details",
    authors: "Fangtian Liang, Guangshun Wei, Pengfei Wang, Yuanfeng Zhou",
    venue: "International Conference on Computational Visual Media, 2026",
    year: 2026,
    area: "geometry",
    highlight: true,
    image: "source_files/gsface.png",
    links: [{label: "Paper", url: "#"}]
  },
  {
    title: "Progressive Orthodontic Motion Planning based on Hierarchical Diffusion Transformer",
    authors: "Yeying Fan, Yuanfeng Zhou, Weijie Liu, Guangshun Wei, Zhiming Cui, Yiran Shen, Yong-Jin Liu, Wenping Wang",
    venue: "IEEE Transactions on Medical Imaging, 2026",
    year: 2026,
    area: "medical",
    highlight: true,
    image: "source_files/tmi-yeying.png",
    links: [{label: "Paper", url: "#"}, {label: "Project", url: "#"}, {label: "Code", url: "#"}]
  },
  {
    title: "Photo-Guided Tooth Segmentation on 3D Oral Scan Model",
    authors: "Shaojie Zhuang, Guangshun Wei†, Jiangxin He, Yuanfeng Zhou†",
    venue: "CVPR, 2026",
    year: 2026,
    area: "medical",
    highlight: true,
    image: "source_files/toothsegcvpr.png",
    links: [{label: "Paper", url: "#"}, {label: "Project", url: "#"}, {label: "Code", url: "#"}]
  },
  {
    title: "D-FRAME: Direction-Field-Based Wireframe Extraction for Complex CAD Models",
    authors: "Yuan Feng, Honghao Dai, Guangshun Wei†, Long Ma, Pengfei Wang, Yuanfeng Zhou†, Ying He",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2025",
    year: 2025,
    area: "geometry",
    highlight: true,
    image: "source_files/structline.png",
    links: [{label: "Paper", url: "https://ieeexplore.ieee.org/"}]
  },
  {
    title: "PCDreamer: Point Cloud Completion Through Multi-view Diffusion Priors",
    authors: "Guangshun Wei, Yuan Feng, Long Ma, Chen Wang, Yuanfeng Zhou, Changjian Li",
    venue: "CVPR, 2025",
    year: 2025,
    area: "geometry",
    highlight: true,
    image: "source_files/PCDreamer.png",
    links: [
      {label: "Paper", url: "https://arxiv.org/abs/2411.19036"},
      {label: "Project", url: "https://gsw-d.github.io/PCDreamer/"},
      {label: "Code", url: "https://github.com/GSW-D/PCDreamerCode"}
    ]
  },
  {
    title: "Monge-Ampere Regularization for Learning Arbitrary Shapes from Point Clouds",
    authors: "Chuanxiang Yang, Yuanfeng Zhou, Guangshun Wei, Long Ma, Junhui Hou, Yuan Liu, Wenping Wang",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025",
    year: 2025,
    area: "geometry",
    highlight: true,
    image: "source_files/S2DF.png",
    links: [
      {label: "Paper", url: "https://arxiv.org/abs/2410.18477"},
      {label: "Project", url: "https://chuanxiang-yang.github.io/S2DF/"},
      {label: "Code", url: "https://github.com/chuanxiang-yang/S2DF"}
    ]
  },
  {
    title: "DentalGS: Pose-Free 3D Gaussian Splatting from Five Intraoral Images for Novel View Synthesis",
    authors: "Honghao Dai, Yuanfeng Zhou†, Guangshun Wei†, Zhihao Li, Wenping Wang",
    venue: "AAAI, 2026",
    year: 2025,
    area: "medical",
    highlight: true,
    image: "source_files/3DGStooth.png",
    links: [{label: "Paper", url: "https://ojs.aaai.org/index.php/AAAI/article/view/37343"}]
  },
  {
    title: "ConsMatch: A Semi-Supervised Segmentation Approach for Dental CBCT by Leveraging Geometric Information to Refine Pseudo-Labels",
    authors: "Xiangyu Guo, Shuyi Lu, Zhiming Cui, Xiaojie Wang, Chuanxiang Yang, Guangshun Wei†, Yuanfeng Zhou",
    venue: "IEEE BIBM, 2025",
    year: 2025,
    area: "medical",
    image: "source_files/cbctseg.png",
    links: [{label: "Paper", url: "https://ieeexplore.ieee.org/"}]
  },
  {
    title: "A Rule-based Optimization Method for Tooth Alignment",
    authors: "Yuhan Ping, Guodong Wei, Guangshun Wei, Congyi Zhang, Noha A. SAID, Jia Pan, Shiqing Xin, Yuanfeng Zhou, Changhe Tu, Min Gu, Wenping Wang",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2025",
    year: 2025,
    area: "medical",
    image: "source_files/Toothplan.png",
    links: [{label: "Paper", url: "https://ieeexplore.ieee.org/"}]
  },
  {
    title: "Contour Makes It Stronger: Cross-Domain Cephalometric Landmark Detection Based on Contour Priors",
    authors: "Xinyue Liang, Runnan Chen, Shaojie Zhuang, Guangshun Wei†, Yuanfeng Zhou†",
    venue: "MICCAI, 2025",
    year: 2025,
    area: "medical",
    image: "source_files/landmarkdetect.png",
    links: [{label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-3-032-04981-0_11"}]
  },
  {
    title: "Diff-OSGN: Diffusion-based Occlusal Surface Generation Network with Geometric Constraints",
    authors: "Chen Wang, Guangshun Wei, James Kit Hon Tsoi, Zhiming Cui, Shuyi Lu, Zhenpeng Liu, Yuanfeng Zhou†",
    venue: "Computational Visual Media Conference, 2025",
    year: 2025,
    area: "medical",
    image: "source_files/ToothDiffusion.png",
    links: [{label: "Paper", url: "https://iccvm.org/"}]
  },
  {
    title: "A Potential Field Method for Tooth Motion Planning in Orthodontic Treatment",
    authors: "Yumeng Liu, Yuexin Ma, Lei Yang, Congyi Zhang, Guangshun Wei, Runnan Chen, Min Gu, Jia Pan, Zhengbao Yang, Taku Komura, Shiqing Xin, Yuanfeng Zhou, Changhe Tu, Wenping Wang",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2025",
    year: 2025,
    area: "medical",
    image: "source_files/Toothtarget.png",
    links: [{label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/40388270/"}]
  },
  {
    title: "Decoupled and Boosted Learning for Skeleton-based Dynamic Hand Gesture Recognition",
    authors: "Yangke Li, Guangshun Wei, Christian Desrosiers, Yuanfeng Zhou",
    venue: "Pattern Recognition, 2024",
    year: 2024,
    area: "graphics",
    image: "source_files/handgesture.png",
    links: [{label: "Paper", url: "https://www.sciencedirect.com/"}]
  },
  {
    title: "Design and Optimization of Self-Supporting Surfaces with Arch Beams",
    authors: "Guangshun Wei*, Long Ma*†, Yuanfeng Zhou, Chen Wang, Jianmin Zheng, Ying He",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2024",
    year: 2024,
    area: "geometry",
    highlight: true,
    image: "source_files/tvcg2024.png",
    links: [{label: "Paper", url: "#"}, {label: "Project", url: "#"}]
  },
  {
    title: "iPUNet: Iterative Cross Field Guided Point Cloud Upsampling",
    authors: "Guangshun Wei, Hao Pan, Shaojie Zhuang, Yuanfeng Zhou†, Changjian Li",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2023",
    year: 2023,
    area: "geometry",
    highlight: true,
    image: "source_files/complex4_iter1_5_10.png",
    links: [
      {label: "Paper", url: "https://arxiv.org/abs/2310.09092"},
      {label: "Project", url: "https://enigma-li.github.io/projects/iPUNet/iPUNet.html"},
      {label: "Code", url: "https://github.com/GSW-D/iPUNet"}
    ]
  },
  {
    title: "Robust Hybrid Learning for Automatic Teeth Segmentation and Labeling on 3D Dental Models",
    authors: "Shaojie Zhuang*, Guangshun Wei*, Zhiming Cui, Yuanfeng Zhou†",
    venue: "IEEE Transactions on Multimedia, 2023",
    year: 2023,
    area: "medical",
    highlight: true,
    image: "source_files/tmm2023.png",
    links: [{label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10169899"}]
  },
  {
    title: "Tooth Alignment Network Based on Landmark Constraints and Hierarchical Graph Structure",
    authors: "Chen Wang, Guangshun Wei, Guodong Wei, Wenping Wang, Yuanfeng Zhou†",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2022",
    year: 2022,
    area: "medical",
    image: "source_files/tvcg2022.png",
    links: [{label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/9933028"}]
  },
  {
    title: "Dense Representative Tooth Landmark/Axis Detection Network on 3D Model",
    authors: "Guangshun Wei, Zhiming Cui, Jie Zhu, Lei Yang, Yuanfeng Zhou†, Pradeep Singh, Min Gu, Wenping Wang",
    venue: "Computer Aided Geometric Design, 2022",
    year: 2022,
    area: "medical",
    image: "source_files/cagd2022.png",
    links: [{label: "Paper", url: "https://arxiv.org/"}]
  },
  {
    title: "Multi-task Joint Learning of 3D Keypoint Saliency and Correspondence Estimation",
    authors: "Guangshun Wei, Long Ma, Chen Wang, Christian Desrosiers, Yuanfeng Zhou†",
    venue: "Computer-Aided Design, 2021",
    year: 2021,
    area: "geometry",
    image: "source_files/cad2021.png",
    links: [{label: "Paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S0010448521001160"}]
  },
  {
    title: "Field-aligned Quadrangulation for Image Vectorization",
    authors: "Guangshun Wei, Yuanfeng Zhou†, Xifeng Gao, Qian Ma, Shiqing Xin, Ying He",
    venue: "Computer Graphics Forum, 2019",
    year: 2019,
    area: "graphics",
    image: "source_files/CGF2019.png",
    links: [{label: "Paper", url: "https://onlinelibrary.wiley.com/"}]
  }
];

const RESEARCH_DIRECTIONS = [
  {
    title: "3D Geometric Processing and Reconstruction",
    subtitle: "Point clouds · implicit surfaces · cross fields · geometric optimization",
    image: "source_files/PCDreamer.png",
    summary: "Developing geometry-aware learning and optimization methods for incomplete, noisy, and unstructured 3D data, including point cloud completion, upsampling, keypoint/correspondence estimation, wireframe extraction, and neural implicit reconstruction.",
    keywords: ["Point Cloud Completion", "Upsampling", "Implicit Surface", "Wireframe Extraction", "Self-supporting Geometry"]
  },
  {
    title: "Intelligent Graphics and Image Processing",
    subtitle: "Visual structure · image vectorization · recognition · generation",
    image: "source_files/CGF2019.png",
    summary: "Studying structure-preserving representation and learning for visual data, with attention to field-aligned image vectorization, skeleton-based recognition, contour/centerline priors, and image-conditioned 3D generation.",
    keywords: ["Image Vectorization", "Dynamic Gesture Recognition", "Contour Prior", "Image-conditioned Generation", "Structure Learning"]
  },
  {
    title: "Multimodal Dental and Medical Data Processing",
    subtitle: "Oral scan · CBCT · face photo · orthodontic planning",
    image: "source_files/toothsegcvpr.png",
    summary: "Building AI methods for digital orthodontics and dental intelligence, including 3D dental model segmentation, tooth landmark/axis detection, CBCT analysis, occlusal surface generation, tooth alignment, and progressive orthodontic motion planning.",
    keywords: ["Digital Orthodontics", "3D Teeth Segmentation", "CBCT", "Motion Planning", "Medical Multimodal Learning"]
  }
];

const PROJECTS = [
  {
    title: "PCDreamer",
    tag: "CVPR 2025",
    image: "source_files/PCDreamer.png",
    description: "Point cloud completion through multi-view diffusion priors. The project studies how generated multi-view cues can improve completion of severely incomplete 3D shapes.",
    links: [
      {label: "Project Page", url: "https://gsw-d.github.io/PCDreamer/"},
      {label: "Code", url: "https://github.com/GSW-D/PCDreamerCode"}
    ]
  },
  {
    title: "iPUNet",
    tag: "TVCG 2023",
    image: "source_files/complex4_iter1_5_10.png",
    description: "Iterative cross-field guided point cloud upsampling for preserving local structure and geometric fidelity in sparse 3D point sets.",
    links: [
      {label: "Project Page", url: "https://enigma-li.github.io/projects/iPUNet/iPUNet.html"},
      {label: "Code", url: "https://github.com/GSW-D/iPUNet"}
    ]
  },
  {
    title: "Digital Orthodontics and Dental Intelligence",
    tag: "Medical AI",
    image: "source_files/tooth_monitor.png",
    description: "A long-term research line on oral scan analysis, CBCT/dental image processing, tooth alignment, treatment planning, and multimodal dental data fusion.",
    links: [{label: "Selected Publications", url: "publications.html?filter=medical"}]
  },
  {
    title: "Geometric Design and Self-supporting Structures",
    tag: "TVCG 2024",
    image: "source_files/tvcg2024.png",
    description: "Geometry processing and optimization for fabrication-aware structures, including self-supporting surfaces and arch-beam based design.",
    links: [{label: "Selected Publications", url: "publications.html?filter=geometry"}]
  }
];
