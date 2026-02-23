// ── Shared data for the Prakruti website ──

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    caption: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    tag: string;
}

export interface EventItem {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
    location: string;
    type: "upcoming" | "previous";
}

export interface EmergencyContact {
    name: string;
    role: string;
    phone: string;
    available: string;
}

export interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

// ── Gallery (real photos) ──
export const galleryImages: GalleryImage[] = [
    { id: 1, src: "/images/birb.jpeg", alt: "Bird on campus", caption: "A babbler spotted near the campus water bowl — Biodiversity on campus" },
    { id: 2, src: "/images/catty.jpeg", alt: "Adorable campus kitten", caption: "Resident campus kitten soaking up the sun" },
    { id: 3, src: "/images/cutepuppy.jpeg", alt: "Cute campus puppy", caption: "This little one stole everyone's heart on campus" },
    { id: 4, src: "/images/feedingpuppies.jpeg", alt: "Puppies being fed", caption: "Daily feeding rounds — two pups sharing a roti" },
    { id: 5, src: "/images/helpingpuppies.jpeg", alt: "Rescued puppies in shelter", caption: "Rescued puppies resting safely in a makeshift shelter" },
    { id: 6, src: "/images/treatingpuppies.jpeg", alt: "Puppies at the vet", caption: "Pups receiving treatment at the veterinary clinic" },
    { id: 7, src: "/images/WhatsApp-Image-2026-02-23-at-5.20.08-PM.jpeg", alt: "Club celebration", caption: "Prakruti team celebrating with cake — another successful semester!" },
    { id: 8, src: "/images/WhatsApp-Image-2026-02-23-at-5.20.09-PM.jpeg", alt: "Happy campus dog", caption: "The happiest dog on campus — all smiles after a belly rub" },
];

// ── Team ──
export const coreTeam: TeamMember[] = [
    { name: "Sriram P", role: "Overall Coordinator", image: "/images/sriram.jpeg" },
    { name: "Member 2", role: "Vice President", image: "https://picsum.photos/seed/team2/300/300" },
    { name: "Member 3", role: "Flora Lead", image: "https://picsum.photos/seed/team3/300/300" },
    { name: "Member 4", role: "Fauna Lead", image: "https://picsum.photos/seed/team4/300/300" },
    { name: "Member 5", role: "Events Coordinator", image: "https://picsum.photos/seed/team5/300/300" },
    { name: "Member 6", role: "Design Head", image: "https://picsum.photos/seed/team6/300/300" },
    { name: "Member 7", role: "Social Media Lead", image: "https://picsum.photos/seed/team7/300/300" },
    { name: "Member 8", role: "Outreach Coordinator", image: "https://picsum.photos/seed/team8/300/300" },
];

export const facultyAdvisors: TeamMember[] = [
    { name: "Dr. S. Ramachandran", role: "Faculty Advisor — Environmental Sciences", image: "https://picsum.photos/seed/faculty1/300/300" },
    { name: "Dr. Meenakshi Sundaram", role: "Faculty Advisor — Zoology", image: "https://picsum.photos/seed/faculty2/300/300" },
];

// ── News ──
export const newsItems: NewsItem[] = [
    {
        id: 1,
        title: "Monsoon Plantation Drive 2025",
        excerpt: "Over 250 saplings planted across the campus in a single weekend. New species include Neem, Peepal, and Gulmohar.",
        date: "2025-08-15",
        image: "/images/feedingpuppies.jpeg",
        tag: "Flora",
    },
    {
        id: 2,
        title: "Anti-Rabies Vaccination Camp",
        excerpt: "In collaboration with Trichy District Veterinary Hospital, 80+ campus dogs received their annual vaccination.",
        date: "2025-09-02",
        image: "/images/treatingpuppies.jpeg",
        tag: "Fauna",
    },
    {
        id: 3,
        title: "PETA India Guest Lecture",
        excerpt: "Prakruti hosted a guest lecture on 'Compassion for Action' in collaboration with PETA India for members and first years.",
        date: "2025-08-28",
        image: "/images/guestlecture.jpeg",
        tag: "Events",
    },
];

// ── Events ──
export const events: EventItem[] = [
    {
        id: 1,
        title: "Voice for the Voiceless — Animal Rights Lecture",
        description: "A powerful lecture on animal rights featuring Mr. Samran Thamarai, Humane Education Officer at Blue Cross of India, and Mr. Agastya, Animal Right Activist & YouTuber (FireByAgni). Free registration with a chance to win exciting goodies!",
        date: "2026-03-29",
        image: "/images/Screenshot-2026-02-23-172704.png",
        location: "NIT Trichy Campus",
        type: "upcoming",
    },
    {
        id: 2,
        title: "Heartfulness Essay Event 2025",
        description: "A collaborative essay writing event organised by Heartfulness Education Trust and Shri Ram Chandra Mission in partnership with Prakruti and The Commonwealth. Two age categories exploring themes of human evolution and nature's role in personal growth.",
        date: "2025-12-15",
        image: "/images/Screenshot-2026-02-23-172455.png",
        location: "Online / NIT Trichy",
        type: "previous",
    },
    {
        id: 3,
        title: "Guest Lecture: Compassion for Action",
        description: "Prakruti collaborated with PETA India to host an impactful guest lecture titled 'Compassion for Action' at A12 Hall, Admin Block. The session was open to all Prakruti members and first-year students, sparking meaningful conversations about animal welfare and ethical living.",
        date: "2025-08-28",
        image: "/images/guestlecture.jpeg",
        location: "A12 Hall, Admin Block, NIT Trichy",
        type: "previous",
    },
    {
        id: 4,
        title: "Summer Stray Care Camp 2025",
        description: "A month-long campaign providing food, water, and shade stations for stray animals during peak summer across the entire campus.",
        date: "2025-05-10",
        image: "/images/feedingpuppies.jpeg",
        location: "Across Campus",
        type: "previous",
    },
];

// ── Emergency Contacts ──
export const emergencyContacts: EmergencyContact[] = [
    { name: "Trichy District Veterinary Hospital", role: "Government Veterinarian", phone: "+91-431-2421234", available: "9 AM – 5 PM" },
    { name: "Mr. Selvakumar M.", role: "Professional Snake Catcher", phone: "+91-98765-43210", available: "24/7" },
    { name: "NIT Trichy Campus Security", role: "Campus Security Control Room", phone: "+91-431-2503000", available: "24/7" },
    { name: "Prakruti Emergency Line", role: "Student Volunteer SOS", phone: "+91-98765-00000", available: "24/7" },
    { name: "Blue Cross of Trichy", role: "Animal Rescue NGO", phone: "+91-431-2750765", available: "9 AM – 6 PM" },
];

// ── Resource FAQs ──
export const resourceFAQs: FAQItem[] = [
    {
        category: "Wildlife Encounters (Snakes, Macaques)",
        question: "What should I do if I see a snake on campus?",
        answer: "Do NOT attempt to catch or kill it. Maintain a safe distance of at least 6 feet. Call the campus snake catcher (Mr. Selvakumar) or Prakruti's emergency line immediately. Keep others away from the area until help arrives.",
    },
    {
        category: "Wildlife Encounters (Snakes, Macaques)",
        question: "How do I deal with macaques near my hostel?",
        answer: "Never make eye contact or bare your teeth — macaques interpret these as threats. Do not feed them. Keep food items concealed. Close hostel room windows when you leave. If a macaque enters your room, open all exits and leave the room calmly.",
    },
    {
        category: "Campus Dogs",
        question: "Is it safe to pet the campus dogs?",
        answer: "Most campus dogs are friendly and vaccinated (identifiable by collars). However, always let the dog approach you first. Avoid disturbing dogs that are sleeping, eating, or nursing puppies. If a dog shows signs of aggression (growling, raised hackles), back away slowly.",
    },
    {
        category: "Campus Dogs",
        question: "What do I do if I find an injured dog?",
        answer: "Contact Prakruti's emergency line immediately. Do not attempt to move the dog unless it's in immediate danger (e.g., on a road). Provide water if the dog is conscious. Stay nearby to guide volunteers to the location.",
    },
    {
        category: "Campus Dogs",
        question: "Can I feed the campus dogs?",
        answer: "Feeding is coordinated through Prakruti's feeding routes to ensure consistent nutrition. If you'd like to contribute, join our volunteer feeding program. Avoid feeding dogs chocolate, cooked bones, onions, or spicy food.",
    },
    {
        category: "Waste Management",
        question: "How should I segregate waste on campus?",
        answer: "Use GREEN bins for biodegradable waste (food scraps, leaves), BLUE bins for recyclables (paper, plastic, glass), and RED bins for hazardous waste (batteries, e-waste). Never mix categories — it nullifies the entire recycling process.",
    },
    {
        category: "Waste Management",
        question: "Where can I dispose of e-waste?",
        answer: "E-waste collection points are at the Central Library entrance and EEE Department lobby. Prakruti organizes quarterly e-waste drives — check the Events page for schedule. Never throw batteries or electronics in regular bins.",
    },
];

// ── Map markers ──
export const mapMarkers = [
    { lat: 10.7628, lng: 78.8156, title: "Central Feeding Point", type: "feeding" as const },
    { lat: 10.7645, lng: 78.8140, title: "Hostel Zone Feeding Route", type: "feeding" as const },
    { lat: 10.7615, lng: 78.8170, title: "Academic Zone Feeding Route", type: "feeding" as const },
    { lat: 10.7638, lng: 78.8180, title: "Monsoon 2025 Plantation Site", type: "plantation" as const },
    { lat: 10.7610, lng: 78.8130, title: "Deer Park Plantation Area", type: "plantation" as const },
    { lat: 10.7655, lng: 78.8160, title: "Cauvery Bank Plantation", type: "plantation" as const },
];
