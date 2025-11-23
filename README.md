# Garnacho Tribute Site

A heartfelt tribute website dedicated to Alejandro Garnacho, crafted by a devoted Manchester United fan. This project is more than just a showcase of his incredible talent - it's a personal expression of respect and admiration for a player who has captured the hearts of United fans worldwide.

As a passionate supporter of both Manchester United and Garnacho, this site serves as my way of celebrating his remarkable journey while expressing the deep concern many of us feel about his potential departure from Old Trafford. His electrifying pace, technical brilliance, and never-say-die attitude have made him a fan favorite, and this tribute stands as a testament to the impact he's had on our beloved club.

## Purpose

This website is built with love and respect for Garnacho's contributions to Manchester United. It represents the voice of fans who recognize his immense potential and hope to see him continue his journey at Old Trafford. Every goal, every assist, every moment of magic he's provided has strengthened our bond with this special player.

## Features

- **Personal Touch**: Every element reflects the passion of a true United fan
- **Interactive Sidebar Navigation**: Animated sidebar menu with fast autocomplete search using Trie data structure
- **Kit Display Gallery**: Browse through Garnacho's kit collection across multiple seasons with interactive voting
- **Interactive Gallery**: Relive Garnacho's most memorable moments in stunning detail
- **Goal Highlights**: Watch his spectacular goals that have lit up Old Trafford
- **Career Timeline**: Follow his remarkable journey from youth prospect to first-team star
- **Fan Merchandise**: Show your support with official Garnacho gear
- **Immersive Experience**: "Viva Garnacho" audio chant to recreate the stadium atmosphere
- **Responsive Design**: Perfect viewing experience across all devices with mobile-optimized navigation
- **Enhanced Styling**: Modern UI with Tailwind CSS integration and improved component layouts

## Pages

1. **Home** - A warm welcome to Garnacho's world
2. **Bio** - The story of a rising star who captured our hearts
3. **Stats** - Numbers that tell the tale of his impact
4. **Career History** - Every step of his remarkable journey
5. **Goals** - Relive the moments that made us fall in love with his game
6. **Merchandise** - Wear your support with pride
7. **Gallery** - A visual celebration of his time at United
8. **Kit Display** - Browse and vote on Garnacho's kit collection across seasons (2020-2025)
9. **Gracias Garnacho** - A heartfelt thank you from a devoted fan

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Chakra UI** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **HTML5 Audio API** - Audio playback
- **Trie Data Structure** - Fast autocomplete search implementation

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/garnacho-tribute.git
   cd garnacho-tribute
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 or the port specified in the terminal.

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
  ├── components/     # Reusable components
  │   ├── Sidebar.jsx        # Navigation sidebar with search
  │   ├── SidebarToggle.jsx  # Hamburger menu button
  │   ├── Navbar.jsx         # Top navigation bar
  │   └── Footer.jsx         # Site footer
  ├── pages/         # Page components
  │   ├── Home.jsx
  │   ├── Bio.jsx
  │   ├── KitDisplayPure.jsx # Kit display gallery
  │   └── ...        # Other page components
  ├── utils/         # Utility functions
  │   └── Trie.js    # Trie data structure for search
  ├── assets/        # Images and other static assets
  ├── App.jsx        # Main App component
  └── main.jsx       # Entry point
public/
  └── kits/          # Football kit images
```

## Contributing

We welcome contributions from fellow Garnacho and Manchester United fans! Please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -m "Add your feature").
- Push to the branch (git push origin feature/your-feature).
- Submit a Pull Request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Recent Updates

### Latest Features (2024)
- ✨ **Sidebar Navigation**: Added animated sidebar with intelligent search using Trie data structure
- ⚽ **Kit Display Page**: New interactive gallery showcasing Garnacho's kits with voting functionality
- 🎨 **Tailwind CSS Integration**: Enhanced styling with Tailwind CSS for modern, responsive design
- 📱 **Improved Mobile Experience**: Better responsive behavior with mobile-optimized navigation
- 🔍 **Fast Search**: Autocomplete search with O(1) average lookup time for quick navigation

---

*Built with love for Alejandro Garnacho and Manchester United. Viva Garnacho! 🔴*
