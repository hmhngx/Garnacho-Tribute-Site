import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y, Virtual } from 'swiper/modules';
import confetti from 'canvas-confetti';
import { FaHeart, FaPlay, FaExpand, FaChevronLeft, FaChevronRight, FaShareAlt, FaTwitter, FaFacebook, FaChevronDown, FaChevronUp, FaArrowDown } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// MU Brand Colors
const MU_COLORS = {
  red: '#DA291C',      // Pantone 485 red
  black: '#000000',     // Black
  white: '#FFFFFF',     // White
  gold: '#FFE500',      // Gold accent
};

const KitDisplay = () => {
  const [votes, setVotes] = useState({ yes: 0, no: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [posterExpanded, setPosterExpanded] = useState(false);
  const [expandedKitIndex, setExpandedKitIndex] = useState(null);
  const [currentKitIndex, setCurrentKitIndex] = useState(0);
  const [droppingHearts, setDroppingHearts] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const swiperRef = useRef(null);
  const heroRef = useRef(null);
  const kitCardRefs = useRef({});

  // Helper function to generate YouTube search URL
  const getYouTubeUrl = (season, kitType) => {
    const searchQuery = encodeURIComponent(`Alejandro Garnacho ${season} ${kitType} highlights`);
    return `https://www.youtube.com/results?search_query=${searchQuery}`;
  };

  // Enhanced kit data with stats, milestones, and narrative
  const kitsData = [
    {
      name: "HOME KIT 20/21",
      imageUrl: "/kits/debutszn.png",
      description: "The first season at Manchester United U18. Garnacho was a key player for the U18 team.",
      player: "Alejandro Garnacho",
      season: "2020-21",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2020-21", "U18 highlights"),
      stats: { goals: 5, assists: 3, appearances: 12 },
      milestone: "First steps in English football",
      narrative: "At just 16 years old, Alejandro made the bold move from Atletico Madrid's academy to Manchester United. This kit represents his first steps in English football, adapting to a new culture, language, and style of play.",
      quote: "The dream starts here",
      features: [
        "First season at Manchester United U18",
        "First season in England",
        "First goals for Manchester United U18",
        "First assist for Manchester United U18"
      ]
    },
    {
      name: "HOME KIT 20/21",
      imageUrl: "/kits/debutszn2.png",
      description: "The first season at Manchester United U18. Garnacho was a key player for the U18 team.",
      player: "Alejandro Garnacho",
      season: "2020-21",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2020-21", "U18 highlights"),
      stats: { goals: 5, assists: 3, appearances: 12 },
      milestone: "First steps in English football",
      narrative: "At just 16 years old, Alejandro made the bold move from Atletico Madrid's academy to Manchester United. This kit represents his first steps in English football, adapting to a new culture, language, and style of play.",
      quote: "The dream starts here",
      features: [
        "First season at Manchester United U18",
        "First season in England",
        "First goals for Manchester United U18",
        "First assist for Manchester United U18"
      ]
    },
    {
      name: "AWAY KIT 20/21",
      imageUrl: "/kits/debutszn3.png",
      description: "The first season at Manchester United U18. Garnacho was a key player for the U18 team.",
      player: "Alejandro Garnacho",
      season: "2020-21",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2020-21", "U18 highlights"),
      stats: { goals: 5, assists: 3, appearances: 12 },
      milestone: "First steps in English football",
      narrative: "At just 16 years old, Alejandro made the bold move from Atletico Madrid's academy to Manchester United. This kit represents his first steps in English football, adapting to a new culture, language, and style of play.",
      quote: "The dream starts here",
      features: [
        "First season at Manchester United U18",
        "First season in England",
        "First goals for Manchester United U18",
        "First assist for Manchester United U18"
      ]
    },
    {
      name: "HOME KIT 21/22",
      imageUrl: "/kits/u18(2).png",
      description: "Alejandro Garnacho's second season at Manchester United U18, where he emerged as a key player with dynamic performances.",
      player: "Alejandro Garnacho",
      season: "2021-22",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2021-22", "U18 highlights"),
      stats: { goals: 12, assists: 8, appearances: 18 },
      milestone: "Rising through the ranks",
      narrative: "In his second season, Garnacho's talent became undeniable. His pace, skill, and eye for goal caught the attention of first-team coaches. This was the season that proved he was destined for bigger things.",
      quote: "Hard work pays off",
      features: [
        "Second season at Manchester United U18",
        "Second season in England",
        "More games for Manchester United U18",
        "More goals for Manchester United U18",
      ]
    },
    {
      name: "HOME KIT 21/22",
      imageUrl: "/kits/u18(3).png",
      description: "The second season at Manchester United U18. Garnacho was a key player for the U18 team.",
      player: "Alejandro Garnacho",
      season: "2021-22",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2021-22", "U18 highlights"),
      stats: { goals: 12, assists: 8, appearances: 18 },
      milestone: "Rising through the ranks",
      narrative: "In his second season, Garnacho's talent became undeniable. His pace, skill, and eye for goal caught the attention of first-team coaches. This was the season that proved he was destined for bigger things.",
      quote: "Hard work pays off",
      features: [
        "Second season at Manchester United U18",
        "Second season in England",
        "More games for Manchester United U18",
        "More goals for Manchester United U18",
      ]
    },
    {
      name: "AWAY KIT 21/22",
      imageUrl: "/kits/u18.png",
      description: "The second season at Manchester United U18. Garnacho was a key player for the U18 team.",
      player: "Alejandro Garnacho",
      season: "2021-22",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2021-22", "U18 highlights"),
      stats: { goals: 12, assists: 8, appearances: 18 },
      milestone: "Rising through the ranks",
      narrative: "In his second season, Garnacho's talent became undeniable. His pace, skill, and eye for goal caught the attention of first-team coaches. This was the season that proved he was destined for bigger things.",
      quote: "Hard work pays off",
      features: [
        "Second season at Manchester United U18",
        "Second season in England",
        "More games for Manchester United U18",
        "More goals for Manchester United U18",
      ]
    },
    {
      name: "HOME KIT 21/22",
      imageUrl: "/kits/first.png",
      description: "First title as a professional footballer for Manchester United U18.",
      player: "Alejandro Garnacho",
      season: "2021-22",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2021-22", "U18 title highlights"),
      stats: { goals: 12, assists: 8, appearances: 18 },
      milestone: "First professional title",
      narrative: "The moment that changed everything. Winning the U18 Premier League title with Manchester United was Garnacho's first taste of silverware. The celebrations at Old Trafford were just the beginning.",
      quote: "Champions are made here",
      features: [
        "First title as a professional footballer for Manchester United U18",
        "First title in England",
        "First title for Manchester United U18",
        "Best young player of the year for Manchester United U18",
      ]
    },
    {
      name: "NUMBER 75 KIT",
      imageUrl: "/kits/number75.png",
      description: "Garnacho's number 75 kit.",
      player: "Alejandro Garnacho",
      season: "2021-22",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2021-22", "debut first team highlights"),
      stats: { goals: 0, assists: 0, appearances: 1 },
      milestone: "First team debut",
      narrative: "April 28, 2022. The day a dream came true. Coming on as a substitute against Chelsea, Garnacho made his Premier League debut wearing the number 75. The Theatre of Dreams welcomed its newest star.",
      quote: "A dream come true",
      features: [
        "Debut for Manchester United first team",
        "First match in the Premier League for Manchester United first team",
      ]
    },
    {
      name: "NUMBER 75 AWAYKIT",
      imageUrl: "/kits/2122away75.png",
      description: "Garnacho's number 75 kit.",
      player: "Alejandro Garnacho",
      season: "2021-22",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2021-22", "debut first team highlights"),
      stats: { goals: 0, assists: 0, appearances: 2 },
      milestone: "First team debut",
      narrative: "April 28, 2022. The day a dream came true. Coming on as a substitute against Chelsea, Garnacho made his Premier League debut wearing the number 75. The Theatre of Dreams welcomed its newest star.",
      quote: "A dream come true",
      features: [
        "Last match of the season 2021-22 for Manchester United first team",
        "Second match in the Premier League for Manchester United first team",
      ]
    },
    {
      name: "U18 SPAIN KIT",
      imageUrl: "/kits/spain.png",
      description: "Garnacho's U18 Spain kit.",
      player: "Alejandro Garnacho",
      season: "2021-22",
      kitType: "U18 Spain Kit",
      videoUrl: getYouTubeUrl("2021-22", "Spain U18 highlights"),
      stats: { goals: 2, assists: 1, appearances: 3 },
      milestone: "International debut",
      narrative: "Representing Spain at U18 level, Garnacho showcased his talent on the international stage. Though he would later choose Argentina, these early caps showed his versatility and promise.",
      quote: "Representing with pride",
      features: [
        "First match for U18 Spain",
        "First international match for U18 Spain",
      ]
    },
    {
      name: "HOME KIT 22/23",
      imageUrl: "/kits/2223(1).png",
      description: "Garnacho's home kit for the 2022-23 season.",
      player: "Alejandro Garnacho",
      season: "2022-23",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2022-23", "highlights"),
      stats: { goals: 5, assists: 6, appearances: 34 },
      milestone: "Breakthrough season",
      narrative: "The 2022-23 season marked Garnacho's true breakthrough. Under Erik ten Hag, he became a regular first-team player, scoring crucial goals and providing assists that helped United return to the Champions League.",
      quote: "Breaking through barriers",
      features: [
        "First match for the 2022-23 season",
        "First international match for the 2022-23 season",
        "First goal for the 2022-23 season",
        "First assist for the 2022-23 season",
      ]
    },
    {
      name: "HOME KIT 22/23",
      imageUrl: "/kits/2223(2).png",
      description: "Garnacho's home kit for the 2022-23 season.",
      player: "Alejandro Garnacho",
      season: "2022-23",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2022-23", "Old Trafford highlights"),
      stats: { goals: 5, assists: 6, appearances: 34 },
      milestone: "First Old Trafford goal",
      narrative: "Scoring his first goal at the Theatre of Dreams was a moment Garnacho will never forget. The roar of 75,000 fans celebrating his name - this is what he worked for.",
      quote: "The Theatre of Dreams",
      features: [
        "First match for the 2022-23 season",
        "First title with the Manchester United first team",
        "First goal at Old Trafford for the 2022-23 season",
        "First assist at Old Trafford for the 2022-23 season",
      ]
    },
    {
      name: "AWAY KIT 22/23",
      imageUrl: "/kits/2223.png",
      description: "Garnacho's away kit for the 2022-23 season.",
      player: "Alejandro Garnacho",
      season: "2022-23",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2022-23", "Europa League highlights"),
      stats: { goals: 5, assists: 6, appearances: 34 },
      milestone: "Europa League debut",
      narrative: "Playing alongside his idol Cristiano Ronaldo in the Europa League was surreal. Learning from one of the greatest players of all time, Garnacho absorbed every moment, every piece of advice.",
      quote: "Learning from legends",
      features: [
        "First match for the 2022-23 season",
        "First match with his idol Cristiano Ronaldo",
        "First goal at Europa League for the 2022-23 season",
      ]
    },
    {
      name: "AWAY KIT 22/23",
      imageUrl: "/kits/2223away.png",
      description: "Garnacho's away kit for the 2022-23 season.",
      player: "Alejandro Garnacho",
      season: "2022-23",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2022-23", "highlights"),
      stats: { goals: 5, assists: 6, appearances: 34 },
      milestone: "Breakthrough season",
      narrative: "The 2022-23 season marked Garnacho's true breakthrough. Under Erik ten Hag, he became a regular first-team player, scoring crucial goals and providing assists that helped United return to the Champions League.",
      quote: "Breaking through barriers",
      features: [
        "First match for the 2022-23 season", 
        "First international match for the 2022-23 season",
        "First goal for the 2022-23 season",
        "First assist for the 2022-23 season",
      ]
    },
    {
      name: "AWAY KIT 22/23",
      imageUrl: "/kits/2223away(1).png",
      description: "Garnacho's away kit for the 2022-23 season.",
      player: "Alejandro Garnacho",
      season: "2022-23",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2022-23", "highlights"),
      stats: { goals: 5, assists: 6, appearances: 34 },
      milestone: "Breakthrough season",
      narrative: "The 2022-23 season marked Garnacho's true breakthrough. Under Erik ten Hag, he became a regular first-team player, scoring crucial goals and providing assists that helped United return to the Champions League.",
      quote: "Breaking through barriers",
      features: [
        "First match for the 2022-23 season", 
        "First international match for the 2022-23 season",
        "First goal for the 2022-23 season",
        "First assist for the 2022-23 season",
      ]
    },
    {
      name: "U20 ARGENTINA KIT",
      imageUrl: "/kits/argenu20.png",
      description: "Garnacho's U20 Argentina kit.",
      player: "Alejandro Garnacho",
      season: "2021-22",
      kitType: "U20 Argentina Kit",
      videoUrl: getYouTubeUrl("2021-22", "Argentina U20 highlights"),
      stats: { goals: 3, assists: 2, appearances: 5 },
      milestone: "Argentina U20 debut",
      narrative: "Choosing Argentina over Spain was a decision from the heart. Representing the country of his heritage, Garnacho felt at home in the blue and white stripes, playing alongside future stars.",
      quote: "Playing for the heart",
      features: [
        "First match for U20 Argentina",
        "First international match for U20 Argentina",
        "First goal for U20 Argentina",
        "First assist for U20 Argentina",
      ]
    },
    {
      name: "ARGENTINA KIT",
      imageUrl: "/kits/argen1.png",
      description: "Garnacho's Argentina kit.",
      player: "Alejandro Garnacho",
      season: "2022-23",
      kitType: "Argentina Kit",
      videoUrl: getYouTubeUrl("2022-23", "Argentina highlights"),
      stats: { goals: 0, assists: 1, appearances: 4 },
      milestone: "Playing alongside Messi",
      narrative: "The moment every young Argentine dreams of - sharing the pitch with Lionel Messi. For Garnacho, this wasn't just a game, it was history. Learning from the greatest, playing for the world champions.",
      quote: "Playing with greatness",
      features: [
        "First match with Lionel Messi",
        "First international match for Argentina",
        "Number 28 for Argentina national team",
        "First matches for Argentina national team",
      ]
    },
    {
      name: "ARGENTINA KIT",
      imageUrl: "/kits/argen2.png",
      description: "Garnacho's Argentina kit.",
      player: "Alejandro Garnacho",
      season: "2022-23",
      kitType: "Argentina Kit",
      videoUrl: getYouTubeUrl("2022-23", "Argentina highlights"),
      stats: { goals: 0, assists: 1, appearances: 4 },
      milestone: "Playing alongside Messi",
      narrative: "The moment every young Argentine dreams of - sharing the pitch with Lionel Messi. For Garnacho, this wasn't just a game, it was history. Learning from the greatest, playing for the world champions.",
      quote: "Playing with greatness",
      features: [
        "Second match with Lionel Messi",
        "Second international match for Argentina",
        "Number 28 for Argentina national team",
        "First highlight for Argentina national team",
      ]
    },
    {
      name: "FRIENDLY MATCH KIT 23/24",
      imageUrl: "/kits/friendly.png",
      description: "Garnacho's friendly match kit for the 2023-24 season.",
      player: "Alejandro Garnacho",
      season: "2023-24",
      kitType: "Friendly Match Kit",
      videoUrl: getYouTubeUrl("2023-24", "friendly match highlights"),
      stats: { goals: 1, assists: 2, appearances: 2 },
      milestone: "Pre-season brilliance",
      narrative: "Pre-season friendlies showed the world what was coming. Garnacho's blistering pace, mesmerizing dribbles, and clinical finishing left fans and pundits in awe. The season ahead would be special.",
      quote: "Setting the stage",
      features: [
        "Outstanding performance in the friendly match",
        "Crazy speed and dribbling skills",
        "Impressive control and passing skills",
        "Contribution to the team's victory",
      ]
    },
    {
      name: "HOME KIT 23/24",
      imageUrl: "/kits/2324.png",
      description: "Garnacho's home kit for the 2023-24 season.",
      player: "Alejandro Garnacho",
      season: "2023-24",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2023-24", "FA Cup highlights"),
      stats: { goals: 10, assists: 5, appearances: 50 },
      milestone: "FA Cup winner",
      narrative: "May 25, 2024. Wembley Stadium. FA Cup Final. Garnacho scored the opening goal as Manchester United lifted the FA Cup, ending a trophy drought. This was the season that cemented his legacy at the club.",
      quote: "Champions again",
      features: [
        "Breakthrough season for the Manchester United first team",
        "FA Cup final goal",
        "FA Cup winning season",
      ]
    },
    {
      name: "HOME KIT 23/24",
      imageUrl: "/kits/2324(3).png",
      description: "Garnacho's home kit for the 2023-24 season.",
      player: "Alejandro Garnacho",
      season: "2023-24",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2023-24", "bicycle goal Everton highlights"),
      stats: { goals: 10, assists: 5, appearances: 50 },
      milestone: "Puskas Award winner",
      narrative: "November 26, 2023. Goodison Park. The goal that stunned the world. An overhead kick so audacious, so perfect, it won the Puskas Award. Ronaldo's celebration, the world's admiration - this was Garnacho announcing himself to the world.",
      quote: "A moment of magic",
      features: [
        "Bicycle puskas-winning goal against Everton",
        "Goal of the season of English Premier League",
        "Goal of the month of English Premier League",
        "Ronaldo's style goal",
      ]
    },
    {
      name: "AWAY KIT 23/24",
      imageUrl: "/kits/2324(2).png",
      description: "Garnacho's away kit for the 2023-24 season.",
      player: "Alejandro Garnacho",
      season: "2023-24",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2023-24", "Champions League Galatasaray highlights"),
      stats: { goals: 10, assists: 5, appearances: 50 },
      milestone: "Champions League debut",
      narrative: "The Champions League anthem, the biggest stage in club football. Garnacho's first goal in Europe's premier competition was a rocket into the top corner against Galatasaray. The world was watching, and he delivered.",
      quote: "Rising to the occasion",
      features: [
        "Breakthrough season for the Manchester United first team",
        "First goal at UEFA Champions League",
        "Insane game time at UEFA Champions League",
        "Top corner goal against Galatasaray",
      ]
    },
    {
      name: "AWAY KIT 23/24",
      imageUrl: "/kits/2324(4).png",
      description: "Garnacho's away kit for the 2023-24 season.",
      player: "Alejandro Garnacho",
      season: "2023-24",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2023-24", "Hojlund assists highlights"),
      stats: { goals: 10, assists: 5, appearances: 50 },
      milestone: "Breakthrough season",
      narrative: "The 2023-24 season was Garnacho's coming of age. Playing on both wings, creating chances for Hojlund, scoring crucial goals - he became indispensable to Manchester United's attack.",
      quote: "Versatility meets excellence",
      features: [
        "Breakthrough season for the Manchester United first team",
        "Assists for Hojlund",
        "Play both of right and left wings",
      ]
    },
    {
      name: "THIRD KIT 23/24",
      imageUrl: "/kits/2324(1).png",
      description: "Garnacho's away kit for the 2023-24 season.",
      player: "Alejandro Garnacho",
      season: "2023-24",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2023-24", "highlights"),
      stats: { goals: 10, assists: 5, appearances: 50 },
      milestone: "Breakthrough season",
      narrative: "The 2023-24 season was Garnacho's coming of age. Playing on both wings, creating chances for Hojlund, scoring crucial goals - he became indispensable to Manchester United's attack.",
      quote: "Versatility meets excellence",
      features: [
        "Breakthrough season for the Manchester United first team",
        "More games for the Manchester United first team",
        "More goals for the Manchester United first team",
        "More assists for the Manchester United first team",
      ]
    },
    {
      name: "ARGENTINA KIT",
      imageUrl: "/kits/argen17.png",
      description: "Garnacho's Argentina kit.",
      player: "Alejandro Garnacho",
      season: "2023-24",
      kitType: "Argentina Kit",
      videoUrl: getYouTubeUrl("2023-24", "Copa America Argentina highlights"),
      stats: { goals: 1, assists: 2, appearances: 6 },
      milestone: "Copa America champion",
      narrative: "July 14, 2024. Miami. Copa America Final. Argentina lifted the trophy, and Garnacho was part of it. His first major international trophy, playing alongside Messi, Di Maria, and the legends of Argentine football.",
      quote: "Champions of the Americas",
      features: [
        "Copa America first appearance",
        "Copa America title with Argentina national team",
        "First international title for Argentina",
      ]
    },
    {
      name: "ARGENTINA AWAY KIT",
      imageUrl: "/kits/argen17(1).png",
      description: "Garnacho's Argentina away kit.",
      player: "Alejandro Garnacho",
      season: "2023-24",
      kitType: "Argentina Away Kit",
      videoUrl: getYouTubeUrl("2023-24", "Argentina Dybala assist highlights"),
      stats: { goals: 1, assists: 2, appearances: 6 },
      milestone: "International success",
      narrative: "Assisting Paulo Dybala in a crucial match showed Garnacho's maturity. Not just a goalscorer, but a creator. The future of Argentine football was on full display.",
      quote: "Creating history",
      features: [
        "First assist for Argentina",
        "Assist for Paulo Dybala",
      ]
    },
    {
      name: "HOME KIT 24/25",
      imageUrl: "/kits/2425.png",
      description: "Garnacho's home kit for the 2024-25 season.",
      player: "Alejandro Garnacho",
      season: "2024-25",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2024-25", "highlights"),
      stats: { goals: 8, assists: 4, appearances: 42 },
      milestone: "Final season at United",
      narrative: "The 2024-25 season would be Garnacho's last at Manchester United. Despite no silverware, his performances were exceptional. Every goal, every assist, every moment was a tribute to the club that gave him his chance.",
      quote: "Giving everything until the end",
      features: [
        "Last season at Manchester United",
        "Great performance in the last season",
        "Goodbye to Manchester United",
        "No cup but amazing performance",
      ]
    },
    {
      name: "HOME KIT 24/25",
      imageUrl: "/kits/2425comm.png",
      description: "Garnacho's home kit for the 2024-25 season.",
      player: "Alejandro Garnacho",
      season: "2024-25",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2024-25", "Community Shield highlights"),
      stats: { goals: 8, assists: 4, appearances: 42 },
      milestone: "Community Shield goal",
      narrative: "The Community Shield match was a bittersweet moment. Scoring a goal in the season opener, but knowing it would be his last campaign at Old Trafford. Every moment counted.",
      quote: "Making every moment count",
      features: [
        "Goal at Community Shield match",
        "Score at penalty shootout",
        "No cup but amazing performance",
      ]
    },
    {
      name: "HOME KIT 24/25",
      imageUrl: "/kits/rare.png",
      description: "Garnacho's home kit for the 2024-25 season.",
      player: "Alejandro Garnacho",
      season: "2024-25",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2024-25", "Europa League highlights"),
      stats: { goals: 8, assists: 4, appearances: 42 },
      milestone: "Europa League goal",
      narrative: "Scoring in the Europa League was a reminder of what could have been. Garnacho gave his all, but the final chapter at United would end without European glory.",
      quote: "Leaving it all on the pitch",
      features: [
        "Last season at Manchester United",
        "First goal at UEFA Europa League",
        "Goodbye to Manchester United",
        "No cup but amazing performance",
      ]
    },
    {
      name: "AWAY KIT 24/25",
      imageUrl: "/kits/2425away.png",
      description: "Garnacho's away kit for the 2024-25 season.",
      player: "Alejandro Garnacho",
      season: "2024-25",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2024-25", "highlights"),
      stats: { goals: 8, assists: 4, appearances: 42 },
      milestone: "Final season at United",
      narrative: "The 2024-25 season would be Garnacho's last at Manchester United. Despite no silverware, his performances were exceptional. Every goal, every assist, every moment was a tribute to the club that gave him his chance.",
      quote: "Giving everything until the end",
      features: [
        "Last season at Manchester United",
        "Great performance in the last season",
        "Goodbye to Manchester United",
        "No cup but amazing performance",
      ]
    },
    {
      name: "AWAY KIT 24/25",
      imageUrl: "/kits/2425away2.png",
      description: "Garnacho's away kit for the 2024-25 season.",
      player: "Alejandro Garnacho",
      season: "2024-25",
      kitType: "Away Kit",
      videoUrl: getYouTubeUrl("2024-25", "highlights"),
      stats: { goals: 8, assists: 4, appearances: 42 },
      milestone: "Final season at United",
      narrative: "The 2024-25 season would be Garnacho's last at Manchester United. Despite no silverware, his performances were exceptional. Every goal, every assist, every moment was a tribute to the club that gave him his chance.",
      quote: "Giving everything until the end",
      features: [
        "Last match with old coach Erik ten Hag",
        "Great performance in the last season",
        "Goodbye to Manchester United",
        "No cup but amazing performance",
      ]
    },
    {
      name: "THIRD KIT 24/25",
      imageUrl: "/kits/2425third.png",
      description: "Garnacho's third kit for the 2024-25 season.",
      player: "Alejandro Garnacho",
      season: "2024-25",
      kitType: "Third Kit",
      videoUrl: getYouTubeUrl("2024-25", "highlights"),
      stats: { goals: 8, assists: 4, appearances: 42 },
      milestone: "Final season at United",
      narrative: "The 2024-25 season would be Garnacho's last at Manchester United. Despite no silverware, his performances were exceptional. Every goal, every assist, every moment was a tribute to the club that gave him his chance.",
      quote: "Giving everything until the end",
      features: [
        "Last season at Manchester United",
        "Great performance in the last season",
        "Goodbye to Manchester United",
        "No cup but amazing performance",
      ]
    },
    {
      name: "THIRD KIT 24/25",
      imageUrl: "/kits/2425third2.png",
      description: "Garnacho's third kit for the 2024-25 season.",
      player: "Alejandro Garnacho",
      season: "2024-25",
      kitType: "Third Kit",
      videoUrl: getYouTubeUrl("2024-25", "highlights"),
      stats: { goals: 8, assists: 4, appearances: 42 },
      milestone: "Final season at United",
      narrative: "The 2024-25 season would be Garnacho's last at Manchester United. Despite no silverware, his performances were exceptional. Every goal, every assist, every moment was a tribute to the club that gave him his chance.",
      quote: "Giving everything until the end",
      features: [
        "Last season at Manchester United",
        "Amazing last goal for Manchester United",
        "Goodbye to Manchester United",
        "No cup but amazing performance",
      ]
    },
    {
      name: "LAST MATCH KIT 24/25",
      imageUrl: "/kits/europa.png",
      description: "Garnacho's last match kit for the 2024-25 season.",
      player: "Alejandro Garnacho",
      season: "2024-25",
      kitType: "Last Match Kit",
      videoUrl: getYouTubeUrl("2024-25", "Europa League final highlights"),
      stats: { goals: 8, assists: 4, appearances: 42 },
      milestone: "Final match",
      narrative: "May 21, 2025. Europa League Final. Only 20 minutes on the pitch, but Garnacho gave everything. The final whistle marked the end of an era. Thank you, Alejandro, for the memories.",
      quote: "Thank you for the memories",
      features: [
        "Last match with Manchester United",
        "UEFA Europa League final match",
        "Gave it all for the team",
        "Only 20 minutes on the pitch",
      ]
    },
  ];

  const currentKit = kitsData[currentKitIndex];

  // Load votes from localStorage
  useEffect(() => {
    const savedVotes = localStorage.getItem('garnacho-kit-votes');
    
    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    }
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create dropping heart animation
  const createDroppingHeart = useCallback(() => {
    const id = Math.random().toString(36).substr(2, 9);
    const left = Math.random() * 100;
    
    setDroppingHearts((prev) => [...prev, { id, left }]);
    
    setTimeout(() => {
      setDroppingHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 2000);
  }, []);

  // Handle vote with confetti
  const handleVote = useCallback((voteType) => {
    setVotes((currentVotes) => {
      const newVotes = {
        yes: currentVotes.yes || 0,
        no: currentVotes.no || 0,
        [voteType]: (currentVotes[voteType] || 0) + 1
      };
      
      localStorage.setItem('garnacho-kit-votes', JSON.stringify(newVotes));
      
      if (voteType === 'yes') {
        // Confetti animation
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: [MU_COLORS.red, MU_COLORS.gold, MU_COLORS.white]
        });
        
        createDroppingHeart();
        setTimeout(() => createDroppingHeart(), 100);
        setTimeout(() => createDroppingHeart(), 200);
      }
      
      return newVotes;
    });
  }, [createDroppingHeart]);

  // Calculate percentages
  const totalVotes = useMemo(() => {
    return votes.yes + votes.no;
  }, [votes.yes, votes.no]);


  // Navigate to previous kit
  const prevKit = useCallback(() => {
    setCurrentKitIndex((prev) => (prev === 0 ? kitsData.length - 1 : prev - 1));
  }, [kitsData.length]);

  // Navigate to next kit
  const nextKit = useCallback(() => {
    setCurrentKitIndex((prev) => (prev === kitsData.length - 1 ? 0 : prev + 1));
  }, [kitsData.length]);

  // Scroll to kit card in timeline
  const scrollToKitCard = useCallback((index) => {
    // Try multiple methods to find the element
    let kitCardElement = kitCardRefs.current[`kit-${index}`];
    
    // Fallback: try to find by data attribute
    if (!kitCardElement) {
      kitCardElement = document.querySelector(`[data-kit-index="${index}"]`);
    }
    
    // Fallback: try to find by ID
    if (!kitCardElement) {
      kitCardElement = document.getElementById(`kit-card-${index}`);
    }
    
    if (kitCardElement) {
      // Use getBoundingClientRect for more accurate positioning
      const rect = kitCardElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const headerOffset = 120; // Offset for better visibility
      const elementPosition = rect.top + scrollTop - headerOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Highlight the card briefly
      kitCardElement.style.border = `2px solid ${MU_COLORS.red}`;
      kitCardElement.style.boxShadow = `0 0 20px rgba(218, 41, 28, 0.5)`;
      kitCardElement.style.transition = 'border 0.3s, box-shadow 0.3s';
      
      setTimeout(() => {
        kitCardElement.style.border = `2px solid rgba(218, 41, 28, 0.2)`;
        kitCardElement.style.boxShadow = 'none';
        setTimeout(() => {
          kitCardElement.style.transition = '';
        }, 300);
      }, 2000);
    } else {
      console.warn(`Kit card with index ${index} not found`);
    }
  }, []);

  // Toggle card expansion
  const toggleCardExpansion = useCallback((index) => {
    setExpandedKitIndex(expandedKitIndex === index ? null : index);
  }, [expandedKitIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevKit();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextKit();
      }
      if (e.key === 'Escape') {
        setPosterExpanded(false);
        setExpandedKitIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevKit, nextKit]);

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: MU_COLORS.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Montserrat', sans-serif",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            width: '64px',
            height: '64px',
            border: `4px solid ${MU_COLORS.red}`,
            borderTop: '4px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px',
          }}></div>
          <p style={{ 
            color: MU_COLORS.white, 
            fontSize: '18px',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500
          }}>Loading Garnacho's Kit...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: MU_COLORS.black,
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      {/* Sinusoidal Wave Background Pattern */}
      <svg
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.1,
          pointerEvents: 'none'
        }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={MU_COLORS.red} stopOpacity="0.3" />
            <stop offset="50%" stopColor={MU_COLORS.gold} stopOpacity="0.2" />
            <stop offset="100%" stopColor={MU_COLORS.black} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          style={{ animation: 'wave 20s linear infinite' }}
        />
        <path
          d="M0,400 Q300,350 600,400 T1200,400 T1800,400 T2400,400"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          style={{ animation: 'wave 25s linear infinite reverse' }}
        />
      </svg>

      {/* Parallax Hero Section - 80vh */}
      <section 
        ref={heroRef}
        style={{
          position: 'relative',
          height: '80vh',
          minHeight: '600px',
          overflow: 'hidden',
          zIndex: 1
        }}
        aria-label="Kit hero section"
      >
        {/* Full-bleed background image - unblurred, cover */}
        <motion.div
          key={currentKitIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <img
            src={currentKit.imageUrl}
            alt={`Alejandro Garnacho in ${currentKit.season} ${currentKit.kitType} during a match`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 35%'
            }}
            loading="eager"
            decoding="sync"
          />
        </motion.div>

        {/* 70% transparent gradient bottom overlay for text */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)`,
          zIndex: 1
        }}></div>

        {/* Integrated text overlay - centered, no black panel */}
        <div style={{
          position: 'absolute',
          bottom: '48px',
          left: '48px',
          right: '48px',
          zIndex: 2,
          maxWidth: '800px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              key={currentKit.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: MU_COLORS.red,
                marginBottom: '12px',
                letterSpacing: '0.05em',
                fontFamily: "'Montserrat', sans-serif",
                textTransform: 'uppercase',
                lineHeight: 1.5,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
              }}
            >
              {currentKit.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '16px',
                alignItems: 'center'
              }}
            >
              <span style={{
                color: MU_COLORS.white,
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
              }}>{currentKit.season}</span>
              <span style={{
                color: MU_COLORS.gold,
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif"
              }}>•</span>
              <span style={{
                color: MU_COLORS.gold,
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: "'Montserrat', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
              }}>{currentKit.kitType}</span>
            </motion.div>

            {currentKit.milestone && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  color: MU_COLORS.gold,
                  fontSize: '16px',
                  fontStyle: 'italic',
                  fontFamily: "'Montserrat', sans-serif",
                  marginTop: '8px',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                "{currentKit.milestone}"
              </motion.p>
            )}

            {/* Jump to Kit Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginTop: '16px' }}
            >
              <Tooltip
                label="Jump to kit in collection"
                aria-label="Jump to kit tooltip"
                hasArrow
                placement="top"
                openDelay={200}
                bg="#1A1A1A"
                color={MU_COLORS.white}
                border={`1px solid ${MU_COLORS.red}`}
                borderRadius="4px"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToKitCard(currentKitIndex)}
                  aria-label="Jump to kit in collection"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    border: `2px solid ${MU_COLORS.gold}`,
                    backgroundColor: 'rgba(255, 229, 0, 0.1)',
                    color: MU_COLORS.gold,
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s',
                    minHeight: '48px',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 229, 0, 0.2)';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 229, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 229, 0, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FaArrowDown style={{ width: '14px', height: '14px' }} />
                  <span>View in Collection</span>
                </motion.button>
              </Tooltip>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '24px',
          right: '24px',
          transform: 'translateY(-50%)',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none'
        }}>
          <Tooltip
            label="Previous kit"
            aria-label="Previous kit tooltip"
            hasArrow
            placement="right"
            openDelay={200}
            bg="#1A1A1A"
            color={MU_COLORS.white}
            border={`1px solid ${MU_COLORS.red}`}
            borderRadius="4px"
          >
            <button
              onClick={prevKit}
              aria-label="Previous kit"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: `2px solid ${MU_COLORS.white}`,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: MU_COLORS.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: "'Montserrat', sans-serif",
                pointerEvents: 'auto',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = MU_COLORS.red;
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 0 5px rgba(218, 41, 28, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaChevronLeft size={20} />
            </button>
          </Tooltip>
          <Tooltip
            label="Next kit"
            aria-label="Next kit tooltip"
            hasArrow
            placement="left"
            openDelay={200}
            bg="#1A1A1A"
            color={MU_COLORS.white}
            border={`1px solid ${MU_COLORS.red}`}
            borderRadius="4px"
          >
            <button
              onClick={nextKit}
              aria-label="Next kit"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: `2px solid ${MU_COLORS.white}`,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: MU_COLORS.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: "'Montserrat', sans-serif",
                pointerEvents: 'auto',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = MU_COLORS.red;
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 0 5px rgba(218, 41, 28, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaChevronRight size={20} />
            </button>
          </Tooltip>
        </div>

        {/* Unified Engagement Overlay - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '48px',
            zIndex: 3,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderRadius: '16px',
            padding: '24px',
            border: `2px solid ${MU_COLORS.red}`,
            backdropFilter: 'blur(10px)',
            minWidth: '240px',
            boxShadow: `0 0 5px rgba(218, 41, 28, 0.15)`
          }}
          role="complementary"
          aria-label="Kit engagement section"
        >
          {/* Dropping Hearts Container */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
            borderRadius: '16px'
          }}>
            <AnimatePresence>
              {droppingHearts.map((heart) => (
                <motion.div
                  key={heart.id}
                  initial={{ y: -20, x: `${heart.left}%`, opacity: 1, scale: 1 }}
                  animate={{ y: '100%', opacity: [1, 1, 0], scale: [1, 1.2, 0.8], rotate: [0, 15, -15, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    fontSize: '24px',
                    color: MU_COLORS.red,
                    filter: 'drop-shadow(0 0 8px rgba(218, 41, 28, 0.8))'
                  }}
                >
                  ❤️
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Heart Counter */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <motion.div
                key={votes.yes}
                initial={{ scale: 1.5, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Tooltip
                  label="Total likes received"
                  aria-label="Heart counter tooltip"
                  hasArrow
                  placement="top"
                  openDelay={200}
                  bg="#1A1A1A"
                  color={MU_COLORS.white}
                  border={`1px solid ${MU_COLORS.red}`}
                  borderRadius="4px"
                >
                  <div style={{
                    fontSize: '48px',
                    color: MU_COLORS.red,
                    filter: 'drop-shadow(0 0 12px rgba(218, 41, 28, 0.6))',
                    lineHeight: 1,
                    cursor: 'default'
                  }}>
                    ❤️
                  </div>
                </Tooltip>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: MU_COLORS.white,
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: 1,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}>
                  {votes.yes}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Hearts
                </div>
              </motion.div>
            </div>

            {/* Like Button */}
            <Tooltip
              label="Like this kit"
              aria-label="Like button tooltip"
              hasArrow
              placement="top"
              openDelay={200}
              bg="#1A1A1A"
              color={MU_COLORS.white}
              border={`1px solid ${MU_COLORS.red}`}
              borderRadius="4px"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleVote('yes');
                }}
                aria-label="Like this kit"
                type="button"
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: MU_COLORS.red,
                  color: MU_COLORS.white,
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  position: 'relative',
                  zIndex: 100,
                  minHeight: '48px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = '#c0241a';
                  e.currentTarget.style.boxShadow = '0 0 5px rgba(218, 41, 28, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = MU_COLORS.red;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaHeart style={{ width: '18px', height: '18px' }} />
                <span>Like</span>
              </button>
            </Tooltip>

            {/* Share Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
              justifyContent: 'center'
            }}>
              <Tooltip
                label="Share on Twitter"
                aria-label="Twitter share tooltip"
                hasArrow
                placement="top"
                openDelay={200}
                bg="#1A1A1A"
                color={MU_COLORS.white}
                border={`1px solid ${MU_COLORS.red}`}
                borderRadius="4px"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Check out Alejandro Garnacho\'s kit collection!')}`, '_blank', 'noopener,noreferrer');
                  }}
                  aria-label="Share on Twitter"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(29, 161, 242, 0.2)',
                    border: `2px solid rgba(29, 161, 242, 0.5)`,
                    color: '#1DA1F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <FaTwitter size={20} />
                </motion.button>
              </Tooltip>
              <Tooltip
                label="Share on Facebook"
                aria-label="Facebook share tooltip"
                hasArrow
                placement="top"
                openDelay={200}
                bg="#1A1A1A"
                color={MU_COLORS.white}
                border={`1px solid ${MU_COLORS.red}`}
                borderRadius="4px"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
                  }}
                  aria-label="Share on Facebook"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(24, 119, 242, 0.2)',
                    border: `2px solid rgba(24, 119, 242, 0.5)`,
                    color: '#1877F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <FaFacebook size={20} />
                </motion.button>
              </Tooltip>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vertical Narrative Timeline Section */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '48px 24px',
          backgroundColor: MU_COLORS.black
        }}
        aria-label="Kit timeline narrative"
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: MU_COLORS.white,
              marginBottom: '48px',
              textAlign: 'center',
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}
          >
            Kit Collection Timeline
          </motion.h2>

          {/* Vertical Timeline with Accordion Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            {kitsData.map((kit, index) => (
              <motion.div
                key={index}
                id={`kit-card-${index}`}
                data-kit-index={index}
                ref={(el) => {
                  if (el) {
                    kitCardRefs.current[`kit-${index}`] = el;
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `2px solid rgba(218, 41, 28, 0.2)`,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideTo(index);
                  }
                  setCurrentKitIndex(index);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(index);
                    }
                    setCurrentKitIndex(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${kit.name}`}
              >
                {/* Kit Image - Zoomable */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '75%',
                    overflow: 'hidden',
                    backgroundColor: '#1a1a1a',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPosterExpanded(true);
                    setCurrentKitIndex(index);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setPosterExpanded(true);
                      setCurrentKitIndex(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Zoom ${kit.name} image`}
                >
                  <img
                    src={kit.imageUrl}
                    alt={`Alejandro Garnacho in ${kit.season} ${kit.kitType} during a match`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 35%',
                      transition: 'transform 0.3s'
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: MU_COLORS.red,
                    marginBottom: '8px',
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: 'uppercase',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                  }}>
                    {kit.name}
                  </h3>

                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '16px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      color: MU_COLORS.white,
                      fontSize: '14px',
                      fontFamily: "'Montserrat', sans-serif"
                    }}>{kit.season}</span>
                    <span style={{ color: MU_COLORS.gold }}>•</span>
                    <span style={{
                      color: MU_COLORS.gold,
                      fontSize: '14px',
                      fontFamily: "'Montserrat', sans-serif"
                    }}>{kit.kitType}</span>
                  </div>

                  {/* Stats */}
                  {kit.stats && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '12px',
                      marginBottom: '16px',
                      padding: '12px',
                      backgroundColor: 'rgba(218, 41, 28, 0.1)',
                      borderRadius: '8px'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: MU_COLORS.red,
                          fontFamily: "'Montserrat', sans-serif"
                        }}>{kit.stats.goals}</div>
                        <div style={{
                          fontSize: '10px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          textTransform: 'uppercase',
                          fontFamily: "'Montserrat', sans-serif"
                        }}>Goals</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: MU_COLORS.red,
                          fontFamily: "'Montserrat', sans-serif"
                        }}>{kit.stats.assists}</div>
                        <div style={{
                          fontSize: '10px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          textTransform: 'uppercase',
                          fontFamily: "'Montserrat', sans-serif"
                        }}>Assists</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: MU_COLORS.red,
                          fontFamily: "'Montserrat', sans-serif"
                        }}>{kit.stats.appearances}</div>
                        <div style={{
                          fontSize: '10px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          textTransform: 'uppercase',
                          fontFamily: "'Montserrat', sans-serif"
                        }}>Apps</div>
                      </div>
                    </div>
                  )}

                  {/* Milestone Quote */}
                  {kit.milestone && (
                    <p style={{
                      color: MU_COLORS.gold,
                      fontSize: '12px',
                      fontStyle: 'italic',
                      fontFamily: "'Montserrat', sans-serif",
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: `1px solid rgba(255, 229, 0, 0.2)`,
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                    }}>
                      "{kit.milestone}"
                    </p>
                  )}

                  {/* Expandable Content Toggle */}
                  <Tooltip
                    label={expandedKitIndex === index ? 'Collapse details' : 'Expand details'}
                    aria-label="Expand/collapse tooltip"
                    hasArrow
                    placement="top"
                    openDelay={200}
                    bg="#1A1A1A"
                    color={MU_COLORS.white}
                    border={`1px solid ${MU_COLORS.red}`}
                    borderRadius="4px"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCardExpansion(index);
                      }}
                      aria-label={expandedKitIndex === index ? 'Collapse details' : 'Expand details'}
                      style={{
                        width: '100%',
                        marginTop: '16px',
                        padding: '12px',
                        backgroundColor: 'transparent',
                        color: MU_COLORS.white,
                        border: `1px solid rgba(255, 255, 255, 0.3)`,
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '14px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        fontFamily: "'Montserrat', sans-serif",
                        transition: 'all 0.3s',
                        minHeight: '48px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = MU_COLORS.red;
                        e.currentTarget.style.boxShadow = '0 0 5px rgba(218, 41, 28, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span>{expandedKitIndex === index ? 'Less' : 'More'}</span>
                      {expandedKitIndex === index ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </button>
                  </Tooltip>

                  {/* Expandable Content - Accordion */}
                  <AnimatePresence>
                    {expandedKitIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ paddingTop: '24px', borderTop: `1px solid rgba(255, 255, 255, 0.1)`, marginTop: '16px' }}>
                          {/* Narrative Story */}
                          {kit.narrative && (
                            <p style={{
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontSize: '14px',
                              lineHeight: 1.6,
                              fontFamily: "'Montserrat', sans-serif",
                              marginBottom: '16px',
                              textAlign: 'left'
                            }}>
                              {kit.narrative}
                            </p>
                          )}

                          {/* Quote */}
                          {kit.quote && (
                            <blockquote style={{
                              color: MU_COLORS.gold,
                              fontSize: '16px',
                              fontStyle: 'italic',
                              fontFamily: "'Montserrat', sans-serif",
                              marginBottom: '16px',
                              paddingLeft: '16px',
                              borderLeft: `3px solid ${MU_COLORS.gold}`,
                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                            }}>
                              "{kit.quote}"
                            </blockquote>
                          )}

                          {/* Features List */}
                          {kit.features && kit.features.length > 0 && (
                            <div style={{ marginBottom: '16px' }}>
                              <h4 style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: MU_COLORS.white,
                                marginBottom: '8px',
                                fontFamily: "'Montserrat', sans-serif",
                                textTransform: 'uppercase'
                              }}>
                                Key Moments
                              </h4>
                              <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                              }}>
                                {kit.features.map((feature, idx) => (
                                  <li key={idx} style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontSize: '12px',
                                    fontFamily: "'Montserrat', sans-serif",
                                    marginBottom: '6px',
                                    paddingLeft: '16px',
                                    position: 'relative'
                                  }}>
                                    <span style={{
                                      position: 'absolute',
                                      left: 0,
                                      color: MU_COLORS.red
                                    }}>•</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* View Highlights Button with Pulse */}
                          <Tooltip
                            label={`View highlights for ${kit.name}`}
                            aria-label="View highlights tooltip"
                            hasArrow
                            placement="top"
                            openDelay={200}
                            bg="#1A1A1A"
                            color={MU_COLORS.white}
                            border={`1px solid ${MU_COLORS.red}`}
                            borderRadius="4px"
                          >
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(kit.videoUrl, '_blank', 'noopener,noreferrer');
                              }}
                              style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: MU_COLORS.red,
                                color: MU_COLORS.white,
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '14px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontFamily: "'Montserrat', sans-serif",
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                transition: 'all 0.3s',
                                minHeight: '48px',
                                animation: 'pulse 1s infinite'
                              }}
                              aria-label={`View highlights for ${kit.name}`}
                            >
                              <FaPlay style={{ width: '12px', height: '12px' }} />
                              <span>View Highlights</span>
                            </motion.button>
                          </Tooltip>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Footer Engagement Bar */}
      <footer
        style={{
          position: 'sticky',
          bottom: 0,
          zIndex: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderTop: `2px solid rgba(218, 41, 28, 0.3)`,
          padding: '24px',
          backdropFilter: 'blur(10px)'
        }}
        role="contentinfo"
        aria-label="Engagement footer"
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 700,
              color: MU_COLORS.white,
              marginBottom: '12px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Share This Collection
            </h3>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Tooltip
                label="Share on Twitter"
                aria-label="Twitter share tooltip"
                hasArrow
                placement="top"
                openDelay={200}
                bg="#1A1A1A"
                color={MU_COLORS.white}
                border={`1px solid ${MU_COLORS.red}`}
                borderRadius="4px"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Check out Alejandro Garnacho\'s kit collection!')}`, '_blank', 'noopener,noreferrer');
                  }}
                  aria-label="Share on Twitter"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(29, 161, 242, 0.2)',
                    border: `2px solid rgba(29, 161, 242, 0.5)`,
                    color: '#1DA1F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <FaTwitter size={20} />
                </motion.button>
              </Tooltip>
              <Tooltip
                label="Share on Facebook"
                aria-label="Facebook share tooltip"
                hasArrow
                placement="top"
                openDelay={200}
                bg="#1A1A1A"
                color={MU_COLORS.white}
                border={`1px solid ${MU_COLORS.red}`}
                borderRadius="4px"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
                  }}
                  aria-label="Share on Facebook"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(24, 119, 242, 0.2)',
                    border: `2px solid rgba(24, 119, 242, 0.5)`,
                    color: '#1877F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <FaFacebook size={20} />
                </motion.button>
              </Tooltip>
            </div>
          </div>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 700,
              color: MU_COLORS.white,
              marginBottom: '12px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Collection Stats
            </h3>
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: MU_COLORS.red,
                  fontFamily: "'Montserrat', sans-serif"
                }}>{kitsData.length}</div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'uppercase',
                  fontFamily: "'Montserrat', sans-serif"
                }}>Kits</div>
              </div>
              <div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: MU_COLORS.red,
                  fontFamily: "'Montserrat', sans-serif"
                }}>{votes.yes}</div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'uppercase',
                  fontFamily: "'Montserrat', sans-serif"
                }}>Likes</div>
              </div>
              <div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: MU_COLORS.red,
                  fontFamily: "'Montserrat', sans-serif"
                }}>{totalVotes}</div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'uppercase',
                  fontFamily: "'Montserrat', sans-serif"
                }}>Total</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px',
              fontFamily: "'Montserrat', sans-serif",
              marginBottom: '8px'
            }}>
              Alejandro Garnacho
            </p>
            <p style={{
              color: MU_COLORS.gold,
              fontSize: '12px',
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: 'italic'
            }}>
              A tribute to greatness
            </p>
          </div>
        </div>
      </footer>

      {/* Zoomable Image Modal */}
      <AnimatePresence>
        {posterExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
              padding: '20px'
            }}
            onClick={() => setPosterExpanded(false)}
            role="dialog"
            aria-label="Zoomed kit view"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentKit.imageUrl}
                alt={`${currentKit.name} - Zoomed view`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  objectPosition: 'center center',
                  borderRadius: '8px',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              <Tooltip
                label="Close"
                aria-label="Close zoomed view tooltip"
                hasArrow
                placement="bottom"
                openDelay={200}
                bg="#1A1A1A"
                color={MU_COLORS.white}
                border={`1px solid ${MU_COLORS.red}`}
                borderRadius="4px"
              >
                <button
                  onClick={() => setPosterExpanded(false)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: `2px solid ${MU_COLORS.white}`,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: MU_COLORS.white,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    transition: 'all 0.3s'
                  }}
                  aria-label="Close zoomed view"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = MU_COLORS.red;
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  ×
                </button>
              </Tooltip>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Animations and Styles */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wave {
          from { transform: translateX(0); }
          to { transform: translateX(-50px); }
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(218, 41, 28, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(218, 41, 28, 0);
          }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          section[aria-label="Kit hero section"] {
            height: 60vh !important;
            min-height: 400px !important;
          }
          
          div[role="complementary"] {
            bottom: 24px !important;
            right: 24px !important;
            left: 24px !important;
            max-width: calc(100% - 48px) !important;
          }
          
          div[style*="gridTemplateColumns: 'repeat(auto-fit"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          section[aria-label="Kit hero section"] {
            height: 50vh !important;
            min-height: 300px !important;
          }
        }
        
        /* Focus styles for accessibility */
        button:focus-visible,
        [role="button"]:focus-visible {
          outline: 3px solid ${MU_COLORS.gold};
          outline-offset: 2px;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default React.memo(KitDisplay);
