import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Coffee, ChevronLeft, ChevronRight, ShoppingBag, Truck, ChevronDown, ArrowRight, Utensils, Beer, Pizza, Shirt, Smartphone, Gift, Hotel, Sun, Users, Sparkles, Briefcase, Wrench, Activity, GraduationCap, Car, Home } from 'lucide-react';

import factoryApp from '../assets/images/factory-app.png';
import cafeApp from '../assets/images/cafe-app.png';

// Define types for better organization
type UseCaseSlide = {
    id: number;
    title: string;
    description: string;
    features: string[];
    image: string;
    icon: React.ReactNode;
};

type UseCasesData = Record<string, UseCaseSlide[]>;

const useCasesData: UseCasesData = {
    "Gastronomy": [
        {
            id: 1,
            title: "Restaurants",
            description: "Optimize operations from kitchen to table with integrated digital solutions.",
            features: [
                "Online Ordering & Delivery",
                "Table Reservation Systems",
                "Digital Menus & QR Ordering",
                "POS & Payment Integration",
                "Customer Loyalty Programs"
            ],
            image: cafeApp,
            icon: <Utensils size={32} />
        },
        {
            id: 2,
            title: "Cafés",
            description: "Streamline coffee shop workflows and boost customer retention.",
            features: [
                "Mobile Pre-Order & Pickup",
                "Digital Menu Boards",
                "Loyalty & Stamp Cards",
                "Subscription Models",
                "Sales & Demand Analytics"
            ],
            image: cafeApp,
            icon: <Coffee size={32} />
        },
        {
            id: 3,
            title: "Bars & Nightlife",
            description: "Enhance guest experience and speed up service in high-volume environments.",
            features: [
                "Mobile Ordering & Payments",
                "Event & Table Booking",
                "Digital Drink Menus",
                "Customer Engagement Apps",
                "CRM & Guest Analytics"
            ],
            image: cafeApp,
            icon: <Beer size={32} />
        },
        {
            id: 4,
            title: "Fast Food & Chains",
            description: "Maximize efficiency and throughput with self-service and automated tools.",
            features: [
                "Self-Service Kiosks",
                "Order & Queue Management",
                "Multi-Location POS Integration",
                "Promotions & Coupons",
                "Operational Analytics"
            ],
            image: cafeApp,
            icon: <Pizza size={32} />
        },
        {
            id: 5,
            title: "Delivery & Takeaway",
            description: "Empower your delivery service with tracking and management apps.",
            features: [
                "Branded Ordering Apps",
                "Delivery Tracking",
                "Kitchen Display Systems",
                "Aggregator Integration",
                "Customer Feedback Systems"
            ],
            image: cafeApp,
            icon: <Truck size={32} />
        }
    ],
    "Retail": [
        {
            id: 6,
            title: "Fashion & Apparel",
            description: "Connect online and offline shopping for a seamless fashion experience.",
            features: [
                "E-Commerce & Mobile Shopping",
                "Virtual Fitting & Size Advice",
                "Omnichannel Cart & Checkout",
                "Loyalty & Membership Apps",
                "AI Product Discovery"
            ],
            image: factoryApp,
            icon: <Shirt size={32} />
        },
        {
            id: 7,
            title: "Grocery & Supermarkets",
            description: "Modernize the weekly shop with digital convenience.",
            features: [
                "Online Grocery Ordering",
                "Click & Collect & Pickup",
                "Live Inventory & Availability",
                "Digital Loyalty Programs",
                "Personalized Offers"
            ],
            image: factoryApp,
            icon: <ShoppingBag size={32} />
        },
        {
            id: 8,
            title: "Electronics & Tech",
            description: "Empower customers with detailed product info and support.",
            features: [
                "Product Comparison Tools",
                "In-Store Digital Advisors",
                "Omnichannel Warranty & Support",
                "Financing & Subscription Models",
                "AI Recommendations"
            ],
            image: factoryApp,
            icon: <Smartphone size={32} />
        },
        {
            id: 9,
            title: "Home & Lifestyle",
            description: "Help customers visualize and plan their perfect home.",
            features: [
                "Visual Product Configurators",
                "AR Room Preview",
                "Assisted Selling Apps",
                "Order Tracking",
                "Customer Accounts & CRM"
            ],
            image: factoryApp,
            icon: <Home size={32} />
        },
        {
            id: 10,
            title: "Specialty Retail",
            description: "Niche solutions for specialized retail businesses.",
            features: [
                "Niche E-Commerce Platforms",
                "Appointment-Based Selling",
                "Custom Product Builders",
                "Community & Membership Apps",
                "Analytics & Insights"
            ],
            image: factoryApp,
            icon: <Gift size={32} />
        }
    ],
    "Hospitality": [
        {
            id: 11,
            title: "Hotels",
            description: "Elevate the guest journey from booking to checkout.",
            features: [
                "Booking Engines",
                "Guest Apps & Digital Check-in",
                "Room Management Systems",
                "Upselling & Add-ons",
                "Guest Analytics"
            ],
            image: cafeApp,
            icon: <Hotel size={32} />
        },
        {
            id: 12,
            title: "Vacation Rentals",
            description: "Simplify property management and guest communication.",
            features: [
                "Property Management Tools",
                "Self Check-in Solutions",
                "Guest Communication Apps",
                "Pricing & Availability Sync",
                "Review Management"
            ],
            image: cafeApp,
            icon: <Home size={32} />
        },
        {
            id: 13,
            title: "Resorts",
            description: "Manage complex resort activities and billing effortlessly.",
            features: [
                "Activity Booking Platforms",
                "Guest Experience Apps",
                "Multi-Service Billing",
                "Personalization Engines",
                "CRM & Analytics"
            ],
            image: cafeApp,
            icon: <Sun size={32} />
        },
        {
            id: 14,
            title: "Hostels",
            description: "Build community and streamline operations for hostels.",
            features: [
                "Mobile Booking & Check-in",
                "Community Features",
                "Event Scheduling",
                "Digital Payments",
                "Guest Feedback Tools"
            ],
            image: cafeApp,
            icon: <Users size={32} />
        },
        {
            id: 15,
            title: "Wellness & Spas",
            description: "Relaxing booking experiences for wellness centers.",
            features: [
                "Appointment Booking",
                "Package & Membership Sales",
                "Staff Scheduling",
                "CRM & Loyalty",
                "Usage Analytics"
            ],
            image: cafeApp,
            icon: <Sparkles size={32} />
        }
    ],
    "Services": [
        {
            id: 16,
            title: "Professional Services",
            description: "Digital tools for consultants, agencies, and firms.",
            features: [
                "Online Scheduling",
                "Client Portals",
                "Digital Contracts",
                "Invoicing & Payments",
                "CRM Systems"
            ],
            image: factoryApp,
            icon: <Briefcase size={32} />
        },
        {
            id: 17,
            title: "Home Services",
            description: "Manage field service teams and customer appointments efficiently.",
            features: [
                "Job Booking Platforms",
                "Dispatch & Routing Tools",
                "Customer Communication Apps",
                "Mobile Workforce Tools",
                "Service Analytics"
            ],
            image: factoryApp,
            icon: <Wrench size={32} />
        },
        {
            id: 18,
            title: "Fitness & Health",
            description: "Engage members and track progress in fitness centers.",
            features: [
                "Membership Apps",
                "Class Booking",
                "Wearable Integration",
                "Progress Tracking",
                "Retention Analytics"
            ],
            image: factoryApp,
            icon: <Activity size={32} />
        },
        {
            id: 19,
            title: "Education & Training",
            description: "Platforms for modern learning and course management.",
            features: [
                "Learning Platforms",
                "Course Booking",
                "Certification Systems",
                "Progress Dashboards",
                "User Analytics"
            ],
            image: factoryApp,
            icon: <GraduationCap size={32} />
        },
        {
            id: 20,
            title: "Mobility & Local Services",
            description: "Solutions for rental, transport, and local service providers.",
            features: [
                "Booking & Rental Apps",
                "Location Tracking",
                "Digital Payments",
                "User Management",
                "Analytics & Reporting"
            ],
            image: factoryApp,
            icon: <Car size={32} />
        }
    ]
};

const UseCases: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Gastronomy");
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const categories = Object.keys(useCasesData);
    const currentSlides = useCasesData[activeCategory];
    const currentSlide = currentSlides[activeSlideIndex];

    // Timer Configuration
    const duration = 12000; // Total duration in ms
    const tick = 50; // Update interval in ms

    const containerRef = useRef<HTMLDivElement>(null);

    // Progress Timer Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    // Time's up: move to next slide and reset
                    setActiveSlideIndex((current) => (current + 1) % currentSlides.length);
                    return 0;
                }

                // Calculate increment: (100% / total_steps)
                // Total steps = duration / tick
                // If hovered, reduce speed by factor (e.g., 0.1 = 10x slower)
                const baseIncrement = 100 / (duration / tick);
                const speedFactor = isHovered ? 0.05 : 1; // Extremely slow (20x) when hovered

                return prev + (baseIncrement * speedFactor);
            });
        }, tick);

        return () => clearInterval(timer);
    }, [currentSlides.length, isHovered]); // Reset if slides length changes (category switch)

    // Reset progress when slide changes manually or category changes
    useEffect(() => {
        setProgress(0);
    }, [activeSlideIndex, activeCategory]);

    const handleCategorySelect = (category: string) => {
        setActiveCategory(category);
        setActiveSlideIndex(0);
        setIsDropdownOpen(false);
    };

    const handleNext = () => {
        setActiveSlideIndex((prev) => (prev + 1) % currentSlides.length);
        setProgress(0);
    };

    const handlePrev = () => {
        setActiveSlideIndex((prev) => (prev === 0 ? currentSlides.length - 1 : prev - 1));
        setProgress(0);
    };

    const handleDotClick = (index: number) => {
        setActiveSlideIndex(index);
        setProgress(0);
    };

    return (
        <section
            ref={containerRef}
            className="w-full min-h-screen bg-black text-white py-24 px-4 md:px-8 relative overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header / Navigation */}
            <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end relative z-40">
                <div className="max-w-2xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-medium text-blue-400 mb-2 tracking-wider uppercase">
                            Use Cases
                        </h2>
                        <div className="flex flex-col items-start gap-y-2 text-4xl md:text-5xl font-bold leading-tight">
                            <span>Digital Solutions for</span>

                            {/* Dropdown Menu */}
                            <div className="relative inline-block">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-2 text-white border-b-2 border-blue-500/50 hover:border-blue-400 transition-colors pb-1 cursor-pointer"
                                    aria-haspopup="listbox"
                                    aria-expanded={isDropdownOpen}
                                >
                                    <span className="text-blue-400">{activeCategory}</span>
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        size={32}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 mt-4 min-w-[200px] w-max max-w-[90vw] bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50 p-2"
                                            role="listbox"
                                        >
                                            {categories.map((category) => (
                                                <li key={category}>
                                                    <button
                                                        onClick={() => handleCategorySelect(category)}
                                                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between group/item ${activeCategory === category
                                                            ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                                            : 'text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                                                            }`}
                                                        role="option"
                                                        aria-selected={activeCategory === category}
                                                    >
                                                        <span className="font-medium">{category}</span>
                                                        {activeCategory === category && (
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                        )}
                                                    </button>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Areas */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

                {/* Left: Text Content */}
                <div className="order-2 lg:order-1 relative">
                    {/* Mobile Navigation Arrows (Visible only on mobile/tablet) */}
                    <div className="flex lg:hidden justify-end gap-2 mb-6">
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all active:scale-95 bg-slate-900/50"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all active:scale-95 bg-slate-900/50"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeCategory}-${currentSlide.id}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-blue-400 mb-6 shadow-glow">
                                {currentSlide.icon}
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold mb-4">{currentSlide.title}</h3>
                                <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                                    {currentSlide.description}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 pt-4 border-t border-slate-800/50">
                                {currentSlide.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between group/feature py-2 border-b border-slate-800/30 last:border-0 cursor-default"
                                    >
                                        <span className="text-slate-300 group-hover/feature:text-white transition-colors">
                                            {feature}
                                        </span>
                                        <ArrowRight
                                            size={16}
                                            className="text-slate-600 group-hover/feature:text-blue-400 group-hover/feature:translate-x-1 transition-all"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination Dots */}
                    <div className="flex gap-3 mt-12">
                        {currentSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeSlideIndex
                                    ? 'w-8 bg-blue-500'
                                    : 'w-2 bg-slate-700 hover:bg-slate-600'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Image Preview */}
                <div className="order-1 lg:order-2 relative group/image">
                    {/* Navigation Arrows (Above Image) */}
                    <div className="hidden lg:flex absolute -top-16 right-0 gap-2 z-20">
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all active:scale-95"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all active:scale-95"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`${activeCategory}-${currentSlide.id}`}
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-900/50">
                <motion.div
                    className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "linear", duration: 0.1 }} // Smooth, short transition for updates
                />
            </div>
        </section>
    );
};

export default UseCases;
