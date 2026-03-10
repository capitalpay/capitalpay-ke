"use client";

import {
  Send,
  Receipt,
  Phone,
  Wallet,
  Building2,
  Banknote,
  Store,
  Users,
  Code,
  CreditCard,
  Globe,
  Smartphone,
  FileCheck,
  ArrowRightLeft,
  Shield,
  Zap,
  MapPin,
  Clock,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

// Icon name to component mapping
export const iconMap: Record<string, LucideIcon> = {
  Send,
  Receipt,
  Phone,
  Wallet,
  Building2,
  Banknote,
  Store,
  Users,
  Code,
  CreditCard,
  Globe,
  Smartphone,
  FileCheck,
  ArrowRightLeft,
  Shield,
  Zap,
  MapPin,
  Clock,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageSquare,
};

export interface IconRendererProps {
  name: string;
  size?: number;
  className?: string;
}

// Dynamic icon renderer component
export function IconRenderer({
  name,
  size = 28,
  className = "text-[#0052FF] mb-3",
}: IconRendererProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback to a default icon if not found
    return <Wallet size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
}

// Export individual icons for direct use
export {
  Send,
  Receipt,
  Phone,
  Wallet,
  Building2,
  Banknote,
  Store,
  Users,
  Code,
  CreditCard,
  Globe,
  Smartphone,
  FileCheck,
  ArrowRightLeft,
  Shield,
  Zap,
  MapPin,
  Clock,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageSquare,
};

