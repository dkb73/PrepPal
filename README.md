# PrepPal

## 🌐 Live Demo
Experience the live version of the platform deployed on Vercel: [**PrepPal**](https://prep-pal-beta.vercel.app/)

The deployment is automatically updated with the latest changes from the main branch, ensuring you always see the most recent version of our platform. Feel free to explore the various sections and features we've implemented.

## 🚀 Features
- **AI-Powered Interview Generation**: Real-time AI-based interview simulations using `@ai-sdk/google`
- **Interactive UI Components**: Built with **Framer Motion** and **Shadcn/UI** for smooth animations and modern design
- **Responsive Design**: Fully responsive layout using **Tailwind CSS**
- **Performance Analytics**: Track progress with **Chart.js** and `react-chartjs-2`
- **Real-time Voice Interactions**: Implemented via `@vapi-ai/web`
- **Modern Icons**: Uses **lucide-react** and `@tabler/icons-react`
- **Notifications System**: Elegant toast notifications using **sonner**
- **API Integration**: Features robust API routes for AI model integration and data processing
- **Authentication**: Secure user authentication with **Firebase Authentication**
- **Database**: Utilizes **Firebase Firestore** for interview session storage
- **Performance Optimization**: Code splitting and lazy loading for enhanced efficiency
- **Accessibility Features**: WCAG-compliant design with ARIA attributes

## 🛠️ Tech Stack
- **Framework**: Next.js 14
- **Styling**:
  - Tailwind CSS
  - Shadcn/UI
- **Animations**: Framer Motion
- **State Management**: React 18
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication
- **Type Safety**: TypeScript
- **Additional Libraries**:
  - chart.js & react-chartjs-2 (Data visualization)
  - lucide-react & @tabler/icons-react (Icons)
  - @tsparticles/react & @tsparticles/slim (Particle effects)
  - clsx & class-variance-authority (Class management)

## 📁 Project Structure
```
PrepPal/
├── app/                   
│   ├── (auth)/            
│   ├── (root)/             
│   ├── api/                
│   └── ...                 
├── components/             
├── firebase/              
├── lib/                    
├── types/                  
├── constants/              
├── public/                 
└── package.json            
```

## 🚀 Getting Started
You can use any of the following package managers to set up the project. Choose the one you're most comfortable with:

Update the .env.local file with the required API keys and environment variables before running the project.
### Using npm
Install dependencies:
```sh
npm install
```
Run the development server:
```sh
npm run dev
```

Once the development server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🧩 Components
The project includes several key components:
- **Agent**: AI-driven interview assistant
- **AuthForm**: Handles authentication processes
- **InterviewCard**: Displays AI-generated interview sessions
- **ScoreRadialChart**: Performance analytics visualization
- **NavBar**: Responsive navigation bar
- **CategoryBarChart**: Interview skill tracking
- **LogoutButton**: User sign-out functionality
- **DisplayTechIcons**: Technology icons for UI enhancement
- And many more reusable components

## 📄 License
This project is licensed under the **GNU AFFERO GENERAL PUBLIC LICENSE** - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute, feel free to submit issues and pull requests.

## ✨ Acknowledgments
- OpenAI for AI model integration
- Firebase for backend services
- Next.js for the powerful framework
- All contributors and supporters

## 📬 Contact
For any queries regarding the platform, please reach out via the contact form on the website or create an issue in this repository.

⭐ **Don't forget to star the repository if you find it useful!**

