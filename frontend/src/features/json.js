 const products = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        desc: "5.5 inch display",
        price: 999,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672571247/online%20shop/iphone_14_pro_xdrflu.webp",
        description: 'The iPhone 14 Plus comes with 6.1-inch OLED display with 120Hz refresh rate and Apples improved Bionic A16 processor.On the back there is a Triple camera setup with 48MP main camera.Prices start from 999$.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (86.97 %)",
        pros4: "Supports wireless charging",

        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,h_400,w_400/v1672830201/online%20shop/iphone_14_pro-purple_s1eu5f.jpg",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672832837/online%20shop/iphone_14_pro-white-400_eoruue.webp",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672830200/online%20shop/iphone_14_pro-gold_y6l4s0.webp"
        ,
        software: "IOS",
        rating: 8.8,

    },
    {
        id: 2,
        name: "OnePlus 10t",
        desc: "6.5 inch display",
        price: 699,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,h_400,w_400/v1672571248/online%20shop/iphone_14_pro_cdxdf0.png",
        description: 'The OnePlus comes with 6.7-inch AMOLED display with 120Hz refresh rate and Qualcomm Snapdragon 8+ Gen 1 processor. Specs also include 4800mAh battery with 150W charging speed, Triple camera setup on the back with 50MP main sensor and 16MP front selfie camera.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (89.62 %)",
        pros4: "High pixel density screen (526 PPI)"
        ,
        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672841646/online%20shop/oneplus_10t_black_ek9yfv.jpg",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672841645/online%20shop/oneplus_10t_white_a5g0p3.webp",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672841645/online%20shop/oneplus_10t_back_a3yyyl.jpg",
        software: "Android",
        rating: 8.1,


    },
    {
        id: 3,
        name: "Galaxy s22 Ultra",
        desc: "6.8 inch display",
        price: 899,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,h_400,w_400/v1672571247/online%20shop/galaxy_s22_ultra_zvfres.jpg",
        description: 'The Samsung Galaxy S22 Ultra is the headliner of the S22 series. Its the first S series phone to include Samsungs S Pen. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 1 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage. In the camera department, a quad-camera setup is presented with two telephoto sensors.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (89.62 %)",
        pros4: "High pixel density screen (526 PPI)",
        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672842428/online%20shop/galaxy_s22_ultra_white_eb9aww.jpg",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672842426/online%20shop/galaxy_s22_ultra_back_jlifzl.jpg",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,h_400,w_400/v1672842428/online%20shop/galaxy_s22_ultra_red_xpgrw7.webp"
        ,
        software: "Android",
        rating: 9.2,


    },
    {
        id: 4,
        name: "iPhone 13 Pro Max",
        desc: "6.7 inch display",
        price: 899,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672842942/online%20shop/iphone_13_pro-max_front_botryv.jpg",
        description: 'The iPhone 13 Pro Max is Apples biggest phone in the lineup with a massive, 6.7 screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. The benefit of such a gigantic phone is that it also comes with the biggest battery of all iPhone 13 series. Apple also introduces improvements to all three cameras on the Pro Max, the wide, ultra-wide and telephoto zoom ones, but there is no periscope style long-range zoom like on many Android phones.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (87.97 %)",
        pros4: "Supports wireless charging",

        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672842942/online%20shop/iphone_13_pro-max_gray_daifoe.webp",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672842942/online%20shop/iphone_14_pro-max_blue_kkdmwf.webp",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,h_400,w_400/v1672842942/online%20shop/iphone_13_pro-max_pink_b1yrv9.jpg"
        ,
        software: "IOS",
        rating: 9.3,

    }, {
        id: 5,
        name: "Galaxy s22 plus",
        desc: "6.8 inch display",
        price: 699,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672843849/online%20shop/galaxy_s22_black_qrhxlf.webp",
        description: 'The Samsung Galaxy S22+ is the bigger sibling of the regular Galaxy S22 with it’s 6.6-inch Dynamic AMOLED display with 120Hz refresh rate. Specs also include Qualcomm Snapdragon 8 Gen 1 processor, 4500mAh battery with 45Wcharging speed and Triple camera setup on the back.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (89.62 %)",
        pros4: "High pixel density screen (526 PPI)",
        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672843849/online%20shop/galaxy_s22_black_qrhxlf.webp",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672843850/online%20shop/galaxy_s22_gg1lpf.png",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672843850/online%20shop/galaxy_s22_white_gvklwa.jpg"
        ,
        software: "Android",
        rating: 8,


    }, {
        id: 6,
        name: "Xiaomi 11 mi Ultra",
        desc: "6.9 inch display",
        price: 849,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672844978/online%20shop/xiamoi_11_ultra_szygq7.webp",
        description: 'The most obvious design feature of the Xiaomi Mi 11 Ultra is the humongous camera bump on the back of the phone. Placed next to the triple camera system (more on this later) theres a 1.1-inch 126 x 294 color AMOLED display. It has an always-on feature, it can display notifications, and it also acts like a mirror when you take a selfie using the main camera system. Its a really interesting solution and were itching to try it out in a real-life scenario. The tiny display is also quite bright with a peak brightness of 450 nits. Speaking of displays, the Mi 11 Ultra comes equipped with a top-of-the-line 120Hz 6.81-inch main AMOLED panel. Its a curved display with a resolution of 3200 x 1440 pixels and a 20:9 aspect ratio. Xiaomi cites 900 nits typical brightness and up to 1,700 nits peak brightness, and theres also HDR10+ and Dolby Vision baked into the panel.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (91.52 %)",
        pros4: "High pixel density screen (526 PPI)",
        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672844978/online%20shop/xiamoi_11_ultra_szygq7.webp",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672844979/online%20shop/xiamoi_11_ultra_1_wewgkx.jpg",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,h_400,w_400/v1672844977/online%20shop/xiaomi-mi-11-ultra-white_c4m7g1.jpg"
        ,
        software: "Android",
        rating: 8.9,


    }, {
        id: 7,
        name: "iPhone 14 Pro Max",
        desc: "6.7 inch display",
        price: 1099,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672924448/online%20shop/iphone_14_pro_max_gold_njulcf.jpg",
        description: 'The iPhone 14 Plus comes with 6.7-inch OLED display with 120Hz refresh rate and Apples improved Bionic A16 processor.On the back there is a Triple camera setup with 48MP main camera.Prices start from 1099$.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (88.45 %)",
        pros4: "Supports wireless charging",
        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672571247/online%20shop/iphone_14_pro_xdrflu.webp",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672832837/online%20shop/iphone_14_pro-white-400_eoruue.webp",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672830200/online%20shop/iphone_14_pro-gold_y6l4s0.webp"
        ,
        software: "IOS",
        rating: 9,


    }, {
        id: 8,
        name: "Galaxy z Flip 4",
        desc: "6.7 inch display",
        price: 799,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672925251/online%20shop/galaxy_z_flip_4_3_elr49c.avif",
        description: 'The Samsung Galaxy Z Flip 4 comes with 6.7-inch Dynamic AMOLED display with 120Hz refresh rate and Qualcomm Snapdragon 8+ Gen 1 processor. The outer display is 1.9-inch, the battery is 3700mAh and on the back there is Dual camera setup with 12MP main sensor.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (85.52 %)",
        pros4: "High pixel density screen (526 PPI)",
        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672925251/online%20shop/galaxy_z_flip_4_5_fe9etu.png",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,h_400/v1672925251/online%20shop/galaxy_z_flip_4_2_rxcoc4.png",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672925074/online%20shop/galaxy_z_flip_4_gxoy92.png"
        ,
        software: "Android",
        rating: 8,


    },
    {
        id: 9,
        name: "Galaxy Fold 4",
        desc: "7.6 inch display",
        price: 1199,
        image: "https://res.cloudinary.com/dabvgy03h/image/upload/v1672925509/online%20shop/galaxy_fold_peepcz.webp",
        description: 'The Samsung Galaxy Z Fold 4 is is the successor of the Galaxy Z Fold 3 and it comes with 6.2-inch outer display and big 7.6-inch Dynamic AMOLED display when unfolded. Specs also include Qualcomm Snapdragon 8+ Gen 1 processor, 4400mAh battery and Triple camera setup on the back with 50MP main sensor.',
        pros1: "High refresh rate (120Hz)",
        pros2: "5G ready",
        pros3: "High screen-to-body ratio (90.79 %)",
        pros4: "High pixel density screen (526 PPI)",
        img1: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672925822/online%20shop/galaxy_fold_3_yeyrpx.jpg",
        img2: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672925822/online%20shop/galaxy_fold_1_yvg5ev.webp",
        img3: "https://res.cloudinary.com/dabvgy03h/image/upload/c_scale,w_400/v1672925823/online%20shop/galaxy_fold_2_qcfiot.png"
        ,
        software: "Android",
        rating: 10,


    },
]


export default products