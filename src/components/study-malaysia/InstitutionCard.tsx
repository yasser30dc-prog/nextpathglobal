"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";
import { Institution, institutionColors, institutionTypeLabels } from "@/data/institutions";

interface InstitutionCardProps {
    institution: Institution;
    index: number;
    baseUrl: string;
}

export default function InstitutionCard({ institution, index, baseUrl }: InstitutionCardProps) {
    const colors = institutionColors[institution.type];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
        >
            <Link href={`${baseUrl}/${institution.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    {/* Cover Image / Gradient */}
                    <div
                        className="h-40 relative overflow-hidden"
                        style={{
                            background: institution.coverImage ? undefined : `linear-gradient(135deg, ${colors.from}, ${colors.to})`
                        }}
                    >
                        {/* Actual Cover Image if available */}
                        {institution.coverImage && (
                            <Image
                                src={institution.coverImage}
                                alt={institution.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        )}

                        {/* Overlay for better text readability on images */}
                        {institution.coverImage && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        )}

                        {/* Institution Type Badge */}
                        <div className="absolute top-3 left-3 z-10">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                                {institutionTypeLabels[institution.type]}
                            </span>
                        </div>

                        {/* Short Name Overlay - only show if no cover image */}
                        {!institution.coverImage && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/30 text-6xl font-bold tracking-wider">
                                    {institution.shortName}
                                </span>
                            </div>
                        )}

                        {/* QS Ranking Badge */}
                        {institution.qsRanking && institution.qsRanking !== "Not ranked" && (
                            <div className="absolute top-3 right-3 z-10">
                                <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <Star size={12} className="fill-current" />
                                    {institution.qsRanking}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {institution.name}
                        </h3>

                        <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                            <MapPin size={14} />
                            <span>{institution.location}</span>
                        </div>

                        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                            <Calendar size={14} />
                            <span>Est. {institution.established}</span>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                            {institution.description}
                        </p>

                        {/* Programs Preview */}
                        <div className="flex flex-wrap gap-1 mb-4">
                            {institution.programs.slice(0, 3).map((program, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                                >
                                    {program}
                                </span>
                            ))}
                            {institution.programs.length > 3 && (
                                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                    +{institution.programs.length - 3} more
                                </span>
                            )}
                        </div>

                        {/* View Details Link */}
                        <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                            <span>View Details</span>
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
