/**
 * script.js - العقل المدبر لتهيئة التتبع وحقن المكونات المتجاوبة
 * مؤسسة تنفيذ دهانات الرياض
 */

const SITE_CONFIG = {
    brandName: "مؤسسة تنفيذ دهانات الرياض",
    phone: "0530012045",
    whatsapp: "966530012045",
    googleAdsId: "AW-18128423919",
    conversionLabels: {
        phone: "I6DECKKErc8cEO-Xp8RD",     // 70 ريال
        whatsapp: "fAtpCMjkr88cEO-Xp8RD",  // 50 ريال
        form: "zzIbCOX-hs8cEO-Xp8RD"       // 100 ريال
    },
    conversionValues: {
        phone: 70,
        whatsapp: 50,
        form: 100
    },
    web3FormsKey: "XXXXXXXX",
    devPhone: "966578539687" // مستثنى من التتبع الإعلاني للحفاظ على دقة التقارير
};

// تهيئة جوجل تاغ ديناميكياً
(function initAnalytics() {
    if (!SITE_CONFIG.googleAdsId) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAdsId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', SITE_CONFIG.googleAdsId);
})();

function trackConversion(label, value) {
    if (typeof gtag === 'function' && SITE_CONFIG.googleAdsId) {
        gtag('event', 'conversion', {
            'send_to': `${SITE_CONFIG.googleAdsId}/${label}`,
            'value': value,
            'currency': 'SAR'
        });
    }
}

// حقن الأنماط التفاعلية الإضافية للقوائم المنسدلة الفرعية على الموبايل
(function injectMenuStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .sub-dropdown {
            position: relative;
        }
        .sub-dropdown-menu {
            display: none;
            position: absolute;
            right: 100%;
            top: 0;
            background-color: #1a1a1a;
            border: 1px solid #c5a059;
            min-width: 200px;
            list-style: none;
            padding: 5px 0;
            border-radius: 4px;
        }
        .sub-dropdown.active .sub-dropdown-menu {
            display: block;
        }
        @media (max-width: 768px) {
            .sub-dropdown-menu {
                position: static;
                background-color: rgba(255,255,255,0.05);
                padding-right: 15px;
                border: none;
            }
        }
    `;
    document.head.appendChild(style);
})();

// حقن الهيدر والفوتر والأزرار العائمة
function hydratePage() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    const headerHTML = `
        <header>
            <div class="header-container">
                <div class="logo-area">
                    <a href="index.html">
                        <span>🎨</span>
                        <span>${SITE_CONFIG.brandName}</span>
                    </a>
                </div>
                <button class="menu-toggle" aria-label="فتح القائمة" id="menuToggleBtn">☰</button>
                <ul class="nav-links" id="navLinksMenu">
                    <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">الرئيسية</a></li>
                    
                    <!-- منسدلة الدهانات الداخلية -->
                    <li class="dropdown" id="internalDropdown">
                        <a href="interior-paints.html" class="dropdown-trigger">دهانات داخلية ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="interior-paints.html">الرئيسية للدهانات الداخلية</a></li>
                            <li><a href="wall-putty.html">تأسيس ومعالجة المعجون</a></li>
                            <li><a href="suede-finish.html">دهان شامواه</a></li>
                            <li><a href="rawah-paint.html">دهان روعة</a></li>
                            <li><a href="khayal-paint.html">دهان خيال</a></li>
                            <li><a href="stucco-paint.html">دهان ستيكو</a></li>
                        </ul>
                    </li>

                    <!-- منسدلة الدهانات الخارجية -->
                    <li class="dropdown" id="externalDropdown">
                        <a href="exterior-paints.html" class="dropdown-trigger">دهانات خارجية ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="exterior-paints.html">الرئيسية للدهانات الخارجية</a></li>
                            <li><a href="american-texture.html">رشة أمريكية</a></li>
                            <li><a href="exterior-profile.html">بروفايل خارجي</a></li>
                        </ul>
                    </li>

                    <li><a href="epoxy-flooring.html" class="${currentPath === 'epoxy-flooring.html' ? 'active' : ''}">أرضيات ايبوكسي</a></li>
                    <li><a href="warranty.html" class="${currentPath === 'warranty.html' ? 'active' : ''}">الضمان</a></li>
                    <li><a href="faq.html" class="${currentPath === 'faq.html' ? 'active' : ''}">الأسئلة الشائعة</a></li>
                    <li><a href="contact-us.html" class="${currentPath === 'contact-us.html' ? 'active' : ''}">اتصل بنا</a></li>
                </ul>
            </div>
        </header>
    `;

    const footerHTML = `
        <footer>
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>من نحن</h3>
                    <p>نعمل في <strong>${SITE_CONFIG.brandName}</strong> على تجميل مساحاتكم السكنية والتجارية بأعلى جودة دهانات وتشطيب بالرياض، بخبرة طويلة تمتد لسنوات في شمال وجنوب وشرق وغرب الرياض.</p>
                </div>
                <div class="footer-col">
                    <h3>أقسام الخدمات</h3>
                    <ul>
                        <li><a href="interior-paints.html">دهانات داخلية ومعجون</a></li>
                        <li><a href="exterior-paints.html">دهانات خارجية وبروفايل</a></li>
                        <li><a href="epoxy-flooring.html">أرضيات الايبوكسي الفاخرة</a></li>
                        <li><a href="warranty.html">سياسة الضمان والجودة</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>خدمة الأحياء السريعة</h3>
                    <div class="districts-grid">
                        <span class="district-tag">الملقا</span>
                        <span class="district-tag">الياسمين</span>
                        <span class="district-tag">الصحافة</span>
                        <span class="district-tag">القيروان</span>
                        <span class="district-tag">النرجس</span>
                        <span class="district-tag">حطين</span>
                        <span class="district-tag">العقيق</span>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>اتصل بنا</h3>
                    <p>📱 جوال: <a href="tel:${SITE_CONFIG.phone}" style="color: var(--accent-color); font-weight: bold;">${SITE_CONFIG.phone}</a></p>
                    <p>💬 واتساب متاح 24 ساعة للإجابة على استفساراتكم.</p>
                </div>
            </div>
            <div class="footer-bottom">
                <div>© ${new Date().getFullYear()} ${SITE_CONFIG.brandName}. جميع الحقوق محفوظة. | <a href="privacy-policy.html">سياسة الخصوصية</a></div>
                <div>تطوير وتشغيل بواسطة <a href="https://wa.me/${SITE_CONFIG.devPhone}" target="_blank" rel="nofollow">الرعد التقني</a></div>
            </div>
        </footer>
    `;

    const floatingActionsHTML = `
        <div class="floating-actions">
            <a href="tel:${SITE_CONFIG.phone}" class="floating-btn btn-phone pulse-effect" id="floatPhone" title="اتصل بنا الآن">
                <svg viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg>
            </a>
            <a href="https://wa.me/${SITE_CONFIG.whatsapp}" class="floating-btn btn-whatsapp pulse-effect" id="floatWhatsapp" title="تواصل عبر واتساب">
                <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm0 1.79c2.17 0 4.21.84 5.75 2.38 1.53 1.54 2.38 3.58 2.38 5.75s-.84 4.21-2.38 5.75c-1.54 1.53-3.58 2.38-5.75 2.38-1.42 0-2.81-.37-4.04-1.08l-.29-.17-3 1 .79-2.93-.19-.3c-.76-1.21-1.16-2.61-1.16-4.04 0-4.14 3.36-7.51 7.51-7.51zm-.04 2.72c-.36 0-.74.13-1.01.44-.27.31-.83.81-.83 1.97s.84 2.28.96 2.44c.12.16 1.66 2.53 4.02 3.55.56.24 1 .39 1.34.5.56.18 1.08.15 1.48.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.47-.28-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.14-.17.26-.66.83-.81.99-.15.17-.31.19-.56.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44l-.49-.01z"/></svg>
            </a>
        </div>
        <button class="btn-back-to-top" id="backToTopBtn" title="للأعلى">
            <svg viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/></svg>
        </button>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    document.body.insertAdjacentHTML('beforeend', floatingActionsHTML);
}

function initInteractions() {
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const navLinksMenu = document.getElementById("navLinksMenu");

    if (menuToggleBtn && navLinksMenu) {
        menuToggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinksMenu.classList.toggle("active");
        });
    }

    // تفعيل فتح القائمة المنسدلة عند اللمس/النقر على الموبايل
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector(".dropdown-trigger");
        trigger.addEventListener("click", (e) => {
            // منع الانتقال الفوري للروابط الرئيسية على الجوال فقط للسماح بفتح المنسدلة
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                // إغلاق المنسدلات الأخرى
                dropdowns.forEach(d => { if (d !== dropdown) d.classList.remove("active"); });
                dropdown.classList.toggle("active");
            }
        });
    });

    // زر الصعود للأعلى
    const backToTopBtn = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // تتبع أحداث النقر
    document.addEventListener("click", (e) => {
        const anchor = e.target.closest("a");
        if (!anchor) return;
        const href = anchor.getAttribute("href") || "";

        if (href.startsWith("tel:") && href.includes(SITE_CONFIG.phone)) {
            trackConversion(SITE_CONFIG.conversionLabels.phone, SITE_CONFIG.conversionValues.phone);
        }
        if (href.includes("wa.me") && href.includes(SITE_CONFIG.whatsapp)) {
            trackConversion(SITE_CONFIG.conversionLabels.whatsapp, SITE_CONFIG.conversionValues.whatsapp);
        }
    });

    // معالجة النماذج
    const leadForm = document.querySelector("form.lead-form");
    if (leadForm) {
        leadForm.removeAttribute("action");
        leadForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            trackConversion(SITE_CONFIG.conversionLabels.form, SITE_CONFIG.conversionValues.form);

            const name = leadForm.querySelector('[name="name"]').value || "غير معروف";
            const phone = leadForm.querySelector('[name="phone"]').value || "غير معروف";
            const district = leadForm.querySelector('[name="district"]').value || "غير معروف";
            const service = leadForm.querySelector('[name="service"]').value || "دهانات عامة";

            const messageText = `مرحباً، أرغب بطلب خدمة من موقعكم الجغرافي بالرياض:\n\n👤 *الاسم*: ${name}\n📞 *الجوال*: ${phone}\n🏡 *الحي*: ${district}\n🛠 *الخدمة المطلوبة*: ${service}`;
            const encodedMessage = encodeURIComponent(messageText);
            const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodedMessage}`;

            if (SITE_CONFIG.web3FormsKey && SITE_CONFIG.web3FormsKey !== "XXXXXXXX") {
                const formData = new FormData(leadForm);
                formData.append("access_key", SITE_CONFIG.web3FormsKey);
                formData.append("subject", `طلب خدمة جديد من: ${name}`);
                fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
            }

            setTimeout(() => {
                window.location.href = whatsappUrl;
            }, 150);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    hydratePage();
    initInteractions();
});
