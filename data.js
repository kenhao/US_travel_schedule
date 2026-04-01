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
      { t: '6:30', dot: 'rust', n: 'Arrive SFO (UA 872)', d: '舊金山國際機場', mapUrl: 'https://maps.google.com/?q=San+Francisco+International+Airport' },
      { t: '9:00', dot: 'rust', n: 'Alamo Car Pickup', d: 'SFO 租車櫃台', tag: '租車', mapUrl: 'https://maps.google.com/?q=Alamo+Car+Rental+SFO' },
      { t: '', dot: 'gray', n: 'Brunch', tag: '餐飲', food: [
        { label: 'A. In-N-Out Burger', mapUrl: 'https://maps.google.com/?q=In-N-Out+Burger+South+San+Francisco' },
        { label: 'B. Taqueria San Bruno', mapUrl: 'https://maps.google.com/?q=Taqueria+San+Bruno+CA' },
      ]},
      { t: '11:10', dot: 'sky', n: 'Airbnb — Drop Luggage', d: '1563 27th Ave · 金門公園旁，可先放行李', tag: '住宿', mapUrl: 'https://maps.app.goo.gl/fJPS7K7AF9QiK67b9' },
      { t: '', dot: 'gray', n: 'Afternoon Sightseeing', d: '沿海岸線探索金門公園一帶',
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
      { t: '15:00', dot: 'sky', n: 'Airbnb Check-in', d: 'Joyce Chan · 1563 27th Ave · 15:00 入住', tag: '住宿', mapUrl: 'https://maps.app.goo.gl/fJPS7K7AF9QiK67b9' },
      { t: '18:00', dot: 'rust', n: 'CA Academy of Sciences — NightLife', d: '週四限定！ 18:00–22:00', tag: '活動',
        mapUrl: 'https://maps.google.com/?q=California+Academy+of+Sciences',
        webUrl: 'https://www.calacademy.org/nightlife',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/CaliforniaAcademyofSciences.jpg/600px-CaliforniaAcademyofSciences.jpg', caption: 'California Academy of Sciences' },
      },
      { t: '', dot: 'gray', n: 'Dinner — Cook at Home', tag: '餐飲', food: [
        { label: 'Safeway', mapUrl: 'https://maps.app.goo.gl/BgtNRyLagVRuY2Jv5' },
        { label: '22nd & Irving Market', mapUrl: 'https://maps.app.goo.gl/osprNdVqmmDozaM98' },
      ]},
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
      { t: '', dot: 'rust', n: 'Lombard Street', d: '全美最彎曲街道', mapUrl: 'https://maps.google.com/?q=Lombard+Street+San+Francisco',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Full_view_of_crooked_Lombard_Street%2C_SF_%28Feb_2006%29.jpg/600px-Full_view_of_crooked_Lombard_Street%2C_SF_%28Feb_2006%29.jpg', caption: 'Lombard Street' } },
      { t: '', dot: 'rust', n: "Fisherman's Wharf", d: '停車約 $10/h', mapUrl: 'https://maps.google.com/?q=Fishermans+Wharf+San+Francisco',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Fisherman%27s_Wharf_San_Francisco_January_2013_002.jpg', caption: "Fisherman's Wharf" } },
      { t: '', dot: 'rust', n: 'Pier 39', d: '海獅 & 商店', mapUrl: 'https://maps.google.com/?q=Pier+39+San+Francisco',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/California%2C_San_Francisco%2C_Pier_39%2C_sea_lions.jpg/600px-California%2C_San_Francisco%2C_Pier_39%2C_sea_lions.jpg', caption: 'Pier 39 Sea Lions' } },
      { t: '', dot: 'rust', n: 'Boudin Bakery', d: '蛤蜊巧達湯麵包碗', mapUrl: 'https://maps.google.com/?q=Boudin+Bakery+Fishermans+Wharf' },
      { t: '', dot: 'gray', n: 'Lunch', tag: '餐飲', food: [
        { label: 'A. Sotto Mare（電話預約）', mapUrl: 'https://maps.google.com/?q=Sotto+Mare+San+Francisco' },
        { label: 'B. Golden Boy Pizza（外帶）', mapUrl: 'https://maps.google.com/?q=Golden+Boy+Pizza+San+Francisco' },
      ]},
      { t: '', dot: 'rust', n: 'Union Square Garage', d: '$6/h · 最高 $40', mapUrl: 'https://maps.google.com/?q=Union+Square+Garage+San+Francisco', webUrl: 'https://www.sfmta.com/garages-lots/union-square-garage' },
      { t: '', dot: 'rust', n: 'Cable Car', d: 'Powell St 終點站 · $8/人', mapUrl: 'https://maps.google.com/?q=Powell+Street+Cable+Car+Turnaround',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Powell_Street%2C_San_Francisco%2C_California.jpg/600px-Powell_Street%2C_San_Francisco%2C_California.jpg', caption: 'Cable Car on Powell Street' } },
      { t: '', dot: 'rust', n: 'Nintendo San Francisco', d: '聯合廣場', mapUrl: 'https://maps.google.com/?q=Nintendo+San+Francisco' },
      { t: '', dot: 'rust', n: 'Biscoff Coffee Corner', d: 'California St & Powell St 觀景點', mapUrl: 'https://maps.google.com/?q=Biscoff+Coffee+Corner+San+Francisco' },
      { t: '', dot: 'rust', n: 'Ghirardelli Chocolate', d: '舊金山經典必去', mapUrl: 'https://maps.google.com/?q=Ghirardelli+Chocolate+San+Francisco' },
      { t: '', dot: 'gray', n: 'Painted Ladies', d: '明信片排屋', mapUrl: 'https://maps.google.com/?q=Painted+Ladies+San+Francisco',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/The_Painted_Ladies.jpg/600px-The_Painted_Ladies.jpg', caption: 'Painted Ladies' } },
      { t: '18:00', dot: 'rust', n: 'Alcatraz Island — Night Tour', d: '$59.65/人 · 渡輪：17:55 / 18:30 / 19:05', tag: '活動',
        mapUrl: 'https://maps.google.com/?q=Alcatraz+Island+San+Francisco',
        webUrl: 'https://www.cityexperiences.com/san-francisco/city-cruises/alcatraz/departure-schedule/',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcatraz_Island_as_seen_from_the_East.jpg/600px-Alcatraz_Island_as_seen_from_the_East.jpg', caption: 'Alcatraz Island' } },
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
      { t: '9:00', dot: 'rust', n: 'Google Visitor Experience', d: 'Mountain View', tag: '活動', mapUrl: 'https://maps.app.goo.gl/3z6GsD1H5nM7WzcK9',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Google_Campus2_cropped.jpg/600px-Google_Campus2_cropped.jpg', caption: 'Google HQ' } },
      { t: '10:00', dot: 'rust', n: 'Apple Park Visitor Center', d: 'Vision Pro 體驗預約', tag: '活動',
        mapUrl: 'https://maps.google.com/?q=Apple+Park+Visitor+Center+Cupertino',
        webUrl: 'https://www.apple.com/retail/appleparkvisitorcenter/',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Aerial_view_of_Apple_Park_dllu.jpg/600px-Aerial_view_of_Apple_Park_dllu.jpg', caption: 'Apple Park' } },
      { t: '', dot: 'gray', n: 'Lunch', tag: '餐飲', food: [
        { label: 'A. PHỞ HÀ NỘI SAN JOSE', mapUrl: 'https://maps.google.com/?q=Pho+Ha+Noi+San+Jose' },
        { label: 'B. 美國飯', mapUrl: 'https://maps.app.goo.gl/G5nTMX4ShQN7C4ds7' },
      ]},
      { t: '', dot: 'rust', n: 'San Francisco Premium Outlets', d: 'Livermore · 購物', mapUrl: 'https://maps.app.goo.gl/G5nTMX4ShQN7C4ds7' },
      { t: '', dot: 'rust', n: 'Drive to Groveland', d: '約 2 小時 3 分鐘 · 走 CA-120' },
      { t: '16:00', dot: 'sky', n: 'Groveland Airbnb Check-in', d: '19228 Pine Mountain Dr', tag: '住宿', mapUrl: 'https://maps.app.goo.gl/7zH8xxmt7T7X2zgh6' },
      { t: '', dot: 'gray', n: 'Pine Mountain Lake Gate', d: '首次進入需付 $50，之後出入免費 · Mar-Val Market 附近', mapUrl: 'https://maps.app.goo.gl/osprNdVqmmDozaM98' },
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
      { t: '', dot: 'rust', n: 'Lower Yosemite Falls Trail', d: '約 1 小時', tag: '健行', mapUrl: 'https://maps.google.com/?q=Lower+Yosemite+Falls+Trail',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Yosemite_Falls_-_Yosemite_National_Park%2C_California%2C_USA_-_August_1995.jpg/600px-Yosemite_Falls_-_Yosemite_National_Park%2C_California%2C_USA_-_August_1995.jpg', caption: 'Yosemite Falls' } },
      { t: '', dot: 'gray', n: 'Yosemite Valley Chapel', d: '歷史古蹟小教堂', mapUrl: 'https://maps.google.com/?q=Yosemite+Valley+Chapel' },
      { t: '', dot: 'gray', n: "Cook's Meadow Loop", d: '可眺望 Half Dome 與 Yosemite Falls', mapUrl: 'https://maps.google.com/?q=Cooks+Meadow+Loop+Yosemite' },
      { t: '', dot: 'rust', n: 'El Capitan Picnic Area', d: '仰望 El Capitan · 野餐 🧺', tag: '餐飲', mapUrl: 'https://maps.google.com/?q=El+Capitan+Picnic+Area+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/El_Capitan_Granite_%28mid-Cretaceous%2C_103_Ma%3B_El_Capitan%2C_Yosemite_Valley%2C_Sierra_Nevada_Mountains%2C_California%2C_USA%29_1.jpg/600px-El_Capitan_Granite_%28mid-Cretaceous%2C_103_Ma%3B_El_Capitan%2C_Yosemite_Valley%2C_Sierra_Nevada_Mountains%2C_California%2C_USA%29_1.jpg', caption: 'El Capitan' } },
      { t: '', dot: 'rust', n: 'Bridalveil Fall', d: '約 40 分鐘', mapUrl: 'https://maps.google.com/?q=Bridalveil+Fall+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bridalveil_Falls_08183.JPG/600px-Bridalveil_Falls_08183.JPG', caption: 'Bridalveil Fall' } },
      { t: '', dot: 'rust', n: 'Tunnel View', d: '傍晚日落 · 山谷全景制高點', mapUrl: 'https://maps.google.com/?q=Tunnel+View+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/600px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg', caption: 'Tunnel View at sunset' } },
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
      { t: '', dot: 'rust', n: 'Mist Trail + John Muir Trail', d: 'Vernal Fall + Nevada Fall · 約 6 小時', tag: '健行', mapUrl: 'https://maps.google.com/?q=Mist+Trail+Yosemite',
        imgs: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vernal_Fall_08776.JPG/600px-Vernal_Fall_08776.JPG', cap: 'Vernal Fall' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nevada_Fall%2C_Yosemite_NP%2C_CA%2C_US_-_Diliff.jpg/600px-Nevada_Fall%2C_Yosemite_NP%2C_CA%2C_US_-_Diliff.jpg', cap: 'Nevada Fall' },
        ] },
      { t: '', dot: 'gray', n: 'Yosemite Valley Shuttle', d: '免費接駁 · 7am–10pm', webUrl: 'https://www.nps.gov/yose/planyourvisit/valleyshuttle.htm' },
      { t: '', dot: 'gray', n: 'Lunch / Dinner', tag: '餐飲', food: [{ label: 'Curry Village Pizza Deck', mapUrl: 'https://maps.google.com/?q=Half+Dome+Village+Pizza+Deck+Yosemite' }] },
      { t: '', dot: 'rust', n: 'Half Dome Viewpoint', d: '搭接駁車前往', mapUrl: 'https://maps.google.com/?q=Half+Dome+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Yosemite_National_Park_spans_eastern_portions_of_Tuolumne%2C_Mariposa_and_Madera_counties_in_California_LCCN2013635054.tif/lossy-page1-600px-Yosemite_National_Park_spans_eastern_portions_of_Tuolumne%2C_Mariposa_and_Madera_counties_in_California_LCCN2013635054.tif.jpg', caption: 'Half Dome' } },
      { t: '', dot: 'rust', n: 'Stoneman Meadow', d: '開闊草原景色', mapUrl: 'https://maps.google.com/?q=Stoneman+Meadow+Yosemite' },
      { t: '', dot: 'rust', n: 'Mirror Lake', d: 'Half Dome 倒影', mapUrl: 'https://maps.google.com/?q=Mirror+Lake+Yosemite',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Yosemite_National_Park_%28CA%2C_USA%29%2C_Yosemite_Valley%2C_Mirror_Lake_--_2022_--_2807.jpg/600px-Yosemite_National_Park_%28CA%2C_USA%29%2C_Yosemite_Valley%2C_Mirror_Lake_--_2022_--_2807.jpg', caption: 'Mirror Lake' } },
    ],
  },

  {
    num: '7',
    sub: 'Groveland → 洛杉磯',
    desc: '車程約 6 小時 · Fresno → Bakersfield → LA',
    tl: [
      { t: '', dot: 'rust', n: 'Pine Mountain Lake', d: '早晨散步', mapUrl: 'https://maps.google.com/?q=Pine+Mountain+Lake+Groveland+CA' },
      { t: '11:00', dot: 'sky', n: 'Groveland Airbnb Check-out', tag: '住宿' },
      { t: '', dot: 'rust', n: 'Drive to Fresno', d: '約 2 小時 26 分鐘' },
      { t: '', dot: 'gray', n: 'Lunch — Dog House Grill', tag: '餐飲', food: [{ label: 'Dog House Grill (Fresno)', mapUrl: 'https://maps.google.com/?q=Dog+House+Grill+Fresno+CA' }] },
      { t: '', dot: 'rust', n: 'Bravo Farms Vintage Cheese Factory', d: '冰淇淋 · 牛奶糖 · 起司 · 約 35 分鐘路程', mapUrl: 'https://maps.google.com/?q=Bravo+Farms+Cheese+Factory+California' },
      { t: '', dot: 'rust', n: 'Outlets at Tejon', d: '購物 · 約 1 小時 45 分鐘路程', mapUrl: 'https://maps.google.com/?q=Outlets+at+Tejon' },
      { t: '', dot: 'gray', n: 'Dinner', tag: '餐飲', food: [{ label: 'TBD (Tejon area)' }] },
      { t: '', dot: 'sky', n: 'LA Alhambra Airbnb Check-in', d: '1126 South Cordova St, Alhambra CA · 約 1 小時 31 分鐘', tag: '住宿', mapUrl: 'https://maps.google.com/?q=1126+South+Cordova+Street+Alhambra+CA' },
    ],
  },

  {
    num: '8',
    sub: '洛杉磯 Day 1',
    desc: 'Beverly Hills · Santa Monica · Pacific Park',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Santa_Monica_Pier_Sunset.jpg/1200px-Santa_Monica_Pier_Sunset.jpg',
      caption: 'Santa Monica Pier · Los Angeles',
    },
    tl: [
      { t: '', dot: 'gray', n: '⚠️ 洛杉磯塞車時段', d: '上午 07:30–10:00，下午 03:00–07:30 請避開' },
      { t: '', dot: 'rust', n: 'Los Angeles County Museum of Art (LACMA)', d: '世界級藝術博物館', mapUrl: 'https://maps.google.com/?q=Los+Angeles+County+Museum+of+Art',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/LACMA_Chris_Burden_Urban_Light.jpg/600px-LACMA_Chris_Burden_Urban_Light.jpg', caption: 'LACMA · Urban Light' } },
      { t: '', dot: 'rust', n: 'Beverly Hills', d: '豪宅街道 · Rodeo Drive', mapUrl: 'https://maps.google.com/?q=Beverly+Hills+CA',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Beverly_Hills_Montage.jpg/600px-Beverly_Hills_Montage.jpg', caption: 'Beverly Hills' } },
      { t: '', dot: 'gray', n: 'Lunch — Young Dong Tofu', tag: '餐飲', food: [{ label: 'Young Dong Tofu', mapUrl: 'https://maps.google.com/?q=Young+Dong+Tofu+Los+Angeles' }] },
      { t: '', dot: 'rust', n: 'Santa Monica', d: 'Beach Parking $15/次 · Parking Structure 6（室內 90 分免費）', mapUrl: 'https://maps.google.com/?q=Santa+Monica+Beach+CA',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Santa_Monica_Pier_Sunset.jpg/600px-Santa_Monica_Pier_Sunset.jpg', caption: 'Santa Monica Pier' } },
      { t: '', dot: 'rust', n: 'Santa Monica Pier', d: 'Route 66 終點 · 標誌打卡', mapUrl: 'https://maps.google.com/?q=Santa+Monica+Pier' },
      { t: '', dot: 'rust', n: '3rd Street Promenade', d: '露天購物步行街', mapUrl: 'https://maps.google.com/?q=3rd+Street+Promenade+Santa+Monica' },
      { t: '', dot: 'rust', n: 'Pacific Park', d: '海上遊樂園', mapUrl: 'https://maps.google.com/?q=Pacific+Park+Santa+Monica+Pier' },
    ],
  },

  {
    num: '9',
    sub: '洛杉磯 Day 2',
    desc: 'Universal Studios Hollywood · Griffith Observatory',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Griffith_Observatory_from_the_air.jpg/1200px-Griffith_Observatory_from_the_air.jpg',
      caption: 'Griffith Observatory · Los Angeles',
    },
    tl: [
      { t: '9:00', dot: 'rust', n: 'Universal Studios Hollywood', d: '9:00–19:00 · 停車：3913 Lankershim Blvd, Studio City（$3 先付）', tag: '活動',
        mapUrl: 'https://maps.google.com/?q=Universal+Studios+Hollywood',
        webUrl: 'https://www.universalstudioshollywood.com/',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Universal_Studios_Hollywood_%28aerial%29.jpg/600px-Universal_Studios_Hollywood_%28aerial%29.jpg', caption: 'Universal Studios Hollywood' } },
      { t: '', dot: 'sky', n: 'LA Alhambra Airbnb', d: '1126 South Cordova St', tag: '住宿', mapUrl: 'https://maps.google.com/?q=1126+South+Cordova+Street+Alhambra+CA' },
      { t: '', dot: 'rust', n: 'Griffith Observatory', d: '夜間洛杉磯夜景 · 免費入場', mapUrl: 'https://maps.google.com/?q=Griffith+Observatory+Los+Angeles',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Griffith_Observatory_from_the_air.jpg/600px-Griffith_Observatory_from_the_air.jpg', caption: 'Griffith Observatory' } },
    ],
  },

  {
    num: '10',
    sub: '洛杉磯 Day 3',
    desc: 'Hollywood · Little Tokyo · Dodger Stadium',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/1200px-Hollywood_Sign_%28Zuschnitt%29.jpg',
      caption: 'Hollywood Sign · Los Angeles',
    },
    tl: [
      { t: '', dot: 'rust', n: 'Hollywood Sign', d: '洛杉磯地標 · 可步行到觀景點', mapUrl: 'https://maps.google.com/?q=Hollywood+Sign+Los+Angeles',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/600px-Hollywood_Sign_%28Zuschnitt%29.jpg', caption: 'Hollywood Sign' } },
      { t: '', dot: 'rust', n: 'Hollywood Walk of Fame', d: '好萊塢星光大道', mapUrl: 'https://maps.google.com/?q=Hollywood+Walk+of+Fame',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Walk_of_fame_ hollywood.jpg/600px-Walk_of_fame_ hollywood.jpg', caption: 'Hollywood Walk of Fame' } },
      { t: '', dot: 'rust', n: 'Angels Flight Railway', d: '世界最短鐵路 · 歷史地標', mapUrl: 'https://maps.app.goo.gl/CCGfskswfD2jYUNN9',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Angels_Flight_Railway_2019.jpg/600px-Angels_Flight_Railway_2019.jpg', caption: 'Angels Flight Railway' } },
      { t: '', dot: 'gray', n: 'Lunch — Grand Central Market', tag: '餐飲', food: [{ label: 'Grand Central Market', mapUrl: 'https://maps.google.com/?q=Grand+Central+Market+Los+Angeles' }],
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Central_Market_-_Los_Angeles_-_2013_%288677477268%29.jpg/600px-Grand_Central_Market_-_Los_Angeles_-_2013_%288677477268%29.jpg', caption: 'Grand Central Market' } },
      { t: '', dot: 'rust', n: 'Little Tokyo', d: '日本城 · 購物 & 美食', mapUrl: 'https://maps.google.com/?q=Little+Tokyo+Los+Angeles',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Little_Tokyo_sign_2017.jpg/600px-Little_Tokyo_sign_2017.jpg', caption: 'Little Tokyo' } },
      { t: '19:10', dot: 'rust', n: 'Dodger Stadium — Baseball Game', d: 'LA Dodgers · 開賽 19:10', tag: '活動',
        mapUrl: 'https://maps.google.com/?q=Dodger+Stadium+Los+Angeles',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Dodger_Stadium_from_Elysian_Park.jpg/600px-Dodger_Stadium_from_Elysian_Park.jpg', caption: 'Dodger Stadium' } },
    ],
  },

  {
    num: '11',
    sub: 'LA → California 1 → Monterey',
    desc: 'Big Sur · Bixby Creek Bridge · Carmel',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bixby_Creek_Bridge%2C_California%2C_USA_-_Aug_2013.jpg/1200px-Bixby_Creek_Bridge%2C_California%2C_USA_-_Aug_2013.jpg',
      caption: 'Bixby Creek Bridge · Big Sur',
    },
    tl: [
      { t: '', dot: 'sky', n: 'Alhambra Airbnb Check-out', tag: '住宿' },
      { t: '', dot: 'rust', n: 'Morro Bay T Pier', d: '沿海小鎮 · 海獺出沒', mapUrl: 'https://maps.google.com/?q=Morro+Bay+T+Pier+California',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Morro_Bay%2C_CA_9-04_%28209%29.jpg/600px-Morro_Bay%2C_CA_9-04_%28209%29.jpg', caption: 'Morro Bay' } },
      { t: '', dot: 'gray', n: 'Lunch', tag: '餐飲', food: [
        { label: "Rose's Bar and Grill", mapUrl: 'https://maps.google.com/?q=Rose+Bar+and+Grill+Morro+Bay' },
        { label: 'The Dutchie', mapUrl: 'https://maps.google.com/?q=The+Dutchie+Morro+Bay' },
      ]},
      { t: '', dot: 'rust', n: 'Big Sur', d: '加州最壯觀海岸線', mapUrl: 'https://maps.google.com/?q=Big+Sur+California',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/20100906_big_sur_mcway_falls_kirk_creek_0086.jpg/600px-20100906_big_sur_mcway_falls_kirk_creek_0086.jpg', caption: 'Big Sur Coast' } },
      { t: '', dot: 'rust', n: 'Bixby Creek Bridge', d: 'California 1 最著名橋梁', mapUrl: 'https://maps.google.com/?q=Bixby+Creek+Bridge+Big+Sur',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bixby_Creek_Bridge%2C_California%2C_USA_-_Aug_2013.jpg/600px-Bixby_Creek_Bridge%2C_California%2C_USA_-_Aug_2013.jpg', caption: 'Bixby Creek Bridge' } },
      { t: '', dot: 'rust', n: 'Hurricane Point Overlook', d: '壯觀海景觀景點', mapUrl: 'https://maps.google.com/?q=Hurricane+Point+Overlook+Big+Sur' },
      { t: '', dot: 'rust', n: 'Carmel-by-the-Sea', d: '童話小鎮 · Tuck Box · Ocean Ave', mapUrl: 'https://maps.google.com/?q=Carmel-by-the-Sea+California',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Carmel_main_street.jpg/600px-Carmel_main_street.jpg', caption: 'Carmel-by-the-Sea' } },
      { t: '', dot: 'gray', n: 'Dinner', tag: '餐飲', food: [{ label: 'TBD (Carmel / Monterey)' }] },
      { t: '', dot: 'sky', n: 'Padre Oaks Inn Check-in', d: '1278 Munras Avenue, Monterey, CA 93940', tag: '住宿', mapUrl: 'https://maps.google.com/?q=1278+Munras+Avenue+Monterey+CA' },
    ],
  },

  {
    num: '12',
    sub: 'Monterey → Grants Pass',
    desc: 'Avenue of the Giants · Redwood Forest · 約 9 小時 40 分鐘',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Avenue_of_the_Giants_1.jpg/1200px-Avenue_of_the_Giants_1.jpg',
      caption: 'Avenue of the Giants · Humboldt Redwoods',
    },
    tl: [
      { t: '', dot: 'sky', n: 'Padre Oaks Inn Check-out', d: 'Monterey', tag: '住宿' },
      { t: '', dot: 'rust', n: 'Drive to Ukiah', d: '約 4 小時 10 分鐘' },
      { t: '', dot: 'gray', n: 'Lunch', tag: '餐飲', food: [{ label: '連鎖餐廳 (Ukiah area)' }] },
      { t: '', dot: 'rust', n: 'Avenue of the Giants', d: '31 英里紅木森林公路 · Founders Grove · Bolling Grove', mapUrl: 'https://maps.google.com/?q=Avenue+of+the+Giants+California',
        imgs: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Avenue_of_the_Giants_1.jpg/600px-Avenue_of_the_Giants_1.jpg', cap: 'Avenue of the Giants' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Founders_Grove%2C_Humboldt_Redwoods_SP%2C_California.jpg/600px-Founders_Grove%2C_Humboldt_Redwoods_SP%2C_California.jpg', cap: 'Founders Grove Redwoods' },
        ] },
      { t: '', dot: 'gray', n: 'Dinner', tag: '餐飲', food: [{ label: '連鎖餐廳' }] },
      { t: '', dot: 'sky', n: 'Riverside Inn Check-in', d: '986 South West 6th Street, Grants Pass, OR 97526 · 約 5 小時 30 分鐘路程', tag: '住宿', mapUrl: 'https://maps.google.com/?q=986+SW+6th+Street+Grants+Pass+Oregon' },
    ],
  },

  {
    num: '13',
    sub: 'Grants Pass → Seattle',
    desc: 'Eugene · Portland · Woodburn Outlets · Seattle',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Voodoo_Doughnut_-_Portland%2C_Oregon_%282014%29.jpg/1200px-Voodoo_Doughnut_-_Portland%2C_Oregon_%282014%29.jpg',
      caption: 'Voodoo Doughnut · Portland',
    },
    tl: [
      { t: '', dot: 'sky', n: 'Riverside Inn Check-out', d: 'Grants Pass, Oregon', tag: '住宿' },
      { t: '', dot: 'rust', n: 'Eugene', d: '約 1 小時 47 分鐘', mapUrl: 'https://maps.google.com/?q=Eugene+Oregon' },
      { t: '', dot: 'gray', n: 'Lunch — 5th Street Public Market', tag: '餐飲', food: [{ label: '5th Street Public Market (Eugene)', mapUrl: 'https://maps.google.com/?q=5th+Street+Public+Market+Eugene+Oregon' }],
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Eugene_5th_Street_Market.jpg/600px-Eugene_5th_Street_Market.jpg', caption: '5th Street Public Market' } },
      { t: '', dot: 'rust', n: 'Portland', d: '約 1 小時 47 分鐘', mapUrl: 'https://maps.google.com/?q=Portland+Oregon' },
      { t: '', dot: 'rust', n: 'Voodoo Doughnut', d: '波特蘭必吃甜甜圈', mapUrl: 'https://maps.google.com/?q=Voodoo+Doughnut+Portland',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Voodoo_Doughnut_-_Portland%2C_Oregon_%282014%29.jpg/600px-Voodoo_Doughnut_-_Portland%2C_Oregon_%282014%29.jpg', caption: 'Voodoo Doughnut' } },
      { t: '', dot: 'rust', n: 'Portland Food Carts', d: '波特蘭特色美食車', mapUrl: 'https://maps.google.com/?q=Portland+Food+Carts', webUrl: 'https://www.travelportland.com/food-carts/pods/' },
      { t: '', dot: 'rust', n: 'Woodburn Premium Outlets', d: 'Oregon 免稅！購物 · 約 2 小時 50 分鐘路程', mapUrl: 'https://maps.google.com/?q=Woodburn+Premium+Outlets+Oregon' },
      { t: '', dot: 'sky', n: 'Seattle Airbnb Check-in', d: '6189 168th Place SW, Bellevue WA 98006', tag: '住宿', mapUrl: 'https://maps.google.com/?q=6189+168th+Place+SW+Bellevue+WA' },
    ],
  },

  {
    num: '14',
    sub: 'Seattle',
    desc: '交給姑姑安排！',
    cover: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Space_Needle002.jpg/1200px-Space_Needle002.jpg',
      caption: 'Space Needle · Seattle',
    },
    tl: [
      { t: '', dot: 'sky', n: 'Seattle Airbnb', d: '6189 168th Place SW, Bellevue WA', tag: '住宿', mapUrl: 'https://maps.google.com/?q=6189+168th+Place+SW+Bellevue+WA' },
      { t: '', dot: 'gray', n: 'Seattle Sightseeing', d: '行程交給姑姑安排 🙏',
        img: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Space_Needle002.jpg/600px-Space_Needle002.jpg', caption: 'Seattle Space Needle' } },
    ],
  },

  {
    num: '15',
    sub: '返台',
    desc: 'Return Car · SEA → SFO → TPE',
    tl: [
      { t: '16:00', dot: 'rust', n: 'Return Car at SEA', d: 'Seattle-Tacoma Airport · Alamo', mapUrl: 'https://maps.google.com/?q=Seattle+Tacoma+International+Airport' },
      { t: '16:30', dot: 'rust', n: 'SEA Airport Check-in', d: '提前報到 · United Airlines' },
      { t: '19:37', dot: 'rust', n: 'UA 737 Departs SEA', d: 'Seattle → San Francisco · 抵達 21:50' },
      { t: '23:20', dot: 'rust', n: 'UA 853 Departs SFO', d: 'San Francisco → Taipei · 13h 45m' },
    ],
  },
];