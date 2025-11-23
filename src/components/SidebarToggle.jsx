import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

const MU_COLORS = {
  red: '#DA291C',
  white: '#FFFFFF',
};

const SidebarToggle = ({ onClick, isOpen, isMobile = false }) => {
  // Hide hamburger on desktop when sidebar is open (sidebar has its own close button)
  // Always show on mobile
  const shouldShow = isMobile || !isOpen;

  return (
    <Tooltip
      label={isOpen ? 'Close Menu' : 'Open Menu'}
      aria-label="Toggle navigation menu tooltip"
      hasArrow
      placement="right"
      openDelay={200}
      bg="#1A1A1A"
      color={MU_COLORS.white}
      border={`1px solid ${MU_COLORS.red}`}
      borderRadius="4px"
    >
      <motion.button
        initial={{ opacity: 1, scale: 1 }}
        animate={{ 
          opacity: shouldShow ? 1 : 0,
          scale: shouldShow ? 1 : 0.8,
          pointerEvents: shouldShow ? 'auto' : 'none'
        }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 1000,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          border: `2px solid ${MU_COLORS.red}`,
          color: MU_COLORS.white,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = MU_COLORS.red;
          e.currentTarget.style.boxShadow = `0 0 20px rgba(218, 41, 28, 0.6)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
        }}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <FaBars size={20} />
      </motion.button>
    </Tooltip>
  );
};

export default SidebarToggle;

