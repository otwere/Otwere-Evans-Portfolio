import { useState, useCallback } from "react";
import type { Project, Currency } from "../types/project";
import { currencies } from "../data/projectsData";

export const useRequestForm = (project: Project | null, onClose: () => void) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [budget, setBudget] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);

    // Format budget with commas
    const formatBudget = (value: string) => {
        const numericValue = value.replace(/[^\d.]/g, "");
        const parts = numericValue.split(".");
        let wholePart = parts[0];
        const decimalPart = parts.length > 1 ? `.${parts[1].slice(0, 2)}` : "";
        if (wholePart) {
            wholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return wholePart + decimalPart;
    };

    const parseBudget = (formattedValue: string) => {
        return formattedValue.replace(/,/g, "");
    };

    const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = parseBudget(e.target.value);
        const formattedValue = formatBudget(rawValue);
        setBudget(formattedValue);
    };

    const resetForm = useCallback(() => {
        setName("");
        setEmail("");
        setPhone("");
        setBudget("");
        setSelectedCurrency(currencies[0]);
    }, []);

    const submitBid = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPhone = phone.trim();
        const rawBudget = parseBudget(budget.trim());

        if (!trimmedName || !trimmedEmail || !trimmedPhone || !rawBudget) return;

        const projectTitle = project?.title ?? "Unknown Project";
        const projectLink = project?.link ?? "";

        // WhatsApp Message Construction
        const msg =
            `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `*SOURCE CODE REQUEST*\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
            `*Project:* ${projectTitle}\n\n` +
            `*Contact Information:*\n` +
            `• Name: ${trimmedName}\n` +
            `• Email: ${trimmedEmail}\n` +
            `• Phone: ${trimmedPhone}\n\n` +
            `*Budget Offer:*\n` +
            `${selectedCurrency.symbol}${budget} ${selectedCurrency.code}\n\n` +
            (projectLink ? `*Project Link:*\n${projectLink}\n\n` : "") +
            `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `Sent via Portfolio Request Form`;

        const url = `https://wa.me/254733443224?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank", "noopener,noreferrer");
        onClose();
    };

    return {
        formData: { name, email, phone, budget, selectedCurrency },
        setters: { setName, setEmail, setPhone, setSelectedCurrency },
        handlers: { handleBudgetChange, submitBid, resetForm }
    };
};
