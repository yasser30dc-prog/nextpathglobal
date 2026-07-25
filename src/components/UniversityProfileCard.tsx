"use client";

import React from "react";
import Link from "next/link";
import { PartnerInstitution } from "@/data/malaysia-partners";
import styles from "./UniversityProfileCard.module.css";

interface Props {
    uni: PartnerInstitution;
}

export default function UniversityProfileCard({ uni }: Props) {
    const rankSource = uni.rankingSource || "QS World Rankings 2027";
    const isNumericRank = typeof uni.qsRanking === "number";

    return (
        <article className={styles.uniCard}>
            {/* HEADER */}
            <header className={styles.uniHeader}>
                <div className={styles.headerRow}>
                    <div className={styles.brand}>
                        <div className={styles.crest}>{uni.shortName}</div>
                        <div className={styles.titles}>
                            <h3 className={styles.malay}>{uni.name}</h3>
                            <div className={styles.english}>
                                {uni.englishName || `${uni.name} · Partner Institution`}
                            </div>
                            <div className={styles.locale}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    width="13"
                                    height="13"
                                >
                                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {uni.location || "Malaysia"}
                            </div>
                        </div>
                    </div>
                    {uni.qsRanking && (
                        <div className={styles.rank}>
                            <span className={styles.eyebrow}>
                                {isNumericRank ? "Global Rank" : "Standing"}
                            </span>
                            <div className={styles.num}>
                                {isNumericRank && <span>#</span>}
                                {uni.qsRanking}
                            </div>
                            <span className={styles.src}>{rankSource}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* TAGLINE */}
            <div className={styles.tagline}>
                <span className={styles.mark}>&ldquo;</span>
                <p>{uni.description}</p>
            </div>

            {/* BODY */}
            <div className={styles.uniBody}>
                <div className={styles.infoGrid}>
                    {/* History */}
                    <div className={`${styles.infoBlock} ${styles.full}`}>
                        <div className={styles.ic}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3 2" />
                            </svg>
                        </div>
                        <div>
                            <h3>History &amp; Founding</h3>
                            <p>{uni.history}</p>
                        </div>
                    </div>

                    {/* Intakes */}
                    <div className={styles.infoBlock}>
                        <div className={styles.ic}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <path d="M3 10h18M8 2v4M16 2v4" />
                            </svg>
                        </div>
                        <div>
                            <h3>Intakes</h3>
                            <div className={styles.intakes}>
                                {uni.intakes.map((intake, idx) => (
                                    <span key={idx} className={styles.chip}>
                                        {intake}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Standing */}
                    <div className={styles.infoBlock}>
                        <div className={styles.ic}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                            </svg>
                        </div>
                        <div>
                            <h3>Standing</h3>
                            <p>{uni.standing || "Recognized Partner Institution"}</p>
                        </div>
                    </div>

                    {/* Faculties */}
                    <div className={`${styles.infoBlock} ${styles.full}`}>
                        <div className={styles.ic}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 0-2 2V5Z" />
                                <path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2V5Z" />
                            </svg>
                        </div>
                        <div>
                            <h3>Key Faculties &amp; Programs</h3>
                            <div className={styles.faculties}>
                                {uni.programs.map((prog, idx) => (
                                    <span key={idx}>{prog}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className={styles.uniFoot}>
                <div className={styles.note}>
                    <strong>NextPath Global</strong> &mdash; official admissions &amp; application support
                </div>
                <Link
                    className={styles.cta}
                    href={`/student-assessment?university=${encodeURIComponent(uni.name)}`}
                >
                    Enquire about admissions
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </Link>
            </footer>
        </article>
    );
}
