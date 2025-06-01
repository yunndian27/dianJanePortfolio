new Vue({
  // 將哪個 HTML 元素轉成 Vue 元件
  el: '#app',
  // 元件資料
  data () {
    return {
      aboutInfos: [
        { parta: '前端擅長專業為 Sass 規劃響應式網頁版型、GSAP 製作動畫、JavaScript 撰寫互動、Vue 前端框架使用、MongoDB 資料應用...等各種程式語言，將前端技術發揮應用，如下方專題製作的旅遊論壇進行規劃與執行！' },
        { partb: '從視覺設計轉而投入前端網頁，跳脫自己的舒適圈，原因是我想呈現每個被用心設計的網頁，想挑戰各種響應比例、動態、互動等不同的技術開發，更期待 idea 的發想創造更多的火花。' }
      ],
      jobBoxs: [
        { year: '2017.7 - 2020.11', company: '全球華人股份有限公司 (1111人力銀行)', name: '平面設計', task: '平面設計、專案網站視覺，與各部門協作，時程安排管理。' },
        { year: '2016.3 - 2017.3', company: '網奕資訊科技股份有限公司', name: '美術設計', task: '形象設計、專案活動視覺規劃、影片剪輯建議、網站視覺設計。' },
        { year: '2015.8 - 2016.1', company: '台灣知識庫股份有限公司', name: '多媒體動畫設計師', task: '製作教學動畫短片，把靜態的畫面打造活潑動畫內容。' }
      ],
      websites: [
        { link: 'https://yunndian27.github.io/advance_info/', imgUrl: './images/website/website01.jpg',tool: '一頁式 設計&切版', info: '詠騰企業', explain: '因家人有需求要能展示產品於網路上的需求，我自告奮勇要挑戰製作，從一個現有的logo形象去延伸整個視覺頁面，達成想法的溝通後，執行切版製作與後續更新資料的維護。' },
        { link: 'https://www.1111.com.tw/BlueCollarChoice/', imgUrl: './images/website/website02.jpg',tool: '一頁式活動 設計&切版', info: '藍工精選｜藍領職涯跨巔峰 轉職錄取超放心', explain: '負責設計與切版，從企劃初步wireframe設計梳理成合理的頁面順序，精緻每個 icon 代表的產業類別，整體顏色則以清爽薄荷綠與重點黃相互呈現；更因應手機版在往下滑頁面時，將四大類按鈕固定在下方。' },
        //{ link: 'https://yunndian27.github.io/backpacking-front/#/', imgUrl: './images/website/website001.jpg',tool: '頁面設計&前端切版', info: '背包客棧旅遊論壇 前台', explain: '使用 Vue 搭配 U I框架 Quasar，並搭配 SASS 編譯撰寫樣式，搭配各種 NPM 套件使用。' },
        //{ link: 'https://yunndian27.github.io/backpacking-front/#/admin/', imgUrl: './images/website/website002.jpg',tool: '頁面設計&前端切版', info: '背包客棧旅遊論壇 後台', explain: '後臺部屬在 Heroku，資料庫則以 mongoDB 搭配撰寫，並使用 Vue 官方推薦的 AJAX 套件 axios 做資料交換。' },
        //{ link: 'https://yunndian27.github.io/vue_hw-pomodoro/#/', imgUrl: './images/website/website003.jpg',tool: '頁面設計&前端切版', info: 'Vue 番茄鐘', explain: '使用 Vue 元件概念搭配 BootstrapVue 切版，並使用 Vue CLI 開發工具，可做時間倒數，新增刪除等功能。' },
        //{ link: 'https://yunndian27.github.io/css_layout_youtube/', imgUrl: './images/website/website004.jpg',tool: '頁面設計&前端切版', info: 'Youtube 切版', explain: '以寬1920的版面作為絕對定位切版練習。' },
        { link: 'https://yunndian27.github.io/summerKeydown/', imgUrl: './images/website/website005.jpg',tool: '頁面設計&切版', info: '夏日練打蟲子', explain: '用 JavaScript 設計一個練習靜下心打敲鍵盤對應字母的遊戲，並以夏日打蚊蟲作為遊戲發想。' },
        { link: 'https://yunndian27.github.io/englishFlipCard/', imgUrl: './images/website/website006.jpg',tool: '頁面設計&切版', info: '英文對對碰', explain: '用 jQuery 以及 CSS 3D 製作英文對對碰遊戲，翻左邊動物圖須以右邊英文字相同，每場遊戲都會對亂數出現' },
        { link: 'https://yunndian27.github.io/sendHerHome/', imgUrl: './images/website/website007.jpg',tool: '頁面設計&切版', info: '專注力遊戲 | 送阿布回家', explain: '延伸《怪獸電力公司》故事劇情送小女孩阿布回家，並以 jQuery 的 DOM 操作和動畫設計的專注力遊戲！' },
        { link: 'https://github.com/yunndian27/trailfitnesstw0503', imgUrl: './images/website/website008.jpg',tool: 'line robot', info: 'line機器人 | 健身步道', explain: '串接政府公開資料，使用 Node.js 製作查詢步道資料的 LINE 機器人，並部署到 Heroku。' }
      ],
      dailyUis: [
        { imgUrl: './images/DailyUI/DailyUI_01.jpg', tool:'一頁式活動 設計&切版', title: '菜鳥不吃虧 助理自救會', text: '為傳達菜鳥也可以輕鬆找到好工作，所以頁面設計得較為活潑，透過沉穩藍打造自救會安穩感，活潑橘傳達可以輕鬆達成擺脫菜鳥稱號，營造接地氣得活力感。' },
        { imgUrl: './images/DailyUI/DailyUI_02.jpg', tool:'一頁式活動 設計&切版', title: '遠端工作特輯｜ByeBye啦!!通勤人生!', text: '為了打造互動式遠端工作探討，設計圖文的測驗豐富整體的內容，排版與切版都挑戰以較新的方式呈現。' },
        { imgUrl: './images/DailyUI/DailyUI_03.jpg', tool:'一頁式活動 設計&切版', title: '慢食靜好愛地球', text: '因朋友公司活動需求，首次接案製作網頁設計與切版，從提供的海報插畫延伸至網頁整體視覺，延續整體感以利活動推廣，並加上動態讓整體更加活潑親民。' },
        { imgUrl: './images/DailyUI/DailyUI_001.jpg', tool:'Daily UI 挑戰', title: '寵物監視 註冊頁', text: '使用寵物監視器前需先註冊。' },
        { imgUrl: './images/DailyUI/DailyUI_002.jpg', tool:'Daily UI 挑戰', title: '商品購物頁', text: '購買商品流程，確認後提供選擇付費方式。' },
        { imgUrl: './images/DailyUI/DailyUI_003.jpg', tool:'Daily UI 挑戰', title: '旅行論壇 註冊頁', text: '電腦版註冊選擇畫面，提供多元註冊方式。' },
        { imgUrl: './images/DailyUI/DailyUI_004.jpg', tool:'Daily UI 挑戰', title: '旅行論壇 手機版 註冊頁', text: '註冊選擇畫面，提供多元註冊方式。' },
        { imgUrl: './images/DailyUI/DailyUI_005.jpg', tool:'Daily UI 挑戰', title: '購買旅行套組商品', text: '步驟式購物流程，一步步帶入填寫商品。' },
        { imgUrl: './images/DailyUI/DailyUI_006.jpg', tool:'Daily UI 挑戰', title: '購買旅行套組商品', text: '使用寵物監視器前需先註冊。' }
      ],
      graphics: [
        { imgUrl: './images/graphic/graphic001.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic/graphic002.jpg', title: '海報設計', tool: 'Illustrator', text: '設計以大數字提醒90後，應積極找尋人生藍圖。' },
        { imgUrl: './images/graphic/graphic003.jpg', title: '旅遊電子報', tool: 'Photoshop', text: '設定宣傳旅遊行程。' },
        { imgUrl: './images/graphic/graphic004.jpg', title: '海外招商傳單', tool: 'Photoshop ＆ Illustrator', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic/graphic005.jpg', title: '電子宣傳', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic/graphic006.jpg', title: '職訓局課程宣傳', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic/graphic007.jpg', title: '襪子廣告宣傳', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic/graphic008.jpg', title: '記者會背板設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic/graphic009.jpg', title: '招攬新會員宣傳圖', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' }
      ],
      illustras: [
        { imgUrl: './images/illustration/illustration001.jpg', tool: 'Illustrator', title: '星球' },
        { imgUrl: './images/illustration/illustration002.jpg', tool: 'Illustrator', title: '山峰' },
        { imgUrl: './images/illustration/illustration003.jpg', tool: 'Illustrator', title: '橄欖商標' },
        { imgUrl: './images/illustration/illustration004.jpg', tool: 'Illustrator', title: '鯉魚旗' },
        { imgUrl: './images/illustration/illustration005.jpg', tool: 'Illustrator', title: '印地女孩' },
        { imgUrl: './images/illustration/illustration006.jpg', tool: 'Illustrator', title: '幾何動物' },
        { imgUrl: './images/illustration/illustration007.jpg', tool: 'Procreate', title: '靈魂之窗' },
        { imgUrl: './images/illustration/illustration008.jpg', tool: 'Procreate', title: '黃昏海邊' },
        { imgUrl: './images/illustration/illustration009.jpg', tool: 'Procreate', title: '生命之櫻' },
        { imgUrl: './images/illustration/illustration010.jpg', tool: 'Procreate', title: '蜂蜜與熊' },
        { imgUrl: './images/illustration/illustration011.jpg', tool: 'Procreate', title: '得體生活--Line貼圖' },
        { imgUrl: './images/illustration/line03.jpg', tool: 'Procreate', title: '刺蝟麗麗--Line貼圖' }
      ],
      skills:[
        {imgUrl:'./images/icon/icon-devicon-plain_photoshop.svg',title: 'Adobe Photoshop', text:'修圖、去背或合成'},
        {imgUrl:'./images/icon/icon-simple-icons_adobeillustrator.svg',title: 'Adobe Illustrator', text:'印刷文宣、活動專案輸出物'},
        {imgUrl:'./images/icon/icon-solar_figma-bold-duotone.svg',title: 'Figma', text:'網頁設計、介面排版'},
        {imgUrl:'./images/icon/icon-simple-icons_adobeindesign.svg',title: 'Adobe Indesign', text:'刊物、雜誌排版'},
        {imgUrl:'./images/icon/icon-icomoon-free_html-five.svg',title: 'HTML5 / CSS3', text:'能建構語意化網頁結構與響應式排版，具備實際開發經驗'},
        {imgUrl:'./images/icon/icon-fa6-brands_sass.svg',title: 'Sass', text:'能運用變數、巢狀結構與 mixin 來提高樣式的重用性與可維護性'},
        {imgUrl:'./images/icon/icon-bi_bootstrap-fill.svg',title: 'Bootstrap', text:'熟悉網格系統快速建立響應式版面'},
        {imgUrl:'./images/icon/icon-devicon-plain_jquery-wordmark.svg',title: 'jQuery', text:'操作DOM、處理事件'},
        {imgUrl:'/images/icon/icon-ri_javascript-fill.svg',title: 'JavaScript', text:'能使用條件判斷與迴圈來實現基本邏輯'},
        {imgUrl:'./images/icon/icon-simple-icons_git.svg',title: 'Git', text:'進行基本的版本控制'},
      ]
    }
  },
  // 元件使用到的 function
  methods: {
    
  },
  // 計算屬性
  computed:{
  }
  // ...其他
})
