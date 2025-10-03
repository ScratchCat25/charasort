dataSetVersion = "2017-05-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by gender",
    key: "gender",
    tooltip: "Check this to restrict to certain genders.",
    checked: false,
    sub: [
      { name: "Male", tooltip: "Identifies as male", key: "male" },
      { name: "Female", tooltip: "Identifies as female", key: "female" },
      { name: "Non-binary", tooltip: "Anyone who does not identify as solely male or female", key: "enby" },
      { name: "Transgender", tooltip: "Identifies opposite to birth gender", key: "trans" },
      { name: "Cisgender", tooltip: "Identifies same gender as assigned at birth", key: "cis" },
      { name: "Assigned male at birth", tooltip: "Born a male", key: "amab" },
      { name: "Assigned female at birth", tooltip: "Born a female", key: "afab" },
    ]
  },
  {
    name: "Filter by game",
    key: "game",
    tooltip: "What game the characters are from.",
    checked: false,
    sub: [
      { name: "Original", key: "original" },
      { name: "Meltdown", key: "meltdown" },
      { name: "World", key: "world" },
      { name: "Subzero", key: "subzero" },
      { name: "Trainees/fan characters", tooltip: "Levels/songs not in the game yet.", key: "trainee" },
      { name: "Entities", tooltip: "Characters that aren't levels." key: "entity" },
    ]
  },
    {
    name: "Filter by difficulty",
    key: "difficulty",
    tooltip: "What in-game difficulty the characters are.",
    checked: false,
    sub: [
      { name: "Easy", key: "easy" },
      { name: "Normal", key: "normal" },
      { name: "Hard", key: "hard" },
      { name: "Harder", key: "harder" },
      { name: "Insane", key: "insane" },
      { name: "Demon", key: "demon" },
      { name: "Easier than easy", key: "easier" },
      { name: "Not applicable", key: "notapplicable"},
    ]
  },
  {
    name: "Filter by birth year",
    key: "age",
    tooltip: "What year the levels were born in.",
    checked: false,
    sub: [
      { name: "End of 2002", key: "2002" },
      { name: "End of 2003", key: "2003" },
      { name: "End of 2004", key: "2004" },
      { name: "End of 2005", key: "2005" },
      { name: "End of 2006", key: "2006" },
      { name: "End of 2007", key: "2007" },
      { name: "End of 2008", key: "2008" },
      { name: "End of 2009", key: "2009" },
      { name: "End of 2010", key: "2010" },
      { name: "End of 2011", key: "2011" },
      { name: "End of 2012", key: "2012" },
      { name: "Start of 2013", key: "2013" },
      { name: "Start of 2014", key: "2014" },
      { name: "Start of 2015", key: "2015" },
      { name: "Start of 2016", key: "2016" },
      { name: "Unknown", key: "unknown" }
    ]
  },
   {
    name: "Filter by MBTI",
    key: "mbti",
    tooltip: "MBTI types.",
    checked: false,
    sub: [
      { name: "INTJ", key: "intj" },
      { name: "INTP", key: "intp" },
      { name: "ENTJ", key: "entj" },
      { name: "ENTP", key: "entp" },
      { name: "INFJ", key: "infj" },
      { name: "INFP", key: "infp" },
      { name: "ENFJ", key: "enfj" },
      { name: "ENFP", key: "enfp" },
      { name: "ISTJ", key: "istj" },
      { name: "ISFJ", key: "isfj" },
      { name: "ESTJ", key: "estj" },
      { name: "ESFJ", key: "esfj" },
      { name: "ISTP", key: "istp" },
      { name: "ISFP", key: "isfp" },
      { name: "ESTP", key: "estp" },
      { name: "ESFP", key: "esfp" }
    ]
  },
  {
    name: "Remove spinoffs",
    key: "spinoff",
    tooltip: "Check this to remove all released levels not from the main game."
  },
  {
    name: "Remove entities",
    key: "entity",
    tooltip: "Check this to remove all entities."
  },
  {
    name: "Remove trainees/fan characters",
    key: "trainee",
    tooltip: "Check this to remove characters with songs/levels not yet added to the game."
  },
  {
    name: "Remove the Challenge",
    key: "challenge",
    tooltip: "Check this to remove the Challenge."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Stephanie/Stereo Madness",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["easy"],
      age: ["2012"],
      mbti: ["isfp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
     name: "Quinn/Back On Track",
    opts: {
      gender: ["male", "trans", "afab"],
      game: ["original"],
      difficulty: ["easy"],
      age: ["2011"],
      mbti: ["esfj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
     name: "Oliver/Polargeist",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["normal"],
      age: ["2010"],
      mbti: ["infp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Jade/Dry Out",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["normal"],
      age: ["2009"],
      mbti: ["entp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Skye/Base After Base",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["hard"],
      age: ["2009"],
      mbti: ["isfp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Lettie/Cant Let Go",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["hard"],
      age: ["2008"],
      mbti: ["esfj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Ned/Jumper",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["harder"],
      age: ["2008"],
      mbti: ["enfp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Tim/Time Machine",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["harder"],
      age: ["2007"],
      mbti: ["intp", "intj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Charlotte/Cycles",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["harder"],
      age: ["2007"],
      mbti: ["esfj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
 name: "Zachary/xStep",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["insane"],
      age: ["2006"],
      mbti: ["estp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
     name: "Candy/Clutterfunk",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["insane"],
      age: ["2005"],
      mbti: ["estj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
     name: "Juli/TOE",
    opts: {
      gender: ["FEmale", "cis", "AFAB"],
      game: ["original"],
      difficulty: ["insane"],
      age: ["2005"],
      mbti: ["entp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
     name: "Dylan/Electroman Adventures",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["insane"],
      age: ["2006"],
      mbti: ["esfj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
name: "Leo/Clubstep",
    opts: {
      gender: ["male", "cis", "amab", "enby"],
      game: ["original"],
      difficulty: ["demon"],
      age: ["2006"],
      mbti: ["esfp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Cute child/Electro/Electrodynamix",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["insane"],
      age: ["2005"],
      mbti: ["infj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Chloe/Hexagon Force",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["insane"],
      age: ["2005"],
      mbti: ["isfj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Callum/Blast Processing",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["harder"],
      age: ["2007"],
      mbti: ["esfj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Astra/TOE 2",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["demon"],
      age: ["2006"],
      mbti: ["enfj", "infj", "esfj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Geometrical Dominator",
    opts: {
      gender: ["male", "enby", "amab"],
      game: ["original"],
      difficulty: ["harder"],
      age: ["2007"],
      mbti: ["entp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Ares/Deadlocked",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["demon"],
      age: ["2005"],
      mbti: ["intp", "intj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Aspen/Fingerdash",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["insane"],
      age: ["2005"],
      mbti: ["infp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Dash",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["original"],
      difficulty: ["insane"],
      age: ["2005"],
      mbti: ["estp"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Meghan/Explorers",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["demon"],
      age: ["2004"],
      mbti: ["entj"],
      spinoff: false,
      entity: false,
      trainee: true,
      challenge: false,
    }
  },
  {
    name: "Eden/The Challenge",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["original"],
      difficulty: ["easier"],
      age: ["unknown"],
      mbti: ["istj"],
      spinoff: false,
      entity: false,
      trainee: false,
      challenge: true,
    }
  },
  {
    name: "Tiffany/TOE 3",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["trainee"],
      difficulty: ["notapplicable"],
      age: ["unknown"],
      mbti: ["intj"],
      spinoff: false,
      entity: false,
      trainee: true,
      challenge: false,
    }
  },
  {
    name: "Bella/TOE 4",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["trainee"],
      difficulty: ["notapplicable"],
      age: ["unknown"],
      mbti: ["esfj"],
      spinoff: false,
      entity: false,
      trainee: true,
      challenge: false,
    }
  },
  {
    name: "Morgan/The Seven Seas",
    opts: {
      gender: ["enby", "afab"],
      game: ["meltdown"],
      difficulty: ["easy"],
      age: ["2007"],
      mbti: ["infp"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Eric/Viking Arena",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["meltdown"],
      difficulty: ["normal"],
      age: ["2004"],
      mbti: ["esfj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
    }
  },
  {
    name: "Ash/Airborne Robots",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["meltdown"],
      difficulty: ["hard"],
      age: ["2006"],
      mbti: ["isfj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Kiara/Press Start",
    opts: {
      gender: ["female", "trans", "amab"],
      game: ["subzero"],
      difficulty: ["normal"],
      age: ["2005"],
      mbti: ["intp"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Feral cat/Nock Em",
    opts: {
      gender: ["enby", "afab"],
      game: ["subzero"],
      difficulty: ["hard"],
      age: ["2002"],
      mbti: ["entp"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Madeleine/Power Trip",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["subzero"],
      difficulty: ["harder"],
      age: ["2003"],
      mbti: ["istj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Yuri/Payload",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2016"],
      mbti: ["isfj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Michael/Lenire/Beast Mode",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2016"],
      mbti: ["istp"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Maria/Machina",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2016"],
      mbti: ["isfp"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Mallory/Years",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2015"],
      mbti: ["intj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Max/Frontlines",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2014"],
      mbti: ["esfp"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Space Pirates",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2015"],
      mbti: ["intj", "esfj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Sebastian/Striker",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2013"],
      mbti: ["estp"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Evie/Embers",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2015"],
      mbti: ["infj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Katie/Round 1",
    opts: {
      gender: ["female", "cis", "afab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2014"],
      mbti: ["estj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Moni/Monster Dance Off",
    opts: {
      gender: ["male", "cis", "amab"],
      game: ["world"],
      difficulty: ["easier"],
      age: ["2013"],
      mbti: ["enfj"],
      spinoff: true,
      entity: false,
      trainee: false,
      challenge: false,
    }
  },
  {
    name: "Yasaka Kanako",
    img: "nQ78Lz7.png",
    opts: { series: ["SWR", "Soku", "DS", "HM", "ISC"], stage: ["st6", "ex"] }
  },
  {
    name: "Moriya Suwako",
    img: "yJaD5ZV.png",
    opts: { series: ["SWR", "SA", "Soku", "DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "Nagae Iku",
    img: "xgAlECj.png",
    opts: { series: ["MoF", "Soku", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "Hinanawi Tenshi",
    img: "tZLYivt.png",
    opts: { series: ["MoF", "Soku", "DS", "HM", "ISC"], stage: ["st6"] }
  },
  {
    name: "Kisume",
    img: "VgJgaEf.png",
    opts: { series: ["SA", "DS"], stage: ["st1"] }
  },
  {
    name: "Kurodani Yamame",
    img: "sqgJ2St.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "Mizuhashi Parsee",
    img: "lkoAJod.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st2"] }
  },
  {
    name: "Hoshiguma Yuugi",
    img: "tDO653L.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st3"] }
  },
  {
    name: "Komeiji Satori",
    img: "dup7Nt6.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "Kaenbyou Rin (Orin)",
    img: "uQjbw1W.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4", "st5", "st6"] }
  },
  {
    name: "Reiuji Utsuho (Okuu)",
    img: "DfdaXPW.png",
    opts: { series: ["SA", "Soku", "DS", "HM"], stage: ["st6"] }
  },
  {
    name: "Komeiji Koishi",
    img: "wVCcens.png",
    opts: { series: ["SA", "DS", "HM", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Nazrin",
    img: "EpHQbiY.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st1", "st5"] }
  },
  {
    name: "Tatara Kogasa",
    img: "kJbv4dc.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st2", "ex"] }
  },
  {
    name: "Kumoi Ichirin",
    img: "Fyn5yVx.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"] }
  },
  {
    name: "Murasa Minamitsu",
    img: "39KYpvW.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "Toramaru Shou",
    img: "8bMDDAo.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "Hijiri Byakuren",
    img: "2ppPxny.png",
    opts: { series: ["UFO", "DS", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Houjuu Nue",
    img: "zL4S8Mj.png",
    opts: { series: ["UFO", "DS", "TD", "HM"], stage: ["st4", "st6", "ex"] }
  },
  {
    name: "Himekaidou Hatate",
    img: "LgvoTaJ.png",
    opts: { series: ["DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "Sunny Milk",
    img: "VbqXiB6.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Luna Child",
    img: "OBqgP48.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Star Sapphire",
    img: "sNw61ap.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Kasodani Kyouko",
    img: "sLiqEBA.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st2"] }
  },
  {
    name: "Miyako Yoshika",
    img: "6jq6eh6.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st3", "st4"] }
  },
  {
    name: "Kaku Seiga",
    img: "090hLPL.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st4"] }
  },
  {
    name: "Soga no Tojiko",
    img: "y0UXwFO.png",
    opts: { series: ["TD", "HM"], stage: ["st5"] }
  },
  {
    name: "Mononobe no Futo",
    img: "WTZ97LE.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st5"] }
  },
  {
    name: "Toyosatomimi no Miko",
    img: "3Xiqd22.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Futatsuiwa Mamizou",
    img: "gMpWdmA.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: { series: ["book", "HM", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Wakasagihime",
    img: "brWCLVx.png",
    opts: { series: ["DDC", "ISC"], stage: ["st1"] }
  },
  {
    name: "Sekibanki",
    img: "VAMLiJD.png",
    opts: { series: ["DDC", "ISC"], stage: ["st2"] }
  },
  {
    name: "Imaizumi Kagerou",
    img: "b5UMjD8.png",
    opts: { series: ["DDC", "ISC"], stage: ["st3"] }
  },
  {
    name: "Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "Kijin Seija",
    img: "16RUacj.png",
    opts: { series: ["DDC", "ISC"], stage: ["st5", "st6"] }
  },
  {
    name: "Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: { series: ["DDC", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Horikawa Raiko",
    img: "SLLEccR.png",
    opts: { series: ["DDC", "ISC"], stage: ["ex"] }
  },
  {
    name: "Usami Sumireko",
    img: "mc7ICW6.png",
    opts: { series: ["ULiL"], stage: ["st6"] }
  },
  {
    name: "Seiran",
    img: "0ra00WG.png",
    opts: { series: ["LoLK"], stage: ["st1"] }
  },
  {
    name: "Ringo",
    img: "xQOsFlZ.png",
    opts: { series: ["LoLK"], stage: ["st2"] }
  },
  {
    name: "Doremy Sweet",
    img: "rGS7dyn.png",
    opts: { series: ["LoLK"], stage: ["st3", "ex"] }
  },
  {
    name: "Kishin Sagume",
    img: "HLT338X.png",
    opts: { series: ["LoLK"], stage: ["st4"] }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: { series: ["LoLK"], stage: ["st5"] }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: { series: ["LoLK"], stage: ["st6", "ex"] }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: { series: ["LoLK"], stage: ["ex"] }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: { series: ["book"], stage: [] }
  },
  { name: "Tokiko", img: "Y4maOc8.png", opts: { series: ["book"], stage: [] } },
  {
    name: "Rei'sen (Manga)",
    img: "cWjCo2j.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: { series: ["book", "ULiL"], stage: ["st5"] }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: { series: ["HRtP"], stage: ["st1"] }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: { series: ["HRtP"], stage: ["st5"] }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: { series: ["HRtP"], stage: ["st5"] }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: { series: ["HRtP"], stage: ["st6"] }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: { series: ["HRtP"], stage: ["st6"] }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: { series: ["SoEW"], stage: ["st1", "ex"] }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: { series: ["SoEW"], stage: ["st2"] }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: ["st4"], pc98: true }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: { series: ["PoDD"], stage: [] } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: { series: ["PoDD"], stage: ["st5"] }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: { series: ["PoDD"], stage: ["st6"] }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: { series: ["LLS"], stage: ["st1"] }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: { series: ["LLS"], stage: ["st2"] }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: { series: ["LLS"], stage: ["st3"] }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: { series: ["LLS", "MS"], stage: ["st5", "st6"], pc98: true }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: { series: ["LLS"], stage: ["ex"] }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: { series: ["LLS"], stage: ["ex"] }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: { series: ["MS"], stage: ["st1"] }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: { series: ["MS"], stage: ["st2", "st4"] }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: { series: ["MS"], stage: ["st3", "ex"], pc98: true }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: { series: ["MS"], stage: ["st4"] }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: { series: ["MS"], stage: ["st4"] } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: { series: ["MS"], stage: ["st5"] }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: { series: ["MS"], stage: ["st6"] }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: { series: ["PoDD"], stage: [], notgirl: true }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"], notgirl: true }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: [], notgirl: true }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: { series: ["HRtP"], stage: ["st1"], notgirl: true }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: { series: ["HRtP"], stage: ["st3"], notgirl: true }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: { series: ["SoEW"], stage: ["ex"], notgirl: true }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: { series: ["Soku"], stage: ["st6"], notgirl: true }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: { series: ["book", "HM"], stage: [], notgirl: true }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: { series: ["book"], stage: [], notgirl: true }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: { series: ["Soku"], stage: [], notgirl: true }
  }
];
