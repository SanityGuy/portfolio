import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Instagram,
  Phone,
  MessageSquare
} from 'lucide-react';

const socialLinks = [
  {
    name: 'Discord',
    icon: <MessageCircle className="w-6 h-6" />,
    href: 'https://discord.gg/your-server',
    username: 'deadspark9'
  },
  {
    name: 'Telegram',
    icon: <Send className="w-6 h-6" />,
    href: 'https://t.me/username',
    username: '@touchgrass'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    href: 'https://instagram.com/username',
    username: '@gunsismyworld'
  },
  {
    name: 'WhatsApp',
    icon: <Phone className="w-6 h-6" />,
    href: 'https://wa.me/1234567890',
    username: '6942-0420-6900'
  },
  {
    name: 'LINE',
    icon: <MessageSquare className="w-6 h-6" />,
    href: 'https://line.me/ti/p/username',
    username: 'ID: noscammers'
  },
  {
    name: 'Email',
    icon: <Mail className="w-6 h-6" />,
    href: 'mailto:contact@example.com',
    username: 'aziz@isnotgay.com'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    href: 'https://linkedin.com/in/username',
    username: 'trynascam'
  },
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    href: 'https://github.com/username',
    username: '@nolifedeveloper'
  }
];

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-[#E0E0E0] hover:text-white transition-all transform hover:translate-x-2"
            >
              <div className="p-2 rounded-full bg-[#2196F3]/10 hover:bg-[#2196F3]/20 transition-colors">
                {link.icon}
              </div>
              <div>
                <div className="font-medium">{link.name}</div>
                <div className="text-sm opacity-75">{link.username}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-[#E0E0E0]">
          <p>&copy; {new Date().getFullYear()} Shidiq Al Aziz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}