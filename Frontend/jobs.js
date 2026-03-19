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

// ── State ──
let activeField = 'all';
let activeType  = 'all';
let searchQuery = '';
let saved = new Set(JSON.parse(localStorage.getItem('rv_saved_jobs') || '[]'));

// ── DOM refs ──
const grid         = document.getElementById('jobs-grid');
const countEl      = document.getElementById('results-count');
const fieldTabs    = document.querySelectorAll('.field-tab');
const typeBtns     = document.querySelectorAll('.type-btn');
const searchInput  = document.getElementById('job-search');
const activeChips  = document.getElementById('active-filters');

// ── Render ──
function render() {
    const filtered = LISTINGS.filter(l => {
        const fieldOk = activeField === 'all' || l.field === activeField;
        const typeOk  = activeType  === 'all' || l.type  === activeType;
        const q       = searchQuery.toLowerCase();
        const searchOk = !q || l.role.toLowerCase().includes(q)
                              || l.company.toLowerCase().includes(q)
                              || l.skills.some(s => s.toLowerCase().includes(q));
        return fieldOk && typeOk && searchOk;
    });

    // Update count
    countEl.innerHTML = `Showing <strong>${filtered.length}</strong> listing${filtered.length !== 1 ? 's' : ''}`;

    // Cards
    grid.innerHTML = '';
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state visible">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h3>No listings found</h3>
                <p>Try a different field or search term.</p>
            </div>`;
        return;
    }

    filtered.forEach((l, i) => {
        const isSaved = saved.has(l.id);
        const card = document.createElement('div');
        card.className = 'job-card' + (l.featured ? ' featured' : '');
        card.style.animationDelay = `${i * 0.05}s`;
        card.innerHTML = `
            <div class="card-top">
                <div class="company-logo">${l.logo}</div>
                <div class="card-badges">
                    ${l.featured ? '<span class="badge badge-featured">⭐ Featured</span>' : ''}
                    <span class="badge ${l.type === 'job' ? 'badge-type-job' : 'badge-type-internship'}">
                        ${l.type === 'job' ? 'Full-time' : 'Internship'}
                    </span>
                    ${l.remote ? '<span class="badge badge-remote">Remote</span>' : ''}
                </div>
            </div>
            <div>
                <div class="job-role">${l.role}</div>
                <div class="job-company"><i class="fa-solid fa-building"></i>${l.company}</div>
            </div>
            <div class="job-meta">
                <div class="meta-item"><i class="fa-solid fa-location-dot"></i>${l.location}</div>
                <div class="meta-item"><i class="fa-solid fa-clock"></i>${l.experience}</div>
                <div class="meta-item"><i class="fa-solid fa-calendar"></i>${l.posted}</div>
            </div>
            <div class="job-skills">
                ${l.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        <div class="card-footer">
            <div class="salary">${l.salary}<span>${l.period}</span></div>
            <div style="display:flex;gap:0.5rem;align-items:center">
                <button class="save-btn ${isSaved ? 'saved' : ''}" data-id="${l.id}" title="${isSaved ? 'Saved' : 'Save'}">
                    <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>
                </button>
            </div>
        </div>
        <div class="card-actions">
            <a href="https://www.google.com/search?q=${encodeURIComponent(l.role + ' ' + l.company)}" target="_blank" class="apply-now-btn">
                <i class="fa-solid fa-briefcase"></i> Apply Now
            </a>
        </div>`;

        // Mouse glow
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });

        // Save toggle
        card.querySelector('.save-btn').addEventListener('click', (e) => {
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

        grid.appendChild(card);
    });

    updateChips();
}

// ── Active filter chips ──
function updateChips() {
    const chips = [];
    if (activeField !== 'all') {
        const label = document.querySelector(`.field-tab[data-field="${activeField}"]`)?.textContent.trim() || activeField;
        chips.push({ label, clear: () => { activeField = 'all'; syncFieldTabs(); render(); } });
    }
    if (activeType !== 'all') {
        chips.push({ label: activeType === 'job' ? 'Full-time' : 'Internship', clear: () => { activeType = 'all'; syncTypeBtns(); render(); } });
    }
    if (searchQuery) {
        chips.push({ label: `"${searchQuery}"`, clear: () => { searchQuery = ''; searchInput.value = ''; render(); } });
    }
    activeChips.innerHTML = chips.map((c, i) =>
        `<span class="filter-chip">${c.label}<button data-chip="${i}">✕</button></span>`
    ).join('');

    activeChips.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => chips[parseInt(btn.dataset.chip)].clear());
    });
}

// ── Sync UI ──
function syncFieldTabs() {
    fieldTabs.forEach(t => t.classList.toggle('active', t.dataset.field === activeField));
}

function syncTypeBtns() {
    typeBtns.forEach(b => b.classList.toggle('active', b.dataset.type === activeType));
}

// ── Events ──
fieldTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activeField = tab.dataset.field;
        syncFieldTabs();
        render();
    });
});

typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        activeType = btn.dataset.type;
        syncTypeBtns();
        render();
    });
});

searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    render();
});

// ── Init ──
render();
