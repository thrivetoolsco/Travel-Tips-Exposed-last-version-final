import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Camera, ArrowUp } from "lucide-react";
import imgCa1 from "@assets/20151207_193710_1773065104995.jpg";
import imgCa2 from "@assets/DSC_6323_1773065105011.JPG";
import imgCa3 from "@assets/20200819_073322_1773065105021.jpg";
import imgCa4 from "@assets/20190521_204134_1773065105031.jpg";
import imgCa5 from "@assets/20190912_214028_1773065105042.jpg";
import imgCa6 from "@assets/20151119_114728_1773065105052.jpg";
import imgCa7 from "@assets/20200903_195218_1773065105065.jpg";
import imgCa8 from "@assets/20250520_124520_1773065105075.jpg";
import imgCa9 from "@assets/20210616_192247_1773065105086.jpg";
import imgCa10 from "@assets/20151204_130302_1773065105096.jpg";
import imgCa11 from "@assets/295718_10150850256595596_749030595_20892884_1595593293_n-1_1773065105107.jpg";
import imgCa12 from "@assets/20201019_162853_1773065113459.JPG";
import imgCa13 from "@assets/20201011_172546_Original_1773065133247.jpg";
import imgCa14 from "@assets/20200903_195924_1773065133271.jpg";
import imgCa15 from "@assets/20190522_194500_1773065133282.jpg";
import imgCa16 from "@assets/20190617_210908_1773065252576.jpg";
import imgCa17 from "@assets/20200824_062913_1773065252587.jpg";
import imgCa18 from "@assets/IMG_1945_1773065252597.JPG";
import imgCa19 from "@assets/2018-07-18_16_18_41.468_1773065252605.JPG";
import imgCa20 from "@assets/IMG_1884_1773065252614.JPG";
import imgCa21 from "@assets/IMG_2177~3_1773065252623.JPG";
import imgCa22 from "@assets/IMG013_1773065252636.jpg";
import imgCa23 from "@assets/IMG_2053_1773065252647.JPG";
import imgCa24 from "@assets/IMG_2537_1773065252668.JPG";
import imgCa25 from "@assets/IMG_20200713_114937_1773065252702.jpg";
import imgCa26 from "@assets/IMG_1951_1773065252723.jpg";
import imgCa27 from "@assets/IMG_20241007_055933_973_1773065252740.jpg";
import imgCa28 from "@assets/IMG_2180~2_1773065252752.jpg";
import imgCa29 from "@assets/IMG_1895_1773065252769.JPG";
import imgCa30 from "@assets/IMG009_1773065252778.jpg";
import imgCa31 from "@assets/IMG012_1773065252789.jpg";
import imgCa32 from "@assets/received_2289262894475677_1773065252798.jpeg";
import imgCa33 from "@assets/received_10155721876940596_1773065252808.jpeg";
import imgMo1 from "@assets/IMG_1297_1773065713784.JPG";
import imgMo2 from "@assets/IMG_6715_1773065713805.JPG";
import imgMo3 from "@assets/IMG_5413_1773065713859.jpg";
import imgMo4 from "@assets/IMG_5284_1773172642828.JPG";
import imgMo5 from "@assets/IMG_5278_1773172642835.JPG";
import imgMo6 from "@assets/IMG_3846_1773172642842.jpg";
import imgMo7 from "@assets/IMG_3028_1773172642850.JPG";
import imgMo8 from "@assets/IMG_2725_1773172642857.JPG";
import imgMo9 from "@assets/IMG_2527_1773172642865.JPG";
import imgMo10 from "@assets/IMG_3026_1773172642873.JPG";
import imgMo11 from "@assets/IMG_2525_1773172642881.JPG";
import imgMo12 from "@assets/IMG_2434_1773172642891.JPG";
import imgMo13 from "@assets/IMG_2187_1773172642900.JPG";
import imgMo14 from "@assets/IMG_1888_1773172642908.JPG";
import imgMo15 from "@assets/IMG_1873_1773172642916.PNG";
import imgMo16 from "@assets/IMG_1830_1773172642924.JPG";
import imgMo17 from "@assets/IMG_1306_2_1773172642931.JPG";
import imgMo18 from "@assets/IMG_1297_2_1773172642948.JPG";
import imgGa1 from "@assets/DSCN8809_1773173919480.JPG";
import imgGa2 from "@assets/DSCN8795_1773173919501.JPG";
import imgGa3 from "@assets/DSCN8758_(1)_1773173919513.JPG";
import imgGa4 from "@assets/DSCN8754_(1)_1773173919528.JPG";
import imgGa5 from "@assets/DSCN8794_1773173919539.JPG";
import imgGa6 from "@assets/DSCN8699_1773173919576.JPG";
import imgGa7 from "@assets/DSCN8751_1773173919589.JPG";
import imgGa8 from "@assets/DSCN8692_1773173919601.JPG";
import imgGa9 from "@assets/DSCN8691_1773173919615.JPG";
import imgGa10 from "@assets/DSCN8690_1773173919627.JPG";
import imgGa11 from "@assets/DSCN8686_1773173919638.JPG";
import imgGa12 from "@assets/DSCN8685_1773173919647.JPG";
import imgGa13 from "@assets/DSCN8667_1773173919658.JPG";
import imgGa14 from "@assets/DSCN8659_1773173919670.JPG";
import imgGa15 from "@assets/DSCN8626_1773173919684.JPG";
import imgGa16 from "@assets/DSCN8656_1773173919696.JPG";
import imgGa17 from "@assets/DSCN8624_1773173919709.JPG";
import imgGa18 from "@assets/DSCN8623_1773173919721.JPG";
import imgGa19 from "@assets/DSCN8503_1773174186269.JPG";
import imgGa20 from "@assets/DSCN8506_1773174186259.JPG";
import imgGa21 from "@assets/DSCN8507_1773174186251.JPG";
import imgGa22 from "@assets/DSCN8508_1773174186242.JPG";
import imgGa23 from "@assets/DSCN8509_1773174186234.JPG";
import imgGa24 from "@assets/DSCN8510_1773174186226.JPG";
import imgGa25 from "@assets/DSCN8528_1773174186218.JPG";
import imgGa26 from "@assets/DSCN8536_1773174186209.JPG";
import imgGa27 from "@assets/DSCN8543_1773174186202.JPG";
import imgGa28 from "@assets/DSCN8545_1773174186194.JPG";
import imgGa29 from "@assets/DSCN8567_1773174186186.JPG";
import imgGa30 from "@assets/DSCN8588_1773174186179.JPG";
import imgGa31 from "@assets/DSCN8595_1773174186172.JPG";
import imgGa32 from "@assets/DSCN8608_1773174186159.JPG";
import imgJa1 from "@assets/jamaica-263_1773173598174.jpg";
import imgJa2 from "@assets/jamaica-222_1773173598200.jpg";
import imgJa3 from "@assets/jamaica-209_1773173598214.jpg";
import imgJa4 from "@assets/jamaica-137_1773173598227.jpg";
import imgJa5 from "@assets/jamaica_ngmhhn-107_1773173598237.jpg";
import imgPe1 from "@assets/IMG_2333_1773173146730.JPG";
import imgPe2 from "@assets/IMG_2330_1773173146748.JPG";
import imgPe3 from "@assets/IMG_2329_1773173146756.JPG";
import imgPe4 from "@assets/IMG_2322_1773173146764.JPG";
import imgPe5 from "@assets/IMG_2317_1773173146772.JPG";
import imgPe6 from "@assets/IMG_2319_1773173146784.JPG";
import imgPe7 from "@assets/IMG_2314_1773173146791.JPG";
import imgPe8 from "@assets/IMG_2309_1773173146798.JPG";
import imgPe9 from "@assets/IMG_2306_1773173146806.JPG";
import imgPe10 from "@assets/IMG_2304_1773173146815.JPG";
import imgPe11 from "@assets/IMG_2305_1773173146823.JPG";
import imgPe12 from "@assets/IMG_2303_1773173146831.JPG";
import imgPe13 from "@assets/IMG_2300_1773173146839.JPG";
import imgPe14 from "@assets/IMG_2299_1773173146847.JPG";
import imgPe15 from "@assets/IMG_2301_1773173146855.JPG";
import imgPe16 from "@assets/IMG_2297_1773173146863.JPG";
import imgIn1 from "@assets/20230602_184608_Original_1773069017785.jpg";
import imgIn2 from "@assets/IMG-20230516-WA0011_Original_1773069017795.jpg";
import imgIn3 from "@assets/IMG-20230616-WA0019_Original_1773069017821.jpg";
import imgIn4 from "@assets/IMG-20230515-WA0053_Original_1773069017829.jpg";
import imgIn5 from "@assets/IMG-20230516-WA0018_Original_1773069017837.jpg";
import imgIn6 from "@assets/IMG-20230515-WA0035_Original_1773069017845.jpg";
import imgIn7 from "@assets/IMG-20230522-WA0056_Original_1773069017853.jpg";
import imgIn8 from "@assets/IMG-20230522-WA0054_Original_1773069017861.jpg";
import imgIn9 from "@assets/IMG-20230530-WA0025_Original_1773069017877.jpg";
import imgIn10 from "@assets/IMG-20230528-WA0014_Original_1773069017885.jpg";
import imgIn11 from "@assets/IMG-20230515-WA0063_Original_1773069017895.jpg";
import imgIn12 from "@assets/IMG-20230528-WA0019_Original~2_1773069017904.jpg";
import imgIn13 from "@assets/IMG-20230515-WA0057_Original_1773069017912.jpg";
import imgIn14 from "@assets/IMG-20230516-WA0007_Original_1773069017920.jpg";
import imgIn15 from "@assets/IMG-20230522-WA0030_Original_1773069017936.jpg";
import imgIn16 from "@assets/IMG-20230616-WA0026_Original_1773069017944.jpg";
import imgIn17 from "@assets/IMG-20230515-WA0032_Original_1773069017953.jpg";
import imgIn18 from "@assets/20230506_114552_Original_1773080040788.jpg";
import imgIn19 from "@assets/IMG-20230505-WA0018_Original_1773080040792.jpg";
import imgIn21 from "@assets/IMG-20230505-WA0020_Original_1773080040793.jpg";
import imgIn22 from "@assets/20230519_155442_Original_1773080040793.jpg";
import imgIn23 from "@assets/IMG-20230522-WA0048_Original_1773171507059.jpg";
import imgIn24 from "@assets/IMG-20230516-WA0017_Original_1773171507068.jpg";
import imgIn25 from "@assets/IMG-20230515-WA0048_Original_1773171507086.jpg";
import imgIn26 from "@assets/IMG-20230515-WA0023_Original_1773171507103.jpg";
import imgIn27 from "@assets/IMG-20230515-WA0004_Original_1773171507111.jpg";
import imgIn28 from "@assets/IMG-20230512-WA0005_Original_1773171507118.jpg";
import imgIn29 from "@assets/IMG-20230511-WA0000_Original_1773171507127.jpg";
import imgIn30 from "@assets/IMG-20230505-WA0025_Original_1773171507135.jpg";
import imgIn31 from "@assets/IMG-20230505-WA0013_Original_1773171507144.jpg";
import imgIn32 from "@assets/IMG-20230505-WA0023_Original_1773171507152.jpg";
import imgIn33 from "@assets/IMG-20230505-WA0007_Original_1773171507159.jpg";
import imgIn34 from "@assets/IMG-20230505-WA0006_Original_1773171507167.jpg";
import imgIn35 from "@assets/IMG-20230504-WA0062_Original_1773171507175.jpg";
import imgIn36 from "@assets/IMG-20230504-WA0061_Original_1773171507183.jpg";
import imgIn37 from "@assets/IMG-20230504-WA0068_Original_1773171507191.jpg";
import imgIn38 from "@assets/IMG-20230504-WA0057_Original_1773171507200.jpg";
import imgIn39 from "@assets/IMG-20230504-WA0056_Original_1773171507208.jpg";
import imgIn40 from "@assets/IMG-20230504-WA0047_Original_1773171886478.jpg";
import imgIn41 from "@assets/IMG-20230504-WA0053_Original_1773171886572.jpg";
import imgIn42 from "@assets/IMG-20230504-WA0045_Original_1773171886582.jpg";
import imgIn43 from "@assets/IMG-20230504-WA0044_Original_1773171886590.jpg";
import imgIn44 from "@assets/IMG-20230504-WA0042_Original_1773171886598.jpg";
import imgIn45 from "@assets/IMG-20230504-WA0032_Original_1773171886607.jpg";
import imgIn46 from "@assets/IMG-20230504-WA0020_Original_1773171886615.jpg";
import imgIn47 from "@assets/IMG-20230504-WA0001_Original_1773171886640.jpg";
import imgIn48 from "@assets/IMG-20230429-WA0023_Original_1773171886648.jpg";
import imgIn49 from "@assets/IMG-20230429-WA0018_Original_1773171886656.jpg";
import imgIn50 from "@assets/IMG-20230429-WA0012_Original_1773171886664.jpg";
import imgIn51 from "@assets/IMG-20230429-WA0011_Original_1773171886673.jpg";
import imgIn52 from "@assets/20230606_145136_Original_1773171886682.jpg";
import imgIn53 from "@assets/20230606_144342_Original_1773171886691.jpg";
import imgIn54 from "@assets/20230606_142106_Original_1773171886700.jpg";
import imgIn55 from "@assets/20230602_201853_Original_1773171886709.jpg";
import imgIn56 from "@assets/20230602_181315_Original_1773171886718.jpg";
import imgIn57 from "@assets/20230516_113503_Original_1773171886726.jpg";
import imgIn58 from "@assets/20230515_094323_Original_1773171886735.jpg";
import imgIn59 from "@assets/20230514_154128_Original_1773171886745.jpg";
import imgIn60 from "@assets/20230510_121722_Original_1773172177874.jpg";
import imgIn61 from "@assets/20230505_165415_Original_1773172204602.jpg";
import imgIn62 from "@assets/20230505_165406_Original_1773172204630.jpg";
import imgIn63 from "@assets/20230505_160828_Original_1773172204638.jpg";
import imgIn64 from "@assets/20230505_163815_Original_1773172204648.jpg";
import imgIn65 from "@assets/20230505_115303_Original_1773172204657.jpg";
import imgIn66 from "@assets/20230504_164441_Original_1773172204665.jpg";
import imgIn67 from "@assets/20230504_170238_Original_1773172204676.jpg";
import imgIn68 from "@assets/20230504_113421_Original_1773172204684.jpg";
import imgIn69 from "@assets/20230504_080121_Original_1773172204694.jpg";
import imgIn70 from "@assets/20230503_124447_Original_2_1773172204703.jpg";
import imgIn71 from "@assets/20230429_140639_Original_2_1773172204713.jpg";
import imgIn72 from "@assets/20230428_134054_Original_2_1773172204721.jpg";
import imgIn73 from "@assets/20230428_133952_Original_2_1773172204728.jpg";
import imgIn74 from "@assets/20230501_212021_Original_1773172204736.jpg";
import imgId1 from "@assets/Screenshot_20260304_084113_Drive_1773081913245.jpg";
import imgId2 from "@assets/Screenshot_20260120_134406_Photos~2_1773081913246.jpg";
import imgId3 from "@assets/lv_0_20260104142247_1773081913247.jpg";
import imgId4 from "@assets/IMG-20251221-WA0001_1773081913248.jpg";
import imgId5 from "@assets/20260103_152216_1773081913248.jpg";
import imgId6 from "@assets/20260102_154015_1773081913249.jpg";
import imgId7 from "@assets/20251230_194420_1773081913250.jpg";
import imgId8 from "@assets/20251223_224423_1773081913250.jpg";
import imgEu1 from "@assets/A_woman_with_brown_curly_hair__playing_shamanic_dr_delpmaspu_1773088332059.png";
import imgUs1 from "@assets/1000038773_1773079797890.jpg";
import imgUs2 from "@assets/1000038772_1773079797891.jpg";
import imgUs3 from "@assets/1000038771_1773079797891.jpg";
import imgUs4 from "@assets/DSCN9329_1773169036686.JPG";
import imgUs5 from "@assets/DSCN9248_1773169036711.JPG";
import imgUs6 from "@assets/DSCN9408_1773169036721.JPG";
import imgUs7 from "@assets/DSCN9451_1773169036735.JPG";
import imgUs8 from "@assets/Las_Vegas-104_1773169036743.jpg";
import imgUs9 from "@assets/SantaMonica-133_1773169036752.jpg";

const albums = [
  {
    slug: "indonesia",
    country: "Indonesia",
    count: 24,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-491.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-491.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-485.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-486.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-487.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-488.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-489.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-490.jpg",
      imgId1, imgId2, imgId3, imgId4, imgId5, imgId6, imgId7, imgId8,
      "/indonesia-video-1.mp4",
      "/indonesia-video-2.mp4",
      "/indonesia-video-3.mp4",
      "/indonesia-video-4.mp4",
      "/indonesia-video-5.mp4",
      "/indonesia-video-6.mp4",
      "/indonesia-video-7.mp4",
      "/indonesia-video-8.mp4",
      "/indonesia-video-9.mp4",
    ],
  },
  {
    slug: "canada",
    country: "Canada",
    count: 58,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-550.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-550.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-523.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-524.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-525.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-526.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-527.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-528.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-529.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-530.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-531.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-532.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-533.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-534.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-535.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-536.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-537.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-538.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-539.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-540.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-541.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-542.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-543.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-544.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-545.jpg",
      imgCa1,
      imgCa2,
      imgCa3,
      imgCa4,
      imgCa5,
      imgCa6,
      imgCa7,
      imgCa8,
      imgCa9,
      imgCa10,
      imgCa11,
      imgCa12,
      imgCa13,
      imgCa14,
      imgCa15,
      imgCa16,
      imgCa17,
      imgCa18,
      imgCa19,
      imgCa20,
      imgCa21,
      imgCa22,
      imgCa23,
      imgCa24,
      imgCa25,
      imgCa26,
      imgCa27,
      imgCa28,
      imgCa29,
      imgCa30,
      imgCa31,
      imgCa32,
      imgCa33,
      "/canada-farm.mp4",
    ],
  },
  {
    slug: "usa",
    country: "USA",
    count: 9,
    cover: imgUs9,
    images: [
      imgUs4,
      imgUs5,
      imgUs6,
      imgUs7,
      imgUs8,
      imgUs9,
      imgUs1,
      imgUs2,
      imgUs3,
    ],
  },
  {
    slug: "jamaica",
    country: "Jamaica",
    count: 5,
    cover: imgJa2,
    images: [imgJa1, imgJa2, imgJa3, imgJa4, imgJa5],
  },
  {
    slug: "morocco",
    country: "Morocco",
    count: 18,
    cover: imgMo14,
    images: [
      imgMo1, imgMo2, imgMo3, imgMo4, imgMo5, imgMo6, imgMo7, imgMo8, imgMo9,
      imgMo10, imgMo11, imgMo12, imgMo13, imgMo14, imgMo15, imgMo16, imgMo17, imgMo18,
    ],
  },
  {
    slug: "peru",
    country: "Peru",
    count: 16,
    cover: imgPe7,
    captions: { 4: "Wachuma (San Pedro)" },
    images: [
      imgPe1, imgPe2, imgPe3, imgPe4, imgPe5, imgPe6, imgPe7, imgPe8,
      imgPe9, imgPe10, imgPe11, imgPe12, imgPe13, imgPe14, imgPe15, imgPe16,
    ],
  },
  {
    slug: "india",
    country: "India",
    count: 73,
    cover: imgIn30,
    images: [
      imgIn1, imgIn2, imgIn3, imgIn4, imgIn5, imgIn6, imgIn7, imgIn8, imgIn9,
      imgIn10, imgIn11, imgIn12, imgIn13, imgIn14, imgIn15, imgIn16, imgIn17,
      imgIn18, imgIn19, imgIn21, imgIn22,
      imgIn23, imgIn24, imgIn25, imgIn26, imgIn27, imgIn28, imgIn29, imgIn30,
      imgIn31, imgIn32, imgIn33, imgIn34, imgIn35, imgIn36, imgIn37, imgIn38, imgIn39,
      imgIn40, imgIn41, imgIn42, imgIn43, imgIn44, imgIn45, imgIn46, imgIn47,
      imgIn48, imgIn49, imgIn50, imgIn51, imgIn52, imgIn53, imgIn54, imgIn55,
      imgIn56, imgIn57, imgIn58, imgIn59, imgIn60, imgIn61, imgIn62, imgIn63,
      imgIn64, imgIn65, imgIn66, imgIn67, imgIn68, imgIn69, imgIn70, imgIn71,
      imgIn72, imgIn73, imgIn74,
      "/india-video-1.mp4",
      "/india-video-2.mp4",
      "/india-video-3.mp4",
      "/india-video-4.mp4",
      "/india-video-5.mp4",
    ],
  },
  {
    slug: "europe",
    country: "Europe",
    count: 11,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-682_1.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-682_1.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-672.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-673.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-674.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-676.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-677.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-678.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-679.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-680.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-681.jpg",
      imgEu1,
    ],
  },
  {
    slug: "gabon",
    country: "Gabon",
    count: 32,
    cover: imgGa3,
    images: [
      imgGa1, imgGa2, imgGa3, imgGa4, imgGa5, imgGa6, imgGa7, imgGa8, imgGa9,
      imgGa10, imgGa11, imgGa12, imgGa13, imgGa14, imgGa15, imgGa16, imgGa17, imgGa18,
      imgGa19, imgGa20, imgGa21, imgGa22, imgGa23, imgGa24, imgGa25, imgGa26, imgGa27,
      imgGa28, imgGa29, imgGa30, imgGa31, imgGa32,
      "/gabon-video-1.mp4",
      "/gabon-video-2.mp4",
    ],
  },
];

interface LightboxState {
  albumSlug: string;
  imageIndex: number;
}

const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".mov") || src.endsWith(".webm");

function GalleryImage({ src, alt, onLoad }: { src: string; alt: string; onLoad?: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) return null;

  if (isVideo(src)) {
    const poster = src.replace(/\.mp4$/, "-poster.jpg");
    return (
      <div className="w-full h-full relative flex items-center justify-center bg-black">
        <img
          src={poster}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          onLoad={() => onLoad?.()}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
            <svg className="w-5 h-5 text-white fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      onLoad={() => { setLoaded(true); onLoad?.(); }}
      onError={() => setError(true)}
    />
  );
}

export default function VisualJourneys() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleAlbumClick = (slug: string) => {
    const next = activeAlbum === slug ? null : slug;
    setActiveAlbum(next);
    if (next) {
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && albums.find((a) => a.slug === hash)) {
      setActiveAlbum(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const navigateLightbox = (dir: number) => {
    if (!lightbox) return;
    const album = albums.find((a) => a.slug === lightbox.albumSlug);
    if (!album) return;
    const newIndex = (lightbox.imageIndex + dir + album.images.length) % album.images.length;
    setLightbox({ ...lightbox, imageIndex: newIndex });
  };

  const openLightbox = (albumSlug: string, imageIndex: number) => {
    setLightbox({ albumSlug, imageIndex });
  };

  const currentAlbum = lightbox ? albums.find((a) => a.slug === lightbox.albumSlug) : null;

  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "#1A1008" }}
        data-testid="visual-journeys-hero"
      >
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.45) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(245, 158, 11, 0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-display)" }}>
            Photo Albums
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="heading-visual-journeys"
          >
            Visual Journeys
          </h1>
          <p className="text-white/60 mt-4 max-w-lg mx-auto">
            Raw, unfiltered snapshots from the road. Click any album to explore.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16" data-testid="albums-grid">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-20">
          {albums.map((album) => (
            <button
              key={album.slug}
              id={album.slug}
              onClick={() => handleAlbumClick(album.slug)}
              data-testid={`button-album-${album.slug}`}
              className="group relative rounded-xl overflow-hidden aspect-square focus:outline-none focus:ring-2 focus:ring-[#C4541C]"
            >
              <img
                src={album.cover}
                alt={album.country}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 transition-all duration-300 ${activeAlbum === album.slug ? "bg-[#C4541C]/30" : "bg-gradient-to-t from-black/80 via-black/20 to-transparent"}`} />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <span
                  className="text-white font-bold text-sm block"
                  style={{ fontFamily: "var(--font-display)" }}
                  data-testid={`text-country-${album.slug}`}
                >
                  {album.country}
                </span>
                <span className="text-white/60 text-xs flex items-center gap-1">
                  <Camera size={10} />
                  {album.count} photos
                </span>
              </div>
              {activeAlbum === album.slug && (
                <div className="absolute top-2 right-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div ref={galleryRef} className="scroll-mt-6">
        {albums.map((album) => (
          <div
            key={album.slug}
            data-testid={`album-gallery-${album.slug}`}
            className={`mb-16 transition-all duration-300 ${activeAlbum === album.slug ? "block" : "hidden"}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
              <h2
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-serif)" }}
                data-testid={`heading-album-${album.slug}`}
              >
                {album.country} <span className="text-muted-foreground text-lg font-normal">· {album.count} photos</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {album.images.map((imgUrl, idx) => (
                <button
                  key={imgUrl}
                  onClick={() => openLightbox(album.slug, idx)}
                  data-testid={`button-image-${album.slug}-${idx}`}
                  className="group relative aspect-square rounded-lg overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-[#C4541C]"
                >
                  <GalleryImage src={imgUrl} alt={`${album.country} ${idx + 1}`} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                </button>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                data-testid={`button-back-to-top-${album.slug}`}
                className="flex items-center gap-2 px-6 py-3 border border-[#C4541C]/40 text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <ArrowUp size={14} />
                Back to Top
              </button>
            </div>
          </div>
        ))}

        {!activeAlbum && (
          <div className="text-center py-10 text-muted-foreground" data-testid="text-select-album">
            <Camera size={40} className="mx-auto mb-4 opacity-30" />
            <p style={{ fontFamily: "var(--font-display)" }}>Click an album above to view the photos</p>
          </div>
        )}
        </div>
      </div>

      {lightbox && currentAlbum && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          data-testid="lightbox-modal"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            data-testid="button-close-lightbox"
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            data-testid="button-lightbox-prev"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-black/30 rounded-full z-50"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            data-testid="button-lightbox-next"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-black/30 rounded-full z-50"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-5xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            {isVideo(currentAlbum.images[lightbox.imageIndex]) ? (
              <video
                key={currentAlbum.images[lightbox.imageIndex]}
                src={currentAlbum.images[lightbox.imageIndex]}
                poster={currentAlbum.images[lightbox.imageIndex].replace(/\.mp4$/, "-poster.jpg")}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-full rounded-lg"
                data-testid="video-lightbox"
              />
            ) : (
              <img
                src={currentAlbum.images[lightbox.imageIndex]}
                alt={`${currentAlbum.country} ${lightbox.imageIndex + 1}`}
                className="max-h-[85vh] max-w-full object-contain rounded-lg"
                data-testid="img-lightbox"
              />
            )}
            <p className="text-white/50 text-sm text-center mt-3" style={{ fontFamily: "var(--font-display)" }}>
              {currentAlbum.captions?.[lightbox.imageIndex] ? (
                <span>{currentAlbum.captions[lightbox.imageIndex]} · {currentAlbum.country} {lightbox.imageIndex + 1} / {currentAlbum.images.length}</span>
              ) : (
                <span>{currentAlbum.country}, {lightbox.imageIndex + 1} / {currentAlbum.images.length}</span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
