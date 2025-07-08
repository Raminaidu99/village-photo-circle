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

        {/* Village Youth Section - Small Images in Grid */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 text-center">
              Village Youth
            </h2>
            <p className="text-center text-amber-700 mb-8">
              Meet the bright minds shaping our village's tomorrow
            </p>
            
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3">
              {villageYouth.map((youth, index) => (
                <div
                  key={youth.id}
                  className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-amber-200"
                  style={{ animationDelay: `${index * 20}ms` }}
                >
                  {/* Photo */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={youth.photo}
                      alt={youth.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-1 text-center">
                    <h3 className="text-xs font-bold text-amber-900 group-hover:text-orange-600 transition-colors duration-300 truncate">
                      {youth.name}
                    </h3>
                    <div className="flex items-center justify-center mt-1">
                      <Heart className="w-2 h-2 text-red-400 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Hover tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {youth.role}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
              <p className="text-amber-800 text-sm">
                Young leaders building our village's bright future together ✨
              </p>
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
