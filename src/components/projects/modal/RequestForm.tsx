import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaGlobe } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { currencies } from "../../../data/projectsData";
import { useRequestForm } from "../../../hooks/useRequestForm";

type RequestFormProps = {
    formLogic: ReturnType<typeof useRequestForm>;
    onClose: () => void;
    forwardedRef?: React.RefObject<HTMLFormElement>;
};

export const RequestForm = ({ formLogic, onClose, forwardedRef }: RequestFormProps) => {
    const { formData, setters, handlers } = formLogic;
    const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
    const currencyDropdownRef = useRef<HTMLDivElement>(null);

    // Handle click outside currency dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                currencyDropdownRef.current &&
                !currencyDropdownRef.current.contains(event.target as Node)
            ) {
                setCurrencyDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <form ref={forwardedRef} className="p-6 space-y-4 overflow-y-auto flex-1 scroll-mt-28" onSubmit={handlers.submitBid}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Full Name
                    </label>
                    <input
                        type="text"
                        required
                        minLength={2}
                        value={formData.name}
                        onChange={(e) => setters.setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-800 ring-0 ring-slate-200 transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 hover:bg-slate-50/80"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Email Address
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setters.setEmail(e.target.value)}
                        placeholder="Valid Email"
                        className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-800 ring-0 ring-slate-200 transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 hover:bg-slate-50/80"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Phone Number
                </label>
                <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setters.setPhone(e.target.value)}
                    placeholder="+254 733 443 224"
                    className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-800 ring-0 ring-slate-200 transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 hover:bg-slate-50/80"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Your Budget
                    </label>
                    <span className="text-sm text-slate-500">
                        All amounts are negotiable
                    </span>
                </div>
                <div className="flex gap-2">
                    {/* Currency Dropdown */}
                    <div className="relative flex-1" ref={currencyDropdownRef}>
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 w-full rounded-xl border-0 bg-slate-50 ring-0 ring-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition-all hover:bg-slate-50/80 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                        >
                            <FaGlobe className="h-4 w-4 text-indigo-500" />
                            <span className="font-medium">{formData.selectedCurrency.code}</span>
                            <FiChevronDown
                                className={`h-4 w-4 transition-transform ${currencyDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {currencyDropdownOpen && (
                            <div className="absolute z-10 mt-1 w-full rounded-lg border border-slate-200 bg-white max-h-60 overflow-y-auto shadow-lg">
                                {currencies.map((currency) => (
                                    <button
                                        key={currency.code}
                                        type="button"
                                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-left hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
                                        onClick={() => {
                                            setters.setSelectedCurrency(currency);
                                            setCurrencyDropdownOpen(false);
                                        }}
                                    >
                                        <span className="text-lg">{currency.flag}</span>
                                        <div className="flex-1">
                                            <div className="font-medium text-slate-800">
                                                {currency.code}
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                {currency.name}
                                            </div>
                                        </div>
                                        <span className="font-semibold text-indigo-600">
                                            {currency.symbol}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Budget Input */}
                    <div className="flex-1 relative">
                        <div className="absolute left-1 top-1/2 -translate-y-1/2">
                            <span className="text-slate-700 font-semibold">
                                {formData.selectedCurrency.symbol}
                            </span>
                        </div>
                        <input
                            type="text"
                            required
                            value={formData.budget}
                            onChange={handlers.handleBudgetChange}
                            placeholder="Enter Amount"
                            inputMode="decimal"
                            className="w-full rounded-xl border-0 bg-slate-50 pl-10 pr-4 py-3.5 text-sm font-medium text-slate-800 ring-0 ring-slate-200 transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 hover:bg-slate-50/80"
                        />
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                >
                    <FaWhatsapp className="h-4 w-4" />
                    Send
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                    </span>
                </button>
            </div>
        </form>
    );
};
