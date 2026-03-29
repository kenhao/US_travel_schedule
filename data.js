// ── ITINERARY DATA ──
// Spot names: English | Descriptions: 繁體中文
// Images: Wikimedia Commons direct URLs only

const days = [
  {
    num: '2',
    sub: '抵達舊金山',
    desc: 'SFO Arrival → Golden Gate Park Area',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      caption: 'Golden Gate Bridge · San Francisco',
    },
    tl: [
      {
        t: '6:30', dot: 'rust',
        n: 'Arrive SFO (UA 872)',
        d: '舊金山國際機場',
        mapUrl: 'https://maps.google.com/?q=San+Francisco+International+Airport',
      },
      {
        t: '9:00', dot: 'rust',
        n: 'Alamo Car Pickup',
        d: 'SFO 租車櫃台',
        tag: '租車',
        mapUrl: 'https://maps.google.com/?q=Alamo+Car+Rental+SFO',
      },
      {
        t: '', dot: 'gray',
        n: 'Brunch',
        tag: '餐飲',
        food: [
          { label: 'A. In-N-Out Burger', mapUrl: 'https://maps.google.com/?q=In-N-Out+Burger+South+San+Francisco' },
          { label: 'B. Taqueria San Bruno', mapUrl: 'https://maps.google.com/?q=Taqueria+San+Bruno+CA' },
        ],
      },
      {
        t: '11:10', dot: 'sky',
        n: 'Airbnb — Drop Luggage',
        d: '1563 27th Ave · 金門公園旁，可先放行李',
        tag: '住宿',
        mapUrl: 'https://maps.app.goo.gl/fJPS7K7AF9QiK67b9',
      },
      {
        t: '', dot: 'gray',
        n: 'Afternoon Sightseeing',
        d: '沿海岸線探索金門公園一帶',
        places: [
          { label: 'Warming Hut', mapUrl: 'https://maps.google.com/?q=Warming+Hut+Crissy+Field' },
          { label: 'Golden Gate Bridge', mapUrl: 'https://maps.google.com/?q=Golden+Gate+Bridge' },
          { label: 'Palace of Fine Arts', mapUrl: 'https://maps.google.com/?q=Palace+of+Fine+Arts+San+Francisco' },
          { label: 'Baker Beach', mapUrl: 'https://maps.app.goo.gl/79aUouVrJa4c4coU6' },
        ],
        imgs: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/600px-GoldenGateBridge-001.jpg', cap: 'Golden Gate Bridge' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Fine_Arts_SF_CA.jpg/600px-Palace_of_Fine_Arts_SF_CA.jpg', cap: 'Palace of Fine Arts' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Baker_Beach_in_San_Francisco_100_3976.JPG/600px-Baker_Beach_in_San_Francisco_100_3976.JPG', cap: 'Baker Beach' },
        ],
      },
      {
        t: '15:00', dot: 'sky',
        n: 'Airbnb Check-in',
        d: 'Joyce Chan · 1563 27th Ave · 15:00 入住',
        tag: '住宿',
        mapUrl: 'https://maps.app.goo.gl/fJPS7K7AF9QiK67b9',
      },
      {
        t: '18:00', dot: 'rust',
        n: 'CA Academy of Sciences — NightLife',
        d: '週四限定！ 18:00–22:00',
        tag: '活動',
        mapUrl: 'https://maps.google.com/?q=California+Academy+of+Sciences',
        webUrl: 'https://www.calacademy.org/nightlife',
        img: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/CaliforniaAcademyofSciences.jpg/600px-CaliforniaAcademyofSciences.jpg',
          caption: 'California Academy of Sciences',
        },
      },
      {
        t: '', dot: 'gray',
        n: 'Dinner — Cook at Home',
        tag: '餐飲',
        food: [
          { label: 'Safeway', mapUrl: 'https://maps.app.goo.gl/BgtNRyLagVRuY2Jv5' },
          { label: '22nd & Irving Market', mapUrl: 'https://maps.app.goo.gl/osprNdVqmmDozaM98' },
        ],
      },
    ],
  },

  {
    num: '3',
    sub: '舊金山 Day 2',
    desc: "Fisherman's Wharf · Cable Car · Union Square",
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Fisherman%27s_Wharf_San_Francisco_January_2013_002.jpg',
      caption: "Fisherman's Wharf · San Francisco",
    },
    tl: [
      {
        t: '', dot: 'rust',
        n: 'Lombard Street',
        d: '全美最彎曲街道',
        mapUrl: 'https://maps.google.com/?q=Lombard+Street+San+Francisco',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Full_view_of_crooked_Lombard_Street%2C_SF_%28Feb_2006%29.jpg/600px-Full_view_of_crooked_Lombard_Street%2C_SF_%28Feb_2006%29.jpg', caption: 'Lombard Street' },
      },
      {
        t: '', dot: 'rust',
        n: "Fisherman's Wharf",
        d: '停車約 $10/h',
        mapUrl: 'https://maps.google.com/?q=Fishermans+Wharf+San+Francisco',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Fisherman%27s_Wharf_San_Francisco_January_2013_002.jpg', caption: "Fisherman's Wharf" },
      },
      {
        t: '', dot: 'rust',
        n: 'Pier 39',
        d: '海獅 & 商店',
        mapUrl: 'https://maps.google.com/?q=Pier+39+San+Francisco',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/California%2C_San_Francisco%2C_Pier_39%2C_sea_lions.jpg/600px-California%2C_San_Francisco%2C_Pier_39%2C_sea_lions.jpg', caption: 'Pier 39' },
      },
      {
        t: '', dot: 'rust',
        n: 'Boudin Bakery',
        d: '蛤蜊巧達湯麵包碗',
        mapUrl: 'https://maps.google.com/?q=Boudin+Bakery+Fishermans+Wharf',
      },
      {
        t: '', dot: 'gray',
        n: 'Lunch',
        tag: '餐飲',
        food: [
          { label: 'A. Sotto Mare（電話預約）', mapUrl: 'https://maps.google.com/?q=Sotto+Mare+San+Francisco' },
          { label: 'B. Golden Boy Pizza（外帶）', mapUrl: 'https://maps.google.com/?q=Golden+Boy+Pizza+San+Francisco' },
        ],
      },
      {
        t: '', dot: 'rust',
        n: 'Union Square Garage',
        d: '$6/h · 最高 $40',
        mapUrl: 'https://maps.google.com/?q=Union+Square+Garage+San+Francisco',
        webUrl: 'https://www.sfmta.com/garages-lots/union-square-garage',
      },
      {
        t: '', dot: 'rust',
        n: 'Cable Car',
        d: 'Powell St 終點站 · $8/人',
        mapUrl: 'https://maps.google.com/?q=Powell+Street+Cable+Car+Turnaround',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Powell_Street%2C_San_Francisco%2C_California.jpg/600px-Powell_Street%2C_San_Francisco%2C_California.jpg', caption: 'Cable Car on Powell Street' },
      },
      {
        t: '', dot: 'rust',
        n: 'Nintendo San Francisco',
        d: '聯合廣場',
        mapUrl: 'https://maps.google.com/?q=Nintendo+San+Francisco',
      },
      {
        t: '', dot: 'rust',
        n: 'Biscoff Coffee Corner',
        d: 'California St & Powell St 觀景點',
        mapUrl: 'https://maps.google.com/?q=Biscoff+Coffee+Corner+San+Francisco',
      },
      {
        t: '', dot: 'rust',
        n: 'Ghirardelli Chocolate',
        d: '舊金山經典必去',
        mapUrl: 'https://maps.google.com/?q=Ghirardelli+Chocolate+San+Francisco',
      },
      {
        t: '', dot: 'gray',
        n: 'Painted Ladies',
        d: '明信片排屋',
        mapUrl: 'https://maps.google.com/?q=Painted+Ladies+San+Francisco',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/The_Painted_Ladies.jpg/600px-The_Painted_Ladies.jpg', caption: 'Painted Ladies' },
      },
      {
        t: '18:00', dot: 'rust',
        n: 'Alcatraz Island — Night Tour',
        d: '$59.65/人 · 渡輪：17:55 / 18:30 / 19:05',
        tag: '活動',
        mapUrl: 'https://maps.google.com/?q=Alcatraz+Island+San+Francisco',
        webUrl: 'https://www.cityexperiences.com/san-francisco/city-cruises/alcatraz/departure-schedule/',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcatraz_Island_as_seen_from_the_East.jpg/600px-Alcatraz_Island_as_seen_from_the_East.jpg', caption: 'Alcatraz Island' },
      },
      { t: '', dot: 'gray', n: 'Dinner — Cook at Home', tag: '餐飲' },
    ],
  },

  {
    num: '4',
    sub: '科技巡禮 → Groveland',
    desc: 'San Jose · Livermore · Groveland',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Aerial_view_of_Apple_Park_dllu.jpg/1200px-Aerial_view_of_Apple_Park_dllu.jpg',
      caption: 'Apple Park · Cupertino',
    },
    tl: [
      {
        t: '9:00', dot: 'rust',
        n: 'Google Visitor Experience',
        d: 'Mountain View',
        tag: '活動',
        mapUrl: 'https://maps.app.goo.gl/3z6GsD1H5nM7WzcK9',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Google_Campus2_cropped.jpg/600px-Google_Campus2_cropped.jpg', caption: 'Google HQ' },
      },
      {
        t: '10:00', dot: 'rust',
        n: 'Apple Park Visitor Center',
        d: 'Vision Pro 體驗預約',
        tag: '活動',
        mapUrl: 'https://maps.google.com/?q=Apple+Park+Visitor+Center+Cupertino',
        webUrl: 'https://www.apple.com/retail/appleparkvisitorcenter/',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Aerial_view_of_Apple_Park_dllu.jpg/600px-Aerial_view_of_Apple_Park_dllu.jpg', caption: 'Apple Park' },
      },
      {
        t: '', dot: 'gray',
        n: 'Lunch',
        tag: '餐飲',
        food: [
          { label: 'A. PHỞ HÀ NỘI SAN JOSE', mapUrl: 'https://maps.google.com/?q=Pho+Ha+Noi+San+Jose' },
          { label: 'B. 美國飯', mapUrl: 'https://maps.app.goo.gl/G5nTMX4ShQN7C4ds7' },
        ],
      },
      {
        t: '', dot: 'rust',
        n: 'San Francisco Premium Outlets',
        d: 'Livermore · 購物',
        mapUrl: 'https://maps.app.goo.gl/G5nTMX4ShQN7C4ds7',
      },
      {
        t: '', dot: 'rust',
        n: 'Drive to Groveland',
        d: '約 2 小時 3 分鐘 · 走 CA-120',
      },
      {
        t: '16:00', dot: 'sky',
        n: 'Groveland Airbnb Check-in',
        d: '19228 Pine Mountain Dr',
        tag: '住宿',
        mapUrl: 'https://maps.app.goo.gl/7zH8xxmt7T7X2zgh6',
      },
      {
        t: '', dot: 'gray',
        n: 'Pine Mountain Lake Gate',
        d: '首次進入需付 $50，之後出入免費 · Mar-Val Market 附近',
        mapUrl: 'https://maps.app.goo.gl/osprNdVqmmDozaM98',
      },
    ],
  },

  {
    num: '5',
    sub: 'Yosemite Day 1',
    desc: 'Valley Loop · El Capitan · Bridalveil Fall · Tunnel View',
    yosDay: 1,
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/1200px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg',
      caption: 'Tunnel View · Yosemite Valley',
    },
    tl: [
      {
        t: '', dot: 'rust',
        n: 'Lower Yosemite Falls Trail',
        d: '約 1 小時',
        tag: '健行',
        mapUrl: 'https://maps.google.com/?q=Lower+Yosemite+Falls+Trail',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Yosemite_Falls_-_Yosemite_National_Park%2C_California%2C_USA_-_August_1995.jpg/600px-Yosemite_Falls_-_Yosemite_National_Park%2C_California%2C_USA_-_August_1995.jpg', caption: 'Yosemite Falls' },
      },
      {
        t: '', dot: 'gray',
        n: 'Yosemite Valley Chapel',
        d: '歷史古蹟小教堂',
        mapUrl: 'https://maps.google.com/?q=Yosemite+Valley+Chapel',
      },
      {
        t: '', dot: 'gray',
        n: "Cook's Meadow Loop",
        d: '可眺望 Half Dome 與 Yosemite Falls',
        mapUrl: 'https://maps.google.com/?q=Cooks+Meadow+Loop+Yosemite',
      },
      {
        t: '', dot: 'rust',
        n: 'El Capitan Picnic Area',
        d: '仰望 El Capitan · 野餐 🧺',
        tag: '餐飲',
        mapUrl: 'https://maps.google.com/?q=El+Capitan+Picnic+Area+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/El_Capitan_Granite_%28mid-Cretaceous%2C_103_Ma%3B_El_Capitan%2C_Yosemite_Valley%2C_Sierra_Nevada_Mountains%2C_California%2C_USA%29_1.jpg/600px-El_Capitan_Granite_%28mid-Cretaceous%2C_103_Ma%3B_El_Capitan%2C_Yosemite_Valley%2C_Sierra_Nevada_Mountains%2C_California%2C_USA%29_1.jpg', caption: 'El Capitan' },
      },
      {
        t: '', dot: 'rust',
        n: 'Bridalveil Fall',
        d: '約 40 分鐘',
        mapUrl: 'https://maps.google.com/?q=Bridalveil+Fall+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bridalveil_Falls_08183.JPG/600px-Bridalveil_Falls_08183.JPG', caption: 'Bridalveil Fall' },
      },
      {
        t: '', dot: 'rust',
        n: 'Tunnel View',
        d: '傍晚日落 · 山谷全景制高點',
        mapUrl: 'https://maps.google.com/?q=Tunnel+View+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/600px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg', caption: 'Tunnel View at sunset' },
      },
    ],
  },

  {
    num: '6',
    sub: 'Yosemite Day 2',
    desc: 'Mist Trail · Nevada Fall · Mirror Lake',
    yosDay: 2,
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vernal_Fall_08776.JPG/1200px-Vernal_Fall_08776.JPG',
      caption: 'Vernal Fall · Mist Trail',
    },
    tl: [
      {
        t: '', dot: 'rust',
        n: 'Mist Trail + John Muir Trail',
        d: 'Vernal Fall + Nevada Fall · 約 6 小時',
        tag: '健行',
        mapUrl: 'https://maps.google.com/?q=Mist+Trail+Yosemite',
        imgs: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vernal_Fall_08776.JPG/600px-Vernal_Fall_08776.JPG', cap: 'Vernal Fall' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nevada_Fall%2C_Yosemite_NP%2C_CA%2C_US_-_Diliff.jpg/600px-Nevada_Fall%2C_Yosemite_NP%2C_CA%2C_US_-_Diliff.jpg', cap: 'Nevada Fall' },
        ],
      },
      {
        t: '', dot: 'gray',
        n: 'Yosemite Valley Shuttle',
        d: '免費接駁 · 7am–10pm',
        webUrl: 'https://www.nps.gov/yose/planyourvisit/valleyshuttle.htm',
      },
      {
        t: '', dot: 'gray',
        n: 'Lunch / Dinner',
        tag: '餐飲',
        food: [
          { label: 'Curry Village Pizza Deck', mapUrl: 'https://maps.google.com/?q=Half+Dome+Village+Pizza+Deck+Yosemite' },
        ],
      },
      {
        t: '', dot: 'rust',
        n: 'Half Dome Viewpoint',
        d: '搭接駁車前往',
        mapUrl: 'https://maps.google.com/?q=Half+Dome+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Yosemite_National_Park_spans_eastern_portions_of_Tuolumne%2C_Mariposa_and_Madera_counties_in_California_LCCN2013635054.tif/lossy-page1-600px-Yosemite_National_Park_spans_eastern_portions_of_Tuolumne%2C_Mariposa_and_Madera_counties_in_California_LCCN2013635054.tif.jpg', caption: 'Half Dome' },
      },
      {
        t: '', dot: 'rust',
        n: 'Stoneman Meadow',
        d: '開闊草原景色',
        mapUrl: 'https://maps.google.com/?q=Stoneman+Meadow+Yosemite',
      },
      {
        t: '', dot: 'rust',
        n: 'Mirror Lake',
        d: 'Half Dome 倒影',
        mapUrl: 'https://maps.google.com/?q=Mirror+Lake+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Yosemite_National_Park_%28CA%2C_USA%29%2C_Yosemite_Valley%2C_Mirror_Lake_--_2022_--_2807.jpg/600px-Yosemite_National_Park_%28CA%2C_USA%29%2C_Yosemite_Valley%2C_Mirror_Lake_--_2022_--_2807.jpg', caption: 'Mirror Lake' },
      },
    ],
  },

  {
    num: '7',
    sub: 'Groveland → 洛杉磯',
    desc: '車程約 6 小時 · via Fresno & Bakersfield',
    tl: [
      {
        t: '', dot: 'rust',
        n: 'Pine Mountain Lake',
        d: '早晨散步',
        mapUrl: 'https://maps.google.com/?q=Pine+Mountain+Lake+Groveland+CA',
      },
      { t: '11:00', dot: 'sky', n: 'Groveland Airbnb Check-out', tag: '住宿' },
      { t: '', dot: 'rust', n: 'Drive to Fresno', d: '約 2 小時 18 分鐘' },
      { t: '', dot: 'gray', n: 'Lunch (Fresno)', tag: '餐飲', food: [{ label: 'TBD' }] },
      { t: '', dot: 'rust', n: 'Bakersfield', d: '約 1 小時 34 分鐘 · 休息站' },
      { t: '', dot: 'gray', n: 'Dinner', tag: '餐飲', food: [{ label: 'TBD' }] },
      {
        t: '', dot: 'sky',
        n: 'LA Alhambra Airbnb Check-in',
        d: '1126 South Cordova St, Alhambra CA',
        tag: '住宿',
        mapUrl: 'https://maps.google.com/?q=1126+South+Cordova+Street+Alhambra+CA',
      },
    ],
  },

  {
    num: '8–11',
    sub: '洛杉磯',
    desc: 'Alhambra Base · TBD',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/1200px-Hollywood_Sign_%28Zuschnitt%29.jpg',
      caption: 'Hollywood Sign · Los Angeles',
    },
    tl: [
      {
        t: '', dot: 'sky',
        n: 'LA Alhambra Airbnb',
        d: '1126 South Cordova St',
        tag: '住宿',
        mapUrl: 'https://maps.google.com/?q=1126+South+Cordova+Street+Alhambra+CA',
      },
      {
        t: '', dot: 'gray',
        n: 'Activities TBD',
        d: '環球影城 · 好萊塢 · 海灘 · 更多',
        imgs: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/600px-Hollywood_Sign_%28Zuschnitt%29.jpg', cap: 'Hollywood Sign' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Santa_Monica_Pier_Sunset.jpg/600px-Santa_Monica_Pier_Sunset.jpg', cap: 'Santa Monica Pier' },
        ],
      },
      {
        t: '', dot: 'gray',
        n: 'American Chain Restaurants',
        tag: '餐飲',
        food: [
          { label: 'In-N-Out' }, { label: "Raising Cane's" }, { label: 'Chick-fil-A' },
          { label: 'Five Guys' }, { label: 'Jollibee' }, { label: 'Panda Express' },
          { label: 'Texas Roadhouse' }, { label: 'Chipotle' }, { label: "Carl's Jr." }, { label: "Wendy's" },
        ],
      },
    ],
  },

  {
    num: '15',
    sub: '返台',
    desc: 'LA → Seattle → SFO → Taipei',
    tl: [
      {
        t: '18:00', dot: 'rust',
        n: 'Return Car at SEA',
        d: 'Seattle-Tacoma Airport · Alamo',
        mapUrl: 'https://maps.google.com/?q=Seattle+Tacoma+International+Airport',
      },
      { t: '19:37', dot: 'rust', n: 'UA 737 Departs SEA', d: 'Seattle → San Francisco · 抵達 21:50' },
      { t: '23:20', dot: 'rust', n: 'UA 853 Departs SFO', d: 'San Francisco → Taipei · 13h 45m' },
    ],
  },
];
