const SITE = {
  name: "Guangshun Wei",
  cnName: "魏广顺",
  role: "Associate Research Fellow",
  affiliation: "School of Software, Shandong University",
  email: "guangshunwei@gmail.com",
  email2: "gswei@sdu.edu.cn",
  github: "https://github.com/GSW-D",
  scholar: "https://scholar.google.com.hk/citations?hl=zh-CN&user=Sf6-vDIAAAAJ",
  photo: "source_files/gswei1.jpg"
};

const NEWS = [
  {date: "06/2026", text: "Three papers were accepted by MICCAI 2026. Congrats to Shaojie, Zhang Kang, and Zhao Xin."},
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
    title: "Geometric Modeling and 3D Reconstruction",
    subtitle: "Shape representation · implicit fields · reconstruction · completion",
    image: "source_files/PCDreamer.png",
    summary: "This area studies robust 3D shape reconstruction from incomplete, sparse, or noisy observations. Representative topics include multi-view diffusion priors for point cloud completion, implicit surface learning, geometry-aware reconstruction, and large-model-assisted 3D shape generation.",
    keywords: ["3D Reconstruction", "Point Cloud Completion", "Implicit Surface", "Diffusion Prior", "Shape Generation"],
    papers: ["PCDreamer", "Monge-Ampere Regularization", "Multi-task 3D Keypoint Saliency"]
  },
  {
    title: "Point Cloud Processing and Structure Enhancement",
    subtitle: "Upsampling · keypoints · correspondence · wireframe structure",
    image: "source_files/complex4_iter1_5_10.png",
    summary: "This line focuses on improving the quality and structural fidelity of 3D point sets. It covers point cloud upsampling, keypoint and correspondence estimation, cross-field guided representation, and direction-field based wireframe extraction for complex CAD models.",
    keywords: ["Point Cloud Upsampling", "Cross Field", "3D Keypoints", "Correspondence", "Wireframe Extraction"],
    papers: ["iPUNet", "D-FRAME", "CAD Keypoint and Correspondence"]
  },
  {
    title: "Digital Orthodontics and Dental Geometric Intelligence",
    subtitle: "Tooth alignment · landmarks · treatment planning · dental geometry",
    image: "source_files/Toothplan.png",
    summary: "This area develops geometry-driven AI methods for digital orthodontics. Research topics include tooth segmentation and labeling, dental landmark and axis detection, automatic tooth alignment, orthodontic motion planning, attachment placement, and treatment monitoring.",
    keywords: ["Digital Orthodontics", "Tooth Alignment", "Dental Landmarks", "Motion Planning", "Treatment Monitoring"],
    papers: ["Tooth Alignment Network", "Potential Field Tooth Motion Planning", "Progressive Orthodontic Motion Planning"]
  },
  {
    title: "Multimodal Medical Image and Oral Data Processing",
    subtitle: "CBCT · oral scan · intraoral image · cephalometric image",
    image: "source_files/toothsegcvpr.png",
    summary: "This direction studies multimodal perception for medical and dental data, especially the fusion of oral scans, CBCT, intraoral images, and facial or cephalometric images. The goal is to build reliable and explainable models for segmentation, landmark detection, surface generation, and clinical decision support.",
    keywords: ["CBCT", "Oral Scan", "Medical Segmentation", "Cephalometric Landmark", "Multimodal Fusion"],
    papers: ["Photo-Guided Tooth Segmentation", "ConsMatch", "Contour Makes It Stronger", "DentalGS"]
  },
  {
    title: "Intelligent Graphics, Vision and Generative Modeling",
    subtitle: "Image structure · vectorization · avatars · visual recognition",
    image: "source_files/gsface.png",
    summary: "This field investigates structure-aware visual computing, including image vectorization, skeleton-based gesture recognition, head avatar generation, and geometry-conditioned visual synthesis. The emphasis is on preserving visual structure while improving realism and controllability.",
    keywords: ["Image Vectorization", "Visual Recognition", "Head Avatar", "Gaussian Representation", "Structure-aware Generation"],
    papers: ["Field-aligned Quadrangulation", "Decoupled and Boosted Learning", "DoubleGaussianAvatar"]
  },
  {
    title: "Fabrication-aware Geometric Design and Optimization",
    subtitle: "Self-supporting geometry · arch beams · design constraints",
    image: "source_files/tvcg2024.png",
    summary: "This area connects geometric modeling with physical and fabrication constraints. It focuses on optimization methods for self-supporting surfaces, arch-beam structures, and design-aware geometric modeling that can support downstream manufacturing and engineering applications.",
    keywords: ["Geometric Optimization", "Self-supporting Surface", "Arch Beam", "Fabrication", "CAD Design"],
    papers: ["Design and Optimization of Self-Supporting Surfaces with Arch Beams"]
  }
];

const PROJECTS = [
  {
    title: "PCDreamer",
    tag: "CVPR 2025 · 3D Reconstruction",
    image: "source_files/PCDreamer.png",
    description: "Point cloud completion through multi-view diffusion priors. The system uses generative multi-view cues to improve completion quality for severely incomplete 3D shapes.",
    links: [
      {label: "Project Page", url: "https://gsw-d.github.io/PCDreamer/"},
      {label: "Code", url: "https://github.com/GSW-D/PCDreamerCode"},
      {label: "Papers", url: "publications.html?filter=geometry"}
    ]
  },
  {
    title: "iPUNet",
    tag: "TVCG 2023 · Point Cloud Upsampling",
    image: "source_files/complex4_iter1_5_10.png",
    description: "Iterative cross-field guided point cloud upsampling for preserving local structure, edge features, and geometric fidelity in sparse 3D point sets.",
    links: [
      {label: "Project Page", url: "https://enigma-li.github.io/projects/iPUNet/iPUNet.html"},
      {label: "Code", url: "https://github.com/GSW-D/iPUNet"}
    ]
  },
  {
    title: "Digital Orthodontics and Dental Intelligence",
    tag: "Medical AI · Dental Geometry",
    image: "source_files/tooth_monitor.png",
    description: "A long-term research line on oral scan analysis, CBCT/dental image processing, tooth alignment, treatment planning, tooth motion monitoring, and multimodal dental data fusion.",
    links: [
      {label: "Selected Publications", url: "publications.html?filter=medical"},
      {label: "Research Area", url: "research.html"}
    ]
  },
  {
    title: "Dental 3D Gaussian and Novel View Synthesis",
    tag: "AAAI 2026 · DentalGS",
    image: "source_files/3DGStooth.png",
    description: "Pose-free 3D Gaussian splatting from a small number of intraoral images for dental novel view synthesis and digital oral visualization.",
    links: [
      {label: "Selected Publications", url: "publications.html?filter=medical"}
    ]
  },
  {
    title: "Geometric Design and Self-supporting Structures",
    tag: "TVCG 2024 · Geometric Optimization",
    image: "source_files/tvcg2024.png",
    description: "Geometry processing and optimization for fabrication-aware structures, including self-supporting surfaces and arch-beam based geometric design.",
    links: [
      {label: "Selected Publications", url: "publications.html?filter=geometry"}
    ]
  },
  {
    title: "Structure-aware Graphics and Visual Computing",
    tag: "Graphics · Vision · Generation",
    image: "source_files/CGF2019.png",
    description: "Research on visual structure representation, image vectorization, skeleton-based gesture recognition, and dynamic facial detail modeling.",
    links: [
      {label: "Selected Publications", url: "publications.html?filter=graphics"}
    ]
  }
];

const FUNDED_PROJECTS = [
  {
    title: "Event-stream Data Fusion for 3D Object Reconstruction in Complex Scenes",
    source: "National Natural Science Foundation of China Youth Program",
    period: "2026.01–2028.12",
    role: "Principal Investigator",
    description: "This project investigates 3D object reconstruction under challenging sensing conditions by integrating event-stream data with visual and geometric representations."
  },
  {
    title: "3D Object Completion and Reconstruction with Multimodal Foundation-model Priors",
    source: "Shandong Provincial Natural Science Foundation Youth Program",
    period: "2026.01–2028.12",
    role: "Principal Investigator",
    description: "This project studies how multimodal large-model priors can support 3D object completion, reconstruction, and geometry-aware representation learning."
  },
  {
    title: "Ministry of Education Talent Introduction Program",
    source: "Ministry of Education Talent Program",
    period: "2026.01–2028.12",
    role: "Principal Investigator",
    description: "This project supports research on intelligent graphics, geometric modeling and optimization, and multimodal data processing at Shandong University."
  }
];
