
import { Heart } from "lucide-react";

const Youth = () => {
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
  );
};

export default Youth;
