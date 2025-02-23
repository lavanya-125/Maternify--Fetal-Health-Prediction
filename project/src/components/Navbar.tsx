import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Baby, LineChart, MessageSquare, Info , UploadIcon} from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'pregnancy', label: 'Pregnancy Risk Prediction', icon: Heart },
    { id: 'fetal', label: 'Fetal Health Prediction', icon: Baby },
    { id: 'dashboard', label: 'Dashboard', icon: LineChart },
    { id: 'chat', label: 'ChatAssistant', icon: MessageSquare },
    {id: 'report', label: 'UploadFile', icon: UploadIcon }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-[#CDB4DB]" />
              <span className="ml-2 text-xl font-semibold text-[#CDB4DB]">Maternify</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`relative inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      activePage === item.id
                        ? 'text-[#FFAFCC]'
                        : 'text-gray-500 hover:text-[#FFC8DD]'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {item.label}
                    {activePage === item.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFAFCC]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;