"use client";

import React, { useState, useEffect } from "react";
import { submitAssessmentForm } from "@/app/actions";

export default function StudentAssessmentPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    waCode: "+880",
    waNum: "",
    sscGrade: "",
    sscYear: "",
    hscGrade: "",
    hscYear: "",
    bachGrade: "",
    bachYear: "",
    mastersGrade: "",
    mastersYear: "",
    program: "",
    course: "",
    budget: "",
    country: "",
  });

  // Validation state
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    waNum: false,
    sscGrade: false,
    hscGrade: false,
    program: false,
    budget: false,
    course: false,
    country: false,
  });

  const stepNames = ["Personal details", "Academic results", "Program & budget"];
  const stepPct = [33, 66, 100];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    // Clear error on input change
    if (id === "name") setErrors((prev) => ({ ...prev, name: false }));
    if (id === "email") setErrors((prev) => ({ ...prev, email: false }));
    if (id === "wa-num" || id === "waNum") setForm((prev) => ({ ...prev, waNum: value }));
    if (id === "ssc-grade" || id === "sscGrade") setForm((prev) => ({ ...prev, sscGrade: value }));
    if (id === "hsc-grade" || id === "hscGrade") setForm((prev) => ({ ...prev, hscGrade: value }));
    if (id === "bach-grade" || id === "bachGrade") setForm((prev) => ({ ...prev, bachGrade: value }));
    if (id === "masters-grade" || id === "mastersGrade") setForm((prev) => ({ ...prev, mastersGrade: value }));
    if (id === "course") setErrors((prev) => ({ ...prev, course: false }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validate = (step: number) => {
    let ok = true;
    if (step === 1) {
      const isNameValid = !!form.name.trim();
      const isEmailValid = !!form.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
      const isWaNumValid = !!form.waNum.trim();

      setErrors((prev) => ({
        ...prev,
        name: !isNameValid,
        email: !isEmailValid,
        waNum: !isWaNumValid,
      }));

      ok = isNameValid && isEmailValid && isWaNumValid;
    }
    if (step === 2) {
      const isSscGradeValid = !!form.sscGrade.trim();
      const isHscGradeValid = !!form.hscGrade.trim();

      setErrors((prev) => ({
        ...prev,
        sscGrade: !isSscGradeValid,
        hscGrade: !isHscGradeValid,
      }));

      ok = isSscGradeValid && isHscGradeValid;
    }
    return ok;
  };

  const goTo = (n: number) => {
    if (n > currentStep && !validate(currentStep)) return;
    setCurrentStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProgramSelect = (program: string) => {
    setForm((prev) => ({ ...prev, program }));
    setErrors((prev) => ({ ...prev, program: false }));
  };

  const handleBudgetSelect = (budget: string) => {
    setForm((prev) => ({ ...prev, budget }));
    setErrors((prev) => ({ ...prev, budget: false }));
  };

  const handleCountrySelect = (country: string) => {
    setForm((prev) => ({ ...prev, country }));
    setErrors((prev) => ({ ...prev, country: false }));
  };

  const handleSubmit = async () => {
    let ok = true;
    if (!form.program) {
      setErrors((prev) => ({ ...prev, program: true }));
      ok = false;
    }
    if (!form.country) {
      setErrors((prev) => ({ ...prev, country: true }));
      ok = false;
    }
    if (!form.course || !form.course.trim()) {
      setErrors((prev) => ({ ...prev, course: true }));
      ok = false;
    }
    if (!form.budget) {
      setErrors((prev) => ({ ...prev, budget: true }));
      ok = false;
    }

    if (!ok) return;

    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("wa-code", form.waCode);
    formData.append("wa-num", form.waNum);
    formData.append("ssc-grade", form.sscGrade);
    formData.append("ssc-year", form.sscYear);
    formData.append("hsc-grade", form.hscGrade);
    formData.append("hsc-year", form.hscYear);
    formData.append("bach-grade", form.bachGrade);
    formData.append("bach-year", form.bachYear);
    formData.append("masters-grade", form.mastersGrade);
    formData.append("masters-year", form.mastersYear);
    formData.append("program", form.program);
    formData.append("course", form.course);
    formData.append("budget", form.budget);
    formData.append("country", form.country);

    try {
      const res = await submitAssessmentForm(formData);
      if (res.success) {
        setCurrentStep(4); // Success Step
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setErrorMsg(res.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // Generate years list (2025 to 1998)
  const years: number[] = [];
  for (let y = 2025; y >= 1998; y--) {
    years.push(y);
  }

  const budgetLabels: Record<string, string> = {
    low: "BDT 5–7 lac / year",
    mid: "BDT 7–10 lac / year",
    high: "BDT 10–15 lac / year",
  };

  return (
    <div className="assessment-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .assessment-container {
          --green: #1D9E75;
          --green-dark: #0F6E56;
          --green-light: #E1F5EE;
          --green-mid: #9FE1CB;
          --red: #D85A30;
          --bg: #F7F9F8;
          --card: #ffffff;
          --border: #E0E5E3;
          --border-focus: #1D9E75;
          --text: #1A2620;
          --text-muted: #5A7068;
          --text-hint: #93ADA5;
          --radius: 10px;
          --radius-lg: 14px;

          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          padding-bottom: 5rem;
        }

        .wrap { 
          max-width: 560px; 
          margin: 0 auto; 
          padding: 2.5rem 1rem 0;
          position: relative;
          z-index: 1;
        }

        /* Hero Header */
        .assessment-hero {
          width: 100%;
          min-height: 280px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-image: url('/assets/home/campus_students_bg.webp');
          background-size: cover;
          background-position: center 25%;
          margin-top: -80px; /* Offset the header padding */
          padding-top: 100px;
          padding-bottom: 2rem;
          color: var(--text);
          border-bottom: 1px solid var(--border);
        }

        .assessment-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(247, 249, 248, 0.82), rgba(247, 249, 248, 0.9));
          z-index: 1;
        }

        .assessment-hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          padding: 0 1rem;
        }

        .assessment-hero .brand {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green-light); 
          border: 1px solid var(--green-mid);
          border-radius: 99px;
          padding: 5px 14px; margin-bottom: 1.25rem;
        }
        .assessment-hero .brand-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); }
        .assessment-hero .brand-name { font-size: 12px; font-weight: 600; color: var(--green-dark); letter-spacing: .06em; text-transform: uppercase; }
        
        .assessment-hero h1 { font-size: 32px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .assessment-hero p { font-size: 14px; color: var(--text-muted); font-weight: 500; }

        /* Card */
        .card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,.04);
          position: relative;
        }

        /* Fields */
        .field { margin-bottom: 1.25rem; }
        .field:last-of-type { margin-bottom: 0; }
        .field label {
          display: block; font-size: 13px; font-weight: 600;
          color: var(--text-muted); margin-bottom: 6px; letter-spacing: .02em;
        }
        .req { color: var(--green); margin-left: 2px; }
        .opt-tag {
          font-size: 11px; font-weight: 400; color: var(--text-hint);
          background: var(--bg); border-radius: 4px; padding: 1px 6px;
          margin-left: 6px; border: 1px solid var(--border);
        }

        .assessment-container input[type=text], 
        .assessment-container input[type=email], 
        .assessment-container input[type=tel], 
        .assessment-container select, 
        .assessment-container textarea {
          width: 100%; padding: 11px 13px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: var(--text);
          background: #fff; border: 1px solid var(--border);
          border-radius: var(--radius); outline: none;
          transition: border-color .2s, box-shadow .2s;
          -webkit-appearance: none; appearance: none;
        }
        .assessment-container input::placeholder, 
        .assessment-container textarea::placeholder { color: var(--text-hint); }
        .assessment-container input:focus, 
        .assessment-container select:focus, 
        .assessment-container textarea:focus {
          border-color: var(--border-focus);
          box-shadow: 0 0 0 3px rgba(29,158,117,.12);
        }

        /* Select arrow */
        .assessment-container select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2393ADA5' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }

        /* WhatsApp row */
        .wa-row { display: flex; gap: 8px; width: 100%; }
        .assessment-container select.wa-code { width: 130px !important; flex-shrink: 0; min-width: 130px; }
        .assessment-container input.wa-num { flex: 1 !important; width: auto !important; }

        /* Field row (2 cols) */
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        .hint { font-size: 12px; color: var(--text-hint); margin-top: 5px; }

        /* Error */
        .err-msg { font-size: 12px; color: var(--red); margin-top: 5px; }
        .field.has-error input,
        .field.has-error select,
        .field.has-error .wa-num,
        .field.has-error .wa-code { border-color: var(--red) !important; }

        /* Option cards (program) */
        .prog-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .prog-card {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 12px; border: 1px solid var(--border);
          border-radius: var(--radius); cursor: pointer;
          transition: all .15s; user-select: none;
        }
        .prog-card:hover { border-color: var(--green-mid); background: #FAFFFE; }
        .prog-card.selected { border-color: var(--green); background: var(--green-light); }
        .prog-card input { display: none; }
        .prog-icon {
          width: 34px; height: 34px; border-radius: 8px;
          background: var(--bg); display: flex; align-items: center;
          justify-content: center; font-size: 17px; flex-shrink: 0;
        }
        .prog-card.selected .prog-icon { background: var(--green-mid); }
        .prog-title { font-size: 14px; font-weight: 600; color: var(--text); line-height: 1.2; }
        .prog-sub { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
        .prog-span2 { grid-column: span 2; }

        /* Country cards */
        .country-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .country-card {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 14px 10px; border: 1px solid var(--border);
          border-radius: var(--radius); cursor: pointer;
          transition: all .15s; user-select: none;
          text-align: center;
        }
        .country-card:hover { border-color: var(--green-mid); background: #FAFFFE; }
        .country-card.selected { border-color: var(--green); background: var(--green-light); }
        .country-flag {
          font-size: 24px; margin-bottom: 6px;
        }
        .country-name { font-size: 13px; font-weight: 600; color: var(--text); line-height: 1.2; }

        /* Budget cards */
        .budget-stack { display: flex; flex-direction: column; gap: 8px; }
        .budget-card {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 15px; border: 1px solid var(--border);
          border-radius: var(--radius); cursor: pointer;
          transition: all .15s; user-select: none;
        }
        .budget-card:hover { border-color: var(--green-mid); background: #FAFFFE; }
        .budget-card.selected { border-color: var(--green); background: var(--green-light); }
        .budget-card input { display: none; }
        .budget-name { font-size: 14px; font-weight: 600; color: var(--text); }
        .budget-desc { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
        .budget-amt { font-size: 14px; font-weight: 600; color: var(--green-dark); white-space: nowrap; }

        /* Actions */
        .actions { display: flex; justify-content: space-between; align-items: center; margin-top: 1.75rem; }
        .btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 20px; border-radius: var(--radius);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all .15s;
          border: 1px solid var(--border);
          background: transparent; color: var(--text-muted);
        }
        .btn:hover { background: var(--bg); color: var(--text); }
        .btn svg { width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .btn-primary {
          background: var(--green); color: #fff;
          border-color: var(--green);
        }
        .btn-primary:hover { background: var(--green-dark); border-color: var(--green-dark); }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .secure-note { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--text-hint); }
        .secure-note svg { width: 13px; height: 13px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }

        /* Success */
        .success { text-align: center; padding: 1.5rem 0.5rem; }
        .success-circle {
          width: 68px; height: 68px; border-radius: 50%;
          background: var(--green-light); display: flex;
          align-items: center; justify-content: center;
          margin: 0 auto 1.25rem; font-size: 30px;
        }
        .success h2 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
        .success .tagline { font-size: 14px; color: var(--text-muted); margin-bottom: 1.75rem; }
        .summary-box {
          background: var(--bg); border-radius: var(--radius);
          padding: 1rem 1.25rem; text-align: left;
          border: 1px solid var(--border);
        }
        .summary-title { font-size: 11px; font-weight: 600; color: var(--text-hint); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 10px; }
        .summary-row { display: flex; justify-content: space-between; align-items: flex-start; padding: 7px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
        .summary-row:last-child { border-bottom: none; }
        .sum-label { color: var(--text-muted); }
        .sum-val { font-weight: 600; color: var(--text); text-align: right; max-width: 55%; }

        .err-container {
          background: #fdf2f2;
          border: 1px solid #f5baba;
          color: var(--red);
          padding: 10px 14px;
          border-radius: var(--radius);
          font-size: 13px;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 480px) {
          .assessment-container { padding: 2rem 0.5rem 4rem; }
          .card { padding: 1.5rem 1.25rem; }
          .prog-grid { grid-template-columns: 1fr; }
          .prog-span2 { grid-column: span 1; }
          .field-row { grid-template-columns: 1fr; }
          .wa-code { width: 115px; }
          .country-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}} />

      {/* 1. Full-width Hero Header Banner */}
      <div className="assessment-hero">
        <div className="assessment-hero-overlay"></div>
        <div className="assessment-hero-content">
          <div className="brand">
            <div className="brand-dot"></div>
            <span className="brand-name">NextPath Global</span>
          </div>
          <h1>Student Assessment Form</h1>
          <p>
            {currentStep === 4 
              ? "Completed ✓" 
              : `2026 Intake — Step ${currentStep} of 3 (${stepNames[currentStep - 1]})`
            }
          </p>
        </div>
      </div>

      <div className="wrap">
        {currentStep <= 3 && (
          <div className="progress-wrap">
            <div className="progress-meta">
              <span className="step-name">{stepNames[currentStep - 1]}</span>
              <span className="step-count">Step {currentStep} of 3</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${stepPct[currentStep - 1]}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="card">
          {errorMsg && <div className="err-container">{errorMsg}</div>}

          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="step-content">
              <div className={`field ${errors.name ? "has-error" : ""}`}>
                <label htmlFor="name">
                  Full name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Mohammad Rahman"
                  autoComplete="name"
                />
                {errors.name && <div className="err-msg">Please enter your full name</div>}
              </div>

              <div className={`field ${errors.email ? "has-error" : ""}`}>
                <label htmlFor="email">
                  Email address <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && <div className="err-msg">Please enter a valid email address</div>}
              </div>

              <div className={`field ${errors.waNum ? "has-error" : ""}`}>
                <label htmlFor="wa-num">
                  WhatsApp number <span className="req">*</span>
                </label>
                <div className="wa-row">
                  <select
                    className="wa-code"
                    id="waCode"
                    value={form.waCode}
                    onChange={handleInputChange}
                    aria-label="Country code"
                  >
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+254">🇰🇪 +254</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+66">🇹🇭 +66</option>
                    <option value="+94">🇱🇰 +94</option>
                    <option value="+977">🇳🇵 +977</option>
                    <option value="+other">Other</option>
                  </select>
                  <input
                    type="tel"
                    className="wa-num"
                    id="waNum"
                    value={form.waNum}
                    onChange={handleInputChange}
                    placeholder="01XXXXXXXXX"
                    autoComplete="tel"
                    inputMode="numeric"
                  />
                </div>
                {errors.waNum && <div className="err-msg">Please enter your WhatsApp number</div>}
              </div>

              <div className="actions">
                <span className="secure-note">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Your info is secure
                </span>
                <button className="btn btn-primary" onClick={() => goTo(2)}>
                  Next
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Academic Results */}
          {currentStep === 2 && (
            <div className="step-content">
              <div className={`field ${errors.sscGrade ? "has-error" : ""}`}>
                <label>
                  SSC result &amp; passing year <span className="req">*</span>
                </label>
                <div className="field-row">
                  <input
                    type="text"
                    id="sscGrade"
                    value={form.sscGrade}
                    onChange={handleInputChange}
                    placeholder="e.g. GPA 5.00 / A+"
                  />
                  <select
                    id="sscYear"
                    value={form.sscYear}
                    onChange={(e) => handleSelectChange("sscYear", e.target.value)}
                    aria-label="SSC passing year"
                  >
                    <option value="">Passing year</option>
                    {years.map((y) => (
                      <option key={`ssc-${y}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.sscGrade && <div className="err-msg">Please enter your SSC result</div>}
              </div>

              <div className={`field ${errors.hscGrade ? "has-error" : ""}`}>
                <label>
                  HSC result &amp; passing year <span className="req">*</span>
                </label>
                <div className="field-row">
                  <input
                    type="text"
                    id="hscGrade"
                    value={form.hscGrade}
                    onChange={handleInputChange}
                    placeholder="e.g. GPA 4.50 / B+"
                  />
                  <select
                    id="hscYear"
                    value={form.hscYear}
                    onChange={(e) => handleSelectChange("hscYear", e.target.value)}
                    aria-label="HSC passing year"
                  >
                    <option value="">Passing year</option>
                    {years.map((y) => (
                      <option key={`hsc-${y}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.hscGrade && <div className="err-msg">Please enter your HSC result</div>}
              </div>

              <div className="field">
                <label>
                  Bachelor result &amp; passing year <span className="opt-tag">optional</span>
                </label>
                <div className="field-row">
                  <input
                    type="text"
                    id="bachGrade"
                    value={form.bachGrade}
                    onChange={handleInputChange}
                    placeholder="e.g. CGPA 3.20 / 2nd Class"
                  />
                  <select
                    id="bachYear"
                    value={form.bachYear}
                    onChange={(e) => handleSelectChange("bachYear", e.target.value)}
                    aria-label="Bachelor passing year"
                  >
                    <option value="">Passing year</option>
                    {years.map((y) => (
                      <option key={`bach-${y}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="hint">Leave blank if not applicable</div>
              </div>

              <div className="field">
                <label>
                  Masters result &amp; passing year <span className="opt-tag">optional</span>
                </label>
                <div className="field-row">
                  <input
                    type="text"
                    id="mastersGrade"
                    value={form.mastersGrade}
                    onChange={handleInputChange}
                    placeholder="e.g. CGPA 3.50 / Merit"
                  />
                  <select
                    id="mastersYear"
                    value={form.mastersYear}
                    onChange={(e) => handleSelectChange("mastersYear", e.target.value)}
                    aria-label="Masters passing year"
                  >
                    <option value="">Passing year</option>
                    {years.map((y) => (
                      <option key={`masters-${y}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="hint">Leave blank if not applicable</div>
              </div>

              <div className="actions">
                <button className="btn" onClick={() => goTo(1)}>
                  <svg viewBox="0 0 24 24">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <button className="btn btn-primary" onClick={() => goTo(3)}>
                  Next
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Program & Budget */}
          {currentStep === 3 && (
            <div className="step-content">
              <div className={`field ${errors.program ? "has-error" : ""}`}>
                <label>
                  Preferred program <span className="req">*</span>
                </label>
                <div className="prog-grid">
                  {[
                    { id: "pc-foundation", val: "Foundation", emoji: "📘", title: "Foundation", sub: "Pre-degree pathway" },
                    { id: "pc-diploma", val: "Diploma", emoji: "📗", title: "Diploma", sub: "2–3 year qualification" },
                    { id: "pc-bachelor", val: "Bachelor", emoji: "🎓", title: "Bachelor", sub: "Undergraduate degree" },
                    { id: "pc-masters", val: "Masters", emoji: "📙", title: "Masters", sub: "Postgraduate degree" },
                    { id: "pc-phd", val: "PhD", emoji: "🔬", title: "PhD", sub: "Doctoral research program", full: true },
                  ].map((p) => (
                    <div
                      key={p.id}
                      className={`prog-card ${p.full ? "prog-span2" : ""} ${
                        form.program === p.val ? "selected" : ""
                      }`}
                      onClick={() => handleProgramSelect(p.val)}
                    >
                      <div className="prog-icon">{p.emoji}</div>
                      <div>
                        <div className="prog-title">{p.title}</div>
                        <div className="prog-sub">{p.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.program && <div className="err-msg">Please select a program</div>}
              </div>

              <div className={`field ${errors.country ? "has-error" : ""}`}>
                <label>
                  Preferred destination country <span className="req">*</span>
                </label>
                <div className="country-grid">
                  {[
                    { val: "Malaysia", flag: "🇲🇾", name: "Malaysia" },
                    { val: "United Kingdom", flag: "🇬🇧", name: "UK" },
                    { val: "Australia", flag: "🇦🇺", name: "Australia" },
                    { val: "Germany", flag: "🇩🇪", name: "Germany" },
                    { val: "Finland", flag: "🇫🇮", name: "Finland" },
                    { val: "China", flag: "🇨🇳", name: "China" },
                    { val: "USA", flag: "🇺🇸", name: "USA" },
                    { val: "Canada", flag: "🇨🇦", name: "Canada" },
                    { val: "Other", flag: "🌍", name: "Other / Any" },
                  ].map((c) => (
                    <div
                      key={c.val}
                      className={`country-card ${
                        form.country === c.val ? "selected" : ""
                      }`}
                      onClick={() => handleCountrySelect(c.val)}
                    >
                      <div className="country-flag">{c.flag}</div>
                      <div className="country-name">{c.name}</div>
                    </div>
                  ))}
                </div>
                {errors.country && <div className="err-msg">Please select a preferred country</div>}
              </div>

              <div className={`field ${errors.course ? "has-error" : ""}`}>
                <label htmlFor="course">
                  Desired course / subject <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="course"
                  value={form.course}
                  onChange={handleInputChange}
                  placeholder="e.g. Diploma in Business Administration, Bachelor in Information Technology"
                  list="course-suggestions"
                  autoComplete="off"
                />
                <datalist id="course-suggestions">
                  <option value="Diploma in Business Administration" />
                  <option value="Bachelor in Information Technology" />
                  <option value="Bachelor of Computer Science" />
                  <option value="Bachelor of Business Administration" />
                  <option value="Master of Business Administration (MBA)" />
                  <option value="Master of Information Technology" />
                  <option value="Diploma in Information Technology" />
                  <option value="Bachelor of Software Engineering" />
                  <option value="Bachelor of Cyber Security" />
                  <option value="Bachelor of Mechanical Engineering" />
                  <option value="Bachelor of Electrical & Electronic Engineering" />
                  <option value="Master of Computer Science" />
                  <option value="PhD in Computer Science" />
                  <option value="PhD in Business Administration" />
                </datalist>
                {errors.course && <div className="err-msg">Please select or type your desired course</div>}
              </div>

              <div className={`field ${errors.budget ? "has-error" : ""}`}>
                <label>
                  Annual tuition fee budget <span className="req">*</span>
                </label>
                <div className="budget-stack">
                  {[
                    { id: "bc-low", val: "low", title: "Low budget", desc: "Entry-level programs", amt: "BDT 5–7 lac/yr" },
                    { id: "bc-mid", val: "mid", title: "Mid budget", desc: "Standard programs", amt: "BDT 7–10 lac/yr" },
                    { id: "bc-high", val: "high", title: "High budget", desc: "Premium programs", amt: "BDT 10–15 lac/yr" },
                  ].map((b) => (
                    <div
                      key={b.id}
                      className={`budget-card ${form.budget === b.val ? "selected" : ""}`}
                      onClick={() => handleBudgetSelect(b.val)}
                    >
                      <div className="budget-left">
                        <div className="budget-name">{b.title}</div>
                        <div className="budget-desc">{b.desc}</div>
                      </div>
                      <div className="budget-amt">{b.amt}</div>
                    </div>
                  ))}
                </div>
                {errors.budget && <div className="err-msg">Please select a budget range</div>}
              </div>

              <div className="actions">
                <button className="btn" onClick={() => goTo(2)} disabled={loading}>
                  <svg viewBox="0 0 24 24">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit application"}
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Success Step */}
          {currentStep === 4 && (
            <div className="success">
              <div className="success-circle">✅</div>
              <h2>Application submitted!</h2>
              <p className="tagline">Our team will contact you on WhatsApp within 24 hours.</p>
              <div className="summary-box">
                <div className="summary-title">Submission summary</div>
                <div className="summary-row">
                  <span className="sum-label">Name</span>
                  <span className="sum-val">{form.name}</span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">Email</span>
                  <span className="sum-val">{form.email}</span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">WhatsApp</span>
                  <span className="sum-val">
                    {form.waCode} {form.waNum}
                  </span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">Program</span>
                  <span className="sum-val">{form.program}</span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">Preferred Country</span>
                  <span className="sum-val">{form.country}</span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">Course / Subject</span>
                  <span className="sum-val">{form.course}</span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">Budget</span>
                  <span className="sum-val">{budgetLabels[form.budget]}</span>
                </div>
              </div>
            </div>
          )}
        </div> {/* card */}
      </div>
    </div>
  );
}
