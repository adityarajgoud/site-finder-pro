import { ServiceCategory } from "@/types/service";

export const initialServices: ServiceCategory[] = [
  {
    id: "government",
    name: "Government Services",
    description: "Essential government document and services",
    icon: "Building2",
    services: [
      {
        id: "aadhaar-download",
        title: "Aadhaar Download",
        description: "Download your Aadhaar card online",
        url: "https://eaadhaar.uidai.gov.in/",
        category: "Government Services",
        icon: "Download",
        featured: true,
        createdAt: new Date()
      },
      {
        id: "pan-card",
        title: "PAN Card Services",
        description: "Apply for new PAN card or download existing",
        url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
        category: "Government Services",
        icon: "CreditCard",
        featured: true,
        createdAt: new Date()
      },
      {
        id: "passport",
        title: "Passport Services",
        description: "Apply for passport online",
        url: "https://portal2.passportindia.gov.in/",
        category: "Government Services",
        icon: "MapPin",
        createdAt: new Date()
      },
      {
        id: "driving-license",
        title: "Driving License",
        description: "Apply for driving license",
        url: "https://parivahan.gov.in/parivahan/",
        category: "Government Services",
        icon: "Car",
        createdAt: new Date()
      }
    ]
  },
  {
    id: "banking",
    name: "Banking & Finance",
    description: "Banking and financial services",
    icon: "Banknote",
    services: [
      {
        id: "sbi-online",
        title: "SBI Online Banking",
        description: "State Bank of India internet banking",
        url: "https://retail.onlinesbi.sbi/",
        category: "Banking & Finance",
        icon: "Building",
        createdAt: new Date()
      },
      {
        id: "hdfc-netbanking",
        title: "HDFC NetBanking",
        description: "HDFC Bank internet banking",
        url: "https://netbanking.hdfcbank.com/",
        category: "Banking & Finance",
        icon: "CreditCard",
        createdAt: new Date()
      },
      {
        id: "icici-ibank",
        title: "ICICI Bank",
        description: "ICICI Bank internet banking",
        url: "https://infinity.icicibank.com/",
        category: "Banking & Finance",
        icon: "Landmark",
        createdAt: new Date()
      }
    ]
  },
  {
    id: "utilities",
    name: "Utility Services",
    description: "Electricity, gas, water and other utilities",
    icon: "Zap",
    services: [
      {
        id: "electricity-bill",
        title: "Electricity Bill Payment",
        description: "Pay your electricity bills online",
        url: "https://www.bijlibill.com/",
        category: "Utility Services",
        icon: "Zap",
        createdAt: new Date()
      },
      {
        id: "gas-booking",
        title: "LPG Gas Booking",
        description: "Book LPG gas cylinder online",
        url: "https://www.iocl.com/",
        category: "Utility Services",
        icon: "Flame",
        createdAt: new Date()
      }
    ]
  },
  {
    id: "education",
    name: "Education & Certificates",
    description: "Educational certificates and verification",
    icon: "GraduationCap",
    services: [
      {
        id: "cbse-results",
        title: "CBSE Results",
        description: "Check CBSE board exam results",
        url: "https://cbseresults.nic.in/",
        category: "Education & Certificates",
        icon: "FileText",
        createdAt: new Date()
      },
      {
        id: "digilocker",
        title: "DigiLocker",
        description: "Digital document wallet",
        url: "https://digilocker.gov.in/",
        category: "Education & Certificates",
        icon: "Folder",
        featured: true,
        createdAt: new Date()
      }
    ]
  }
];