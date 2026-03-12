import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      bgColorClass:
        "bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-green-600",
      icon: "🦠",
      title: "Disease Detection Module",
      description:
        "Detect selected leaf diseases and get immediate recommendations for next actions.",
      points: [
        "Supported crops: corn, wheat, rice, and sugarcane.",
        "Predicts selected leaf diseases, not every disease type.",
        "Shows recommendations on what to do after prediction.",
        "Ask the AI chatbot for disease details and precaution steps.",
      ],
    },
    {
      bgColorClass:
        "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-blue-600",
      icon: "🤖",
      title: "AI Chatbot + Remote Sensing",
      description:
        "Bilingual smart assistant with voice and satellite-driven guidance.",
      points: [
        "Works in English and Urdu conversations.",
        "Voice-to-text and text-to-voice support.",
        "Remote sensing by coordinate for crop and land checks.",
        "Satellite guidance is designed for agricultural land, not residential land.",
      ],
    },
    {
      bgColorClass:
        "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-yellow-600",
      icon: "📊",
      title: "Crop Prices Module",
      description:
        "Daily market prices with history, filters, and sharing support for team decisions.",
      points: [
        "Prices update daily from official government websites.",
        "View latest and previous prices in one place.",
        "Units include kg, dozen, and 100 pieces based on crop type.",
        "Filter by crop and city, then share prices with other members.",
      ],
      id: "prices",
    },
  ];

  return (
    <section id="modules" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Built Around Real Farming Workflows
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            Three focused modules designed for fast, practical field decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              id={feature?.title}
              bgColorClass={feature.bgColorClass}
              iconBgClass={feature.iconBgClass}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              points={feature.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
