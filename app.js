// Main application logic for Te Reo Time Resources

let currentPage = 'home';
let selectedItem = null;

// Page navigation
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('[id^="page-"]').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    document.getElementById('page-' + pageName).classList.remove('hidden');
    currentPage = pageName;
    selectedItem = null;
    
    // Load content for the page
    if (pageName === 'whakatauki') {
        loadWhakataukiList();
    } else if (pageName === 'maramataka') {
        loadMaramatakaList();
    } else if (pageName === 'days') {
        loadDaysList();
    } else if (pageName === 'numbers') {
        loadNumbers();
    } else if (pageName === 'about') {
        loadAbout();
    } else if (pageName === 'references') {
        loadReferences();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Whakataukī Functions
function loadWhakataukiList() {
    const listDiv = document.getElementById('whakatauki-list');
    const detailDiv = document.getElementById('whakatauki-detail');
    
    listDiv.classList.remove('hidden');
    detailDiv.classList.add('hidden');
    
    listDiv.innerHTML = DATA.whakatauki.map((w, index) => `
        <div class="item-card" style="border-left-color: #dc2626;" onclick="showWhakataukiDetail(${index})">
            <h3>${w.maori}</h3>
            <p class="subtitle-text">"${w.english}"</p>
            <p class="preview">${w.meaning}</p>
            <div style="margin-top: 12px; color: #dc2626; font-size: 14px; font-weight: 500;">
                Read more ›
            </div>
        </div>
    `).join('');
}

function showWhakataukiDetail(index) {
    const w = DATA.whakatauki[index];
    const listDiv = document.getElementById('whakatauki-list');
    const detailDiv = document.getElementById('whakatauki-detail');
    
    listDiv.classList.add('hidden');
    detailDiv.classList.remove('hidden');
    
    detailDiv.innerHTML = `
        <span class="back-btn" onclick="loadWhakataukiList()">← Back to all whakataukī</span>
        
        <div class="detail-card" style="margin-top: 24px;">
            <h2 style="color: #dc2626;">${w.maori}</h2>
            <p style="font-size: 20px; color: #374151; font-style: italic; margin-bottom: 24px;">
                "${w.english}"
            </p>
            
            <div class="section">
                <h3>Meaning</h3>
                <p>${w.meaning}</p>
            </div>
            
            <div class="section">
                <h3>Context & Usage</h3>
                <p>${w.context}</p>
            </div>
        </div>
    `;
    
    window.scrollTo(0, 0);
}

function filterWhakatauki() {
    const search = document.getElementById('whakatauki-search').value.toLowerCase();
    const filtered = DATA.whakatauki.filter(w => 
        w.maori.toLowerCase().includes(search) ||
        w.english.toLowerCase().includes(search) ||
        w.meaning.toLowerCase().includes(search)
    );
    
    const listDiv = document.getElementById('whakatauki-list');
    
    if (filtered.length === 0) {
        listDiv.innerHTML = `
            <div style="text-align: center; padding: 48px; color: #6b7280;">
                No proverbs found matching "${search}"
            </div>
        `;
        return;
    }
    
    listDiv.innerHTML = filtered.map((w, index) => {
        const originalIndex = DATA.whakatauki.indexOf(w);
        return `
            <div class="item-card" style="border-left-color: #dc2626;" onclick="showWhakataukiDetail(${originalIndex})">
                <h3>${w.maori}</h3>
                <p class="subtitle-text">"${w.english}"</p>
                <p class="preview">${w.meaning}</p>
                <div style="margin-top: 12px; color: #dc2626; font-size: 14px; font-weight: 500;">
                    Read more ›
                </div>
            </div>
        `;
    }).join('');
}

// Maramataka Functions
function loadMaramatakaList() {
    const listDiv = document.getElementById('maramataka-list');
    const detailDiv = document.getElementById('maramataka-detail');
    
    listDiv.classList.remove('hidden');
    detailDiv.classList.add('hidden');
    
    listDiv.innerHTML = DATA.maramataka.map((phase, index) => `
        <div class="item-card" style="border-left-color: #2563eb;" onclick="showMaramatakaDetail(${index})">
            <div style="display: flex; align-items: start;">
                <div style="font-size: 48px; margin-right: 16px;">${phase.moon}</div>
                <div style="flex: 1;">
                    <h3>${phase.phase}</h3>
                    <p style="font-size: 14px; color: #6b7280; margin-bottom: 8px;">
                        Days ${phase.days} • ${phase.type}
                    </p>
                    <span class="badge" style="background: #f3f4f6; color: #374151;">
                        ${phase.energy}
                    </span>
                    <p class="preview" style="margin-top: 12px;">${phase.description}</p>
                    <div style="margin-top: 12px; color: #2563eb; font-size: 14px; font-weight: 500;">
                        View details ›
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function showMaramatakaDetail(index) {
    const phase = DATA.maramataka[index];
    const listDiv = document.getElementById('maramataka-list');
    const detailDiv = document.getElementById('maramataka-detail');
    
    listDiv.classList.add('hidden');
    detailDiv.classList.remove('hidden');
    
    detailDiv.innerHTML = `
        <span class="back-btn" onclick="loadMaramatakaList()">← Back to maramataka</span>
        
        <div class="detail-card" style="margin-top: 24px;">
            <div style="text-align: center; margin-bottom: 24px;">
                <div style="font-size: 72px; margin-bottom: 12px;">${phase.moon}</div>
                <h2 style="color: #2563eb; margin-bottom: 8px;">${phase.phase}</h2>
                <p style="color: #6b7280;">Days ${phase.days} • ${phase.type}</p>
                <span class="badge" style="background: #dbeafe; color: #1e40af; margin-top: 12px;">
                    ${phase.energy}
                </span>
            </div>
            
            <div class="section">
                <h3>Description</h3>
                <p>${phase.description}</p>
            </div>
            
            <div class="section">
                <h3>Māori Significance</h3>
                <p>${phase.significance}</p>
            </div>
            
            <div class="section">
                <h3 style="color: #16a34a;">✅ Favorable Activities</h3>
                <ul style="color: #16a34a;">
                    ${phase.good.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            </div>
            
            <div class="section">
                <h3 style="color: #dc2626;">❌ Avoid</h3>
                <ul style="color: #dc2626;">
                    ${phase.avoid.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            </div>
            
            <div class="section" style="background: #f9fafb; margin: 24px -32px -32px; padding: 32px; border-radius: 0 0 8px 8px;">
                <h3>Traditional Practice</h3>
                <p>${phase.traditional}</p>
            </div>
        </div>
    `;
    
    window.scrollTo(0, 0);
}

// Days Functions
function loadDaysList() {
    const listDiv = document.getElementById('days-list');
    const detailDiv = document.getElementById('days-detail');
    
    listDiv.classList.remove('hidden');
    detailDiv.classList.add('hidden');
    
    listDiv.innerHTML = DATA.days.map((day, index) => `
        <div class="item-card" style="border-left-color: #16a34a;" onclick="showDaysDetail(${index})">
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <h3 style="font-size: 20px;">${day.maori}</h3>
                    <p style="color: #6b7280;">${day.english}</p>
                    <p style="font-size: 14px; color: #9ca3af; margin-top: 8px;">${day.origin}</p>
                </div>
                <span style="color: #9ca3af; font-size: 24px;">›</span>
            </div>
        </div>
    `).join('');
}

function showDaysDetail(index) {
    const day = DATA.days[index];
    const listDiv = document.getElementById('days-list');
    const detailDiv = document.getElementById('days-detail');
    
    listDiv.classList.add('hidden');
    detailDiv.classList.remove('hidden');
    
    detailDiv.innerHTML = `
        <span class="back-btn" onclick="loadDaysList()">← Back to days</span>
        
        <div class="detail-card" style="margin-top: 24px;">
            <h2 style="color: #16a34a;">${day.maori}</h2>
            <p style="font-size: 20px; color: #374151; margin-bottom: 24px;">${day.english}</p>
            
            <div class="section">
                <h3>Origin</h3>
                <p>${day.origin}</p>
            </div>
            
            <div class="section">
                <h3>Meaning</h3>
                <p>${day.meaning}</p>
            </div>
            
            <div class="section" style="background: #f9fafb; margin: 24px -32px -32px; padding: 32px; border-radius: 0 0 8px 8px;">
                <h3>Traditional Context</h3>
                <p>${day.traditional}</p>
            </div>
        </div>
    `;
    
    window.scrollTo(0, 0);
}

// Numbers Functions
function loadNumbers() {
    const sections = ['basic', 'teens', 'tens', 'hundreds', 'examples'];
    let currentSection = 'basic';
    
    // Create tabs
    const tabsDiv = document.getElementById('number-tabs');
    tabsDiv.innerHTML = sections.map(section => `
        <button class="tab ${section === 'basic' ? 'active' : ''}" onclick="switchNumberSection('${section}')">
            ${section.charAt(0).toUpperCase() + section.slice(1)} ${
                section === 'basic' ? '(0-10)' :
                section === 'teens' ? '(11-19)' :
                section === 'tens' ? '(20-90)' :
                section === 'hundreds' ? '(100+)' :
                ''
            }
        </button>
    `).join('');
    
    // Load initial table
    switchNumberSection('basic');
}

function switchNumberSection(section) {
    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load table
    const tableDiv = document.getElementById('number-table');
    const data = DATA.numbers[section];
    
    tableDiv.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Te Reo Māori</th>
                    <th>Meaning</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                ${data.map(num => `
                    <tr>
                        <td style="font-weight: bold; color: #7c3aed;">${num.number}</td>
                        <td style="font-weight: 600; color: #1f2937;">${num.maori}</td>
                        <td style="color: #6b7280;">${num.meaning}</td>
                        <td style="color: #9ca3af; font-size: 14px;">${num.notes || num.construction || '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// About Functions
function loadAbout() {
    document.getElementById('about-content').innerHTML = `
        <div class="detail-card" style="margin-bottom: 24px;">
            <h2 style="color: #eab308;">The Language</h2>
            <p style="color: #374151; line-height: 1.8; margin-bottom: 16px;">
                Te reo Māori is the indigenous language of Aotearoa (New Zealand). It is a Polynesian language, 
                closely related to other Pacific languages like Hawaiian, Samoan, and Tahitian. The language 
                nearly disappeared in the 20th century due to colonization and government policies that 
                discouraged its use, particularly in schools.
            </p>
            <p style="color: #374151; line-height: 1.8; margin-bottom: 16px;">
                Since the 1970s, there has been a significant revival movement, known as "te reo Māori revival" 
                or "Māori Renaissance." The language was made an official language of New Zealand in 1987, 
                alongside New Zealand Sign Language.
            </p>
            <p style="color: #374151; line-height: 1.8;">
                Today, te reo Māori is taught in schools, used in government, broadcast on television and radio, 
                and increasingly integrated into everyday New Zealand life. Apps like Te Reo Time help make the 
                language accessible and present in daily activities.
            </p>
        </div>
        
        <div class="detail-card" style="margin-bottom: 24px;">
            <h2 style="color: #eab308;">Māori Worldview</h2>
            <p style="color: #374151; line-height: 1.8; margin-bottom: 16px;">
                Māori culture has a holistic worldview where everything is interconnected. This is reflected in 
                concepts like:
            </p>
            <ul>
                <li><strong>Whakapapa</strong> - genealogy and connections that link all things, from gods to people to natural elements</li>
                <li><strong>Mana</strong> - prestige, authority, and spiritual power that comes from ancestors and actions</li>
                <li><strong>Tapu</strong> - sacredness and restrictions that maintain spiritual safety and respect</li>
                <li><strong>Noa</strong> - the ordinary or unrestricted, the balance to tapu</li>
                <li><strong>Kaitiakitanga</strong> - guardianship and protection of the environment and cultural treasures</li>
                <li><strong>Manaakitanga</strong> - hospitality, kindness, and caring for others</li>
            </ul>
        </div>
        
        <div class="detail-card">
            <h2 style="color: #eab308;">The Maramataka Tradition</h2>
            <p style="color: #374151; line-height: 1.8; margin-bottom: 16px;">
                The maramataka is a sophisticated lunar calendar system used by Māori for centuries. Unlike 
                the solar Gregorian calendar used in Western cultures, the maramataka tracks the moon's phases 
                and connects them to natural rhythms and energy cycles.
            </p>
            <p style="color: #374151; line-height: 1.8; margin-bottom: 16px;">
                Different iwi (tribes) and regions have variations in their maramataka, as the system was 
                adapted to local conditions, food sources, and environmental patterns. However, core principles 
                remain consistent across variations.
            </p>
            <p style="color: #374151; line-height: 1.8;">
                The maramataka guided decisions about planting, fishing, hunting, construction, ceremonies, 
                and even warfare. It recognized that certain times are more favorable for specific activities 
                based on moon phases and natural energy flows. This wisdom is being revitalized today as people 
                recognize its value for sustainable living and wellbeing.
            </p>
        </div>
    `;
}

// References Functions
function loadReferences() {
    document.getElementById('references-content').innerHTML = `
        <div class="detail-card" style="margin-bottom: 24px;">
            <h2 style="color: #ec4899;">Primary Sources</h2>
            <div style="color: #374151; line-height: 1.8;">
                <p style="margin-bottom: 12px;"><strong>Māori Dictionary</strong> - <a href="https://maoridictionary.co.nz" style="color: #ec4899; text-decoration: none;">maoridictionary.co.nz</a></p>
                <p style="font-size: 14px; color: #6b7280; margin-left: 16px; margin-bottom: 24px;">
                    Comprehensive online dictionary for te reo Māori, including examples and audio pronunciations.
                </p>

                <p style="margin-bottom: 12px;"><strong>Te Aka Māori Dictionary</strong></p>
                <p style="font-size: 14px; color: #6b7280; margin-left: 16px; margin-bottom: 24px;">
                    Academic dictionary resource with detailed linguistic information.
                </p>

                <p style="margin-bottom: 12px;"><strong>Te Taura Whiri i te Reo Māori (Māori Language Commission)</strong></p>
                <p style="font-size: 14px; color: #6b7280; margin-left: 16px;">
                    Official body responsible for Māori language policy and standards.
                </p>
            </div>
        </div>
        
        <div style="background: #fef2f2; border-left: 4px solid #ec4899; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h3 style="font-weight: bold; color: #9f1239; margin-bottom: 8px;">Important Note</h3>
            <p style="color: #991b1b; line-height: 1.8; margin-bottom: 12px;">
                While this app provides educational information about te reo Māori and Māori cultural concepts, 
                it should be used as a supplementary learning tool, not a definitive cultural authority.
            </p>
            <p style="color: #991b1b; line-height: 1.8; margin-bottom: 12px;">
                Māori knowledge is diverse and varies between iwi, hapū, and whānau. For authoritative cultural 
                information, always consult with local kaumātua (elders), iwi authorities, or accredited cultural 
                educators.
            </p>
            <p style="color: #991b1b; line-height: 1.8;">
                The developer (Logan Poole) has compiled this information respectfully from publicly available 
                educational resources with the intention of supporting te reo Māori revitalization and cultural 
                appreciation.
            </p>
        </div>
        
        <div class="detail-card">
            <h2 style="color: #ec4899;">Developer Acknowledgments</h2>
            <p style="color: #374151; line-height: 1.8; margin-bottom: 16px;">
                Ko Logan Poole tōku ingoa. I am from Rotorua and am of Ngāi Tūhoe, Tainui, and Te Arawa descent. 
                This app was created as a passion project to support te reo Māori in everyday modern life.
            </p>
            <p style="color: #374151; line-height: 1.8; margin-bottom: 16px;">
                While I have done my best to ensure accuracy and respect in presenting this cultural information, 
                I acknowledge that I am on a learning journey myself. Any errors or oversights are unintentional, 
                and I welcome respectful feedback for improvements.
            </p>
            <p style="color: #374151; line-height: 1.8;">
                This app is offered freely with aroha to support the revitalization of te reo Māori and to help 
                make the language more present in daily life. Kia kaha te reo Māori - may the Māori language be strong!
            </p>
        </div>
    `;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});