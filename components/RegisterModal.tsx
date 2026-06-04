"use client";

import { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

export default function RegisterModal({ isOpen, onClose, eventTitle }: RegisterModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", idNumber: "" });
  const [errors, setErrors] = useState({ name: "", email: "", idNumber: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", idNumber: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "Student Registration ID/Roll Number is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/60 dark:bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl z-10 overflow-hidden transition-all border border-transparent dark:border-gray-800">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Register for Event</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium line-clamp-1">{eventTitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? "border-red-500 dark:border-red-500 focus:ring-red-100 dark:focus:ring-red-900" : "border-gray-200 dark:border-gray-700 focus:ring-blue-100 dark:focus:ring-blue-900 focus:border-blue-500 dark:focus:border-blue-500"
                  }`}
                  placeholder="Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 font-medium">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? "border-red-500 dark:border-red-500 focus:ring-red-100 dark:focus:ring-red-900" : "border-gray-200 dark:border-gray-700 focus:ring-blue-100 dark:focus:ring-blue-900 focus:border-blue-500 dark:focus:border-blue-500"
                  }`}
                  placeholder="alex@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Registration / Roll No</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.idNumber ? "border-red-500 dark:border-red-500 focus:ring-red-100 dark:focus:ring-red-900" : "border-gray-200 dark:border-gray-700 focus:ring-blue-100 dark:focus:ring-blue-900 focus:border-blue-500 dark:focus:border-blue-500"
                  }`}
                  placeholder="REG1002394"
                  value={formData.idNumber}
                  onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                />
                {errors.idNumber && <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 font-medium">{errors.idNumber}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mt-2 disabled:bg-blue-400 dark:disabled:bg-blue-800"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                  </>
                ) : (
                  "Confirm Registration"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-50 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">You're Checked In!</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
              Seat confirmed for <strong className="text-gray-900 dark:text-white">{eventTitle}</strong>. A digital ticket has been sent to <strong className="text-gray-900 dark:text-white">{formData.email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}