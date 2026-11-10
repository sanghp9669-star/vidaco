export interface Partner {
  name: string;
  category: string;
  description: string;
  badge: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  detailedDesc: string;
  partnerBrand: string;
  image: string;
  keyFeatures: string[];
  applications: string[];
  specs: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProjectCase {
  client: string;
  sector: string;
  scope: string;
  outcome: string;
  techStack: string;
}

export const COMPANY_INFO = {
  name: "CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ VIỄN ĐẠT",
  shortName: "VIỄN ĐẠT TELECOM",
  codeName: "VIDACO",
  foundedYear: 2001,
  experienceYears: 24,
  headquarters: "27 Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
  tradingOffice: "16/2 ter Đinh Tiên Hoàng, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
  hotlines: ["(028) 3911 8909", "(028) 3910 4153"],
  fax: "(028) 3910 0929",
  email: "info@viendat.com",
  workingHours: "Thứ 2 - Thứ 6: 08:00 - 17:30 (Trực kỹ thuật 24/7)",
  taxCode: "0302303538",
};

export const PARTNERS: Partner[] = [
  {
    name: "Avaya",
    category: "Unified Communications & Contact Center",
    description: "Giải pháp truyền thông hợp nhất và tổng đài đa kênh quy mô doanh nghiệp lớn.",
    badge: "Gold Partner",
  },
  {
    name: "Polycom (Poly)",
    category: "Video Conferencing & Collaboration",
    description: "Hệ thống hội nghị truyền hình chuẩn HD, telepresence và thiết bị phòng họp trực tuyến.",
    badge: "Certified Partner",
  },
  {
    name: "RAD Data Communications",
    category: "Power Grid SCADA & Industrial Telecom",
    description: "Giải pháp kết nối viễn thông thông minh cho trạm điện, thiết bị Recloser và lưới điện phân phối.",
    badge: "Strategic Partner",
  },
  {
    name: "Juniper Networks",
    category: "Core Routing & Enterprise Switching",
    description: "Hạ tầng mạng hiệu năng cao, định tuyến lõi và kiến trúc mạng trung tâm dữ liệu.",
    badge: "Authorized Partner",
  },
  {
    name: "HPE",
    category: "Servers, Storage & Aruba Networking",
    description: "Hệ thống máy chủ doanh nghiệp, lưu trữ SAN/NAS và mạng không dây thế hệ mới.",
    badge: "Enterprise Partner",
  },
  {
    name: "Palo Alto Networks",
    category: "Next-Gen Cyber Security",
    description: "Tường lửa thế hệ mới (NGFW), chống tấn công nâng cao và bảo mật đám mây.",
    badge: "Security Specialist",
  },
  {
    name: "Prysmian Group",
    category: "Fiber Optic & Energy Cabling",
    description: "Tập đoàn cáp viễn thông và năng lượng số 1 thế giới với các giải pháp cáp quang chuyên dụng.",
    badge: "Official Distributor",
  },
  {
    name: "F5 Networks",
    category: "Application Delivery & Security",
    description: "Tối ưu hóa tải ứng dụng, cân bằng tải ADC và bảo mật ứng dụng web.",
    badge: "Technology Partner",
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: "contact-center",
    title: "Truyền thông Hợp nhất & Contact Center",
    subtitle: "Avaya Unified Communications & Omnichannel Contact Center",
    shortDesc: "Nền tảng tổng đài thông minh đa kênh hỗ trợ thoại, email, chat, video cùng hệ thống ghi âm và phân tích tự động.",
    detailedDesc: "Viễn Đạt cung cấp và tích hợp các giải pháp Avaya Contact Center hàng đầu thế giới, cho phép các ngân hàng, cơ quan và tập đoàn xử lý hàng chục ngàn tương tác khách hàng mỗi ngày một cách ổn định, bảo mật và thông suốt.",
    partnerBrand: "Avaya",
    image: "/src/assets/images/sol_contact_center_1794281040853.jpg",
    keyFeatures: [
      "Hệ thống định tuyến thông minh theo kỹ năng tư vấn viên (Skill-based Routing)",
      "Tích hợp đa kênh hợp nhất: Voice, Web Chat, Video Call, SMS, Email, Social Media",
      "Ghi âm cuộc gọi 100% tuân thủ tiêu chuẩn tài chính và phân tích cảm xúc khách hàng",
      "Báo cáo thống kê thời gian thực (Real-time Dashboards & Historical Reporting)",
      "Khả năng mở rộng từ 50 đến hơn 10.000 agents linh hoạt",
    ],
    applications: [
      "Tổng đài chăm sóc khách hàng ngân hàng và tổ chức tài chính",
      "Trung tâm điều hành khẩn cấp và đường dây nóng dịch vụ công",
      "Bộ phận bán hàng và telesales doanh nghiệp bán lẻ & bảo hiểm",
    ],
    specs: [
      { label: "Chuẩn giao thức", value: "SIP, H.323, WebRTC" },
      { label: "Độ sẵn sàng hệ thống", value: "99.999% High Availability" },
      { label: "Mô hình triển khai", value: "On-Premise, Hybrid Cloud" },
    ],
  },
  {
    id: "video-conference",
    title: "Hội nghị Truyền hình & Họp Trực tuyến",
    subtitle: "Polycom HD Telepresence & Intelligent Room Systems",
    shortDesc: "Giải pháp hội nghị truyền hình sắc nét chuẩn 4K, công nghệ lọc ồn thông minh và kết nối đa điểm mượt mà.",
    detailedDesc: "Hệ thống phòng họp truyền hình Polycom do Viễn Đạt thiết kế và lắp đặt đáp ứng tiêu chuẩn cao nhất cho các hội nghị cấp cao, hội thảo trực tuyến liên tỉnh và các cuộc họp nội bộ an toàn bảo mật tuyệt đối.",
    partnerBrand: "Polycom (Poly)",
    image: "/src/assets/images/sol_video_conference_1794281042436.jpg",
    keyFeatures: [
      "Hình ảnh Ultra HD 4K với camera tự động nhận diện và tracking khuôn mặt người phát biểu",
      "Công nghệ Poly Acoustic Fence & NoiseBlockAI triệt tiêu hoàn toàn tiếng ồn môi trường",
      "Hỗ trợ đa điểm MCU chất lượng cao kết nối đồng thời hàng trăm điểm cầu",
      "Tương thích sâu với Microsoft Teams, Zoom Rooms, Cisco Webex và SIP/H.323",
      "Chia sẻ nội dung không dây đa nguồn và tương tác bảng trắng kỹ thuật số",
    ],
    applications: [
      "Phòng họp Hội đồng Quản trị và giao ban lãnh đạo cấp cao",
      "Trung tâm hội nghị trực tuyến cơ quan ban ngành Nhà nước",
      "Đào tạo trực tuyến từ xa và hội chẩn y tế chuyên sâu",
    ],
    specs: [
      { label: "Độ phân giải", value: "Lên đến 4K Ultra HD (3840 x 2160)" },
      { label: "Âm thanh", value: "Băng thông siêu rộng 22 kHz stereo" },
      { label: "Mã hóa bảo mật", value: "AES-128 / AES-256 mã hóa đường truyền" },
    ],
  },
  {
    id: "grid-automation",
    title: "Tự động hóa Lưới điện & SCADA Viễn thông",
    subtitle: "RAD Smart Grid Telecom & Substation Automation",
    shortDesc: "Giải pháp truyền thông công nghiệp kết nối thiết bị đóng cắt Recloser, LBS và trạm biến áp về trung tâm điều khiển SCADA.",
    detailedDesc: "Là đối tác chiến lược của RAD Data Communications tại Việt Nam, Viễn Đạt đã triển khai thành công hàng loạt dự án kết nối viễn thông trạm điện và thiết bị phân phối điện cho Tập đoàn Điện lực Việt Nam (EVN), đảm bảo an ninh mạng công nghiệp và độ trễ cực thấp.",
    partnerBrand: "RAD Data Communications",
    image: "/src/assets/images/sol_grid_automation_1794281041102.jpg",
    keyFeatures: [
      "Kết nối bảo mật các thiết bị Recloser, RMU, LBS về hệ thống SCADA/DMS",
      "Hỗ trợ đa phương thức truyền dẫn: Cáp quang, 3G/4G LTE công nghiệp, vô tuyến",
      "Tuân thủ nghiêm ngặt chuẩn IEC 61850, IEC 60870-5-104, DNP3 và Modbus",
      "Tích hợp tường lửa công nghiệp Stateful Firewall, IPSec VPN chuẩn hóa",
      "Hoạt động bền bỉ trong môi trường khắc nghiệt từ -40°C đến +75°C",
    ],
    applications: [
      "Hệ thống giám sát điều khiển xa lưới điện phân phối (Mini SCADA / DMS)",
      "Hạ tầng truyền thông trạm biến áp 110kV, 220kV không người trực",
      "Thu thập dữ liệu đo đếm từ xa (AMR/AMI) và điều khiển phụ tải",
    ],
    specs: [
      { label: "Tiêu chuẩn ngành điện", value: "IEC 61850-3, IEEE 1613" },
      { label: "Bảo mật", value: "IPSec VPN cứng, chứng thực 802.1X" },
      { label: "Nguồn cấp dự phòng", value: "Dual DC/AC redundant power" },
    ],
  },
  {
    id: "network-security",
    title: "Hạ tầng Mạng & Bảo mật An ninh Thông tin",
    subtitle: "Juniper Networks, HPE & Palo Alto Next-Gen Firewall",
    shortDesc: "Kiến trúc mạng lõi trung tâm dữ liệu, thiết bị chuyển mạch doanh nghiệp và hệ thống phòng chống tấn công mạng toàn diện.",
    detailedDesc: "Viễn Đạt tư vấn và cung cấp hệ thống hạ tầng mạng toàn diện từ Core Routing, Enterprise Switching đến bảo mật an ninh mạng chuyên sâu với Palo Alto Networks, ngăn chặn mọi mối đe dọa Zero-Day trước khi gây hại cho dữ liệu doanh nghiệp.",
    partnerBrand: "Juniper & Palo Alto Networks",
    image: "/src/assets/images/hero_telecom_network_1794281038938.jpg",
    keyFeatures: [
      "Định tuyến lõi và chuyển mạch trung tâm dữ liệu tốc độ 100G/400G",
      "Tường lửa thế hệ mới (NGFW) nhận diện ứng dụng (App-ID) và người dùng (User-ID)",
      "Hệ thống ngăn chặn xâm nhập trái phép IPS và phòng thủ mã độc nâng cao WildFire",
      "Kiến trúc mạng xác thực không dây (Aruba Wi-Fi 6E/7) bảo mật cao",
      "Quản lý tập trung toàn diện và tự động hóa vận hành mạng AIOps",
    ],
    applications: [
      "Hạ tầng mạng Data Center và mạng WAN doanh nghiệp đa chi nhánh",
      "Hệ thống ngân hàng số và cổng thanh toán tài chính",
      "Tòa nhà thông minh, trụ sở tập đoàn và khu công nghệ cao",
    ],
    specs: [
      { label: "Thông lượng kiểm soát", value: "Lên đến 120 Gbps NGFW Throughput" },
      { label: "Định tuyến", value: "BGP, OSPF, MPLS, EVPN-VXLAN" },
      { label: "Chứng nhận bảo mật", value: "Common Criteria EAL4+, FIPS 140-2" },
    ],
  },
  {
    id: "fiber-cabling",
    title: "Cáp Viễn thông & Truyền dẫn Chuyên dụng",
    subtitle: "Prysmian Group High-Performance Fiber & Optical Systems",
    shortDesc: "Cung cấp cáp sợi quang, cáp ngầm, cáp treo chuyên dụng và phụ kiện đấu nối công nghiệp đạt chuẩn quốc tế.",
    detailedDesc: "Viễn Đạt là nhà phân phối và tích hợp các dòng sản phẩm cáp quang chất lượng cao của Tập đoàn Prysmian tại Việt Nam, phục vụ các tuyến trục viễn thông quốc gia, dự án năng lượng tái tạo và hệ sinh thái viễn thông băng rộng.",
    partnerBrand: "Prysmian Group",
    image: "/src/assets/images/hero_telecom_network_1794281038938.jpg",
    keyFeatures: [
      "Cáp quang OPGW kết hợp chống sét cho đường dây truyền tải điện cao thế",
      "Cáp quang ngầm luồn cống và cáp chôn trực tiếp độ bền cơ học siêu cao",
      "Dây nhảy quang, hộp phối quang ODF và măng xông bảo vệ chuẩn IP68",
      "Sợi quang đơn mốt (Singlemode) suy hao cực thấp theo chuẩn ITU-T G.652D / G.657A",
      "Tuổi thọ thiết kế lên đến 30 năm trong điều kiện khí hậu nhiệt đới",
    ],
    applications: [
      "Đường trục truyền dẫn viễn thông liên tỉnh và xuyên quốc gia",
      "Hệ thống cáp quang truyền dẫn cho dự án điện mặt trời, điện gió",
      "Mạng cáp trục trong các khu công nghiệp và tòa nhà văn phòng cao cấp",
    ],
    specs: [
      { label: "Tiêu chuẩn sợi", value: "ITU-T G.652.D / G.657.A1" },
      { label: "Vỏ cáp", value: "HDPE chống mối mọt, chống thấm nước kép" },
      { label: "Tiêu chuẩn thử nghiệm", value: "IEC 60794 Series" },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "consulting",
    title: "Tư vấn & Thiết kế Giải pháp",
    description: "Khảo sát hiện trạng, phân tích bài toán nghiệp vụ và lập thiết kế kỹ thuật tổng thể tối ưu chi phí đầu tư cho doanh nghiệp.",
    deliverables: [
      "Khảo sát hiện trường hạ tầng viễn thông - CNTT",
      "Thiết kế sơ đồ nguyên lý và kiến trúc hệ thống chi tiết",
      "Dự toán kỹ thuật & phương án phân kỳ đầu tư hiệu quả",
    ],
    iconName: "Compass",
  },
  {
    id: "deployment",
    title: "Cung cấp & Triển khai Tích hợp",
    description: "Nhập khẩu thiết bị chính hãng, lắp đặt, cấu hình tối ưu và tích hợp hoàn chỉnh với hệ thống phần mềm, cơ sở dữ liệu hiện hữu.",
    deliverables: [
      "Nhập khẩu chính ngạch đầy đủ chứng nhận CO, CQ",
      "Đội ngũ kỹ sư đạt chứng chỉ quốc tế thi công lắp đặt",
      "Kiểm thử tải, chuyển giao và bàn giao chìa khóa trao tay",
    ],
    iconName: "Layers",
  },
  {
    id: "maintenance",
    title: "Bảo hành & Hỗ trợ Kỹ thuật 24/7",
    description: "Dịch vụ bảo trì định kỳ, ứng cứu sự cố khẩn cấp cam kết theo hợp đồng dịch vụ SLA nghiêm ngặt, giảm thiểu thời gian gián đoạn.",
    deliverables: [
      "Đường dây nóng kỹ thuật phản hồi trong vòng 15 phút",
      "Cung cấp thiết bị thay thế tạm thời trong quá trình sửa chữa",
      "Kiểm tra bảo dưỡng định kỳ hàng quý, cập nhật firmware",
    ],
    iconName: "ShieldCheck",
  },
  {
    id: "training",
    title: "Đào tạo & Chuyển giao Công nghệ",
    description: "Tổ chức các khóa đào tạo vận hành chuyên sâu cho đội ngũ quản trị hệ thống của khách hàng với tài liệu thực hành chi tiết.",
    deliverables: [
      "Tài liệu hướng dẫn vận hành và khắc phục lỗi tiếng Việt",
      "Thực hành trực tiếp trên hệ thống phòng lab và môi trường thật",
      "Hỗ trợ giải đáp nghiệp vụ chuyên sâu sau khóa học",
    ],
    iconName: "GraduationCap",
  },
];

export const CLIENT_STORIES: ProjectCase[] = [
  {
    client: "Tập đoàn Điện lực Việt Nam (EVN)",
    sector: "Năng lượng & Điện lực",
    scope: "Triển khai hệ thống viễn thông SCADA kết nối hơn 350 thiết bị Recloser và trạm phân phối điện tự động",
    outcome: "Giảm thời gian xử lý sự cố lưới điện xuống dưới 3 phút, tối ưu hóa độ tin cậy cung cấp điện SAIDI/SAIFI",
    techStack: "RAD Data Communications, Industrial Routers, 4G LTE, IEC 60870-5-104",
  },
  {
    client: "Ngân hàng Thương mại Cổ phần",
    sector: "Tài chính - Ngân hàng",
    scope: "Nâng cấp hệ thống Contact Center đa kênh 600 nhân sự và tích hợp bảo mật định tuyến cuộc gọi thông minh",
    outcome: "Tăng 38% năng suất tiếp nhận cuộc gọi, đạt tỷ lệ hài lòng khách hàng CSAT 96.5%",
    techStack: "Avaya Aura, Call Center Elite, Poly Headsets, Speech Analytics",
  },
  {
    client: "Tập đoàn Viễn thông & Đa ngành",
    sector: "Viễn thông & Doanh nghiệp",
    scope: "Thiết kế và triển khai mạng phòng họp truyền hình trực tuyến Polycom kết nối 24 chi nhánh toàn quốc",
    outcome: "Tiết kiệm hơn 40% chi phí công tác hàng năm, chất lượng họp trực tuyến ổn định không gián đoạn",
    techStack: "Polycom RealPresence, 4K Cameras, Acoustic Fence, Smart Cloud Bridge",
  },
];

export const TRUST_METRICS = [
  { number: "24+", label: "Năm thành lập & phát triển", sub: "Thành lập từ năm 2001" },
  { number: "1.200+", label: "Dự án viễn thông hoàn thành", sub: "Khắp các tỉnh thành cả nước" },
  { number: "99.98%", label: "Mức độ cam kết SLA kỹ thuật", sub: "Hỗ trợ ứng cứu khẩn cấp 24/7" },
  { number: "100%", label: "Đội ngũ kỹ sư đạt chuẩn hãng", sub: "Chứng chỉ Avaya, Poly, Juniper, RAD" },
];
