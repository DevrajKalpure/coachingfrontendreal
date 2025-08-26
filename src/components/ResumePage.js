import React, { useState } from 'react';
import './ResumePage.css';

import ResumeSamples from './ResumeSamples';

// Data structure is correct, no changes needed here
const pricingData = {
    '0-3': {
        plans: [
            { title: 'Resume', price: '1499' },
            { title: 'Cover Letter', price: '599' },
            { title: 'LinkedIn', price: '1399' }
        ],
        combos: [
            { title: 'Starter Pack', subtitle: 'Resume + Cover Letter', price: '1899', originalPrice: '2098' },
            { title: 'Ultimate Career Kit', subtitle: 'Resume + Cover Letter + LinkedIn', price: '2999', originalPrice: '3497', isFeatured: true },
            { title: 'Pro Online Presence', subtitle: 'Resume + LinkedIn', price: '2599', originalPrice: '2898' }
        ]
    },
    '3-7': {
        plans: [
            { title: 'Resume', price: '2499' },
            { title: 'Cover Letter', price: '699' },
            { title: 'LinkedIn', price: '1999' }
        ],
        combos: [
            { title: 'Starter Pack', subtitle: 'Resume + Cover Letter', price: '2999', originalPrice: '3198' },
            { title: 'Ultimate Career Kit', subtitle: 'Resume + Cover Letter + LinkedIn', price: '4499', originalPrice: '5197', isFeatured: true },
            { title: 'Pro Online Presence', subtitle: 'Resume + LinkedIn', price: '3999', originalPrice: '4498' }
        ]
    },
    '7-14': {
        plans: [
            { title: 'Resume', price: '3499' },
            { title: 'Cover Letter', price: '799' },
            { title: 'LinkedIn', price: '2999' }
        ],
        combos: [
            { title: 'Starter Pack', subtitle: 'Resume + Cover Letter', price: '3999', originalPrice: '4298' },
            { title: 'Ultimate Career Kit', subtitle: 'Resume + Cover Letter + LinkedIn', price: '6499', originalPrice: '7297', isFeatured: true },
            { title: 'Pro Online Presence', subtitle: 'Resume + LinkedIn', price: '5999', originalPrice: '6498' }
        ]
    },
    '14-20': {
        plans: [
            { title: 'Resume', price: '4499' },
            { title: 'Cover Letter', price: '899' },
            { title: 'LinkedIn', price: '3999' }
        ],
        combos: [
            { title: 'Starter Pack', subtitle: 'Resume + Cover Letter', price: '4999', originalPrice: '5398' },
            { title: 'Ultimate Career Kit', subtitle: 'Resume + Cover Letter + LinkedIn', price: '8499', originalPrice: '9397', isFeatured: true },
            { title: 'Pro Online Presence', subtitle: 'Resume + LinkedIn', price: '7999', originalPrice: '8498' }
        ]
    },
    '20+': {
        plans: [
            { title: 'Resume', price: '5999' },
            { title: 'Cover Letter', price: '999' },
            { title: 'LinkedIn', price: '4999' }
        ],
        combos: [
            { title: 'Starter Pack', subtitle: 'Resume + Cover Letter', price: '6499', originalPrice: '6998' },
            { title: 'Ultimate Career Kit', subtitle: 'Resume + Cover Letter + LinkedIn', price: '10499', originalPrice: '11997', isFeatured: true },
            { title: 'Pro Online Presence', subtitle: 'Resume + LinkedIn', price: '9999', originalPrice: '10998' }
        ]
    }
};

const planFeatures = {
    'Resume': ['3-5 Days Delivery', 'International Acceptance', 'ATS-Compatible', 'Unlimited Revisions', '6 Month Support'],
    'Cover Letter': ['3-5 Days Delivery', 'Job & Role Specific Content', 'Global Standard Followed', 'ATS Compatible', '6 Months Support'],
    'LinkedIn': ['3-5 Days Delivery', 'Search Engine Optimized', 'Global Standard Followed', 'Unlimited Revisions', '6 Month Support']
};

const comboFeatures = {
    'Starter Pack': ['Everything in Resume Plan', 'Everything in Cover Letter Plan', 'Cohesive Personal Branding', 'Includes ~10% Discount', '6 Month Support'],
    'Ultimate Career Kit': ['Complete Professional Makeover', 'All Individual Plan Features Included', 'Fully Optimized Digital & Paper Presence', 'Includes ~15% Discount', 'Priority 6 Month Support'],
    'Pro Online Presence': ['Everything in Resume Plan', 'Everything in LinkedIn Plan', 'Synced & Optimized Profiles', 'Includes ~10% Discount', '6 Month Support']
};

const PricingCard = ({ plan, isCombo, handlePayment }) => (
    <div className={`plan ${isCombo ? 'combo' : ''} ${plan.isFeatured ? 'featured' : ''}`}>
        {plan.isFeatured && <div className="featured-banner">Best Value</div>}
        <div className="plan-top">
            <div className="plan-header">
                {plan.title}
                {plan.subtitle && <span className="subtitle">{plan.subtitle}</span>}
            </div>
        </div>
        <div className="price-circle">
            ₹{plan.price}
            {plan.originalPrice && <span className="original-price"><s>₹{plan.originalPrice}</s></span>}
        </div>
        <div className="plan-body">
            <ul className="plan-features">
                {(isCombo ? comboFeatures[plan.title] : planFeatures[plan.title]).map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="buy-button" onClick={() => handlePayment(plan)}>BUY NOW</button>
        </div>
    </div>
);

function ResumePage() {
    const [activeTab, setActiveTab] = useState('plans');
    const [activeExperience, setActiveExperience] = useState('14-20');

    const experienceLevels = ['0-3', '3-7', '7-14', '14-20', '20+'];

    const handlePayment = (planDetails) => {
        alert(`Initiating payment for ${planDetails.title} at ₹${planDetails.price}. Integration needed!`);
    };

    const currentPricing = pricingData[activeExperience];
    // This line is now safe because activeTab will either be 'plans' or 'combos'
    const plansToDisplay = currentPricing[activeTab];

    return (
        <div className={`pricing-container ${activeTab}-active`}>
            <div className="experience-selector-container">
                <h2 className="experience-title">Choose Your Experience Level</h2>
                <div className="experience-buttons">
                    {experienceLevels.map(level => (
                        <button
                            key={level}
                            className={`exp-button ${activeExperience === level ? 'active' : ''}`}
                            onClick={() => setActiveExperience(level)}
                        >
                            {level === '20+' ? '20+ years' : `${level} years`}
                        </button>
                    ))}
                </div>
            </div>

            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'plans' ? 'active' : ''}`}
                    onClick={() => setActiveTab('plans')}
                >
                    Plans
                </button>
                <button
                    // --- FIX #1: Check for 'combos' (plural) ---
                    className={`tab-button ${activeTab === 'combos' ? 'active' : ''}`}
                    // --- FIX #2: Set state to 'combos' (plural) ---
                    onClick={() => setActiveTab('combos')}
                >
                    Combo
                </button>
            </div>

            <div className="plans-wrapper">
                {plansToDisplay.map((plan, index) => (
                    <PricingCard
                        key={`${activeExperience}-${plan.title}`}
                        plan={plan}
                        // --- FIX #3: Check for 'combos' (plural) ---
                        isCombo={activeTab === 'combos'}
                        handlePayment={handlePayment}
                    />
                ))}
            </div>
            <ResumeSamples />
        </div>
    );
}

export default ResumePage;