import React, { useState } from 'react';
import Stepper, { Step } from './Stepper';
import {
    Smartphone, Globe, Database, UploadCloud, Brain,
    Shield, Zap, Lock, Code, Check
} from 'lucide-react';

type ProjectType = 'Website' | 'Web App' | 'Mobile App' | 'Other';
type Timeline = 'Urgent (ASAP)' | 'Standard (1-2 months)' | 'Relaxed (3+ months)';
type SecurityLevel = 'Standard' | 'Enhanced' | 'High (FinTech/Health)';

interface FormData {
    type: ProjectType | '';
    features: string[];
    timeline: Timeline | '';
    security: SecurityLevel | '';
    email: string;
}

const CostEstimator: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        type: '',
        features: [],
        timeline: '',
        security: '',
        email: ''
    });

    const toggleFeature = (feature: string) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature]
        }));
    };

    const updateField = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const featuresList = [
        { id: 'backend', label: 'Custom Backend', icon: Database },
        { id: 'uploads', label: 'File Uploads', icon: UploadCloud },
        { id: 'ai', label: 'AI Features', icon: Brain },
        { id: 'auth', label: 'User Login', icon: Lock },
        { id: 'api', label: 'External APIs', icon: Code },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Get an Instant Estimate</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Define your project scope and get a realistic cost range.
                </p>
            </div>

            <Stepper
                initialStep={1}
                onFinalStepCompleted={() => {
                    console.log("Form Submitted:", formData);
                    // Here you would typically send data to a backend
                }}
                backButtonText="Back"
                nextButtonText="Next"
                stepCircleContainerClassName="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-900/5 dark:shadow-blue-900/10"
                stepContainerClassName="border-b border-slate-200 dark:border-slate-800"
                contentClassName="py-8 min-h-[400px]"
                footerClassName="border-t border-slate-200 dark:border-slate-800 pt-6"
            >
                {/* STEP 1: Project Type */}
                <Step>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What are we building?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                            {['Website', 'Web App', 'Mobile App', 'Other'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => updateField('type', type)}
                                    className={`p-6 rounded-2xl border transition-all flex items-center gap-4 group text-left
                                        ${formData.type === type
                                            ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25'
                                            : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-500/50 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    <div className={`p-3 rounded-full ${formData.type === type ? 'bg-white/20' : 'bg-white dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-slate-700 text-slate-900 dark:text-slate-100'}`}>
                                        <span className={formData.type === type ? 'text-white' : 'text-slate-700 dark:text-slate-300'}>
                                            {type === 'Mobile App' ? <Smartphone size={24} /> : <Globe size={24} />}
                                        </span>
                                    </div>
                                    <span className="text-lg font-medium">{type}</span>
                                    {formData.type === type && <Check className="ml-auto" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </Step>

                {/* STEP 2: Technical Features */}
                <Step>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Technical Requirements</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 text-center">Select all complex features relevant to your project.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                            {featuresList.map(({ id, label, icon: Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => toggleFeature(id)}
                                    className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-3 text-center
                                        ${formData.features.includes(id)
                                            ? 'bg-blue-100 dark:bg-blue-900/40 border-blue-500 text-blue-900 dark:text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                                            : 'bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-900'
                                        }`}
                                >
                                    <Icon size={28} className={formData.features.includes(id) ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-600'} />
                                    <span className="font-medium">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </Step>

                {/* STEP 3: Delivery & Security */}
                <Step>
                    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Delivery & Security</h3>

                        <div className="w-full space-y-8">
                            {/* Timeline Section */}
                            <div className="space-y-4">
                                <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <Zap size={16} /> Timeline Expectation
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    {['Urgent (ASAP)', 'Standard (1-2 months)', 'Relaxed (3+ months)'].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => updateField('timeline', opt)}
                                            className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors
                                                ${formData.timeline === opt
                                                    ? 'bg-blue-600 border-blue-500 text-white'
                                                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-600'
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Security Section */}
                            <div className="space-y-4">
                                <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <Shield size={16} /> Security Level
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    {[
                                        { label: 'Standard', desc: 'Best practices' },
                                        { label: 'Enhanced', desc: 'SLA & Adv. Protection' },
                                        { label: 'High', desc: 'FinTech / HIPAA' }
                                    ].map((opt) => (
                                        <button
                                            key={opt.label}
                                            onClick={() => updateField('security', opt.label)}
                                            className={`px-4 py-3 rounded-lg border text-left transition-colors
                                                ${formData.security === opt.label
                                                    ? 'bg-blue-600 border-blue-500 text-white'
                                                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-600'
                                                }`}
                                        >
                                            <div className="font-bold text-sm">{opt.label}</div>
                                            <div className={`text-xs mt-1 ${formData.security === opt.label ? 'text-blue-100' : 'text-slate-500 dark:text-slate-500'}`}>
                                                {opt.desc}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Step>

                {/* STEP 4: Contact */}
                <Step>
                    <div className="flex flex-col items-center text-center p-4 max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Detailed Estimate</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8">
                            Based on your selection of <strong>{formData.type || 'Project'}</strong> with <strong>{formData.features.length} extra features</strong>.
                            <br />Enter your email to receive the breakdown.
                        </p>

                        <div className="w-full relative">
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateField('email', e.target.value)}
                                placeholder="name@company.com"
                                className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-600"
                            />
                        </div>

                        <p className="text-xs text-slate-500 mt-4">
                            We value your privacy. No spam, just the quote.
                        </p>
                    </div>
                </Step>

                {/* STEP 5: Success */}
                <Step>
                    <div className="flex flex-col items-center text-center p-12">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mb-6">
                            <Check size={40} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Estimate Sent!</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md">
                            We have sent a detailed preliminary estimation to <strong>{formData.email}</strong>.
                        </p>
                        <p className="text-slate-500 text-sm mt-8">
                            Please check your inbox (and spam folder) within the next 5 minutes.
                        </p>
                    </div>
                </Step>
            </Stepper>
        </div>
    );
};

export default CostEstimator;
