const AXIS_WEIGHTS = {
  locus: 1,
  style: 1,
  target: 0.9,
  difficulty: 1.2,
};

const AXES = ["locus", "style", "target", "difficulty"];

const characters = [
  {
    id: "wilson",
    name: "Wilson",
    title: "The Gentleman Scientist",
    unlock: "free",
    color: "#d9b07a",
    typeCode: "ODSE",
    tags: ["#입문", "#기본기", "#제작"],
    profile: { locus: -0.1, style: -0.4, target: -0.4, difficulty: -0.8 },
    playstyle: "기본 생존/제작 균형형",
    summary: "실수 복구가 쉽고 기본기를 익히기 좋은 균형형 생존자입니다.",
    why: "계절, 음식, 전투 기본기를 차분히 익히고 싶을 때 안정적입니다.",
    caution: "특화 역할은 약해서 뚜렷한 한 방을 원하면 밋밋할 수 있습니다.",
  },
  {
    id: "willow",
    name: "Willow",
    title: "The Firestarter",
    unlock: "free",
    color: "#d8583d",
    typeCode: "ODSH",
    tags: ["#소환수", "#지속딜", "#불조심"],
    profile: { locus: -0.4, style: -0.2, target: -0.5, difficulty: 0.3 },
    playstyle: "Bernie와 불을 활용하는 공격형",
    summary: "소환수와 불로 밤과 위험 상황을 능동적으로 다루는 생존자입니다.",
    why: "어둠, 불, 소환수 보조를 이용해 위험을 직접 풀어내는 답변과 잘 맞습니다.",
    caution: "불 관리가 서툴면 기지 피해로 이어질 수 있습니다.",
  },
  {
    id: "wolfgang",
    name: "Wolfgang",
    title: "The Strongman",
    unlock: "free",
    color: "#c83f36",
    typeCode: "ODSH",
    tags: ["#근접딜", "#보스전", "#연비나쁨"],
    profile: { locus: -0.7, style: -0.8, target: -0.8, difficulty: 0.2 },
    playstyle: "직접 전투 캐리",
    summary: "보스전과 위험한 적 처리에 강한 정면 돌파형입니다.",
    why: "직접 싸우고, 위험한 상황을 앞에서 해결하는 선택과 잘 맞습니다.",
    caution: "음식과 전투 준비를 꾸준히 챙겨야 강함이 유지됩니다.",
  },
  {
    id: "wendy",
    name: "Wendy",
    title: "The Bereaved",
    unlock: "free",
    color: "#9a8ec2",
    typeCode: "OSSE",
    tags: ["#소환수", "#잡몹처리", "#1대1약함"],
    profile: { locus: -0.4, style: 0.4, target: -0.3, difficulty: -0.6 },
    playstyle: "Abigail 소환수 기반 안정형 전투",
    summary: "소환수로 초반 전투와 잡몹 처리를 안정화하는 생존자입니다.",
    why: "직접 맞기보다 소환수에게 전투를 맡기는 선택과 잘 맞습니다.",
    caution: "단일 보스 화력은 전투 특화 캐릭터보다 제한적입니다.",
  },
  {
    id: "wx78",
    name: "WX-78",
    title: "The Soulless Automaton",
    unlock: "free",
    color: "#86a6ad",
    typeCode: "ODSH",
    tags: ["#탐험", "#기동성", "#왕귀캐릭"],
    profile: { locus: -0.7, style: 0.1, target: -0.5, difficulty: 0.5 },
    playstyle: "회로 기반 탐험/커스터마이징",
    summary: "이동, 시야, 성능을 상황에 맞게 조정하는 커스터마이징형입니다.",
    why: "이동성, 반복 최적화, 전용 자원 운영을 선호하는 답변과 잘 맞습니다.",
    caution: "세팅을 이해하기 전에는 성능 체감이 늦을 수 있습니다.",
  },
  {
    id: "wickerbottom",
    name: "Wickerbottom",
    title: "The Librarian",
    unlock: "free",
    color: "#b6a36d",
    typeCode: "BSTE",
    tags: ["#운영", "#팀지원", "#파피루스부족"],
    profile: { locus: 0.5, style: 0.8, target: 0.8, difficulty: 0.3 },
    playstyle: "책 기반 서버 운영",
    summary: "농사, 자원, 전투 보조를 크게 늘리는 운영형 생존자입니다.",
    why: "기지와 팀 생산성을 계획적으로 키우는 선택과 잘 맞습니다.",
    caution: "책 재료와 불면증 관리를 신경 써야 합니다.",
  },
  {
    id: "woodie",
    name: "Woodie",
    title: "The Lumberjack",
    unlock: "free",
    color: "#a76745",
    typeCode: "ODSE",
    tags: ["#벌목", "#정찰", "#변신"],
    profile: { locus: -0.7, style: -0.6, target: -0.4, difficulty: -0.2 },
    playstyle: "채집/정찰 중심 야외 노동",
    summary: "벌목, 채집, 탐험 효율이 좋은 야외 활동형 생존자입니다.",
    why: "밖으로 나가 자원을 직접 확보하고 지도를 여는 선택과 잘 맞습니다.",
    caution: "변신 타이밍과 허기 관리를 알아야 손해를 줄일 수 있습니다.",
  },
  {
    id: "wes",
    name: "Wes",
    title: "The Silent",
    unlock: "free",
    color: "#d56a7d",
    typeCode: "ODSH",
    tags: ["#도전", "#고난도", "#이러시는이유가있을거아니에요"],
    profile: { locus: -0.2, style: -0.7, target: -0.7, difficulty: 1 },
    playstyle: "챌린지 플레이",
    summary: "일부러 어려운 플레이를 원할 때 의미가 있는 챌린지 생존자입니다.",
    why: "효율보다 제약, 자기 규칙, 고난도 상황을 선호할 때 맞습니다.",
    caution: "일반 추천 우선순위는 낮고, 서버 복구력이 크게 떨어질 수 있습니다.",
  },
  {
    id: "maxwell",
    name: "Maxwell",
    title: "The Puppet Master",
    unlock: "free",
    color: "#7c638d",
    typeCode: "OSTH",
    tags: ["#소환수", "#악몽연료", "#개복치"],
    profile: { locus: -0.3, style: 0.8, target: -0.1, difficulty: 0.5 },
    playstyle: "그림자 소환수/마법 운영",
    summary: "그림자 소환수로 채집과 특수 운영 효율을 높이는 생존자입니다.",
    why: "직접 노동보다 소환수와 특수 능력으로 판을 바꾸는 답변과 잘 맞습니다.",
    caution: "낮은 체력과 악몽 연료 의존이 있습니다.",
  },
  {
    id: "wigfrid",
    name: "Wigfrid",
    title: "The Performance Artist",
    unlock: "free",
    color: "#cf6145",
    typeCode: "ODSE",
    tags: ["#근접전", "#전투가수", "#고기반찬"],
    profile: { locus: -0.5, style: -0.6, target: -0.2, difficulty: -0.3 },
    playstyle: "전방 전투와 팀 전투 보조",
    summary: "전투 안정성과 장비 지원이 좋은 전방형 생존자입니다.",
    why: "직접 싸우되 팀 전투 안정성도 챙기는 선택과 잘 맞습니다.",
    caution: "식단 제한 때문에 음식 운영이 단조로울 수 있습니다.",
  },
  {
    id: "webber",
    name: "Webber",
    title: "The Indigestible",
    unlock: "free",
    color: "#6f7f65",
    typeCode: "OSSH",
    tags: ["#소환수", "#잡몹처리", "#동네북"],
    profile: { locus: -0.2, style: 0.8, target: -0.2, difficulty: 0.4 },
    playstyle: "거미 소환수 집단 운용",
    summary: "거미 소환수로 잡몹 처리와 몬스터 자원 수급을 굴리는 생존자입니다.",
    why: "직접 해결보다 소환수 무리를 만들어 문제를 처리하는 선택과 잘 맞습니다.",
    caution: "기지 위치와 중립 생물 관계를 신경 써야 합니다.",
  },
  {
    id: "winona",
    name: "Winona",
    title: "The Handywoman",
    unlock: "free",
    color: "#df934d",
    typeCode: "BSTH",
    tags: ["#기지방어", "#자동화", "#재료부족"],
    profile: { locus: 0.9, style: 0.9, target: 0.6, difficulty: 0.4 },
    playstyle: "장치/기지 방어 엔지니어",
    summary: "기지 방어와 자동화에 강한 엔지니어형 생존자입니다.",
    why: "기지 구조, 장치, 반복 작업 감소를 선호하는 답변과 잘 맞습니다.",
    caution: "자원 투자와 배치 이해가 필요합니다.",
  },
  {
    id: "warly",
    name: "Warly",
    title: "The Culinarian",
    unlock: "free",
    color: "#d6a75f",
    typeCode: "BSTE",
    tags: ["#요리", "#팀버프", "#까다로운입맛"],
    profile: { locus: 0.6, style: 0.5, target: 0.9, difficulty: 0.1 },
    playstyle: "요리 기반 팀 지원",
    summary: "음식 버프로 팀 성능을 크게 올리는 지원형 생존자입니다.",
    why: "요리, 회복, 팀 준비를 챙기는 선택과 잘 맞습니다.",
    caution: "레시피 지식과 식재료 준비가 필요합니다.",
  },
  {
    id: "walter",
    name: "Walter",
    title: "The Fearless",
    unlock: "free",
    color: "#71a968",
    typeCode: "ODSH",
    tags: ["#원거리", "#정찰", "#정신력부족"],
    profile: { locus: -0.8, style: -0.6, target: -0.4, difficulty: 0.2 },
    playstyle: "원거리 정찰/전투",
    summary: "탐험과 원거리 견제에 좋은 정찰형 생존자입니다.",
    why: "직접 발로 뛰고 거리를 유지하며 싸우는 선택과 잘 맞습니다.",
    caution: "피격 시 정신력 리스크가 큽니다.",
  },
  {
    id: "wortox",
    name: "Wortox",
    title: "The Soul Starved",
    unlock: "dlc",
    color: "#c35f76",
    typeCode: "OSTH",
    tags: ["#광역회복", "#순간이동", "#특수자원"],
    profile: { locus: -0.5, style: 0.5, target: 0.8, difficulty: 0.5 },
    playstyle: "영혼 기반 이동/회복",
    summary: "구조, 이동, 광역 회복이 강한 영혼 운용형 생존자입니다.",
    why: "팀 회복과 특수 이동을 선호하는 답변과 잘 맞습니다.",
    caution: "영혼 수급과 음식 효율 제약이 있습니다.",
  },
  {
    id: "wormwood",
    name: "Wormwood",
    title: "The Lonesome",
    unlock: "dlc",
    color: "#77a95f",
    typeCode: "BSTE",
    tags: ["#농사", "#식물친화", "#회복제약"],
    profile: { locus: 0.8, style: 0.8, target: 0.7, difficulty: 0.2 },
    playstyle: "농사/식물 기반 생산",
    summary: "장기 식량 생산과 기지 운영에 강한 식물형 생존자입니다.",
    why: "농사, 낚시, 식량 루프를 중요하게 보는 선택과 잘 맞습니다.",
    caution: "음식으로 회복할 수 없습니다.",
  },
  {
    id: "wurt",
    name: "Wurt",
    title: "The Half-Pint",
    unlock: "dlc",
    color: "#6aa78e",
    typeCode: "BSTH",
    tags: ["#소환수", "#운영", "#채식"],
    profile: { locus: 0.8, style: 0.9, target: 0.4, difficulty: 0.7 },
    playstyle: "머름 소환수/채식 운영",
    summary: "머름 소환수 세력을 구축해 후반 운영을 키우는 생존자입니다.",
    why: "기지, 소환수 운용, 특수 식단을 감수하는 선택과 잘 맞습니다.",
    caution: "초반 세팅과 식단 제한이 있습니다.",
  },
  {
    id: "wanda",
    name: "Wanda",
    title: "The Timekeeper",
    unlock: "dlc",
    color: "#b984be",
    typeCode: "ODSH",
    tags: ["#빠른이동", "#고화력", "#나이관리"],
    profile: { locus: -0.5, style: -0.4, target: -0.8, difficulty: 1 },
    playstyle: "시간 기반 고숙련 전투",
    summary: "고화력과 장거리 이동 고점이 높은 고숙련 생존자입니다.",
    why: "고난도 전투, 특수 회복, 리스크 감수를 선호하는 답변과 잘 맞습니다.",
    caution: "나이와 체력 관리가 어렵습니다.",
  },
  {
    id: "wonkey",
    name: "Wonkey",
    title: "The Accursed",
    unlock: "wildcard",
    color: "#a7895c",
    typeCode: "WNKY",
    tags: ["#저주", "#변신", "#변칙"],
    profile: null,
    playstyle: "저주 기반 변칙 플레이",
    summary: "저주, 변칙, 낯선 제약을 즐기는 응답에서만 뜨는 와일드카드입니다.",
    why: "특이한 콘셉트, 낮은 정신력, 제약 플레이 신호가 강합니다.",
    caution: "일반 캐릭터 선택 추천이 아니라 특수 변신 상태에 가깝습니다.",
  },
];

const characterPortraits = {
  wilson: "images/Wilson_Portrait.webp",
  willow: "images/Willow_Portrait.webp",
  wolfgang: "images/Wolfgang_Portrait.webp",
  wendy: "images/Wendy_Portrait.webp",
  wx78: "images/WX-78_Portrait.webp",
  wickerbottom: "images/Wickerbottom_Portrait.webp",
  woodie: "images/Woodie_Portrait.webp",
  wes: "images/Wes_Portrait.webp",
  maxwell: "images/Waxwell_Portrait.webp",
  wigfrid: "images/Wigfrid_Portrait.webp",
  webber: "images/Webber_Portrait.webp",
  winona: "images/Winona_Portrait.webp",
  warly: "images/Warly_Portrait.webp",
  walter: "images/Walter_Portrait.webp",
  wortox: "images/Wortox_Portrait.webp",
  wormwood: "images/Wormwood_Portrait.webp",
  wurt: "images/Wurt_Portrait.webp",
  wanda: "images/Wanda_Portrait.webp",
  wonkey: "images/Wonkey_Portrait.webp",
};

const characterRelations = {
  wilson: { synergies: ["warly", "winona"] },
  willow: { synergies: ["wendy", "wortox"] },
  wolfgang: { synergies: ["warly", "wortox"] },
  wendy: { synergies: ["webber", "wormwood"] },
  wx78: { synergies: ["winona", "wanda"] },
  wickerbottom: { synergies: ["wormwood", "warly"] },
  woodie: { synergies: ["winona", "warly"] },
  wes: { synergies: ["wortox", "warly"] },
  maxwell: { synergies: ["wickerbottom", "winona"] },
  wigfrid: { synergies: ["warly", "wendy"] },
  webber: { synergies: ["wendy", "wurt"] },
  winona: { synergies: ["wurt", "wormwood"] },
  warly: { synergies: ["wolfgang", "wigfrid"] },
  walter: { synergies: ["warly", "wortox"] },
  wortox: { synergies: ["wolfgang", "wanda"] },
  wormwood: { synergies: ["warly", "wickerbottom"] },
  wurt: { synergies: ["winona", "webber"] },
  wanda: { synergies: ["wortox", "warly"] },
  wonkey: { synergies: ["wortox", "walter"] },
};

const relationReasons = {
  "wilson:warly": "안정적인 기본기에 음식 지원이 붙어 계절 대응이 쉬워집니다.",
  "wilson:winona": "균형형 생존자에게 기지 인프라가 붙으면 운영이 단단해집니다.",
  "willow:wendy": "공격적인 압박과 소환수 기반 잡몹 처리가 잘 맞습니다.",
  "willow:wortox": "위험한 플레이를 회복과 이동 지원으로 보완합니다.",
  "wolfgang:warly": "음식 버프로 보스전 성능이 크게 올라갑니다.",
  "wolfgang:wortox": "근접 전투 중 누적 피해를 빠르게 복구합니다.",
  "wendy:webber": "소환수 운용과 몬스터 자원 루프가 잘 맞습니다.",
  "wendy:wormwood": "잡몹 처리가 농사/생산 루프를 안정적으로 지켜줍니다.",
  "wx78:winona": "탐험과 기지 인프라가 분업되기 좋습니다.",
  "wx78:wanda": "고기동 탐험과 장거리 이동이 서버 동선을 크게 줄입니다.",
  "wickerbottom:wormwood": "책과 농사 루프가 서버 식량 생산을 크게 늘립니다.",
  "wickerbottom:warly": "책 기반 생산이 요리 버프로 바로 연결됩니다.",
  "woodie:winona": "대량 채집이 기지 인프라로 바로 전환됩니다.",
  "woodie:warly": "야외 자원 수급과 요리 준비가 잘 이어집니다.",
  "wes:wortox": "챌린지 캐릭터의 위험을 회복과 이동으로 보완합니다.",
  "wes:warly": "음식 지원이 낮은 안정성을 보완합니다.",
  "maxwell:wickerbottom": "마법/책 기반 운영이 자원 생산을 크게 늘립니다.",
  "maxwell:winona": "그림자 노동이 장치 기지 운영을 빠르게 지원합니다.",
  "wigfrid:warly": "전투 캐리와 음식 버프 조합이 안정적입니다.",
  "wigfrid:wendy": "전방 전투와 잡몹 처리가 역할을 나누기 좋습니다.",
  "webber:wendy": "다수 유닛 운용과 잡몹 처리가 잘 맞습니다.",
  "webber:wurt": "소환수 집단 운영끼리 서버 전력을 키우기 좋습니다.",
  "winona:wurt": "방어 구조물과 머름 소환수 운영이 후반 기지를 강하게 만듭니다.",
  "winona:wormwood": "기지 방어와 농사 생산이 안정적으로 연결됩니다.",
  "warly:wolfgang": "전투 캐리에 음식 버프를 집중하기 좋습니다.",
  "warly:wigfrid": "전방 전투와 음식 지원이 잘 맞습니다.",
  "walter:warly": "원거리 전투를 음식 버프로 보완합니다.",
  "walter:wortox": "정찰 중 사고를 이동/회복으로 복구하기 좋습니다.",
  "wortox:wolfgang": "강한 전투 캐리의 피해를 회복으로 받아낼 수 있습니다.",
  "wortox:wanda": "고숙련 전투를 회복과 이동으로 지원합니다.",
  "wormwood:warly": "농산물이 요리 버프로 바로 이어집니다.",
  "wormwood:wickerbottom": "책과 농사 루프가 생산을 크게 늘립니다.",
  "wurt:winona": "머름 소환수 운영과 방어 구조물이 잘 맞습니다.",
  "wurt:webber": "소환수 집단 운영끼리 시너지가 있습니다.",
  "wanda:wortox": "고난도 전투를 회복과 이동으로 보완합니다.",
  "wanda:warly": "음식 버프가 고화력 전투를 보조합니다.",
  "wonkey:wortox": "변칙 상태의 위험을 회복과 이동으로 보완합니다.",
  "wonkey:walter": "낯선 상황에서 야영/정찰 지원을 받기 좋습니다.",
};

const questions = [
  {
    theme: "입문 난도",
    title: "식량과 땔감이 다 떨어진 상태이다. 이때 나는...",
    answers: [
      { label: "내 캐릭터는 사기캐라 극복 가능하다.", vector: { locus: 0, style: -1, target: -2, difficulty: -2 }, wnky: 0 },
      { label: "파티원들과 같이 열심히 재료를 모아 본다.", vector: { locus: -1, style: -1, target: 1, difficulty: -1 }, wnky: 0 },
      { label: "나는 집을 지킬게. 파티원들아, 도와줘~", vector: { locus: 2, style: 1, target: 2, difficulty: 0 }, wnky: 0 },
      { label: "못 먹어도 고! 바로 보스 잡으러 간다.", vector: { locus: -2, style: -2, target: -2, difficulty: 2 }, wnky: 1 },
    ],
  },
  {
    theme: "파티 역할",
    title: "겨울을 준비해야 한다. 이때 나는...",
    answers: [
      { label: "두근대며 보스를 잡을 준비를 한다.", vector: { locus: -2, style: -2, target: -1, difficulty: 1 }, wnky: 0 },
      { label: "팀원들을 위한 음식이랑 회복템부터 챙긴다.", vector: { locus: 1, style: 1, target: 2, difficulty: -1 }, wnky: 0 },
      { label: "기지 방어선부터 정리한다.", vector: { locus: 2, style: 2, target: 1, difficulty: 0 }, wnky: 0 },
      { label: "겨울을 지낼 동굴을 찾는다.", vector: { locus: -2, style: -1, target: 0, difficulty: 1 }, wnky: 0 },
    ],
  },
  {
    theme: "전투 방식",
    title: "보스 바로 앞까지 왔다. 이때 파티에서의 나의 역할은...",
    answers: [
      { label: "갑옷을 입고 직접 때려잡는다.", vector: { locus: -1, style: -2, target: -2, difficulty: 0 }, wnky: 0 },
      { label: "거리를 두고 카이팅해서 잡는다.", vector: { locus: -1, style: -1, target: -2, difficulty: 1 }, wnky: 0 },
      { label: "대신 싸워줄 소환수를 부른다.", vector: { locus: 0, style: 2, target: 0, difficulty: 1 }, wnky: 1 },
      { label: "맞은 사람부터 치료한다.", vector: { locus: 1, style: 1, target: 2, difficulty: 0 }, wnky: 0 },
    ],
  },
  {
    theme: "첫 기지 위치",
    title: "첫 기지를 어디에 잡을지 정해야 한다. 이때 나는...",
    answers: [
      { label: "생각하기 귀찮다. 시작한 위치에 잡는다.", vector: { locus: -1, style: -2, target: -1, difficulty: -1 }, wnky: 0 },
      { label: "웜홀과 길 동선이 좋은 곳에 정한다.", vector: { locus: -1, style: 1, target: 0, difficulty: 0 }, wnky: 0 },
      { label: "농사와 낚시가 편한 곳을 본다.", vector: { locus: 2, style: 1, target: 1, difficulty: 0 }, wnky: 0 },
      { label: "남들이 편한 곳에 맞춘다.", vector: { locus: 1, style: 1, target: 2, difficulty: -1 }, wnky: 0 },
    ],
  },
  {
    theme: "비전투 시간",
    title: "낮 시간이 비었다. 이때 나는...",
    answers: [
      { label: "나무랑 돌을 잔뜩 캐 온다.", vector: { locus: -1, style: -2, target: -1, difficulty: -1 }, wnky: 0 },
      { label: "농장에서 농사를 짓는다.", vector: { locus: 2, style: 2, target: 1, difficulty: 0 }, wnky: 0 },
      { label: "요리를 잔뜩 준비한다.", vector: { locus: 1, style: 1, target: 2, difficulty: 0 }, wnky: 0 },
      { label: "맵을 밝히러 멀리 나간다.", vector: { locus: -2, style: -1, target: -1, difficulty: 1 }, wnky: 0 },
    ],
  },
  {
    theme: "운영 취향",
    title: "보스전 직전, 마지막 준비 시간이 있다. 이때 나는...",
    answers: [
      { label: "준비는 끝났다. 심호흡을 한다.", vector: { locus: 0, style: -1, target: -1, difficulty: -2 }, wnky: 0 },
      { label: "무기와 음식을 챙긴다.", vector: { locus: 0, style: 1, target: 0, difficulty: 0 }, wnky: 0 },
      { label: "템창에 가득한 캐릭터 장비를 최적화한다.", vector: { locus: 1, style: 2, target: 0, difficulty: 2 }, wnky: 0 },
      { label: "준비할 게 없다. 실력으로 때운다.", vector: { locus: -1, style: -2, target: -2, difficulty: 2 }, wnky: 1 },
    ],
  },
  {
    theme: "식량 감각",
    title: "음식과 회복템을 준비해야 한다. 이때 나는...",
    answers: [
      { label: "미트볼이면 충분하지. 주는 대로 먹어라.", vector: { locus: 0, style: -1, target: -1, difficulty: -2 }, wnky: 0 },
      { label: "체력 회복, 정신력 회복 요리까지 만든다.", vector: { locus: 1, style: 2, target: 2, difficulty: 0 }, wnky: 0 },
      { label: "우리 팀은 다이어트가 필요하다.", vector: { locus: 1, style: 1, target: 1, difficulty: 1 }, wnky: 1 },
      { label: "음식 말고 다른 방법이 없을까?", vector: { locus: 0, style: 2, target: 0, difficulty: 2 }, wnky: 1 },
    ],
  },
  {
    theme: "이동성",
    title: "사막, 늪, 동굴, 보스 위치를 여러 번 오가야 한다. 이때 나는...",
    answers: [
      { label: "쉴 틈이 없다. 직접 발로 뛴다.", vector: { locus: -2, style: -2, target: -1, difficulty: 0 }, wnky: 0 },
      { label: "순간이동 능력을 쓴다.", vector: { locus: -2, style: 1, target: 0, difficulty: 1 }, wnky: 0 },
      { label: "길과 거점을 먼저 깐다.", vector: { locus: 2, style: 2, target: 1, difficulty: 0 }, wnky: 0 },
      { label: "느려도 안전하게 간다.", vector: { locus: 1, style: -1, target: -1, difficulty: -2 }, wnky: 0 },
    ],
  },
  {
    theme: "반복 문제 해결",
    title: "매일 나무, 음식, 방어 준비를 반복하는 게 슬슬 귀찮아졌다. 이때 나는...",
    answers: [
      { label: "그냥 내가 더 빨리 한다.", vector: { locus: -1, style: -2, target: -2, difficulty: 0 }, wnky: 0 },
      { label: "장치로 손을 덜 쓴다.", vector: { locus: 2, style: 2, target: 1, difficulty: 1 }, wnky: 0 },
      { label: "특수 능력으로 판을 바꾼다.", vector: { locus: 0, style: 2, target: 0, difficulty: 2 }, wnky: 1 },
      { label: "일할 친구들을 만든다.", vector: { locus: 1, style: 2, target: 0, difficulty: 1 }, wnky: 1 },
    ],
  },
  {
    theme: "팀 규모",
    title: "문제가 생겼을 때 나는 보통...",
    answers: [
      { label: "거의 혼자 해결한다.", vector: { locus: 0, style: -1, target: -2, difficulty: 0 }, wnky: 0 },
      { label: "친구 한두 명과 나눈다.", vector: { locus: 0, style: 0, target: 1, difficulty: 0 }, wnky: 0 },
      { label: "여러 명이 다 같이 해결한다.", vector: { locus: 1, style: 1, target: 2, difficulty: 0 }, wnky: 0 },
      { label: "공개 서버라 매번 다르다.", vector: { locus: 0, style: -1, target: 0, difficulty: -1 }, wnky: 0 },
    ],
  },
  {
    theme: "정신력과 어둠",
    title: "밤이 길어지고 정신력이 떨어져 악몽 몬스터가 보이기 시작했다. 이때 나는...",
    answers: [
      { label: "화관 쓰고 불가에 붙어 있는다.", vector: { locus: 1, style: -1, target: -1, difficulty: -2 }, wnky: 0 },
      { label: "오히려 좋아, 잡아서 악몽 연료로 만든다.", vector: { locus: -1, style: -2, target: -1, difficulty: 1 }, wnky: 1 },
      { label: "헛것이 조금 보일 뿐 아무 문제 없다.", vector: { locus: 0, style: 2, target: -1, difficulty: 2 }, wnky: 2 },
      { label: "요리를 먹으며 정신력을 안정시킨다.", vector: { locus: 1, style: 1, target: 2, difficulty: 0 }, wnky: 0 },
    ],
  },
  {
    theme: "월드 목표",
    title: "새 서버를 열고 첫 30일 안에 하나만 제대로 해낸다면, 나는...",
    answers: [
      { label: "안정적으로 생존을 해낸다.", vector: { locus: 1, style: -1, target: -1, difficulty: -2 }, wnky: 0 },
      { label: "보스와 폐허를 뚫는다.", vector: { locus: -2, style: -2, target: -1, difficulty: 2 }, wnky: 0 },
      { label: "기지와 생산 라인을 만든다.", vector: { locus: 2, style: 2, target: 1, difficulty: 1 }, wnky: 0 },
      { label: "변태 소리를 들을 수 있는 나만의 방식.", vector: { locus: 0, style: 1, target: -1, difficulty: 2 }, wnky: 2 },
    ],
  },
];

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
};

const els = {
  stepLabel: document.querySelector("#stepLabel"),
  answeredLabel: document.querySelector("#answeredLabel"),
  progressBar: document.querySelector("#progressBar"),
  questionTitle: document.querySelector("#questionTitle"),
  questionPrompt: document.querySelector("#questionPrompt"),
  answerList: document.querySelector("#answerList"),
  backButton: document.querySelector("#backButton"),
  restartButton: document.querySelector("#restartButton"),
  resultPanel: document.querySelector("#resultPanel"),
  resultName: document.querySelector("#resultName"),
  resultSummary: document.querySelector("#resultSummary"),
  resultDetails: document.querySelector("#resultDetails"),
  matchList: document.querySelector("#matchList"),
  canvas: document.querySelector("#ambientCanvas"),
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getAnsweredCount() {
  return state.answers.filter((answer) => answer !== null).length;
}

function getProfile() {
  const totals = { locus: 0, style: 0, target: 0, difficulty: 0 };
  let wnky = 0;
  let answered = 0;

  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const answer = questions[questionIndex].answers[answerIndex];
    AXES.forEach((axis) => {
      totals[axis] += answer.vector[axis];
    });
    wnky += answer.wnky || 0;
    answered += 1;
  });

  if (!answered) {
    return { locus: 0, style: 0, target: 0, difficulty: 0, wnky: 0, answered: 0 };
  }

  const divisor = answered * 2;
  return {
    locus: clamp(totals.locus / divisor, -1, 1),
    style: clamp(totals.style / divisor, -1, 1),
    target: clamp(totals.target / divisor, -1, 1),
    difficulty: clamp(totals.difficulty / divisor, -1, 1),
    wnky,
    answered,
  };
}

function getProfileCode(profile = getProfile()) {
  if (profile.wnky >= 7) return "WNKY";
  const locus = profile.locus < 0 ? "O" : "B";
  const style = profile.style < 0 ? "D" : "S";
  const target = profile.target < 0 ? "S" : "T";
  const difficulty = profile.difficulty < 0 ? "E" : "H";
  return `${locus}${style}${target}${difficulty}`;
}

function distance(profile, character) {
  return AXES.reduce((sum, axis) => {
    return sum + AXIS_WEIGHTS[axis] * Math.abs(profile[axis] - character.profile[axis]);
  }, 0);
}

function scoreCharacters() {
  const profile = getProfile();
  const maxDistance = 2 * Object.values(AXIS_WEIGHTS).reduce((sum, value) => sum + value, 0);
  return characters
    .filter((character) => character.unlock !== "wildcard")
    .map((character) => {
      const dist = distance(profile, character);
      const score = Math.round(clamp(100 - (dist / maxDistance) * 100, 0, 100));
      return { ...character, distance: dist, score };
    })
    .sort((a, b) => compareRank(a, b, profile));
}

function compareRank(a, b, profile) {
  const delta = a.distance - b.distance;
  if (Math.abs(delta) > 0.08) return delta;
  if (profile.difficulty < 0) {
    const easyDelta = a.profile.difficulty - b.profile.difficulty;
    if (Math.abs(easyDelta) > 0.08) return easyDelta;
  }
  const targetDelta = Math.abs(profile.target - a.profile.target) - Math.abs(profile.target - b.profile.target);
  if (Math.abs(targetDelta) > 0.08) return targetDelta;
  return characters.findIndex((character) => character.id === a.id) - characters.findIndex((character) => character.id === b.id);
}

function getWonkeyCandidate() {
  const profile = getProfile();
  if (profile.wnky < 5) return null;
  const wonkey = characters.find((character) => character.id === "wonkey");
  return {
    ...wonkey,
    score: profile.wnky >= 7 ? 94 : 86,
    distance: 0,
  };
}

function getCharacter(id) {
  return characters.find((character) => character.id === id);
}

function renderPortrait(character, className) {
  const src = characterPortraits[character.id];
  if (!src) return "";
  return `<img class="${className}" src="${src}" alt="${character.name} 캐릭터 이미지" loading="lazy" />`;
}

function getRelationReason(sourceId, targetId) {
  return relationReasons[`${sourceId}:${targetId}`] || relationReasons[`${targetId}:${sourceId}`] || "같은 서버에서 역할을 보완할 수 있습니다.";
}

function renderQuestion() {
  const question = questions[state.current];
  els.questionTitle.textContent = question.title;
  els.questionPrompt.textContent = "";
  els.answerList.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.setAttribute("aria-pressed", String(state.answers[state.current] === index));
    button.innerHTML = `
      <span class="answer-key">${String.fromCharCode(65 + index)}</span>
      <span><strong>${answer.label}</strong></span>
    `;
    button.addEventListener("click", () => {
      state.answers[state.current] = index;
      if (state.current < questions.length - 1) {
        state.current += 1;
      }
      render();
    });
    els.answerList.appendChild(button);
  });

  els.backButton.disabled = state.current === 0;
}

function renderStatus() {
  const answered = getAnsweredCount();
  const percent = Math.round((answered / questions.length) * 100);

  els.stepLabel.textContent = `질문 ${state.current + 1} / ${questions.length}`;
  els.answeredLabel.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;
}

function renderResult() {
  const answered = getAnsweredCount();
  const isComplete = answered === questions.length;

  if (!isComplete) {
    els.resultPanel.hidden = true;
    els.resultName.textContent = "";
    els.resultSummary.textContent = "";
    els.resultDetails.innerHTML = "";
    els.matchList.innerHTML = "";
    window.history.replaceState(null, "", window.location.pathname);
    return;
  }

  const ranking = scoreCharacters();
  const wonkey = getWonkeyCandidate();
  const top = wonkey && wonkey.score >= 94 ? wonkey : ranking[0];

  els.resultPanel.hidden = false;
  const profile = getProfile();
  const profileCode = top.id === "wonkey" ? "wnky" : getProfileCode(profile).toLowerCase();
  const url = `${window.location.pathname}?profile=${encodeURIComponent(profileCode)}&character=${encodeURIComponent(top.id)}`;
  window.history.replaceState(null, "", url);

  els.resultName.textContent = `${top.name}, ${top.title}`;
  els.resultSummary.textContent = top.summary;
  els.resultDetails.innerHTML = `
    <div class="result-visual">
      ${renderPortrait(top, "result-portrait")}
      <div class="tags result-tags">${top.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </div>
    <div class="detail-pill"><span>대표 방향</span><strong>${top.playstyle}</strong></div>
    <div class="detail-pill"><span>추천 이유</span><strong>${top.why}</strong></div>
    <div class="detail-pill"><span>주의점</span><strong>${top.caution}</strong></div>
  `;

  els.matchList.innerHTML = "";
  renderMatchSection("대안 후보", getAlternatives(top, ranking, wonkey));
  renderRelationSection("잘 어울리는 캐릭터", top.id, "synergies");
  if (wonkey && top.id !== "wonkey") {
    renderWildcard(wonkey);
  }
}

function getAlternatives(top, ranking, wonkey) {
  const alternatives = ranking.filter((character) => character.id !== top.id).slice(0, 3);
  if (wonkey && top.id !== "wonkey" && wonkey.score >= 86) {
    return [...alternatives.slice(0, 2), wonkey];
  }
  return alternatives;
}

function renderMatchSection(title, list) {
  const heading = document.createElement("div");
  heading.className = "match-heading";
  heading.textContent = title;
  els.matchList.appendChild(heading);

  list.forEach((character, index) => {
    const card = document.createElement("article");
    card.className = "match-card";
    card.innerHTML = `
      <div class="match-card-layout">
        ${renderPortrait(character, "match-portrait")}
        <div class="match-card-body">
          <strong><span>${index + 1}. ${character.name}</span><span>${character.score}%</span></strong>
          <div class="tags">${character.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <p>${character.playstyle}</p>
        </div>
      </div>
    `;
    els.matchList.appendChild(card);
  });
}

function renderRelationSection(title, sourceId, kind) {
  const relations = characterRelations[sourceId]?.[kind] || [];
  if (!relations.length) return;

  const heading = document.createElement("div");
  heading.className = "match-heading";
  heading.textContent = title;
  els.matchList.appendChild(heading);

  relations.forEach((id) => {
    const character = getCharacter(id);
    if (!character) return;
    const card = document.createElement("article");
    card.className = "match-card";
    card.innerHTML = `
      <div class="match-card-layout">
        ${renderPortrait(character, "match-portrait")}
        <div class="match-card-body">
          <strong><span>${character.name}</span></strong>
          <div class="tags">${character.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <p>${getRelationReason(sourceId, id)}</p>
        </div>
      </div>
    `;
    els.matchList.appendChild(card);
  });
}

function renderWildcard(wonkey) {
  const heading = document.createElement("div");
  heading.className = "match-heading";
  heading.textContent = "와일드카드";
  els.matchList.appendChild(heading);

  const card = document.createElement("article");
  card.className = "match-card";
  card.innerHTML = `
    <div class="match-card-layout">
      ${renderPortrait(wonkey, "match-portrait")}
      <div class="match-card-body">
        <strong><span>${wonkey.name}</span><span>${wonkey.score}%</span></strong>
        <div class="tags">${wonkey.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <p>${wonkey.summary}</p>
      </div>
    </div>
  `;
  els.matchList.appendChild(card);
}

function render() {
  renderQuestion();
  renderStatus();
  renderResult();
}

function restart() {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  window.history.replaceState(null, "", window.location.pathname);
  render();
}

els.backButton.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    render();
  }
});

els.restartButton.addEventListener("click", restart);

function setupCanvas() {
  const canvas = els.canvas;
  const context = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let points = [];

  function resize() {
    const scale = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * scale);
    canvas.height = Math.floor(height * scale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    points = Array.from({ length: Math.max(34, Math.floor(width / 26)) }, (_, index) => ({
      x: (index * 97) % width,
      y: (index * 53) % height,
      r: 0.8 + ((index * 7) % 17) / 12,
    }));
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);
    context.strokeStyle = "rgba(224, 179, 78, 0.13)";
    context.lineWidth = 1;
    points.forEach((point, index) => {
      const x = (point.x + Math.sin(time * 0.0002 + index) * 18) % width;
      const y = (point.y + Math.cos(time * 0.00018 + index) * 12) % height;
      context.beginPath();
      context.arc(x, y, point.r, 0, Math.PI * 2);
      context.fillStyle = index % 5 === 0 ? "rgba(101, 168, 163, 0.5)" : "rgba(244, 234, 215, 0.42)";
      context.fill();

      const next = points[(index + 3) % points.length];
      const nx = (next.x + Math.sin(time * 0.0002 + index + 3) * 18) % width;
      const ny = (next.y + Math.cos(time * 0.00018 + index + 3) * 12) % height;
      if (Math.hypot(x - nx, y - ny) < 190) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(nx, ny);
        context.stroke();
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

render();
setupCanvas();
