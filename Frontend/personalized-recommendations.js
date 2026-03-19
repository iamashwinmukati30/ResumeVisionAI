// Import listings from jobs.js
// Note: Since jobs.js doesn't export LISTINGS, we'll define it here or access it globally
// For now, we'll define it locally to make the module work independently
const LISTINGS = [
    // ── Frontend ──
    {
        id: 1, field: 'frontend', type: 'job', featured: true, remote: true,
        logo: '⚛️', role: 'Senior Frontend Engineer', company: 'Vercel',
        location: 'Remote', experience: '3–5 yrs',
        salary: '₹1.12Cr – ₹1.44Cr', period: '/yr',
        skills: ['React', 'Next.js', 'TypeScript', 'CSS-in-JS'],
        posted: '2 days ago'
    },
    {
        id: 2, field: 'frontend', type: 'job', featured: false, remote: false,
        logo: '🎨', role: 'UI Engineer', company: 'Figma',
        location: 'San Francisco, CA', experience: '2–4 yrs',
        salary: '₹96L – ₹1.24Cr', period: '/yr',
        skills: ['React', 'CSS', 'Figma', 'A11y'],
        posted: '5 days ago'
    },
    {
        id: 3, field: 'frontend', type: 'internship', featured: false, remote: true,
        logo: '🛍️', role: 'Frontend Developer Intern', company: 'Shopify',
        location: 'Remote', experience: 'Freshers OK',
        salary: '₹3,600/hr', period: '',
        skills: ['React', 'JavaScript', 'GraphQL'],
        posted: '1 day ago'
    },
    {
        id: 4, field: 'frontend', type: 'internship', featured: true, remote: false,
        logo: '🔵', role: 'React Intern', company: 'Meta',
        location: 'Menlo Park, CA', experience: '6 months exp',
        salary: '₹6.4L/mo', period: '',
        skills: ['React', 'Relay', 'JavaScript'],
        posted: '3 days ago'
    },

    // ── Backend ──
    {
        id: 5, field: 'backend', type: 'job', featured: true, remote: true,
        logo: '🟢', role: 'Senior Backend Engineer', company: 'Stripe',
        location: 'Remote', experience: '4–7 yrs',
        salary: '₹1.24Cr – ₹1.6Cr', period: '/yr',
        skills: ['Go', 'PostgreSQL', 'gRPC', 'Kafka'],
        posted: '1 day ago'
    },
    {
        id: 6, field: 'backend', type: 'job', featured: false, remote: false,
        logo: '☁️', role: 'Backend Software Engineer', company: 'AWS',
        location: 'Seattle, WA', experience: '2–5 yrs',
        salary: '₹1.04Cr – ₹1.36Cr', period: '/yr',
        skills: ['Java', 'Microservices', 'DynamoDB', 'Lambda'],
        posted: '4 days ago'
    },
    {
        id: 7, field: 'backend', type: 'internship', featured: false, remote: true,
        logo: '🐘', role: 'Backend Engineer Intern', company: 'Notion',
        location: 'Remote', experience: 'Freshers OK',
        salary: '₹5.6L/mo', period: '',
        skills: ['Node.js', 'PostgreSQL', 'REST APIs'],
        posted: '2 days ago'
    },
    {
        id: 8, field: 'backend', type: 'internship', featured: false, remote: false,
        logo: '🔴', role: 'API Developer Intern', company: 'Twilio',
        location: 'Austin, TX', experience: '3 months exp',
        salary: '₹5.2L/mo', period: '',
        skills: ['Python', 'REST', 'Django'],
        posted: '6 days ago'
    },

    // ── AI / ML ──
    {
        id: 9, field: 'aiml', type: 'job', featured: true, remote: true,
        logo: '🤖', role: 'Machine Learning Engineer', company: 'OpenAI',
        location: 'Remote', experience: '3–6 yrs',
        salary: '₹1.6Cr – ₹2.24Cr', period: '/yr',
        skills: ['PyTorch', 'Python', 'RLHF', 'LLMs'],
        posted: 'Today'
    },
    {
        id: 10, field: 'aiml', type: 'job', featured: false, remote: false,
        logo: '🧠', role: 'Applied AI Scientist', company: 'Google DeepMind',
        location: 'London, UK', experience: 'PhD preferred',
        salary: '₹96L – ₹1.36Cr', period: '/yr',
        skills: ['TensorFlow', 'Research', 'Python', 'JAX'],
        posted: '3 days ago'
    },
    {
        id: 11, field: 'aiml', type: 'internship', featured: true, remote: false,
        logo: '🔬', role: 'AI Research Intern', company: 'Anthropic',
        location: 'San Francisco, CA', experience: 'MS/PhD student',
        salary: '₹7.2L/mo', period: '',
        skills: ['Python', 'PyTorch', 'NLP', 'Transformers'],
        posted: '1 day ago'
    },
    {
        id: 12, field: 'aiml', type: 'internship', featured: false, remote: true,
        logo: '🌊', role: 'ML Intern', company: 'Cohere',
        location: 'Remote', experience: 'Freshers OK',
        salary: '₹6L/mo', period: '',
        skills: ['Python', 'Scikit-learn', 'NLP'],
        posted: '5 days ago'
    },

    // ── Data Science ──
    {
        id: 13, field: 'data', type: 'job', featured: true, remote: true,
        logo: '📊', role: 'Senior Data Scientist', company: 'Airbnb',
        location: 'Remote', experience: '3–6 yrs',
        salary: '₹1.16Cr – ₹1.52Cr', period: '/yr',
        skills: ['Python', 'SQL', 'Spark', 'Statistics'],
        posted: '2 days ago'
    },
    {
        id: 14, field: 'data', type: 'job', featured: false, remote: false,
        logo: '📈', role: 'Data Analyst', company: 'Spotify',
        location: 'New York, NY', experience: '1–3 yrs',
        salary: '₹76L – ₹1Cr', period: '/yr',
        skills: ['SQL', 'Python', 'Tableau', 'A/B Testing'],
        posted: '4 days ago'
    },
    {
        id: 15, field: 'data', type: 'internship', featured: false, remote: true,
        logo: '🎯', role: 'Data Science Intern', company: 'Netflix',
        location: 'Remote', experience: 'Freshers OK',
        salary: '₹6.8L/mo', period: '',
        skills: ['Python', 'R', 'SQL', 'pandas'],
        posted: '3 days ago'
    },
    {
        id: 16, field: 'data', type: 'internship', featured: false, remote: false,
        logo: '🏦', role: 'Analytics Intern', company: 'Goldman Sachs',
        location: 'New York, NY', experience: '1 yr exp',
        salary: '₹5.6L/mo', period: '',
        skills: ['SQL', 'Excel', 'Python', 'Visualization'],
        posted: '1 week ago'
    },

    // ── DevOps ──
    {
        id: 17, field: 'devops', type: 'job', featured: true, remote: true,
        logo: '⚙️', role: 'Senior DevOps Engineer', company: 'HashiCorp',
        location: 'Remote', experience: '4–7 yrs',
        salary: '₹1.2Cr – ₹1.56Cr', period: '/yr',
        skills: ['Terraform', 'Kubernetes', 'AWS', 'CI/CD'],
        posted: '1 day ago'
    },
    {
        id: 18, field: 'devops', type: 'job', featured: false, remote: false,
        logo: '🐳', role: 'Platform Engineer', company: 'Cloudflare',
        location: 'Austin, TX', experience: '2–5 yrs',
        salary: '₹1Cr – ₹1.28Cr', period: '/yr',
        skills: ['Docker', 'Kubernetes', 'Go', 'Prometheus'],
        posted: '3 days ago'
    },
    {
        id: 19, field: 'devops', type: 'internship', featured: false, remote: true,
        logo: '🔧', role: 'SRE Intern', company: 'Datadog',
        location: 'Remote', experience: 'Freshers OK',
        salary: '₹5.76L/mo', period: '',
        skills: ['Linux', 'Python', 'Monitoring', 'Bash'],
        posted: '2 days ago'
    },

    // ── Design ──
    {
        id: 20, field: 'design', type: 'job', featured: true, remote: true,
        logo: '✏️', role: 'Senior Product Designer', company: 'Linear',
        location: 'Remote', experience: '4–7 yrs',
        salary: '₹1.04Cr – ₹1.36Cr', period: '/yr',
        skills: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
        posted: '2 days ago'
    },
    {
        id: 21, field: 'design', type: 'job', featured: false, remote: false,
        logo: '🎭', role: 'UX Designer', company: 'Adobe',
        location: 'Seattle, WA', experience: '2–4 yrs',
        salary: '₹88L – ₹1.16Cr', period: '/yr',
        skills: ['Figma', 'UX Research', 'Wireframing', 'Accessibility'],
        posted: '6 days ago'
    },
    {
        id: 22, field: 'design', type: 'internship', featured: false, remote: true,
        logo: '🌈', role: 'UI/UX Design Intern', company: 'Canva',
        location: 'Remote', experience: 'Freshers OK',
        salary: '₹4.4L/mo', period: '',
        skills: ['Figma', 'Illustration', 'CSS', 'Motion'],
        posted: '4 days ago'
    },
];

// State management
let selectedInterests = new Set();
let recommendations = [];
let activeType = 'all';
let searchQuery = '';
let sortOption = 'relevance';
let saved = new Set(JSON.parse(localStorage.getItem('rv_saved_jobs') || '[]'));

// DOM elements
const interestGrid = document.getElementById('interest-grid');
const generateBtn = document.getElementById('generate-btn');
const clearBtn = document.getElementById('clear-btn');
const recommendationsSection = document.getElementById('recommendations-section');
const emptyState = document.getElementById('empty-state');
const recommendationsGrid = document.getElementById('recommendations-grid');
const recommendationStats = document.getElementById('recommendation-stats');
const recSearch = document.getElementById('rec-search');
const typeToggle = document.querySelectorAll('.type-btn');
const sortSelect = document.getElementById('sort-select');
const insightsGrid = document.getElementById('insights-grid');
const saveAllBtn = document.getElementById('save-all-btn');
const exportBtn = document.getElementById('export-btn');

// Interest definitions
const INTERESTS = [
    {
        id: 'frontend',
        title: 'Frontend Development',
        description: 'Build user interfaces and experiences with modern frameworks and technologies.',
        icon: '⚛️',
        opportunities: 12,
        avgSalary: '₹92L',
        skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'CSS3']
    },
    {
        id: 'backend',
        title: 'Backend Development',
        description: 'Develop server-side logic, databases, and APIs for scalable applications.',
        icon: '🟢',
        opportunities: 15,
        avgSalary: '₹1.08Cr',
        skills: ['Node.js', 'Python', 'Java', 'Go', 'PostgreSQL']
    },
    {
        id: 'aiml',
        title: 'AI & Machine Learning',
        description: 'Create intelligent systems and algorithms that learn from data.',
        icon: '🤖',
        opportunities: 8,
        avgSalary: '₹1.32Cr',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Deep Learning']
    },
    {
        id: 'data',
        title: 'Data Science',
        description: 'Extract insights from data and build predictive models.',
        icon: '📊',
        opportunities: 10,
        avgSalary: '₹1Cr',
        skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics']
    },
    {
        id: 'devops',
        title: 'DevOps & Cloud',
        description: 'Bridge development and operations with automation and cloud technologies.',
        icon: '⚙️',
        opportunities: 14,
        avgSalary: '₹1.12Cr',
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
        id: 'design',
        title: 'UI/UX Design',
        description: 'Design beautiful and intuitive user experiences and interfaces.',
        icon: '✏️',
        opportunities: 9,
        avgSalary: '₹76L',
        skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems']
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderInterests();
    setupEventListeners();
    
    // Check if coming from jobs page with pre-selected interests
    const urlParams = new URLSearchParams(window.location.search);
    const interests = urlParams.get('interests');
    if (interests) {
        const preSelected = interests.split(',');
        preSelected.forEach(interest => {
            if (INTERESTS.find(i => i.id === interest)) {
                selectedInterests.add(interest);
            }
        });
        updateInterestCards();
        generateRecommendations();
    }
});

// Render interest selection cards
function renderInterests() {
    interestGrid.innerHTML = '';
    INTERESTS.forEach(interest => {
        const card = document.createElement('div');
        card.className = `interest-card interest-${interest.id} ${selectedInterests.has(interest.id) ? 'selected' : ''}`;
        card.dataset.interest = interest.id;
        
        card.innerHTML = `
            <div class="interest-icon">${interest.icon}</div>
            <div class="interest-title">${interest.title}</div>
            <div class="interest-desc">${interest.description}</div>
            <div class="interest-meta">
                <span><i class="fa-solid fa-briefcase"></i> ${interest.opportunities} opportunities</span>
                <span><i class="fa-solid fa-dollar-sign"></i> ${interest.avgSalary} avg</span>
            </div>
            <div class="interest-actions">
                <span class="action-btn">Learn More</span>
                <span class="action-btn">View Jobs</span>
            </div>
        `;
        
        card.addEventListener('click', () => toggleInterest(interest.id));
        interestGrid.appendChild(card);
    });
}

// Toggle interest selection
function toggleInterest(interestId) {
    if (selectedInterests.has(interestId)) {
        selectedInterests.delete(interestId);
    } else {
        selectedInterests.add(interestId);
    }
    updateInterestCards();
    updateGenerateButton();
}

// Update interest card visual state
function updateInterestCards() {
    document.querySelectorAll('.interest-card').forEach(card => {
        const interestId = card.dataset.interest;
        if (selectedInterests.has(interestId)) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

// Update generate button state
function updateGenerateButton() {
    generateBtn.disabled = selectedInterests.size === 0;
}

// Setup event listeners
function setupEventListeners() {
    generateBtn.addEventListener('click', generateRecommendations);
    clearBtn.addEventListener('click', clearSelection);
    
    recSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        filterAndRenderRecommendations();
    });
    
    typeToggle.forEach(btn => {
        btn.addEventListener('click', () => {
            activeType = btn.dataset.type;
            typeToggle.forEach(b => b.classList.toggle('active', b === btn));
            filterAndRenderRecommendations();
        });
    });
    
    sortSelect.addEventListener('change', (e) => {
        sortOption = e.target.value;
        filterAndRenderRecommendations();
    });
    
    saveAllBtn.addEventListener('click', saveAllRecommendations);
    exportBtn.addEventListener('click', exportToPDF);
    
    // Modal event listeners
    const modal = document.getElementById('job-modal');
    const modalClose = document.getElementById('modal-close');
    
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard support for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Generate personalized recommendations
function generateRecommendations() {
    if (selectedInterests.size === 0) return;
    
    // Filter listings based on selected interests
    recommendations = LISTINGS.filter(listing => {
        return selectedInterests.has(listing.field);
    });
    
    // Sort by relevance (prioritize featured and matching skills)
    recommendations.sort((a, b) => {
        const aRelevance = calculateRelevance(a);
        const bRelevance = calculateRelevance(b);
        return bRelevance - aRelevance;
    });
    
    // Show recommendations section
    recommendationsSection.style.display = 'block';
    emptyState.style.display = 'none';
    
    filterAndRenderRecommendations();
    renderInsights();
}

// Calculate relevance score for a listing
function calculateRelevance(listing) {
    let score = 0;
    
    // Base score for being in selected field
    if (selectedInterests.has(listing.field)) {
        score += 10;
    }
    
    // Bonus for featured listings
    if (listing.featured) score += 5;
    
    // Bonus for remote opportunities
    if (listing.remote) score += 2;
    
    // Bonus for matching skills (simplified)
    const interest = INTERESTS.find(i => i.id === listing.field);
    if (interest) {
        const matchingSkills = listing.skills.filter(skill => 
            interest.skills.includes(skill)
        ).length;
        score += matchingSkills * 1.5;
    }
    
    return score;
}

// Filter and render recommendations
function filterAndRenderRecommendations() {
    let filtered = [...recommendations];
    
    // Filter by type
    if (activeType !== 'all') {
        filtered = filtered.filter(rec => rec.type === activeType);
    }
    
    // Filter by search query
    if (searchQuery) {
        filtered = filtered.filter(rec => 
            rec.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            rec.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            rec.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }
    
    // Sort
    filtered = sortRecommendations(filtered);
    
    // Render
    recommendationsGrid.innerHTML = '';
    recommendationStats.innerHTML = `Showing <strong>${filtered.length}</strong> opportunity${filtered.length !== 1 ? 's' : ''}`;
    
    if (filtered.length === 0) {
        recommendationsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; padding: 3rem;">
                <i class="fa-solid fa-search"></i>
                <h3>No opportunities found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach((rec, index) => {
        const card = createRecommendationCard(rec);
        card.style.animationDelay = `${index * 0.05}s`;
        recommendationsGrid.appendChild(card);
    });
}

// Sort recommendations
function sortRecommendations(list) {
    return list.sort((a, b) => {
        switch (sortOption) {
            case 'relevance':
                return calculateRelevance(b) - calculateRelevance(a);
            case 'salary':
                return parseSalary(b.salary) - parseSalary(a.salary);
            case 'experience':
                return a.experience.localeCompare(b.experience);
            case 'date':
                // Simple date sorting based on posted text
                const dateOrder = { 'Today': 3, '1 day ago': 2, '2 days ago': 1, '3 days ago': 0 };
                return (dateOrder[b.posted] || 0) - (dateOrder[a.posted] || 0);
            default:
                return 0;
        }
    });
}

// Parse salary for sorting
function parseSalary(salaryStr) {
    const match = salaryStr.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
}

// Create recommendation card
function createRecommendationCard(rec) {
    const isSaved = saved.has(rec.id);
    const card = document.createElement('div');
    card.className = 'rec-card' + (rec.featured ? ' featured' : '');
    
    card.innerHTML = `
        <div class="rec-card-top">
            <div class="rec-company-logo">${rec.logo}</div>
            <div class="rec-badges">
                ${rec.featured ? '<span class="rec-badge rec-badge-featured">⭐ Featured</span>' : ''}
                <span class="rec-badge ${rec.type === 'job' ? 'rec-badge-type-job' : 'rec-badge-type-internship'}">
                    ${rec.type === 'job' ? 'Full-time' : 'Internship'}
                </span>
                ${rec.remote ? '<span class="rec-badge rec-badge-remote">Remote</span>' : ''}
                <span class="rec-badge rec-badge-personalized">🎯 Personalized</span>
            </div>
        </div>
        <div>
            <div class="rec-role">${rec.role}</div>
            <div class="rec-company"><i class="fa-solid fa-building"></i>${rec.company}</div>
        </div>
        <div class="rec-meta">
            <div class="rec-meta-item"><i class="fa-solid fa-location-dot"></i>${rec.location}</div>
            <div class="rec-meta-item"><i class="fa-solid fa-clock"></i>${rec.experience}</div>
            <div class="rec-meta-item"><i class="fa-solid fa-calendar"></i>${rec.posted}</div>
        </div>
        <div class="rec-skills">
            ${rec.skills.map(skill => `<span class="rec-skill-tag">${skill}</span>`).join('')}
        </div>
        <div class="rec-card-footer">
            <div class="rec-salary">${rec.salary}<span>${rec.period}</span></div>
            <div class="rec-actions">
                <button class="rec-save-btn ${isSaved ? 'saved' : ''}" data-id="${rec.id}" title="${isSaved ? 'Saved' : 'Save'}">
                    <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>
                </button>
                <button class="rec-apply-btn" data-id="${rec.id}">View Details <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    `;
    
    // Mouse glow effect
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
    
    // Save functionality
    card.querySelector('.rec-save-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(e.currentTarget.dataset.id);
        if (saved.has(id)) {
            saved.delete(id);
            e.currentTarget.classList.remove('saved');
            e.currentTarget.querySelector('i').className = 'fa-regular fa-bookmark';
        } else {
            saved.add(id);
            e.currentTarget.classList.add('saved');
            e.currentTarget.querySelector('i').className = 'fa-solid fa-bookmark';
        }
        localStorage.setItem('rv_saved_jobs', JSON.stringify([...saved]));
    });
    
    // View Details functionality
    card.querySelector('.rec-apply-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(e.currentTarget.dataset.id);
        const job = recommendations.find(r => r.id === id);
        if (job) {
            openJobModal(job);
        }
    });
    
    return card;
}

// Render personalized insights
function renderInsights() {
    insightsGrid.innerHTML = '';
    
    // Calculate insights based on selected interests
    const insights = calculateInsights();
    
    insights.forEach(insight => {
        const card = document.createElement('div');
        card.className = 'insight-card';
        card.innerHTML = `
            <div class="insight-title">${insight.title}</div>
            <div class="insight-value">${insight.value}</div>
            ${insight.description ? `<div style="font-size: 0.8rem; color: var(--ui-soft); margin-top: 0.5rem;">${insight.description}</div>` : ''}
        `;
        insightsGrid.appendChild(card);
    });
}

// Calculate personalized insights
function calculateInsights() {
    const totalOpportunities = recommendations.length;
    const avgSalary = calculateAverageSalary();
    const remoteOpportunities = recommendations.filter(r => r.remote).length;
    const featuredOpportunities = recommendations.filter(r => r.featured).length;
    
    return [
        {
            title: 'Total Opportunities',
            value: totalOpportunities.toString(),
            description: 'Available positions matching your interests'
        },
        {
            title: 'Average Salary',
            value: avgSalary,
            description: 'Based on your selected fields'
        },
        {
            title: 'Remote Options',
            value: remoteOpportunities.toString(),
            description: 'Flexible work-from-home opportunities'
        },
        {
            title: 'Featured Listings',
            value: featuredOpportunities.toString(),
            description: 'Premium opportunities with high visibility'
        }
    ];
}

// Calculate average salary
function calculateAverageSalary() {
    if (recommendations.length === 0) return '₹0';
    
    let total = 0;
    let count = 0;
    
    recommendations.forEach(rec => {
        const match = rec.salary.match(/\d+/);
        if (match) {
            total += parseInt(match[0]);
            count++;
        }
    });
    
    if (count === 0) return '₹0';
    
    const avg = Math.round(total / count);
    return `₹${avg}L`;
}

// Clear selection
function clearSelection() {
    selectedInterests.clear();
    updateInterestCards();
    updateGenerateButton();
    recommendationsSection.style.display = 'none';
    emptyState.style.display = 'block';
    recommendationsGrid.innerHTML = '';
    insightsGrid.innerHTML = '';
}

// Save all recommendations
function saveAllRecommendations() {
    if (recommendations.length === 0) return;
    
    recommendations.forEach(rec => {
        saved.add(rec.id);
    });
    
    localStorage.setItem('rv_saved_jobs', JSON.stringify([...saved]));
    
    // Visual feedback
    const saveBtns = document.querySelectorAll('.rec-save-btn');
    saveBtns.forEach(btn => {
        btn.classList.add('saved');
        btn.querySelector('i').className = 'fa-solid fa-bookmark';
    });
    
    // Show success message
    showNotification('All recommendations saved!', 'success');
}

// Export to PDF (simplified implementation)
function exportToPDF() {
    if (recommendations.length === 0) {
        showNotification('No recommendations to export', 'error');
        return;
    }
    
    // Create a simple text representation for export
    let content = 'Personalized Career Recommendations\n';
    content += 'Generated by Resume Vision AI\n\n';
    content += `Selected Interests: ${Array.from(selectedInterests).join(', ')}\n\n`;
    
    recommendations.forEach((rec, index) => {
        content += `${index + 1}. ${rec.role} at ${rec.company}\n`;
        content += `   Type: ${rec.type === 'job' ? 'Full-time' : 'Internship'}\n`;
        content += `   Location: ${rec.location}\n`;
        content += `   Salary: ${rec.salary}${rec.period}\n`;
        content += `   Skills: ${rec.skills.join(', ')}\n\n`;
    });
    
    // Create download link
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'personalized-recommendations.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Recommendations exported!', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(26, 63, 117, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        border: 1px solid rgba(175,196,214,0.3);
        transform: translateX(120%);
        transition: transform 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
    .notification.show {
        transform: translateX(0);
    }
    .notification-success { border-color: rgba(34,197,94,0.5); background: rgba(34,197,94,0.2); }
    .notification-error { border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.2); }
`;
document.head.appendChild(style);

// Modal functions
function openJobModal(job) {
    const modal = document.getElementById('job-modal');
    const modalLogo = document.getElementById('modal-logo');
    const modalRole = document.getElementById('modal-role');
    const modalCompany = document.getElementById('modal-company');
    const modalType = document.getElementById('modal-type');
    const modalLocation = document.getElementById('modal-location');
    const modalExperience = document.getElementById('modal-experience');
    const modalSalary = document.getElementById('modal-salary');
    const modalPosted = document.getElementById('modal-posted');
    const modalSkills = document.getElementById('modal-skills');
    const modalSaveBtn = document.getElementById('modal-save-btn');
    const modalApplyBtn = document.getElementById('modal-apply-btn');
    
    // Set modal content
    modalLogo.textContent = job.logo;
    modalRole.textContent = job.role;
    modalCompany.textContent = job.company;
    modalType.textContent = job.type === 'job' ? 'Full-time' : 'Internship';
    modalLocation.textContent = job.location;
    modalExperience.textContent = job.experience;
    modalSalary.textContent = `${job.salary}${job.period}`;
    modalPosted.textContent = job.posted;
    
    // Set skills
    modalSkills.innerHTML = job.skills.map(skill => 
        `<span class="modal-skill-tag">${skill}</span>`
    ).join('');
    
    // Update save button state
    const isSaved = saved.has(job.id);
    modalSaveBtn.classList.toggle('saved', isSaved);
    modalSaveBtn.innerHTML = isSaved 
        ? '<i class="fa-solid fa-bookmark"></i> Saved' 
        : '<i class="fa-regular fa-bookmark"></i> Save Job';
    
    // Set data-id for the save button
    modalSaveBtn.dataset.id = job.id;
    
    // Show modal
    modal.classList.add('show');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('job-modal');
    modal.classList.remove('show');
    
    // Re-enable background scrolling
    document.body.style.overflow = '';
}

// Modal save button functionality
document.getElementById('modal-save-btn').addEventListener('click', (e) => {
    const id = parseInt(e.currentTarget.dataset.id);
    if (saved.has(id)) {
        saved.delete(id);
        e.currentTarget.classList.remove('saved');
        e.currentTarget.innerHTML = '<i class="fa-regular fa-bookmark"></i> Save Job';
    } else {
        saved.add(id);
        e.currentTarget.classList.add('saved');
        e.currentTarget.innerHTML = '<i class="fa-solid fa-bookmark"></i> Saved';
    }
    localStorage.setItem('rv_saved_jobs', JSON.stringify([...saved]));
    
    // Update the save button in the card as well
    const cardSaveBtn = document.querySelector(`.rec-save-btn[data-id="${id}"]`);
    if (cardSaveBtn) {
        cardSaveBtn.classList.toggle('saved', saved.has(id));
        cardSaveBtn.querySelector('i').className = saved.has(id) ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';
    }
});

// Modal apply button functionality
document.getElementById('modal-apply-btn').addEventListener('click', () => {
    showNotification('Application process would start here!', 'success');
    closeModal();
});
