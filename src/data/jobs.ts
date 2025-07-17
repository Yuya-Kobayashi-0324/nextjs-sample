export type Job = {
  id: string
  title: string
  company: string
  location: string
  salary: string
  description: string
  category: string
  features: string[]
  image?: string
}

export const jobs: Job[] = [
  {
    id: '1',
    title: '製造スタッフ',
    company: '東芝',
    location: '東京',
    salary: '月収30万円以上',
    description: '未経験OK！寮・社宅費無料。',
    category: '製造業',
    features: ['未経験OK', '寮・社宅費無料', '女性活躍中']
  },
  {
    id: '2',
    title: '自動車組立',
    company: '日産自動車九州',
    location: '福岡',
    salary: '月収28万円以上',
    description: '入社祝い金あり。女性活躍中。',
    category: '自動車業界',
    features: ['入社祝い金あり', '女性活躍中', '未経験OK']
  },
  {
    id: '3',
    title: '検査スタッフ',
    company: 'スバル',
    location: '群馬',
    salary: '月収27万円以上',
    description: '未経験・ブランクOK。日払い制度利用OK。',
    category: '製造業',
    features: ['未経験・ブランクOK', '日払い制度利用OK', '寮付き']
  },
  {
    id: '4',
    title: '品質管理',
    company: '豊田自動織機',
    location: '愛知',
    salary: '月収29万円以上',
    description: '経験者優遇。福利厚生充実。',
    category: '製造業',
    features: ['経験者優遇', '福利厚生充実', '交通費支給']
  },
  {
    id: '5',
    title: '物流スタッフ',
    company: '日産車体九州',
    location: '福岡',
    salary: '月収26万円以上',
    description: '体力に自信のある方歓迎。',
    category: '物流業界',
    features: ['体力仕事', '未経験OK', '寮付き']
  },
  {
    id: '6',
    title: '機械オペレーター',
    company: '東芝',
    location: '神奈川',
    salary: '月収31万円以上',
    description: '機械操作経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '7',
    title: '食品製造スタッフ',
    company: '明治',
    location: '埼玉',
    salary: '月収25万円以上',
    description: '食品製造の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '8',
    title: '電子機器組立',
    company: 'ソニー',
    location: '東京',
    salary: '月収29万円以上',
    description: '精密作業が得意な方歓迎。',
    category: '電子機器業界',
    features: ['精密作業', '未経験OK', '高収入']
  },
  {
    id: '9',
    title: '倉庫管理',
    company: 'ヤマト運輸',
    location: '大阪',
    salary: '月収24万円以上',
    description: '物流管理の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '10',
    title: '自動車部品製造',
    company: 'デンソー',
    location: '愛知',
    salary: '月収30万円以上',
    description: '自動車部品製造の経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '11',
    title: '半導体製造',
    company: 'TSMC',
    location: '熊本',
    salary: '月収35万円以上',
    description: '半導体製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '12',
    title: '食品包装',
    company: 'カルビー',
    location: '茨城',
    salary: '月収26万円以上',
    description: '食品包装の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '13',
    title: '金属加工',
    company: 'JFEスチール',
    location: '千葉',
    salary: '月収32万円以上',
    description: '金属加工の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '14',
    title: '配送ドライバー',
    company: '佐川急便',
    location: '神奈川',
    salary: '月収28万円以上',
    description: '配送ドライバーの経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '15',
    title: '自動車塗装',
    company: 'マツダ',
    location: '広島',
    salary: '月収29万円以上',
    description: '自動車塗装の経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '16',
    title: '液晶パネル製造',
    company: 'シャープ',
    location: '三重',
    salary: '月収31万円以上',
    description: '液晶パネル製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '17',
    title: '菓子製造',
    company: '森永製菓',
    location: '神奈川',
    salary: '月収25万円以上',
    description: '菓子製造の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '18',
    title: 'プラスチック成型',
    company: '三菱化学',
    location: '愛知',
    salary: '月収30万円以上',
    description: 'プラスチック成型の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '19',
    title: '冷蔵倉庫管理',
    company: '日本通運',
    location: '東京',
    salary: '月収27万円以上',
    description: '冷蔵倉庫管理の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '20',
    title: '自動車エンジン組立',
    company: 'ホンダ',
    location: '静岡',
    salary: '月収33万円以上',
    description: '自動車エンジン組立の経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '21',
    title: 'スマートフォン組立',
    company: '富士通',
    location: '山梨',
    salary: '月収29万円以上',
    description: 'スマートフォン組立の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '22',
    title: '調味料製造',
    company: 'キッコーマン',
    location: '千葉',
    salary: '月収26万円以上',
    description: '調味料製造の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '23',
    title: '鉄鋼製造',
    company: '新日鉄住金',
    location: '福岡',
    salary: '月収34万円以上',
    description: '鉄鋼製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '24',
    title: '航空貨物取扱',
    company: '全日空',
    location: '東京',
    salary: '月収28万円以上',
    description: '航空貨物取扱の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '25',
    title: '自動車部品検査',
    company: 'アイシン精機',
    location: '愛知',
    salary: '月収30万円以上',
    description: '自動車部品検査の経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '26',
    title: '半導体検査',
    company: 'ルネサスエレクトロニクス',
    location: '茨城',
    salary: '月収32万円以上',
    description: '半導体検査の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '27',
    title: '冷凍食品製造',
    company: 'ニチレイ',
    location: '群馬',
    salary: '月収25万円以上',
    description: '冷凍食品製造の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '28',
    title: 'アルミ加工',
    company: 'UACJ',
    location: '富山',
    salary: '月収31万円以上',
    description: 'アルミ加工の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '29',
    title: '海上輸送',
    company: '商船三井',
    location: '神戸',
    salary: '月収29万円以上',
    description: '海上輸送の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '30',
    title: '自動車内装',
    company: 'トヨタ紡織',
    location: '愛知',
    salary: '月収28万円以上',
    description: '自動車内装の経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '31',
    title: 'LED製造',
    company: '日亜化学',
    location: '徳島',
    salary: '月収30万円以上',
    description: 'LED製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '32',
    title: '乳製品製造',
    company: '雪印メグミルク',
    location: '北海道',
    salary: '月収26万円以上',
    description: '乳製品製造の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '33',
    title: '銅加工',
    company: '三菱マテリアル',
    location: '栃木',
    salary: '月収32万円以上',
    description: '銅加工の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '34',
    title: '鉄道貨物',
    company: 'JR貨物',
    location: '東京',
    salary: '月収27万円以上',
    description: '鉄道貨物の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '35',
    title: '自動車電装品',
    company: 'デンソー',
    location: '愛知',
    salary: '月収31万円以上',
    description: '自動車電装品の経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '36',
    title: '太陽電池製造',
    company: 'パナソニック',
    location: '大阪',
    salary: '月収33万円以上',
    description: '太陽電池製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '37',
    title: '清涼飲料製造',
    company: 'コカ・コーラ',
    location: '神奈川',
    salary: '月収25万円以上',
    description: '清涼飲料製造の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '38',
    title: 'ガラス製造',
    company: 'AGC',
    location: '兵庫',
    salary: '月収30万円以上',
    description: 'ガラス製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '39',
    title: '国際物流',
    company: '日本郵船',
    location: '横浜',
    salary: '月収29万円以上',
    description: '国際物流の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '40',
    title: '自動車ブレーキ',
    company: 'アドヴィックス',
    location: '愛知',
    salary: '月収32万円以上',
    description: '自動車ブレーキの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '41',
    title: 'センサー製造',
    company: 'オムロン',
    location: '京都',
    salary: '月収31万円以上',
    description: 'センサー製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '42',
    title: '醸造',
    company: 'キリン',
    location: '神奈川',
    salary: '月収26万円以上',
    description: '醸造の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '43',
    title: 'セメント製造',
    company: '太平洋セメント',
    location: '千葉',
    salary: '月収33万円以上',
    description: 'セメント製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '44',
    title: '航空貨物',
    company: '日本航空',
    location: '東京',
    salary: '月収28万円以上',
    description: '航空貨物の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '45',
    title: '自動車エンジン',
    company: 'ダイハツ',
    location: '大阪',
    salary: '月収30万円以上',
    description: '自動車エンジンの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '46',
    title: 'メモリ製造',
    company: 'キオクシア',
    location: '岩手',
    salary: '月収34万円以上',
    description: 'メモリ製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '47',
    title: '製粉',
    company: '日清製粉',
    location: '東京',
    salary: '月収25万円以上',
    description: '製粉の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '48',
    title: '化学製品製造',
    company: '住友化学',
    location: '大阪',
    salary: '月収31万円以上',
    description: '化学製品製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '49',
    title: '港湾物流',
    company: '川崎汽船',
    location: '神戸',
    salary: '月収27万円以上',
    description: '港湾物流の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '50',
    title: '自動車変速機',
    company: 'アイシン・エィ・ダブリュ',
    location: '愛知',
    salary: '月収33万円以上',
    description: '自動車変速機の経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '51',
    title: '電池製造',
    company: 'パナソニック',
    location: '大阪',
    salary: '月収32万円以上',
    description: '電池製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '52',
    title: '製菓',
    company: 'ロッテ',
    location: '東京',
    salary: '月収26万円以上',
    description: '製菓の経験者歓迎。',
    category: '食品業界',
    features: ['経験者歓迎', '福利厚生充実', '交通費支給']
  },
  {
    id: '53',
    title: '鉄道車両製造',
    company: '川崎重工業',
    location: '兵庫',
    salary: '月収35万円以上',
    description: '鉄道車両製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '54',
    title: '国際配送',
    company: 'フェデックス',
    location: '東京',
    salary: '月収29万円以上',
    description: '国際配送の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '55',
    title: '自動車サスペンション',
    company: 'KYB',
    location: '群馬',
    salary: '月収31万円以上',
    description: '自動車サスペンションの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '56',
    title: 'カメラ製造',
    company: 'キヤノン',
    location: '東京',
    salary: '月収30万円以上',
    description: 'カメラ製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '57',
    title: '製油',
    company: 'JXTGエネルギー',
    location: '千葉',
    salary: '月収34万円以上',
    description: '製油の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '58',
    title: '冷蔵配送',
    company: '日本通運',
    location: '神奈川',
    salary: '月収28万円以上',
    description: '冷蔵配送の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '59',
    title: '自動車エアコン',
    company: 'デンソー',
    location: '愛知',
    salary: '月収32万円以上',
    description: '自動車エアコンの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '60',
    title: 'プリンター製造',
    company: 'エプソン',
    location: '長野',
    salary: '月収29万円以上',
    description: 'プリンター製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '61',
    title: '医薬品製造',
    company: '武田薬品',
    location: '大阪',
    salary: '月収33万円以上',
    description: '医薬品製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '62',
    title: '宅配便',
    company: 'ヤマト運輸',
    location: '東京',
    salary: '月収27万円以上',
    description: '宅配便の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '63',
    title: '自動車ラジエーター',
    company: 'デンソー',
    location: '愛知',
    salary: '月収30万円以上',
    description: '自動車ラジエーターの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '64',
    title: 'テレビ製造',
    company: 'シャープ',
    location: '大阪',
    salary: '月収31万円以上',
    description: 'テレビ製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '65',
    title: '化粧品製造',
    company: '資生堂',
    location: '神奈川',
    salary: '月収28万円以上',
    description: '化粧品製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '66',
    title: '航空貨物取扱',
    company: '全日空',
    location: '成田',
    salary: '月収29万円以上',
    description: '航空貨物取扱の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '67',
    title: '自動車ホイール',
    company: 'エンケイ',
    location: '愛知',
    salary: '月収31万円以上',
    description: '自動車ホイールの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '68',
    title: 'スマートフォン製造',
    company: 'ソニー',
    location: '東京',
    salary: '月収32万円以上',
    description: 'スマートフォン製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '69',
    title: '石鹸製造',
    company: '花王',
    location: '神奈川',
    salary: '月収27万円以上',
    description: '石鹸製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '70',
    title: '海上輸送',
    company: '商船三井',
    location: '横浜',
    salary: '月収30万円以上',
    description: '海上輸送の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '71',
    title: '自動車シート',
    company: 'トヨタ紡織',
    location: '愛知',
    salary: '月収29万円以上',
    description: '自動車シートの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '72',
    title: 'ゲーム機製造',
    company: '任天堂',
    location: '京都',
    salary: '月収31万円以上',
    description: 'ゲーム機製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '73',
    title: '洗剤製造',
    company: 'ライオン',
    location: '東京',
    salary: '月収26万円以上',
    description: '洗剤製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '74',
    title: '鉄道貨物',
    company: 'JR貨物',
    location: '大阪',
    salary: '月収28万円以上',
    description: '鉄道貨物の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '75',
    title: '自動車ミラー',
    company: '村上開明堂',
    location: '広島',
    salary: '月収30万円以上',
    description: '自動車ミラーの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '76',
    title: 'パソコン製造',
    company: 'NEC',
    location: '東京',
    salary: '月収32万円以上',
    description: 'パソコン製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '77',
    title: '歯磨き粉製造',
    company: 'サンスター',
    location: '大阪',
    salary: '月収27万円以上',
    description: '歯磨き粉製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '78',
    title: '港湾物流',
    company: '日本郵船',
    location: '神戸',
    salary: '月収29万円以上',
    description: '港湾物流の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '79',
    title: '自動車ランプ',
    company: '小糸製作所',
    location: '愛知',
    salary: '月収31万円以上',
    description: '自動車ランプの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '80',
    title: 'デジタルカメラ製造',
    company: 'キヤノン',
    location: '東京',
    salary: '月収33万円以上',
    description: 'デジタルカメラ製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '81',
    title: 'シャンプー製造',
    company: '花王',
    location: '神奈川',
    salary: '月収26万円以上',
    description: 'シャンプー製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '82',
    title: '国際配送',
    company: 'DHL',
    location: '東京',
    salary: '月収30万円以上',
    description: '国際配送の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '83',
    title: '自動車ワイパー',
    company: '日本ワイパーブレード',
    location: '愛知',
    salary: '月収28万円以上',
    description: '自動車ワイパーの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '84',
    title: 'オーディオ機器製造',
    company: 'パイオニア',
    location: '東京',
    salary: '月収31万円以上',
    description: 'オーディオ機器製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '85',
    title: '化粧水製造',
    company: '資生堂',
    location: '神奈川',
    salary: '月収27万円以上',
    description: '化粧水製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '86',
    title: '航空貨物',
    company: '日本航空',
    location: '羽田',
    salary: '月収29万円以上',
    description: '航空貨物の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '87',
    title: '自動車ホーン',
    company: '日本ホーン',
    location: '愛知',
    salary: '月収30万円以上',
    description: '自動車ホーンの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '88',
    title: 'ビデオカメラ製造',
    company: 'ソニー',
    location: '東京',
    salary: '月収32万円以上',
    description: 'ビデオカメラ製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '89',
    title: 'マスク製造',
    company: 'ユニ・チャーム',
    location: '東京',
    salary: '月収25万円以上',
    description: 'マスク製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '90',
    title: '海上輸送',
    company: '川崎汽船',
    location: '神戸',
    salary: '月収28万円以上',
    description: '海上輸送の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '91',
    title: '自動車アンテナ',
    company: '原田工業',
    location: '愛知',
    salary: '月収29万円以上',
    description: '自動車アンテナの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '92',
    title: 'プロジェクター製造',
    company: 'エプソン',
    location: '長野',
    salary: '月収31万円以上',
    description: 'プロジェクター製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '93',
    title: 'ティッシュ製造',
    company: '大王製紙',
    location: '愛媛',
    salary: '月収26万円以上',
    description: 'ティッシュ製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '94',
    title: '鉄道貨物',
    company: 'JR貨物',
    location: '名古屋',
    salary: '月収27万円以上',
    description: '鉄道貨物の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '95',
    title: '自動車スピーカー',
    company: 'パイオニア',
    location: '愛知',
    salary: '月収30万円以上',
    description: '自動車スピーカーの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '96',
    title: 'スキャナー製造',
    company: 'キヤノン',
    location: '東京',
    salary: '月収32万円以上',
    description: 'スキャナー製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '97',
    title: 'トイレットペーパー製造',
    company: '王子製紙',
    location: '静岡',
    salary: '月収25万円以上',
    description: 'トイレットペーパー製造の経験者歓迎。',
    category: '製造業',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '98',
    title: '港湾物流',
    company: '日本郵船',
    location: '横浜',
    salary: '月収29万円以上',
    description: '港湾物流の経験者歓迎。',
    category: '物流業界',
    features: ['経験者歓迎', '高収入', '交通費支給']
  },
  {
    id: '99',
    title: '自動車ナビゲーション',
    company: 'パイオニア',
    location: '愛知',
    salary: '月収31万円以上',
    description: '自動車ナビゲーションの経験者歓迎。',
    category: '自動車業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  },
  {
    id: '100',
    title: 'スマートウォッチ製造',
    company: 'ソニー',
    location: '東京',
    salary: '月収33万円以上',
    description: 'スマートウォッチ製造の経験者歓迎。',
    category: '電子機器業界',
    features: ['経験者歓迎', '高収入', '福利厚生充実']
  }
]

export const categories = [
  '製造業',
  '自動車業界',
  '物流業界',
  '食品業界',
  '電子機器業界'
]

export const features = [
  '未経験OK',
  '寮・社宅費無料',
  '女性活躍中',
  '入社祝い金あり',
  '日払い制度利用OK',
  '経験者優遇',
  '福利厚生充実',
  '交通費支給',
  '体力仕事',
  '高収入',
  '精密作業',
  '寮付き',
  '未経験・ブランクOK'
] 