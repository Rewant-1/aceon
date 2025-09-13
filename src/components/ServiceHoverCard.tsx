import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, CheckCircle } from "lucide-react";

interface ServiceHoverCardProps {
  children: React.ReactNode;
  service: {
    title: string;
    description: string;
    features: string[];
    timeline: string;
    team: string;
    experience: string;
  };
}

export function ServiceHoverCard({ children, service }: ServiceHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-6" side="top">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-primary mb-2">{service.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Timeline:</span>
              <span className="text-sm text-gray-600">{service.timeline}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Team:</span>
              <span className="text-sm text-gray-600">{service.team}</span>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Experience:</span>
              <span className="text-sm text-gray-600">{service.experience}</span>
            </div>
          </div>

          <div>
            <h5 className="font-medium text-sm mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Key Features:
            </h5>
            <div className="flex flex-wrap gap-1">
              {service.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}