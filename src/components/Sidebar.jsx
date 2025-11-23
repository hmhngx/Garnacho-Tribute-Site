import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/react';
import {
  FaUser,
  FaChartBar,
  FaHistory,
  FaFutbol,
  FaShoppingBag,
  FaImages,
  FaTshirt,
  FaHeart,
  FaTimes,
  FaSearch,
  FaHome,
  FaBrain,
} from 'react-icons/fa';
import Trie from '../utils/Trie';

// MU Brand Colors
const MU_COLORS = {
  red: '#DA291C',
  black: '#000000',
  white: '#FFFFFF',
  gold: '#FFE500',
};

// Navigation items configuration
const navItems = [
  { title: 'Home', path: '/', icon: FaHome },
  { title: 'Bio', path: '/bio', icon: FaUser },
  { title: 'Stats', path: '/stats', icon: FaChartBar },
  { title: 'Career History', path: '/career-history', icon: FaHistory },
  { title: 'Goals', path: '/goals', icon: FaFutbol },
  { title: 'Merchandise', path: '/merchandise', icon: FaShoppingBag },
  { title: 'Photo Gallery', path: '/gallery', icon: FaImages },
  { title: 'Kit Display', path: '/kit-display', icon: FaTshirt },
  { title: 'Gracias Garnacho', path: '/gracias-garnacho', icon: FaHeart },
];

// Quiz is external link
const quizUrl = 'https://garnacho-quiz-app.vercel.app/';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [recentlyVisited, setRecentlyVisited] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const trieRef = useRef(new Trie());

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize trie with navigation items
  useEffect(() => {
    const trie = trieRef.current;
    
    // Insert all navigation items
    navItems.forEach((item) => {
      trie.insert(item.title, { title: item.title, path: item.path });
      // Also insert common aliases
      if (item.title === 'Career History') {
        trie.insert('career', { title: item.title, path: item.path });
        trie.insert('history', { title: item.title, path: item.path });
      }
      if (item.title === 'Photo Gallery') {
        trie.insert('gallery', { title: item.title, path: item.path });
        trie.insert('photos', { title: item.title, path: item.path });
      }
      if (item.title === 'Kit Display') {
        trie.insert('kit', { title: item.title, path: item.path });
        trie.insert('kits', { title: item.title, path: item.path });
      }
    });

    // Insert "Quiz" for external link
    trie.insert('Quiz', { title: 'Quiz', path: quizUrl, isExternal: true });
    trie.insert('quiz', { title: 'Quiz', path: quizUrl, isExternal: true });
  }, []);

  // Load favorites and recently visited from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('garnacho-sidebar-favorites');
    const savedRecent = localStorage.getItem('garnacho-sidebar-recent');
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    if (savedRecent) {
      setRecentlyVisited(JSON.parse(savedRecent));
    }
  }, []);

  // Track page visits for recently visited
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.path === currentPath);
    
    if (currentItem) {
      setRecentlyVisited((prev) => {
        const filtered = prev.filter(item => item.path !== currentPath);
        const updated = [{ ...currentItem, visitedAt: Date.now() }, ...filtered].slice(0, 5);
        localStorage.setItem('garnacho-sidebar-recent', JSON.stringify(updated));
        return updated;
      });
    }
  }, [location.pathname]);

  // Handle search with debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const debounceTimer = setTimeout(() => {
      const results = trieRef.current.search(searchQuery, 10);
      setSearchResults(results);
      setShowResults(results.length > 0);
    }, 200);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  // Handle click outside search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };

    if (showResults) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showResults]);

  // Handle keyboard navigation and focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      
      // Focus trap: keep focus within sidebar
      const sidebar = document.querySelector('aside[role="navigation"]');
      const focusableElements = sidebar?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        const handleTabKey = (e) => {
          if (e.key !== 'Tab') return;
          
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        };
        
        document.addEventListener('keydown', handleTabKey);
        
        // Focus first element when sidebar opens
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
        
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('keydown', handleTabKey);
        };
      }
      
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  // Focus search input when sidebar opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Handle search result selection
  const handleSearchSelect = useCallback((result) => {
    if (result.isExternal) {
      window.open(result.path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(result.path);
      onClose();
    }
    setSearchQuery('');
    setShowResults(false);
  }, [navigate, onClose]);

  // Toggle favorite
  const toggleFavorite = useCallback((item) => {
    setFavorites((prev) => {
      const isFavorite = prev.some(fav => fav.path === item.path);
      let updated;
      
      if (isFavorite) {
        updated = prev.filter(fav => fav.path !== item.path);
      } else {
        updated = [...prev, item];
      }
      
      localStorage.setItem('garnacho-sidebar-favorites', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Check if item is favorite
  const isFavorite = useCallback((path) => {
    return favorites.some(fav => fav.path === path);
  }, [favorites]);

  // Highlight matched text in search results
  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ color: MU_COLORS.gold, fontWeight: 700 }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Sidebar animation variants
  const sidebarVariants = {
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.68, -0.55, 0.265, 1.55],
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.68, -0.55, 0.265, 1.55],
      },
    },
  };

  // Overlay animation
  const overlayVariants = {
    closed: {
      opacity: 0,
      pointerEvents: 'none',
    },
    open: {
      opacity: 1,
      pointerEvents: 'auto',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 998,
              display: isMobile ? 'block' : 'none',
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '280px',
          backgroundColor: '#000000',
          background: 'linear-gradient(to bottom, #1A0000 0%, #000000 100%)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          willChange: 'transform',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header Section (Top 10%) */}
        <div
          style={{
            padding: '24px 16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '80px',
          }}
        >
          <Link
            to="/"
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
              alt="Manchester United Logo"
              style={{
                height: '40px',
                width: 'auto',
                filter: 'drop-shadow(0 0 8px rgba(218, 41, 28, 0.5))',
              }}
            />
          </Link>
          <Tooltip
            label="Close Sidebar"
            aria-label="Close sidebar tooltip"
            hasArrow
            placement="right"
            openDelay={200}
            bg="#1A1A1A"
            color={MU_COLORS.white}
            border={`1px solid ${MU_COLORS.red}`}
            borderRadius="4px"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: MU_COLORS.white,
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(218, 41, 28, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Close sidebar"
            >
              <FaTimes size={20} />
            </motion.button>
          </Tooltip>
        </div>

        {/* Search Bar */}
        <div
          ref={searchContainerRef}
          style={{
            padding: '16px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaSearch
              style={{
                position: 'absolute',
                left: '12px',
                color: 'rgba(255, 255, 255, 0.5)',
                zIndex: 1,
              }}
              size={16}
            />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              style={{
                width: '100%',
                padding: '12px 12px 12px 40px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${MU_COLORS.gold}`,
                borderRadius: '8px',
                color: MU_COLORS.white,
                fontSize: '14px',
                fontFamily: "'Montserrat', sans-serif",
                outline: 'none',
                transition: 'all 0.3s',
                boxShadow: searchQuery
                  ? `0 0 8px rgba(255, 229, 0, 0.3)`
                  : 'none',
              }}
              onFocus={() => {
                if (searchResults.length > 0) setShowResults(true);
              }}
              aria-label="Search navigation"
            />
          </div>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {showResults && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '16px',
                  right: '16px',
                  marginTop: '8px',
                  backgroundColor: '#1A1A1A',
                  borderRadius: '8px',
                  border: `1px solid rgba(218, 41, 28, 0.3)`,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  zIndex: 1000,
                }}
              >
                {searchResults.map((result, index) => (
                  <motion.div
                    key={`${result.path}-${index}`}
                    whileHover={{ backgroundColor: 'rgba(218, 41, 28, 0.2)' }}
                    onClick={() => handleSearchSelect(result)}
                    style={{
                      padding: '12px 16px',
                      cursor: 'pointer',
                      borderBottom:
                        index < searchResults.length - 1
                          ? '1px solid rgba(255, 255, 255, 0.1)'
                          : 'none',
                      color: MU_COLORS.white,
                      fontSize: '14px',
                      fontFamily: "'Montserrat', sans-serif",
                      transition: 'all 0.2s',
                    }}
                  >
                    {highlightMatch(result.title, searchQuery)}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Navigation List (Middle 70%) */}
        <nav
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Favorites Section */}
          {favorites.length > 0 && (
            <div style={{ padding: '0 16px 16px' }}>
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                Favorites
              </div>
              {favorites.map((item) => {
                const Icon = item.icon || FaHome;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={`fav-${item.path}`}
                    whileHover={{ x: 4 }}
                    style={{
                      marginBottom: '8px',
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '8px',
                        color: isActive ? MU_COLORS.red : MU_COLORS.white,
                        backgroundColor: isActive
                          ? 'rgba(218, 41, 28, 0.2)'
                          : 'transparent',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: isActive ? 600 : 400,
                        transition: 'all 0.2s',
                        borderLeft: isActive
                          ? `3px solid ${MU_COLORS.red}`
                          : '3px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor =
                            'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.color = MU_COLORS.red;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = MU_COLORS.white;
                        }
                      }}
                    >
                      <Icon size={16} />
                      <span>{item.title}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Recently Visited Section */}
          {recentlyVisited.length > 0 && (
            <div style={{ padding: '0 16px 16px' }}>
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                Recently Visited
              </div>
              {recentlyVisited.slice(0, 3).map((item) => {
                const Icon = item.icon || FaHome;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={`recent-${item.path}`}
                    whileHover={{ x: 4 }}
                    style={{
                      marginBottom: '8px',
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '8px',
                        color: isActive ? MU_COLORS.red : MU_COLORS.white,
                        backgroundColor: isActive
                          ? 'rgba(218, 41, 28, 0.2)'
                          : 'transparent',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: isActive ? 600 : 400,
                        transition: 'all 0.2s',
                        borderLeft: isActive
                          ? `3px solid ${MU_COLORS.red}`
                          : '3px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor =
                            'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.color = MU_COLORS.red;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = MU_COLORS.white;
                        }
                      }}
                    >
                      <Icon size={16} />
                      <span>{item.title}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Main Navigation Items */}
          <div style={{ padding: '0 16px' }}>
            {favorites.length > 0 || recentlyVisited.length > 0 ? (
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                Navigation
              </div>
            ) : null}
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              const fav = isFavorite(item.path);

              return (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    marginBottom: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '8px',
                        color: isActive ? MU_COLORS.red : MU_COLORS.white,
                        backgroundColor: isActive
                          ? 'rgba(218, 41, 28, 0.2)'
                          : 'transparent',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: isActive ? 600 : 400,
                        transition: 'all 0.2s',
                        borderLeft: isActive
                          ? `3px solid ${MU_COLORS.red}`
                          : '3px solid transparent',
                        letterSpacing: '0.05em',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor =
                            'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.color = MU_COLORS.red;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = MU_COLORS.white;
                        }
                      }}
                    >
                      <Icon
                        size={18}
                        style={{
                          color: isActive ? MU_COLORS.red : MU_COLORS.white,
                          transition: 'color 0.2s',
                        }}
                      />
                      <span>{item.title}</span>
                    </Link>
                    <Tooltip
                      label={fav ? 'Remove from Favorites' : 'Add to Favorites'}
                      aria-label={`${fav ? 'Remove from' : 'Add to'} favorites tooltip`}
                      hasArrow
                      placement="right"
                      openDelay={200}
                      bg="#1A1A1A"
                      color={MU_COLORS.white}
                      border={`1px solid ${MU_COLORS.red}`}
                      borderRadius="4px"
                    >
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(item);
                        }}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: fav ? MU_COLORS.red : 'rgba(255, 255, 255, 0.3)',
                          cursor: 'pointer',
                          padding: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '4px',
                          transition: 'all 0.2s',
                        }}
                        aria-label={`${fav ? 'Remove from' : 'Add to'} favorites`}
                      >
                        <FaHeart size={14} />
                      </motion.button>
                    </Tooltip>
                  </div>
                </motion.div>
              );
            })}

            {/* Quiz Button */}
            <motion.div
              whileHover={{ x: 4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ marginTop: '16px' }}
            >
              <Tooltip
                label="Test Your Knowledge"
                aria-label="Quiz tooltip"
                hasArrow
                placement="right"
                openDelay={200}
                bg="#1A1A1A"
                color={MU_COLORS.white}
                border={`1px solid ${MU_COLORS.red}`}
                borderRadius="4px"
              >
                <motion.button
                  onClick={() => {
                    window.open(quizUrl, '_blank', 'noopener,noreferrer');
                    onClose();
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    border: `2px solid ${MU_COLORS.red}`,
                    color: MU_COLORS.white,
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s',
                  }}
                  whileHover={{
                    backgroundColor: MU_COLORS.red,
                    boxShadow: `0 0 20px rgba(218, 41, 28, 0.5)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBrain size={18} />
                  <span>Quiz</span>
                </motion.button>
              </Tooltip>
            </motion.div>
          </div>
        </nav>

        {/* Footer Section (Bottom 20%) */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <Link
            to="/"
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              fontFamily: "'Montserrat', sans-serif",
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = MU_COLORS.red;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            }}
          >
            <FaHome size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </motion.aside>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          aside[role="navigation"] {
            width: 80% !important;
            max-width: 300px !important;
          }
        }
        
        @media (min-width: 769px) {
          aside[role="navigation"] {
            box-shadow: 2px 0 12px rgba(0, 0, 0, 0.3) !important;
          }
        }
        
        /* Scrollbar Styling */
        nav::-webkit-scrollbar {
          width: 6px;
        }
        
        nav::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        nav::-webkit-scrollbar-thumb {
          background: rgba(218, 41, 28, 0.5);
          border-radius: 3px;
        }
        
        nav::-webkit-scrollbar-thumb:hover {
          background: rgba(218, 41, 28, 0.8);
        }
      `}</style>
    </>
  );
};

export default Sidebar;

