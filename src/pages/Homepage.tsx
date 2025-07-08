
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Upload, Image, Heart, MapPin, Users, Mountain } from "lucide-react";

const Homepage = () => {
  const navigate = useNavigate();

  // Mock youth data - expanded to ~30 entries
  const villageYouth = [
    {
      id: 1,
      name: "Ravi Kumar", 
      role: "Student Leader",
      photo: "/api/placeholder/100/100",
      message: "Building our village's future"
    },
    {
      id: 2,
      name: "Priya Devi",
      role: "Cultural Ambassador", 
      photo: "/api/placeholder/100/100",
      message: "Preserving our traditions"
    },
    {
      id: 3,
      name: "Arjun Reddy",
      role: "Sports Captain",
      photo: "/api/placeholder/100/100", 
      message: "Leading with passion"
    },
    {
      id: 4,
      name: "Meera Lakshmi",
      role: "Environmental Advocate",
      photo: "/api/placeholder/100/100",
      message: "Green future champion"
    },
    {
      id: 5,
      name: "Kiran Chandra",
      role: "Tech Enthusiast",
      photo: "/api/placeholder/100/100",
      message: "Digital innovation pioneer"
    },
    {
      id: 6,
      name: "Divya Sree",
      role: "Community Volunteer",
      photo: "/api/placeholder/100/100",
      message: "Service before self"
    },
    {
      id: 7,
      name: "Suresh Babu",
      role: "Youth Leader",
      photo: "/api/placeholder/100/100",
      message: "Inspiring change"
    },
    {
      id: 8,
      name: "Kavitha Rani",
      role: "Art Teacher",
      photo: "/api/placeholder/100/100",
      message: "Creative minds"
    },
    {
      id: 9,
      name: "Rahul Sharma",
      role: "Agriculture Student",
      photo: "/api/placeholder/100/100",
      message: "Future farmer"
    },
    {
      id: 10,
      name: "Anjali Patel",
      role: "Health Worker",
      photo: "/api/placeholder/100/100",
      message: "Community wellness"
    },
    {
      id: 11,
      name: "Vikram Singh",
      role: "Mechanic",
      photo: "/api/placeholder/100/100",
      message: "Fixing tomorrow"
    },
    {
      id: 12,
      name: "Pooja Gupta",
      role: "Teacher",
      photo: "/api/placeholder/100/100",
      message: "Educating minds"
    },
    {
      id: 13,
      name: "Anil Kumar",
      role: "Shopkeeper",
      photo: "/api/placeholder/100/100",
      message: "Serving community"
    },
    {
      id: 14,
      name: "Sunita Devi",
      role: "Nurse",
      photo: "/api/placeholder/100/100",
      message: "Caring hearts"
    },
    {
      id: 15,
      name: "Rajesh Yadav",
      role: "Driver",
      photo: "/api/placeholder/100/100",
      message: "Safe journeys"
    },
    {
      id: 16,
      name: "Lakshmi Prasad",
      role: "Cook",
      photo: "/api/placeholder/100/100",
      message: "Nourishing souls"
    },
    {
      id: 17,
      name: "Gopal Krishna",
      role: "Farmer",
      photo: "/api/placeholder/100/100",
      message: "Growing hope"
    },
    {
      id: 18,
      name: "Sita Ramesh",
      role: "Tailor",
      photo: "/api/placeholder/100/100",
      message: "Weaving dreams"
    },
    {
      id: 19,
      name: "Harish Reddy",
      role: "Electrician",
      photo: "/api/placeholder/100/100",
      message: "Lighting lives"
    },
    {
      id: 20,
      name: "Deepika Rao",
      role: "Student",
      photo: "/api/placeholder/100/100",
      message: "Learning always"
    },
    {
      id: 21,
      name: "Mohan Lal",
      role: "Carpenter",
      photo: "/api/placeholder/100/100",
      message: "Building homes"
    },
    {
      id: 22,
      name: "Radha Krishna",
      role: "Dancer",
      photo: "/api/placeholder/100/100",
      message: "Cultural pride"
    },
    {
      id: 23,
      name: "Sandeep Kumar",
      role: "Musician",
      photo: "/api/placeholder/100/100",
      message: "Melodic moments"
    },
    {
      id: 24,
      name: "Geetha Sharma",
      role: "Midwife",
      photo: "/api/placeholder/100/100",
      message: "New beginnings"
    },
    {
      id: 25,
      name: "Prakash Reddy",
      role: "Barber",
      photo: "/api/placeholder/100/100",
      message: "Style and care"
    },
    {
      id: 26,
      name: "Kamala Devi",
      role: "Elder",
      photo: "/api/placeholder/100/100",
      message: "Wisdom keeper"
    },
    {
      id: 27,
      name: "Naresh Babu",
      role: "Postman",
      photo: "/api/placeholder/100/100",
      message: "Connecting hearts"
    },
    {
      id: 28,
      name: "Shanti Kumari",
      role: "Cleaner",
      photo: "/api/placeholder/100/100",
      message: "Clean village"
    },
    {
      id: 29,
      name: "Ramu Yadav",
      role: "Watchman",
      photo: "/api/placeholder/100/100",
      message: "Guardian angel"
    },
    {
      id: 30,
      name: "Bharti Devi",
      role: "Helper",
      photo: "/api/placeholder/100/100",
      message: "Always helping"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4 font-serif">
            Anantharuyudu Peta
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-2">
            Photo Memories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-400 mx-auto rounded-full"></div>
        </header>

        {/* Welcome Message */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Welcome to Our Village Story
            </h2>
            <p className="text-lg md:text-xl text-amber-800 leading-relaxed mb-8">
              నమస్కారం! Welcome to Anantharuyudu Peta's digital memory collection. 
              Share the moments that make our village special. Upload your favorite photos 
              and help us create a beautiful collection of memories that capture the heart 
              and soul of our community. Every picture tells a story, and together we're 
              writing the story of our beloved village.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-amber-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Share Your Memories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Celebrate Together</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Build Our Story</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Anantharuyudu Peta Section */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center">
              About Anantharuyudu Peta
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Location */}
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">Our Location</h3>
                <p className="text-amber-700 leading-relaxed">
                  Nestled in the beautiful Parvathipuram Manyam district, within Seethanagaram Mandal, 
                  our village is a gem in the heart of Andhra Pradesh, India. Surrounded by lush green 
                  landscapes and rolling hills.
                </p>
              </div>

              {/* Culture */}
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">Our Culture</h3>
                <p className="text-amber-700 leading-relaxed">
                  Rich in Telugu traditions and customs, our village celebrates festivals with great joy. 
                  From colorful Sankranti kites to vibrant Diwali celebrations, we maintain our cultural 
                  heritage while embracing modernity.
                </p>
              </div>

              {/* Lifestyle */}
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">Our Lifestyle</h3>
                <p className="text-amber-700 leading-relaxed">
                  A harmonious blend of agriculture and community living defines us. Our farmers work 
                  the fertile lands while families gather for evening conversations under the banyan tree, 
                  creating bonds that last generations.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
              <p className="text-center text-amber-800 text-lg italic">
                "అనంతరాయుడుపేట - Where tradition meets tomorrow, and every sunset brings us closer together."
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            <Button
              onClick={() => navigate('/upload')}
              className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 rounded-2xl p-8 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              size="lg"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-colors">
                  <Upload className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">Share a Photo</div>
                  <div className="text-sm opacity-90">
                    Upload your favorite village moments
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>

            <Button
              onClick={() => navigate('/gallery')}
              className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0 rounded-2xl p-8 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              size="lg"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-colors">
                  <Image className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">View Gallery</div>
                  <div className="text-sm opacity-90">
                    Explore our shared memories
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </div>

        {/* Village Youth Section - Larger Images in Grid */}
        <div className="max-w-7xl mx-auto mb-16 animate-fade-in">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-300">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">
              Village Youth
            </h2>
            <p className="text-center text-amber-700 mb-8 text-lg">
              Meet the bright minds shaping our village's tomorrow
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {villageYouth.map((youth, index) => (
                <div
                  key={youth.id}
                  className="group relative bg-gradient-to-br from-white via-amber-50 to-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-2 border-amber-200 hover:border-orange-300"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {/* Photo */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={youth.photo}
                      alt={youth.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating heart */}
                    <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 shadow-lg">
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </div>
                    
                    {/* Name overlay on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-sm truncate">{youth.name}</h3>
                      <p className="text-xs opacity-90 truncate">{youth.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-bold text-amber-900 group-hover:text-orange-600 transition-colors duration-300 truncate mb-1">
                      {youth.name}
                    </h3>
                    <p className="text-xs text-amber-700 truncate opacity-80">
                      {youth.role}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-amber-400 border-t-[20px] border-t-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border border-amber-200">
              <p className="text-amber-800 text-lg font-medium">
                Young leaders building our village's bright future together ✨
              </p>
              <div className="flex justify-center items-center gap-2 mt-3">
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
                <span className="text-amber-700 text-sm">Unidos por el progreso</span>
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 animate-fade-in">
          <p className="text-amber-600 text-sm">
            Made with ❤️ for Anantharuyudu Peta community
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
