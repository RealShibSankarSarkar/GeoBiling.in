export interface AppScreenshot {
  id: string;
  title: string;
  bnTitle: string;
  imageUrl: string;
  description: string;
  bnDescription: string;
  badge: string;
  bnBadge: string;
  color: string;
}

export interface AppFeature {
  title: string;
  bnTitle: string;
  description: string;
  bnDescription: string;
  iconName: string;
  color: string;
}

export const screenshots: AppScreenshot[] = [
  {
    id: "splash",
    title: "Sleek Welcome Splash",
    bnTitle: "ক্লিন স্প্ল্যাশ স্ক্রিন",
    imageUrl: "https://raw.githubusercontent.com/RealShibSankarSarkar/GeoBiling/refs/heads/main/image%20(1).png",
    description: "Launch with style. A beautifully clean, professional introduction splash showcasing the polished brand identity of GeoBiling.",
    bnDescription: "স্টাইলিশ এন্ট্রি। জিওবিলিং অ্যাপের চমৎকার ব্র্যান্ডিং সহ প্রফেশনাল স্প্ল্যাশ স্ক্রিন যা চোখের পলকেই লোড হয়।",
    badge: "Splash Screen",
    bnBadge: "স্প্ল্যাশ স্ক্রিন",
    color: "from-teal-500/20 to-emerald-500/20"
  },
  {
    id: "home",
    title: "Polished Dashboard Console",
    bnTitle: "স্মার্ট হোম ড্যাশবোর্ড",
    imageUrl: "https://raw.githubusercontent.com/RealShibSankarSarkar/GeoBiling/refs/heads/main/image%20(2).png",
    description: "Your operations center. Gain instantaneous access to adding sales, tracking billing, inspecting stock reserves, and geolocating operations.",
    bnDescription: "আপনার ব্যবসার কন্ট্রোল সেন্টার। এক ক্লিকেই সেলস যোগ করা, বিল ট্র্যাক করা, এবং স্টক পরিস্থিতি নিরীক্ষণ কারার সুবিধা।",
    badge: "Main Hub",
    bnBadge: "মূল হোম স্ক্রিন",
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: "drawer",
    title: "Rapid Navigation Drawer",
    bnTitle: "দ্রুত নেভিগেশন ড্রয়ার",
    imageUrl: "https://raw.githubusercontent.com/RealShibSankarSarkar/GeoBiling/refs/heads/main/image%20(3).png",
    description: "Fluid access to every tool. Instantly slide out options to toggle clients lists, checkout calculators, settings registers, and stocks view.",
    bnDescription: "খুবই ফ্লুইড মেনু সাইডবার। বামপাশ থেকে সুইপ করে এক জায়গা থেকেই কাস্টমার লিস্ট, সেটিংস, ও সব মডিউল এক্সেস করার ক্ষমতা।",
    badge: "Sidebar Menu",
    bnBadge: "সাইড ড্রয়ার",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "billing",
    title: "Precision Smart Billing Engine",
    bnTitle: "স্মার্ট বিলিং ক্যালকুলেটর",
    imageUrl: "https://raw.githubusercontent.com/RealShibSankarSarkar/GeoBiling/refs/heads/main/image%20(4).png",
    description: "Automate invoicing instantly. Geo-enabled billing console with customizable item parameters, dynamic discounts, and smart receipt sharing.",
    bnDescription: "অটো কনফিগারড ইনভয়েস জেনারেটর। কাস্টমাইজেবল প্রোডাক্ট প্যারামিটার, রিয়েল-টাইম ডিসকাউন্ট ক্যালকুলেশন ও কাস্টমার শেয়ারিং ফিচার।",
    badge: "Billing Terminal",
    bnBadge: "বিলিং সেকশন",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "stocks",
    title: "Comprehensive Stock Controller",
    bnTitle: "ডিটেইল স্টক এনালাইজার",
    imageUrl: "https://raw.githubusercontent.com/RealShibSankarSarkar/GeoBiling/refs/heads/main/image%20(5).png",
    description: "Never run out of products. Monitor quantities in real-time, view dynamic stock-low warnings, and manage your inventory tree with elegance.",
    bnDescription: "ইনভেন্টরি এখন হাতের মুঠোয়। কতটুকু প্রোডাক্ট স্টকে বাকি আছে তা লাইভ ট্র্যাক করুন, এবং স্টক কমে গেলে ইনস্ট্যান্ট নোটিফিকেশন পান।",
    badge: "Inventory Hub",
    bnBadge: "স্টক কন্ট্রোলার",
    color: "from-amber-500/20 to-rose-500/20"
  }
];

export const features: AppFeature[] = [
  {
    title: "Geo-Enabled Location Actions",
    bnTitle: "স্মার্ট লোকেশন ট্যাগিং",
    description: "Automatically link customer registers and billing events with GPS metadata to accurately manage distant clients and supply routes.",
    bnDescription: "জিপিএস ইনফরমেশনের মাধ্যমে অটোমেটিক কাস্টমার লোকেশন ট্যাগিং সুবিধা, যা আপনার ব্যবসা ও সাপ্লাই রুটকে আরও নিখুঁত করে তোলে।",
    iconName: "MapPin",
    color: "text-teal-400"
  },
  {
    title: "Lightning-Fast Billing Engine",
    bnTitle: "বিদ্যুৎ গতির ক্যাশ উইন্ডো",
    description: "Generate professionally structured invoices, compute complex discounts/taxes, and send SMS or WhatsApp Receipts in under 5 seconds.",
    bnDescription: "প্রফেশনাল ইনভয়েস তৈরি করুন নিমেষেই। জটিল ডিসকাউন্ট ও ট্যাক্স অটোমেটিক হিসাব করে হোয়াটসঅ্যাপে ইনভয়েস শেয়ার করুন ৫ সেকেন্ডে।",
    iconName: "Receipt",
    color: "text-purple-400"
  },
  {
    title: "Interactive Live Stocks Controller",
    bnTitle: "রিয়েল-টাইম স্টক ট্র্যাকিং",
    description: "A centralized interface visualising active inventory levels, unit variations, purchase margins, and automatic minimum inventory flags.",
    bnDescription: "সেন্ট্রাল স্টক মনিটরিং ইন্টারফেস, প্রোডাক্টের পরিমাণ, কেনা-বেচার দাম ও মিনিমাম স্টক ইন্ডিকেটর দিয়ে নির্ভুল ব্যাকআপ দেয়।",
    iconName: "Database",
    color: "text-blue-400"
  },
  {
    title: "Lag-Free Native Performance",
    bnTitle: "সুপারফাস্ট নেটিভ পারফরম্যান্স",
    description: "Optimized offline-first execution ensures GeoBiling remains functional in network dead zones, safeguarding database integrity perfectly.",
    bnDescription: "অফলাইন-ফার্স্ট প্রযুক্তিতে তৈরি বলে ইন্টারনেট কালেকশন ছাডাই যেকোনো জায়গায় মসৃণ কাজ করবে আপনার ডেটাবেজ সেভ রেখে।",
    iconName: "Zap",
    color: "text-amber-400"
  },
  {
    title: "Glossy Ergonomic Navigation UI",
    bnTitle: "গ্লসি আই-ফ্রেন্ডলি ইউজার ইন্টারফেস",
    description: "Crafted following elite Google Material structures, optimized with warm hues to protect your eyes during extended nighttime operations.",
    bnDescription: "গুগল মেটেরিয়াল ডিজাইনের আধুনিক ট্রেন্ড অনুযায়ী তৈরি অত্যন্ত সুন্দর ও আরামদায়ক ইউআই, যা রাতের বেলা কাজ করতেও চোখের ক্ষতি করে না।",
    iconName: "Layers",
    color: "text-pink-400"
  },
  {
    title: "Direct Secure APK Download",
    bnTitle: "সরাসরি নিরাপদ APK ডাউনলোড",
    description: "Compiled with secure release signatures, containing zero advertisements, trackers, or suspicious background operations. Install with absolute trust.",
    bnDescription: "সম্পূর্ণ সিকিউর এবং সাইনড রিলিজ এপিকে। কোনো বিজ্ঞাপন ও ট্র্যাকার নেই, ফলে সম্পূর্ণ নিশ্চিন্তে ডাউনলোড করুন অফিশিয়াল রিলিজ থেকে।",
    iconName: "ShieldCheck",
    color: "text-emerald-400"
  }
];

export const developerInfo = {
  name: "Shib Sankar Sarkar",
  role: "Lead Systems & Mobile Architect",
  bnRole: "লিড সিস্টেমস এবং মোবাইল আর্কিটেক্ট",
  avatarUrl: "https://avatars.githubusercontent.com/u/151728380?v=4",
  bio: "Passionate high-performance software engineer specialized in elegant Android applications and modern full-stack web platforms. Committed to crafting tools that simplify commerce and location-based solutions globally.",
  bnBio: "অসাধারণ ও নিখুঁত এন্ড্রয়েড এপ্লিকেশন এবং আধুনিক ওয়েব প্ল্যাটফর্ম ডিজাইনার। মানুষের দৈনন্দিন ব্যবসা সহজ করা ও লোকেশন-বেসড সার্ভিস উন্নত করার জন্য নিবেদিতপ্রাণ ডেভেলপার।",
  email: "bondhugo.in@gmail.com",
  links: {
    github: "https://github.com/RealShibSankarSarkar",
    instagram: "https://www.instagram.com/realshibsankarsarkar",
    facebook: "https://www.facebook.com/share/1BGeF6H46N/",
    threads: "https://www.threads.com/@realshibsankarsarkar"
  }
};
