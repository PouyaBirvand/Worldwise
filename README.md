## 🌍 WorldWise - Your Ultimate Travel Companion
![WorldWise Banner](public/logo.png)

## 🚀 Live Demo
[Check out WorldWise in action!](https://worldwise-omega-teal.vercel.app/)

## 📱 App Preview
<table>
  <tr>
    <td align="center">
      <img src="https://s6.uupload.ir/files/worldwise1_36yc.png" width="400px" alt="WorldWise Map Interface" />
      <br />
      <em>Interactive Map Interface</em>
    </td>
    <td align="center">
      <img src="https://s6.uupload.ir/files/worldwise2_sgja.png" width="400px" alt="WorldWise City Details" />
      <br />
      <em>Homepage</em>
    </td>
  </tr>
</table>

## ✨ What Makes WorldWise Special
Track your worldwide adventures with an interactive map interface! Mark cities, add notes, and create your personal travel diary.

## 🎯 Core Features
- **Interactive World Map** 🗺️
  - Real-time location tracking
  - Click-to-add city functionality
  - Custom map markers
  - Responsive design
- **Travel Management** 🌆
  - Add visited cities
  - Record travel dates
  - Personal travel notes
  - City deletion capability
- **User Experience** 👤
  - Dark mode interface
  - Responsive design
  - Fast loading
  - Intuitive navigation

## 🛠️ Built With
- **React 18** - UI Framework
- **Vite** - Build Tool
- **React Router 6** - Navigation
- **Leaflet** - Map Integration
- **CSS Modules** - Styling
- **JSON Server** - Backend Mock

## 📦 Getting Started
```bash
# Clone WorldWise
git clone https://github.com/your-username/worldwise.git

# Install dependencies
npm install

# Install JSON Server globally
npm install -g json-server

# Start JSON server on port 9000 (Terminal 1)
json-server --watch data/cities.json --port 9000

# Launch development server (Terminal 2)
npm run dev
```

### ⚠️ Important Setup Notes
1. JSON Server must run on port 9000 for the application to work correctly
2. Make sure data/cities.json exists and contains the initial data structure
3. Keep both development server and JSON server running simultaneously
4. Default development server runs on http://localhost:5173
5. API endpoints will be available at http://localhost:9000
6. 

### 📝 Initial Data Structure
```json
{
  "cities": []
}
```

## 💻 Development
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Project Structure
```bash
worldwise/
├── public/          # Static assets
├── src/
│   ├── components/  # React components & CSS modules
│   ├── contexts/    # Context providers
│   ├── hooks/       # Custom hooks
│   ├── pages/       # Route pages
└── data/           # JSON server data
```

## 🌟 Key Features Explained
### Map Integration
- Interactive Leaflet maps
- Real-time position tracking
- Custom markers for cities

### City Management
- Add/remove cities
- Date selection
- Travel notes
- Country flags

### User Interface
- Dark mode design
- Responsive layout
- Smooth animations
- Intuitive navigation

## 📱 Screenshots
| Home | City Form | Cities List |
|------|-----------|-------------|
| ![Home](public/img-1.jpg) | ![Form](public/img-2.jpg) | ![List](public/bg.jpg) |

## 🔜 Roadmap
- [ ] User authentication
- [ ] Photo uploads
- [ ] Social sharing
- [ ] Trip planning
- [ ] Weather integration
- [ ] Travel statistics

## 🤝 Contributing
1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -am 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author
Your Name
- GitHub: [@PouyaBirvand](https://github.com/Pouyabirvand)

## 💫 Acknowledgments
- React Team
- Vite Team
- Leaflet Maps
- JSON Server Team

---
⭐️ If you like WorldWise, give it a star!
[Report Bug](issues-link) · [Request Feature](issues-link) · [Documentation](docs-link)
