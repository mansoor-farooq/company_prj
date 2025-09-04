import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Sparkles, Smartphone, Palette, Code, Database, Cpu,
    Menu, X, ChevronRight, ArrowRight, Star, Users,
    Zap, Globe, Code2, Shield, Mail, MapPin, Phone
} from "lucide-react";

// Button component replacement
const Button = ({
    children,
    className = "",
    variant = "default",
    size = "default",
    ...props
}) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    const variants = {
        default: "bg-teal-600 text-white hover:bg-teal-700",
        outline: "border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white",
        ghost: "hover:bg-teal-100 hover:text-teal-600 dark:hover:bg-teal-900/30",
    };

    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md text-lg",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

// Card components replacement
const Card = ({ children, className = "", ...props }) => {
    return (
        <div
            className={`rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

const CardContent = ({ children, className = "", ...props }) => {
    return (
        <div className={`p-6 ${className}`} {...props}>
            {children}
        </div>
    );
};

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentTechCategory, setCurrentTechCategory] = useState(0);
    const [formData, setFormData] = useState({
        service: "",
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [currentPortfolio, setCurrentPortfolio] = useState(0);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPortfolio((prev) => (prev + 1) % portfolio.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Reset or handle as needed
        setFormData({
            service: "",
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    const services = [
        {
            icon: <Sparkles className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
            title: "Custom Development",
            desc: "We bring skilled professionals to shape projects better, ensuring smooth collaboration and productivity.",
            tags: ["MEAN", "MERN", "Flask"],
            features: ["Custom web applications", "API development", "Third-party integrations"]
        },
        {
            icon: <Palette className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
            title: "UI/UX Design",
            desc: "We create eye-catching designs that users love, connecting your brand with your audience.",
            tags: ["Figma", "Adobe XD", "InVision"],
            features: ["User research", "Wireframing", "Prototyping", "Design systems"]
        },
        {
            icon: <Smartphone className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
            title: "Mobile Development",
            desc: "Flexible and scalable mobile solutions that fit your audience and business goals.",
            tags: ["React Native", "Flutter", "Java"],
            features: ["iOS & Android apps", "Cross-platform solutions", "App store deployment"]
        },
        {
            icon: <Code className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
            title: "Front-End Development",
            desc: "Mixing good looks with practicality, we build responsive and modern front-end solutions.",
            tags: ["React", "Vue", "Next.js"],
            features: ["Responsive design", "Performance optimization", "Progressive Web Apps"]
        },
        {
            icon: <Database className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
            title: "Back-End Development",
            desc: "Robust back-end solutions ensuring smooth operations and data security.",
            tags: ["Node.js", "Express", "PostgreSQL"],
            features: ["Database design", "Server architecture", "API development", "Cloud deployment"]
        },
        {
            icon: <Cpu className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
            title: "Embedded Development",
            desc: "Specialized software for embedded systems, making devices work smarter and safer.",
            tags: ["C", "C++", "IoT"],
            features: ["Firmware development", "Hardware integration", "IoT solutions"]
        },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechNova",
            content: "eSpark transformed our outdated systems into a modern, efficient platform that has increased our productivity by 40%.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Michael Chen",
            role: "CTO, InnovateCo",
            content: "Their embedded development team delivered a complex IoT solution that exceeded our expectations. Truly exceptional work.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Jessica Williams",
            role: "Product Manager, GrowthApp",
            content: "The UI/UX design work from eSpark resulted in a 35% increase in user engagement. Their attention to detail is remarkable.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        }
    ];

    const stats = [
        { value: "150+", label: "Projects Completed" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "40+", label: "Expert Team Members" },
        { value: "5+", label: "Years of Excellence" }
    ];

    const whyChoose = [
        {
            title: "Bespoke Solutions Provider",
            desc: "At eSpark Consulting Group, our primary focus is to adjust, modify and adapt to the distinctive requirements of the clients and deliver what's the best. With every changing demand for software and hardware solutions from clients, our team closely understand those specific needs and implements what's required."
        },
        {
            title: "Swift Delivery Within Budget",
            desc: "For us, a successful project is something that is managed well. As a team, our team's core priority is to bring the projects on time and on budget. We have a robust history of delivering projects that were well managed and our future aim is to stick to what our prime concern has always been."
        },
        {
            title: "Expert Team",
            desc: "At eSpark, we have an incredible pool of professional experts, who are best at what they do. The domain specialists in our team are knowledgeable and experienced individuals with diverse industry backgrounds."
        },
        {
            title: "Range of Services",
            desc: "eSpark Consulting Group provide a comprehensive range of services that cover a number of industries. Our focused services include software development, embedded design, UI UX Design, IoT solutions and application development."
        },
        {
            title: "Incredible Customer Support",
            desc: "We make sure to maintain the best communication with the client with our exceptional customer service. Providing clients with consistent support is of great significance to us in order to make sure that the clients are pleased with the end result."
        },
        {
            title: "Never Compromising On Quality",
            desc: "Quality is what everyone looks for, whether it’s software or hardware services. We ensure that everything we create and deliver meets the highest standards, with a strong focus on exceeding client expectations and ensuring complete satisfaction with the final outcome."
        },
        {
            title: "Our Customer",
            desc: "We provide experts or teams tailored to your project, ensuring skill and compatibility with your goals and culture. They will collaborate closely, infusing fresh energy and ideas."
        }
    ];

    const techs = ["Laravel", "PHP", "Node JS", "Express Js", "Django", ".Net"];

    const technologies = [
        {
            category: "Frontend",
            items: ["React", "Vue.js", "Angular", "Next.js", "Svelte", "Ember.js"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "Django", "Flask", "Ruby on Rails", "Spring Boot"]
        },
        {
            category: "Mobile",
            items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"]
        },
        {
            category: "Database",
            items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis", "Oracle"]
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"]
        },
        {
            category: "Embedded & IoT",
            items: ["C", "C++", "Rust", "Python", "FreeRTOS", "Arduino"]
        },
        {
            category: "UI/UX Design",
            items: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Framer"]
        },
        {
            category: "AI & Machine Learning",
            items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Pandas"]
        }
    ];

    const industries = [
        { name: "Healthcare", icon: <Users className="w-10 h-10 text-teal-600 dark:text-teal-400" /> },
        { name: "Finance", icon: <Shield className="w-10 h-10 text-teal-600 dark:text-teal-400" /> },
        { name: "Education", icon: <Globe className="w-10 h-10 text-teal-600 dark:text-teal-400" /> },
        { name: "E-commerce", icon: <Zap className="w-10 h-10 text-teal-600 dark:text-teal-400" /> },
        { name: "Manufacturing", icon: <Cpu className="w-10 h-10 text-teal-600 dark:text-teal-400" /> },
        { name: "Entertainment", icon: <Code2 className="w-10 h-10 text-teal-600 dark:text-teal-400" /> }
    ];

    const portfolio = [
        {
            title: "Embedded",
            desc: "Specialized embedded systems development for smart devices.",
            technologies: ["C", "C++", "IoT"]
        },
        {
            title: "Circuit Design",
            desc: "Custom circuit design and hardware integration solutions.",
            technologies: ["PCB", "Electronics", "Firmware"]
        },
        {
            title: "Catan Board",
            desc: "A game that is easy to learn and accommodates a blend of strategy, luck and interesting choices.",
            technologies: ["Game Development", "Unity", "Strategy"]
        }
    ];

    const blogs = [
        {
            title: "Take IT Security Consulting as your prime requirement in 2025",
            date: "May 2, 2025",
            author: "espark",
            excerpt: "The venerable network is an in-danger network. And if you are a tech company and don’t have an extra protection firewall, then it’s a serious crime in the market language...."
        },
        {
            title: "IT Security Consulting Today or Company Data Leaks Forever",
            date: "March 6, 2025",
            author: "espark",
            excerpt: "There can be many social evils and digital scams continuously happening all around the globe. We can associate each crime with various points and links, but all the online frauds..."
        },
        {
            title: "The Role of Web Development in Engaging User Experiences",
            date: "February 28, 2025",
            author: "espark",
            excerpt: "The evolution of the internet and the advancement of web development have changed the dynamics of business in our growing world. There won’t be any denying that the active and..."
        }
    ];

    return (
        <div className="font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-500 overflow-x-hidden">
            {/* Navigation */}
            <motion.header
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-200 dark:border-gray-800"
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-teal-600 dark:text-teal-400">eSpark</h1>
                    </motion.div>

                    <nav className="hidden md:flex space-x-8 font-medium">
                        {["Company", "Services", "Portfolio", "Careers", "Blog"].map((item, index) => (
                            <motion.a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ y: -2 }}
                                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button className="rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-teal-500/25">
                            Let's Chat
                        </Button>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <motion.div
                                    initial={{ rotate: -30, scale: 0.8 }}
                                    animate={{ rotate: 0, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    ☀️
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ rotate: 30, scale: 0.8 }}
                                    animate={{ rotate: 0, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    🌙
                                </motion.div>
                            )}
                        </motion.button>

                        <button
                            className="md:hidden w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed inset-0 bg-white dark:bg-gray-900 z-50 md:hidden p-6"
                    >
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <h1 className="text-2xl font-bold text-teal-600 dark:text-teal-400">eSpark</h1>
                            </div>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-6 text-lg">
                            {["Company", "Services", "Portfolio", "Careers", "Blog"].map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="py-2 border-b border-gray-100 dark:border-gray-800"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <div className="absolute bottom-6 left-6 right-6">
                            <Button className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-blue-500">
                                Start a Project
                            </Button>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-blue-500/10 dark:from-teal-600/5 dark:to-blue-700/5"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-4.0.3&q=80&w=2000')] bg-cover bg-center bg-no-repeat"></div>
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Making Software Smarter Since 2018</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Engineering Innovation
                        <span className="block bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                            For A Digital Future
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-200 max-w-3xl mx-auto mb-10"
                    >
                        We empower enterprises and startups with custom software, embedded systems, and scalable solutions that drive growth and innovation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button size="lg" className="rounded-xl px-8 py-3 text-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 shadow-lg hover:shadow-teal-500/25">
                            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-xl px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                            View Our Work
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-1 h-3 bg-white rounded-full mt-2"
                        ></motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
                <div className="absolute top-0 left-0 w-full overflow-hidden">
                    <svg className="w-full h-16 text-white dark:text-gray-800" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M0,0 L0,100 L1000,100 L1000,0 Q500,150 0,0 Z" fill="currentColor"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                            We offer customized digital solutions, blending creativity and technology to meet your goals and drive your business forward.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-900 h-full border-0 overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
                                    <CardContent className="p-6">
                                        <motion.div
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                            className="flex justify-center mb-4"
                                        >
                                            {service.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{service.desc}</p>

                                        <div className="mb-5">
                                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key features:</h4>
                                            <ul className="space-y-1">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-sm">
                                                        <ChevronRight className="w-4 h-4 text-teal-500 mr-1" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                                            {service.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 text-sm bg-teal-100 text-teal-700 rounded-full dark:bg-teal-900/30 dark:text-teal-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="rounded-xl border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white dark:border-teal-400 dark:text-teal-300 w-full group-hover:bg-teal-500 group-hover:text-white transition-colors"
                                        >
                                            Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    {[0, 1, 2, 3, 4].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section id="company" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose eSpark Consulting?</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChoose.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-900 h-full">
                                    <CardContent>
                                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            {/* <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Work With</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {techs.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center flex items-center justify-center"
                            >
                                <span className="text-lg font-medium">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}


            {/* Technologies Section with Category Slider */}
            {/* Technologies Section with Enhanced Card Design */}
            <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Work With</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                            Explore our expertise across various technology domains, categorized for your convenience.
                        </p>
                    </motion.div>

                    <div className="mb-8 flex justify-center flex-wrap gap-4">
                        {technologies.map((category, i) => (
                            <Button
                                key={i}
                                variant={currentTechCategory === i ? "default" : "outline"}
                                onClick={() => setCurrentTechCategory(i)}
                                className="rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white border-none"
                            >
                                {category.category}
                            </Button>
                        ))}
                    </div>

                    <div className="overflow-hidden relative">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentTechCategory * 100}%` }}
                            transition={{ duration: 0.5 }}
                        >
                            {technologies.map((category, i) => (
                                <div key={i} className="min-w-full flex-shrink-0 px-4">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                        {category.items.map((tech, j) => (
                                            <motion.div
                                                key={j}
                                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    rotate: 2,
                                                    boxShadow: "0 10px 20px rgba(45, 212, 191, 0.3)"
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: j * 0.1,
                                                    hover: { type: "spring", stiffness: 300 }
                                                }}
                                                viewport={{ once: true }}
                                                className="relative bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl border border-teal-200 dark:border-teal-700 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-blue-400/10 dark:from-teal-600/10 dark:to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <span className="relative text-lg font-bold text-teal-600 dark:text-teal-300 z-10">
                                                    {tech}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="flex justify-center mt-6">
                        {technologies.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentTechCategory(i)}
                                className={`w-3 h-3 rounded-full mx-2 ${i === currentTechCategory ? "bg-teal-500" : "bg-gray-300 dark:bg-gray-600"} transition-colors duration-300`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* Technologies end */}


            {/* Industries Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">We Offer Technology Solutions for Every Industry</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                            At eSpark Consulting Group, we believe every industry deserves specialized technology. Our team offers custom software, web development, embedded solutions, and IoT services to power your success.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-900 h-full">
                                    <CardContent className="text-center">
                                        <div className="flex justify-center mb-4">{industry.icon}</div>
                                        <h3 className="text-xl font-semibold">{industry.name}</h3>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section with Slider */}
            <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Browse Our Portfolio Of Innovation & Expertise</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                            At the Forefront of Innovation, we take pride in crafting custom solutions. Join us on a journey where we work hand-in-hand with clients, igniting the tech revolution and driving modern advancements, guiding every step forward.
                        </p>
                    </motion.div>
                    <div className="overflow-hidden relative">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentPortfolio * 100}%` }}
                            transition={{ duration: 0.5 }}
                        >
                            {portfolio.map((item, i) => (
                                <div key={i} className="min-w-full flex-shrink-0 px-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="rounded-2xl shadow-lg dark:bg-gray-800">
                                            <CardContent>
                                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.desc}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map((tech, idx) => (
                                                        <span key={idx} className="px-3 py-1 text-sm bg-teal-100 text-teal-700 rounded-full dark:bg-teal-900/30 dark:text-teal-300">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="flex justify-center mt-6">
                        {portfolio.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPortfolio(i)}
                                className={`w-3 h-3 rounded-full mx-2 ${i === currentPortfolio ? "bg-teal-500" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers Section */}
            <section id="careers" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                            We are always looking for talented individuals to join our expert team. Explore opportunities to grow with us.
                        </p>
                    </motion.div>
                    <Button size="lg" className="rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600">
                        View Open Positions
                    </Button>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Insights & Trends</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogs.map((blog, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 h-full">
                                    <CardContent>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{blog.date} by {blog.author}</span>
                                        <h3 className="text-xl font-semibold mb-3 mt-2">{blog.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                                        <Button variant="outline" className="rounded-xl">
                                            Read More <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Ready to Bring Your Idea to Life?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl mb-10 max-w-2xl mx-auto"
                    >
                        Let's discuss your project and see how we can help you achieve your goals with our expertise and innovative solutions.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="rounded-xl bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
                            Start a Project
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-xl border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                            Schedule a Call
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <h3 className="text-xl mb-6">Tell us about your project!</h3>
                        </motion.div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                required
                            >
                                <option value="">Service interested in *</option>
                                {services.map((service) => (
                                    <option key={service.title} value={service.title}>
                                        {service.title}
                                    </option>
                                ))}
                            </select>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name *"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address *"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                required
                            />
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number *"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message Let's Start With 'Hello'"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 h-32"
                            />
                            <Button type="submit" className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600">
                                Submit
                            </Button>
                        </form>
                    </div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-bold mb-4">What happens next?</h3>
                        </motion.div>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                            <li>After carefully reviewing your requirements, our team will get in touch with you.</li>
                            <li>Should be required, we will formalize our commitment by signing a Non-Disclosure Agreement (NDA).</li>
                            <li>Following this, we will meticulously craft a comprehensive project proposal, including estimates, timelines, CVs, and any other relevant information, for your review.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">eSpark</h3>
                            </div>
                            <p className="mb-6">Engineering innovative digital solutions for a better tomorrow.</p>
                            <div className="flex gap-4">
                                {["twitter", "github", "linkedin", "dribbble"].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-colors"
                                    >
                                        <span className="sr-only">{social}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {["Services", "Company", "Support"].map((category, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-semibold text-white mb-6">{category}</h4>
                                <ul className="space-y-3">
                                    {[1, 2, 3, 4].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-teal-400 transition-colors">
                                                {category} Link {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                            <address className="not-italic space-y-3">
                                <p>123 Innovation Drive</p>
                                <p>Tech City, TC 12345</p>
                                <p className="mt-4">hello@espark.com</p>
                                <p>+1 (555) 123-4567</p>
                            </address>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                        <p>© {new Date().getFullYear()} eSpark Technologies. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;