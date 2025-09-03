# PhotoDroneHire - Professional Photography & Drone Services Marketplace

A modern React.js marketplace application that connects professional photographers and drone operators with customers who need their services.

## 🚀 Features

### For Customers
- **Browse Services**: Search and filter photography and drone services
- **Book Services**: Easy booking system with date/time selection
- **View Profiles**: Detailed host profiles with reviews and portfolios
- **Manage Bookings**: Track booking status and history
- **Leave Reviews**: Rate and review completed services

### For Hosts (Service Providers)
- **Create Services**: Add photography and drone services with pricing
- **Manage Bookings**: Accept, reject, and manage incoming bookings
- **Profile Management**: Professional profile with portfolio showcase
- **Analytics**: Track earnings, ratings, and performance metrics
- **Dashboard**: Comprehensive dashboard for business management

## 🛠 Tech Stack

- **Frontend**: React.js 18 with Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (Authentication + Database)
- **Routing**: React Router DOM
- **State Management**: React Context API + Zustand
- **Date Handling**: date-fns

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── ServiceCard.jsx
│       ├── BookingForm.jsx
│       ├── RatingStars.jsx
│       └── DashboardSidebar.jsx
├── contexts/
│   ├── AuthContext.jsx
│   └── StoreContext.jsx
├── lib/
│   ├── supabaseClient.js
│   └── dummyData.js
├── pages/
│   ├── LandingPage.jsx
│   ├── Auth.jsx
│   ├── ServiceListing.jsx
│   ├── BookingPage.jsx
│   ├── HostDashboard.jsx
│   ├── CustomerDashboard.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd photodronehire
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional for Supabase)
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Supabase Setup (Optional)

If you want to use Supabase instead of dummy data:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Set up the following tables:

```sql
-- Profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('host', 'customer')),
  avatar_url TEXT,
  bio TEXT,
  location TEXT,
  rating DECIMAL(3,2),
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services table
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  host_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  subcategory TEXT,
  hourly_rate DECIMAL(10,2),
  daily_rate DECIMAL(10,2),
  location TEXT,
  images TEXT[],
  tags TEXT[],
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES profiles(id),
  service_id UUID REFERENCES services(id),
  host_id UUID REFERENCES profiles(id),
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  duration INTEGER,
  total_amount DECIMAL(10,2),
  status TEXT DEFAULT 'pending',
  special_requests TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID REFERENCES bookings(id),
  customer_id UUID REFERENCES profiles(id),
  host_id UUID REFERENCES profiles(id),
  service_id UUID REFERENCES services(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Enable Row Level Security (RLS) and set up policies as documented in `src/lib/supabaseClient.js`

### Dummy Data Mode

If Supabase is not configured, the app will automatically use dummy data for local testing. You can sign in with any email/password combination.

## 🎨 Design System

The app uses a comprehensive design system with:

- **Color Palette**: Primary blues and purples with semantic colors
- **Typography**: Inter font family with consistent sizing
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoints

### Custom CSS Classes

- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling  
- `.btn-outline` - Outline button styling
- `.input-field` - Form input styling
- `.card` - Card component styling
- `.text-gradient` - Gradient text effect

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Mobile-first design with collapsible navigation

## 🔐 Authentication

The app supports two user roles:

### Customer
- Browse and book services
- Manage bookings and reviews
- View host profiles

### Host (Service Provider)
- Create and manage services
- Handle booking requests
- View analytics and earnings

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Supabase](https://supabase.com) for backend services
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://framer.com/motion) for animations
- [Lucide](https://lucide.dev) for icons
- [Unsplash](https://unsplash.com) for sample images

## 📞 Support

For support and questions:
- Create an issue in the repository
- Email: support@photodronehire.com
- Documentation: [docs.photodronehire.com](https://docs.photodronehire.com)

---

**PhotoDroneHire** - Connecting photographers and customers worldwide 📸✨
