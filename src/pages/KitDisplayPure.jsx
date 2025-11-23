import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from '@chakra-ui/react';
import { FaCheck, FaTimes, FaHeart, FaThumbsDown, FaPlay, FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// MU Brand Colors
const MU_COLORS = {
  red: '#DA291C',      // Pantone 485 red
  black: '#000000',     // Black
  white: '#FFFFFF',     // White
  gold: '#FFE500',      // Gold accent
};

const KitDisplay = () => {
  const [votes, setVotes] = useState({ yes: 0, no: 0 });
  const [userVote, setUserVote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [posterExpanded, setPosterExpanded] = useState(false);
  const [currentKitIndex, setCurrentKitIndex] = useState(0);
  const [droppingHearts, setDroppingHearts] = useState([]);

  // Helper function to generate YouTube search URL for Garnacho highlights
  const getYouTubeUrl = (season, kitType) => {
    const searchQuery = encodeURIComponent(`Alejandro Garnacho ${season} ${kitType} highlights`);
    return `https://www.youtube.com/results?search_query=${searchQuery}`;
  };

  // Multiple kit data with different kits
  const kitsData = [
    {
      name: "HOME KIT 20/21",
      imageUrl: "/kits/debutszn.png",
      description: "The first season at Manchester United U18. Garnacho was a key player for the U18 team.",
      player: "Alejandro Garnacho",
      season: "2020-21",
      kitType: "Home Kit",
      videoUrl: getYouTubeUrl("2020-21", "U18 highlights"),
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
      features: [
        "Debut for Manchester United first team",
        "First match in the Premier League for Manchester United first team",
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
      features: [
        "Last match with Manchester United",
        "UEFA Europa League final match",
        "Gave it all for the team",
        "Only 20 minutes on the pitch",
      ]
    },
  ];

  const currentKit = kitsData[currentKitIndex];

  // Load votes from localStorage on component mount
  useEffect(() => {
    const savedVotes = localStorage.getItem('garnacho-kit-votes');
    const savedUserVote = localStorage.getItem('garnacho-kit-user-vote');
    
    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    }
    if (savedUserVote) {
      setUserVote(savedUserVote);
    }
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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

  // Handle vote submission - always increment counter
  const handleVote = useCallback((voteType) => {
    console.log('=== handleVote START ===');
    console.log('voteType:', voteType);
    
    // Always update votes - increment the counter
    setVotes((currentVotes) => {
      const newVotes = {
        yes: currentVotes.yes || 0,
        no: currentVotes.no || 0,
        [voteType]: (currentVotes[voteType] || 0) + 1
      };
      
      console.log('Incrementing votes:', newVotes);
      
      // Save to localStorage
      try {
        localStorage.setItem('garnacho-kit-votes', JSON.stringify(newVotes));
        localStorage.setItem('garnacho-kit-user-vote', voteType);
        console.log('Saved to localStorage');
      } catch (error) {
        console.error('localStorage error:', error);
      }
      
      // Create dropping hearts animation when voting yes
      if (voteType === 'yes') {
        console.log('Creating dropping hearts...');
        createDroppingHeart();
        setTimeout(() => createDroppingHeart(), 100);
        setTimeout(() => createDroppingHeart(), 200);
      }
      
      return newVotes;
    });
    
    // Update user vote
    setUserVote(voteType);
    
    console.log('=== handleVote END ===');
  }, [createDroppingHeart]);

  // Calculate percentages
  const { totalVotes, yesPercentage } = useMemo(() => {
    const total = votes.yes + votes.no;
    const yesPct = total > 0 ? Math.round((votes.yes / total) * 100) : 0;
    return {
      totalVotes: total,
      yesPercentage: yesPct
    };
  }, [votes.yes, votes.no]);

  // Navigation functions
  const nextKit = useCallback(() => {
    setCurrentKitIndex((prev) => (prev + 1) % kitsData.length);
    setImageLoaded(false);
  }, [kitsData.length]);

  const prevKit = useCallback(() => {
    setCurrentKitIndex((prev) => (prev - 1 + kitsData.length) % kitsData.length);
    setImageLoaded(false);
  }, [kitsData.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevKit();
      if (e.key === 'ArrowRight') nextKit();
      if (e.key === 'Escape') {
        setPosterExpanded(false);
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
      {/* Hero Section - Full Bleed */}
      <section 
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: '500px',
          background: `linear-gradient(135deg, ${MU_COLORS.black} 0%, rgba(218, 41, 28, 0.1) 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
        aria-label="Kit hero section"
      >
        {/* Background overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(218, 41, 28, 0.05) 0%, transparent 70%)`,
          zIndex: 1
        }}></div>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          padding: '0 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          {/* Kit Title */}
          <motion.h1
            key={currentKit.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700,
              color: MU_COLORS.red,
              textAlign: 'center',
              letterSpacing: '0.05em',
              margin: '0 0 16px 0',
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              lineHeight: 1.2
            }}
          >
            {currentKit.name}
          </motion.h1>

          {/* Season and Kit Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '32px'
            }}
          >
            <span style={{
              color: MU_COLORS.white,
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif"
            }}>{currentKit.season}</span>
            <span style={{
              color: MU_COLORS.gold,
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif"
            }}>•</span>
            <span style={{
              color: MU_COLORS.white,
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif"
            }}>{currentKit.kitType}</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <main style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 32px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '64px',
          alignItems: 'start'
        }}>
          {/* Kit Display Section */}
          <section aria-label="Kit display">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px'
            }}>
              {/* Navigation and Kit Image */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                width: '100%',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Tooltip
                  label="Previous Kit"
                  aria-label="Previous kit tooltip"
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
                    onClick={prevKit}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: `2px solid ${MU_COLORS.white}`,
                      backgroundColor: 'transparent',
                      color: MU_COLORS.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    aria-label="Previous kit"
                  >
                    <FaChevronLeft size={24} />
                  </motion.button>
                </Tooltip>

                {/* Kit Image */}
                <motion.div
                  key={currentKitIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'relative',
                    maxWidth: '500px',
                    width: '100%',
                    padding: '24px',
                    backgroundColor: MU_COLORS.black,
                    borderRadius: '8px',
                  }}
                >
                  {!imageLoaded && (
                    <div style={{
                      height: '600px',
                      backgroundColor: '#1a1a1a',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        border: `4px solid ${MU_COLORS.red}`,
                        borderTop: '4px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                    </div>
                  )}
                  <img
                    src={currentKit.imageUrl}
                    alt={`${currentKit.name} - ${currentKit.player} - ${currentKit.description}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      transition: 'opacity 0.5s',
                      opacity: imageLoaded ? 1 : 0,
                    }}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>

                <Tooltip
                  label="Next Kit"
                  aria-label="Next kit tooltip"
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
                    onClick={nextKit}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: `2px solid ${MU_COLORS.white}`,
                      backgroundColor: 'transparent',
                      color: MU_COLORS.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    aria-label="Next kit"
                  >
                    <FaChevronRight size={24} />
                  </motion.button>
                </Tooltip>
              </div>

              {/* Kit Features Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  justifyContent: 'center',
                  maxWidth: '800px',
                  marginTop: '16px'
                }}
              >
                {currentKit.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      backgroundColor: MU_COLORS.gold,
                      color: MU_COLORS.black,
                      padding: '8px 16px',
                      borderRadius: '999px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Description and Actions Section */}
          <section aria-label="Kit description and actions">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                background: `linear-gradient(135deg, rgba(218, 41, 28, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)`,
                borderRadius: '8px',
                padding: '40px',
                border: `1px solid rgba(218, 41, 28, 0.2)`,
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: 700,
                  color: MU_COLORS.white,
                  marginBottom: '24px',
                  letterSpacing: '0.05em',
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'uppercase'
                }}>
                  Kit Description
                </h2>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400
                }}>
                  {currentKit.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const videoUrl = currentKit.videoUrl || getYouTubeUrl(currentKit.season, currentKit.kitType);
                    window.open(videoUrl, '_blank', 'noopener,noreferrer');
                  }}
                  style={{
                    backgroundColor: MU_COLORS.red,
                    color: MU_COLORS.white,
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  aria-label="View video highlights of Garnacho in this kit"
                >
                  <FaPlay style={{ width: '16px', height: '16px' }} />
                  <span>View Highlights</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPosterExpanded(!posterExpanded)}
                  style={{
                    backgroundColor: 'transparent',
                    color: MU_COLORS.white,
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    border: `2px solid ${MU_COLORS.white}`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  aria-label="Enlarge kit image"
                >
                  <FaExpand style={{ width: '16px', height: '16px' }} />
                  <span>Enlarge Kit</span>
                </motion.button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      {/* Heart Counter - Dropping Hearts Design */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderRadius: '16px',
          padding: '32px',
          border: `2px solid ${MU_COLORS.red}`,
          backdropFilter: 'blur(10px)',
          zIndex: 20,
          minWidth: '200px',
          maxWidth: '280px',
          width: '100%',
          overflow: 'hidden'
        }}
        role="complementary"
        aria-label="Kit feedback section"
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
                initial={{ 
                  y: -20, 
                  x: `${heart.left}%`,
                  opacity: 1,
                  scale: 1
                }}
                animate={{ 
                  y: '100%',
                  opacity: [1, 1, 0],
                  scale: [1, 1.2, 0.8],
                  rotate: [0, 15, -15, 0]
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2,
                  ease: 'easeOut'
                }}
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

        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          {/* Heart Counter Display */}
          <div style={{
            textAlign: 'center',
            marginBottom: '24px'
          }}>
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
              <div style={{
                fontSize: '48px',
                color: MU_COLORS.red,
                filter: 'drop-shadow(0 0 12px rgba(218, 41, 28, 0.6))',
                lineHeight: 1
              }}>
                ❤️
              </div>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                color: MU_COLORS.white,
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: 1
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
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleVote('yes');
            }}
            aria-label="Like this Garnacho kit"
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
              opacity: 1,
              boxShadow: `0 0 20px rgba(218, 41, 28, 0.5)`,
              position: 'relative',
              zIndex: 100
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#c0241a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = MU_COLORS.red;
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.95)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FaHeart style={{ width: '18px', height: '18px' }} />
            <span>Like</span>
          </button>

          {/* Dislike Button (if not voted yet) */}
          {userVote === null && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleVote('no')}
              aria-label="Dislike this Garnacho kit"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                border: `1px solid rgba(255, 255, 255, 0.3)`,
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: 'transparent',
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: "'Montserrat', sans-serif",
                marginTop: '12px'
              }}
            >
              <FaThumbsDown style={{ width: '14px', height: '14px' }} />
              <span>Dislike</span>
            </motion.button>
          )}

          {/* Stats (if votes exist) */}
          {totalVotes > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                marginTop: '20px',
                paddingTop: '20px',
                borderTop: `1px solid rgba(255, 255, 255, 0.1)`
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                <span>Total: {totalVotes}</span>
                <span>{yesPercentage}% liked</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Expanded Kit Modal */}
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
            aria-label="Expanded kit view"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentKit.imageUrl}
                alt={`${currentKit.name} - Enlarged view`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />
              <Tooltip
                label="Close"
                aria-label="Close enlarged view tooltip"
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
                    width: '40px',
                    height: '40px',
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
                    fontWeight: 700
                  }}
                  aria-label="Close enlarged view"
                >
                  ×
                </button>
              </Tooltip>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add CSS animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          main {
            padding: 32px 16px !important;
          }
          
          section[aria-label="Kit hero section"] {
            height: 40vh !important;
            min-height: 300px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[role="complementary"] {
            bottom: 16px !important;
            right: 16px !important;
            left: 16px !important;
            max-width: calc(100% - 32px) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(KitDisplay);
