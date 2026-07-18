/**
 * script.js - المحرك المركزي لإعدادات التتبع والتهيئة والتفاعل الديناميكي المطور
 * نشاط: مؤسسة تنفيذ دهانات الرياض
 */

// 1. الإعدادات والبيانات المركزية للموقع
const SITE_CONFIG = {
    brandName: "مؤسسة تنفيذ دهانات الرياض",
    phone: "0530012045",
    whatsapp: "966530012045",
    googleAdsId: "AW-18128423919",
    conversionLabels: {
        phone: "I6DECKKErc8cEO-Xp8RD",     // قيمة التحويل: 70 ريال
        whatsapp: "fAtpCMjkr88cEO-Xp8RD",  // قيمة التحويل: 50 ريال
        form: "zzIbCOX-hs8cEO-Xp8RD"       // قيمة التحويل: 100 ريال
    },
    conversionValues: {
        phone: 70,
        whatsapp: 50,
        form: 100
    },
    web3FormsKey: "XXXXXXXX", // كود مفتاح Web3Forms السحابي للنموذج
    devPhone: "966578539687" // رقم المطور "الرعد التقني" (مستثنى من التتبع الإعلاني)
};

// 2. حقن وإعداد كود التتبع من Google Ads (gtag.js) ديناميكياً في رأس الصفحة
(function injectGoogleAnalytics() {
    if (!SITE_CONFIG.googleAdsId) return;

    // حقن مكتبة gtag.js الخارجية
    const scriptSrc = document.createElement("script");
    scriptSrc.async = true;
    scriptSrc.src = `https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAdsId}`;
    document.head.appendChild(scriptSrc);

    // تهيئة مصفوفة البيانات وتنفيذ التتبع الأساسي
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', SITE_CONFIG.googleAdsId);
})();

// دالة مركزية لإرسال أحداث تحويل Google Ads
function trackGoogleConversion(label, value) {
    if (typeof gtag === 'function' && SITE_CONFIG.googleAdsId) {
        gtag('event', 'conversion', {
            'send_to': `${SITE_CONFIG.googleAdsId}/${label}`,
            'value': value,
            'currency': 'SAR'
        });
        console.log(`[Google Ads] Conversion tracked: ${label} with value ${value} SAR`);
    }
}

// 3. حقن الأنماط التصميمية (CSS) الفخمة والمصمتة بالكامل للأزرار العائمة ودعوات الفوتر لمنع أي شفافية
(function injectGlobalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* تحسينات عامة وخط القاهرة */
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap');
        
        :root {
            --primary-color: #1a1a1a; /* أسود فاخر ملوكي */
            --accent-color: #c5a059;  /* ذهبي دافئ للمقاولات الراقية */
            --bg-light: #fcfcfc;
            --text-dark: #2c2c2c;
            --text-muted: #666666;
            --white: #ffffff;
            --whatsapp-color: #25d366;
            --phone-color: #007aff;
        }

        body {
            font-family: 'Cairo', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: var(--bg-light);
            color: var(--text-dark);
            direction: rtl;
            text-align: right;
            -webkit-tap-highlight-color: transparent;
        }

        /* تنسيقات الهيدر الفخم الملتصق */
        header {
            background-color: var(--primary-color);
            border-bottom: 2px solid var(--accent-color);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 20px;
        }

        .logo-area a {
            color: var(--accent-color);
            font-size: 1.2rem;
            font-weight: 800;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .nav-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 20px;
            align-items: center;
        }

        .nav-links li {
            position: relative;
        }

        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 600;
            padding: 8px 12px;
            transition: color 0.3s ease;
        }

        .nav-links a:hover, .nav-links a.active {
            color: var(--accent-color);
        }

        /* القائمة المنسدلة للخدمات للعمل باللمس والنقر */
        .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            background-color: var(--primary-color);
            border: 1px solid var(--accent-color);
            min-width: 220px;
            list-style: none;
            padding: 10px 0;
            margin: 5px 0 0 0;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            z-index: 1010;
            border-radius: 4px;
        }

        .dropdown-menu li a {
            display: block;
            padding: 10px 20px;
            font-size: 0.9rem;
            color: var(--white);
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .dropdown-menu li a:hover {
            background-color: rgba(197, 160, 89, 0.15);
            color: var(--accent-color);
        }

        .dropdown.active .dropdown-menu {
            display: block;
        }

        /* زر الهامبرغر للهواتف الذكية */
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--white);
            font-size: 1.8rem;
            cursor: pointer;
            padding: 5px;
        }

        /* تنسيقات الفوتر المطور للثقة المحلية */
        footer {
            background-color: var(--primary-color);
            color: var(--white);
            border-top: 4px solid var(--accent-color);
            padding: 40px 20px 20px 20px;
            margin-top: 60px;
        }

        .footer-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .footer-col h3 {
            color: var(--accent-color);
            font-size: 1.15rem;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 8px;
        }

        .footer-col h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 40px;
            height: 2px;
            background-color: var(--accent-color);
        }

        .footer-col p {
            font-size: 0.9rem;
            line-height: 1.7;
            color: #cccccc;
        }

        .footer-col ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .footer-col ul li {
            margin-bottom: 10px;
        }

        .footer-col ul li a {
            color: #cccccc;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s ease;
        }

        .footer-col ul li a:hover {
            color: var(--accent-color);
        }

        /* شبكة الأحياء لتعزيز الاستهداف الجغرافي */
        .districts-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }

        .district-tag {
            background-color: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(197, 160, 89, 0.3);
            color: #dddddd;
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 0.8rem;
        }

        .footer-bottom {
            max-width: 1200px;
            margin: 30px auto 0 auto;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            font-size: 0.85rem;
            color: #999999;
        }

        .footer-bottom a {
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 600;
        }

        /* ==========================================================================
           تنسيقات الأزرار العائمة الثابتة (صلبة بالكامل 100% وغير شفافة نهائياً)
           ========================================================================== */
        .floating-actions {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 9999 !important; /* رفع الأولوية للطبقة علوياً */
        }

        .floating-btn {
            width: 56px !important;
            height: 56px !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: var(--white) !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
            text-decoration: none !important;
            transition: transform 0.3s ease !important;
            position: relative !important;
            opacity: 1 !important; /* ضمان عدم الشفافية */
            border: none !important;
        }

        /* تلوين الخلفية المصمتة والنبض للأزرار العائمة */
        .btn-float-wa {
            background-color: var(--whatsapp-color) !important;
            background: linear-gradient(135deg, #25d366 0%, #1eaf52 100%) !important;
            animation: pulseAuraGreen 2.5s infinite ease-in-out !important;
        }

        .btn-float-phone {
            background-color: var(--accent-color) !important;
            background: linear-gradient(135deg, #c5a059 0%, #b38f4b 100%) !important;
            animation: pulseAuraGold 2.5s infinite ease-in-out !important;
        }

        /* هالات النبض الضوئية الفاخرة للأزرار الثابتة */
        @keyframes pulseAuraGreen {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7), 0 4px 12px rgba(0,0,0,0.2); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0), 0 6px 18px rgba(0,0,0,0.15); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 4px 12px rgba(0,0,0,0.2); }
        }

        @keyframes pulseAuraGold {
            0% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.7), 0 4px 12px rgba(0,0,0,0.2); }
            70% { box-shadow: 0 0 0 15px rgba(197, 160, 89, 0), 0 6px 18px rgba(0,0,0,0.15); }
            100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0), 0 4px 12px rgba(0,0,0,0.2); }
        }

        /* تأكيد تلوين وثبات أيقونات الـ SVG */
        .floating-actions svg {
            width: 28px !important;
            height: 28px !important;
            fill: #ffffff !important;
            display: block !important;
        }

        .btn-float-phone svg {
            fill: var(--primary-color) !important; /* جعل أيقونة الهاتف داكنة فوق الزر الذهبي لمظهر ملوكي كلاسيكي */
        }

        /* زر الصعود للأعلى يساراً */
        .btn-back-to-top {
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: var(--primary-color);
            border: 2px solid var(--accent-color);
            color: var(--accent-color);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.25);
            cursor: pointer;
            transition: opacity 0.3s, transform 0.3s;
            opacity: 0;
            visibility: hidden;
            z-index: 999;
        }

        .btn-back-to-top.show {
            opacity: 1;
            visibility: visible;
        }

        .btn-back-to-top svg {
            width: 20px;
            height: 20px;
            fill: var(--accent-color) !important;
        }

        /* ==========================================================================
           أنماط أزرار الفوتر المتحركة الفخمة المدعومة بهالات النبض الضوئية
           ========================================================================== */
        .footer-lux-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px 20px;
            font-size: 0.95rem;
            font-weight: 700;
            text-decoration: none;
            border-radius: 6px;
            border: none;
            width: 100%;
            cursor: pointer;
            transition: transform 0.2s ease;
            box-sizing: border-box;
        }

        .footer-lux-btn:active {
            transform: scale(0.98);
        }

        /* زر الاتصال الذهبي الفخم في الفوتر */
        .footer-btn-phone {
            background: linear-gradient(135deg, #c5a059 0%, #b38f4b 100%) !important;
            color: #1a1a1a !important;
            animation: pulseAuraGold 2.5s infinite ease-in-out;
        }

        /* زر الواتساب الأخضر الفخم في الفوتر */
        .footer-btn-wa {
            background: linear-gradient(135deg, #25d366 0%, #1eaf52 100%) !important;
            color: #ffffff !important;
            animation: pulseAuraGreen 2.5s infinite ease-in-out;
        }

        /* حركة التذبذب والانعكاس اللطيفة للأيقونات */
        .footer-lux-btn svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
            animation: wobbleIcon 1.5s infinite alternate ease-in-out;
        }

        @keyframes wobbleIcon {
            0% { transform: scale(1) rotate(-4deg); }
            100% { transform: scale(1.1) rotate(4deg); }
        }

        /* متجاوب مع الهواتف الذكية */
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }

            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: var(--primary-color);
                border-top: 2px solid var(--accent-color);
                padding: 15px 0;
                gap: 0;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            }

            .nav-links.active {
                display: flex;
            }

            .nav-links li {
                width: 100%;
                text-align: center;
            }

            .nav-links a {
                display: block;
                padding: 12px 20px;
                border-bottom: 1px solid rgba(255,255,255,0.05);
            }

            .dropdown-menu {
                position: static;
                display: none;
                background-color: rgba(255,255,255,0.02);
                border: none;
                box-shadow: none;
                width: 100%;
                padding: 0;
                margin: 0;
            }

            .dropdown.active .dropdown-menu {
                display: block;
            }

            .footer-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }

            .footer-bottom {
                flex-direction: column;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);
})();

// 4. دالة بناء وهيدرة (Hydration) مكونات واجهة المستخدم التفاعلية
function hydrateThemeComponents() {
    // أ- العثور على المسار الحالي لتحديد رابط الصفحة النشطة
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // ب- بناء كود الهيدر (Header)
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
                    <li><a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">الرئيسية</a></li>
                    <li><a href="about-us.html" class="${currentPath === 'about-us.html' ? 'active' : ''}">من نحن</a></li>
                    <li class="dropdown" id="servicesDropdown">
                        <a href="#" class="dropdown-trigger" style="display: flex; align-items: center; gap: 4px;">الخدمات <small>▼</small></a>
                        <ul class="dropdown-menu">
                            <li><a href="interior-paints.html">الدهانات الداخلية والمعجون</a></li>
                            <li><a href="exterior-paints.html">الدهانات الخارجية والبروفايل</a></li>
                            <li><a href="wall-putty.html">تأسيس ومعالجة المعجون</a></li>
                            <li><a href="suede-finish.html">دهانات شامواه</a></li>
                            <li><a href="rawah-paint.html">دهانات روعة</a></li>
                            <li><a href="khayal-paint.html">دهانات خيال</a></li>
                            <li><a href="stucco-paint.html">دهانات ستيكو الفاخرة</a></li>
                            <li><a href="epoxy-flooring.html">طلاء أرضيات الايبوكسي</a></li>
                            <li><a href="american-texture.html">الرشة الأمريكية الخارجية</a></li>
                            <li><a href="exterior-profile.html">البروفايل والواجهات</a></li>
                        </ul>
                    </li>
                    <li><a href="faq.html" class="${currentPath === 'faq.html' ? 'active' : ''}">الأسئلة الشائعة</a></li>
                    <li><a href="warranty.html" class="${currentPath === 'warranty.html' ? 'active' : ''}">الضمان والجودة</a></li>
                    <li><a href="contact-us.html" class="${currentPath === 'contact-us.html' ? 'active' : ''}">اتصل بنا</a></li>
                </ul>
            </div>
        </header>
    `;

    // ج- بناء كود الفوتر (Footer) مدمجاً بأزرار الاتصال التفاعلية الفخمة والمتحركة بالأيقونات SVG صلبة تماماً
    const footerHTML = `
        <footer>
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>نبذة عنا</h3>
                    <p>نحن في <strong>${SITE_CONFIG.brandName}</strong> نقدم أفضل خدمات التشطيب، الدهانات الداخلية والأصباغ والبوية، والرشات الخارجية بالرياض وبأعلى جودة تنفيذ وتأسيس ممتاز يضمن استدامة الألوان والمظهر الجذاب.</p>
                </div>
                <div class="footer-col">
                    <h3>روابط الخدمات السريعة</h3>
                    <ul>
                        <li><a href="interior-paints.html">دهانات داخلية معجون</a></li>
                        <li><a href="exterior-paints.html">دهانات خارجية وبروفايل</a></li>
                        <li><a href="suede-finish.html">دهان شامواه وروعة وخيال</a></li>
                        <li><a href="stucco-paint.html">دهان ستيكو وايبوكسي</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>نخدم جميع أحياء الرياض</h3>
                    <p style="font-size: 0.85rem; margin-bottom: 8px; color: #aaa;">نغطي كافة المناطق وخاصة شمال الرياض وأحيائها الأكثر طلباً لخدماتنا:</p>
                    <div class="districts-grid">
                        <span class="district-tag">الملقا</span>
                        <span class="district-tag">الياسمين</span>
                        <span class="district-tag">الصحافة</span>
                        <span class="district-tag">القيروان</span>
                        <span class="district-tag">النرجس</span>
                        <span class="district-tag">حطين</span>
                        <span class="district-tag">العقيق</span>
                        <span class="district-tag">الغدير</span>
                        <span class="district-tag">النفل</span>
                        <span class="district-tag">العارض</span>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>0530012045 تواصل معنا فوراً </h3>
                    <p style="margin-bottom: 12px;">📍 الرياض، المملكة العربية السعودية</p>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <!-- زر اتصال الفوتر بأيقونة SVG متحركة -->
                        <a href="tel:${SITE_CONFIG.phone}" class="footer-lux-btn footer-btn-phone">
                            <svg viewBox="0 0 24 24">
                                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                            </svg>
                            <span>اتصل بنا الآن</span>
                        </a>
                        
                        <!-- زر واتساب الفوتر بأيقونة SVG متحركة -->
                        <a href="https://wa.me/${SITE_CONFIG.whatsapp}" class="footer-lux-btn footer-btn-wa">
                            <svg viewBox="0 0 24 24">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm0 1.79c2.17 0 4.21.84 5.75 2.38 1.53 1.54 2.38 3.58 2.38 5.75s-.84 4.21-2.38 5.75c-1.54 1.53-3.58 2.38-5.75 2.38-1.42 0-2.81-.37-4.04-1.08l-.29-.17-3 1 .79-2.93-.19-.3c-.76-1.21-1.16-2.61-1.16-4.04 0-4.14 3.36-7.51 7.51-7.51zm-.04 2.72c-.36 0-.74.13-1.01.44-.27.31-.83.81-.83 1.97s.84 2.28.96 2.44c.12.16 1.66 2.53 4.02 3.55.56.24 1 .39 1.34.5.56.18 1.08.15 1.48.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.47-.28-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.14-.17.26-.66.83-.81.99-.15.17-.31.19-.56.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44l-.49-.01z" />
                            </svg>
                            <span>اسألنا مباشرة عبر واتساب فوراً</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div>© ${new Date().getFullYear()} ${SITE_CONFIG.brandName}. جميع الحقوق محفوظة. | <a href="privacy-policy.html">سياسة الخصوصية</a></div>
                <div>تطوير وتحسين الأداء بواسطة <a href="https://wa.me/${SITE_CONFIG.devPhone}" target="_blank" rel="nofollow">الرعد التقني</a></div>
            </div>
        </footer>
    `;

    // د- بناء كود أزرار الاتصال العائمة وزر الصعود للأعلى (خلفيات مصمتة 100% بدون أي شفافية)
    const floatingActionsHTML = `
        <div class="floating-actions">
            <!-- زر الاتصال العائد للعميل -->
            <a href="tel:${SITE_CONFIG.phone}" class="floating-btn btn-float-phone pulse-effect" id="floatPhoneBtn" title="اتصل الآن برقم جوالنا">
                <svg viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
            </a>
            <!-- زر واتساب العائد للعميل -->
            <a href="https://wa.me/${SITE_CONFIG.whatsapp}" class="floating-btn btn-float-wa pulse-effect" id="floatWhatsappBtn" title="تواصل معنا عبر واتساب">
                <svg viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm0 1.79c2.17 0 4.21.84 5.75 2.38 1.53 1.54 2.38 3.58 2.38 5.75s-.84 4.21-2.38 5.75c-1.54 1.53-3.58 2.38-5.75 2.38-1.42 0-2.81-.37-4.04-1.08l-.29-.17-3 1 .79-2.93-.19-.3c-.76-1.21-1.16-2.61-1.16-4.04 0-4.14 3.36-7.51 7.51-7.51zm-.04 2.72c-.36 0-.74.13-1.01.44-.27.31-.83.81-.83 1.97s.84 2.28.96 2.44c.12.16 1.66 2.53 4.02 3.55.56.24 1 .39 1.34.5.56.18 1.08.15 1.48.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.47-.28-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.14-.17.26-.66.83-.81.99-.15.17-.31.19-.56.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44l-.49-.01z" />
                </svg>
            </a>
        </div>
        
        <!-- زر الصعود للأعلى -->
        <button class="btn-back-to-top" id="backToTopBtn" title="الرجوع للأعلى">
            <svg viewBox="0 0 24 24">
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>
        </button>
    `;

    // هـ- حقن المكونات في الصفحة
    const appBody = document.body;

    // حقن الهيدر في البداية
    appBody.insertAdjacentHTML('afterbegin', headerHTML);

    // حقن الفوتر في النهاية
    appBody.insertAdjacentHTML('beforeend', footerHTML);

    // حقن العناصر العائمة
    appBody.insertAdjacentHTML('beforeend', floatingActionsHTML);
}

// 5. التفاعلات الخاصة بواجهة المستخدم للهواتف الذكية وتتبع الأحداث
function setupInteractionsAndTracking() {
    // أ- تفعيل قائمة الهامبرغر على الموبايل
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const navLinksMenu = document.getElementById("navLinksMenu");

    if (menuToggleBtn && navLinksMenu) {
        menuToggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinksMenu.classList.toggle("active");
        });
    }

    // ب- تفعيل القائمة المنسدلة للخدمات بالنقر/اللمس (توافق كامل مع الموبايل)
    const servicesDropdown = document.getElementById("servicesDropdown");
    if (servicesDropdown) {
        const dropdownTrigger = servicesDropdown.querySelector(".dropdown-trigger");
        
        dropdownTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            servicesDropdown.classList.toggle("active");
        });
    }

    // إغلاق القوائم عند النقر في أي مكان آخر خارجها
    document.addEventListener("click", () => {
        if (navLinksMenu && navLinksMenu.classList.contains("active")) {
            navLinksMenu.classList.remove("active");
        }
        if (servicesDropdown && servicesDropdown.classList.contains("active")) {
            servicesDropdown.classList.remove("active");
        }
    });

    // ج- إظهار/إخفاء زر الصعود للأعلى بناءً على التمرير مع حماية الأكواد من الأعطال (Null-Safety)
    const backToTopBtn = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", () => {
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // د- مراقبة نقرات الاتصال والواتساب وإرسال الأحداث لجوجل أدز
    document.addEventListener("click", (e) => {
        const anchor = e.target.closest("a");
        if (!anchor) return;

        const href = anchor.getAttribute("href") || "";

        // حالة 1: نقرة الاتصال الهاتفي بالعميل
        if (href.startsWith("tel:") && href.includes(SITE_CONFIG.phone)) {
            console.log("[CRO] Client Phone click detected.");
            trackGoogleConversion(SITE_CONFIG.conversionLabels.phone, SITE_CONFIG.conversionValues.phone);
        }

        // حالة 2: نقرة واتساب للعميل
        if (href.includes("wa.me") && href.includes(SITE_CONFIG.whatsapp)) {
            console.log("[CRO] Client WhatsApp click detected.");
            trackGoogleConversion(SITE_CONFIG.conversionLabels.whatsapp, SITE_CONFIG.conversionValues.whatsapp);
        }

        // حالة 3: استبعاد رقم المطور تماماً من تسجيل التحويلات للحفاظ على دقة بيانات Google Ads
        if (href.includes(SITE_CONFIG.devPhone)) {
            console.log("[CRO] Developer contact clicked. Excluded from conversion tracking.");
        }
    });

    // هـ- معالجة وإرسال النماذج بذكاء (Form Handling)
    const clientForm = document.querySelector("form.lead-form");
    if (clientForm) {
        clientForm.removeAttribute("action"); 
        
        clientForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            // إرسال حدث التحويل لجوجل فوراً قبل المباشرة بأي توجيه لضمان الرصد
            trackGoogleConversion(SITE_CONFIG.conversionLabels.form, SITE_CONFIG.conversionValues.form);

            // جمع بيانات الحقول للنموذج
            const nameInput = clientForm.querySelector('[name="name"]') || clientForm.querySelector('[type="text"]');
            const phoneInput = clientForm.querySelector('[name="phone"]') || clientForm.querySelector('[type="tel"]');
            const serviceSelect = clientForm.querySelector('[name="service"]') || clientForm.querySelector('select');
            const districtInput = clientForm.querySelector('[name="district"]') || {};

            const customerName = nameInput.value || "غير محدد";
            const customerPhone = phoneInput.value || "غير محدد";
            const requestedService = serviceSelect.value || "دهانات عامة";
            const customerDistrict = districtInput.value || "غير محدد";

            // تحضير نص الرسالة المنسقة للواتساب
            const messageText = `مرحباً، أرغب بطلب خدمة من موقعكم.\n\n👤 *الاسم*: ${customerName}\n📞 *الجوال*: ${customerPhone}\n🏡 *الحي/المنطقة*: ${customerDistrict}\n🛠 *الخدمة المطلوبة*: ${requestedService}`;
            const encodedMessage = encodeURIComponent(messageText);
            const whatsappRedirectUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodedMessage}`;

            // تحضير الحمولة للإرسال عبر سحابة Web3Forms
            if (SITE_CONFIG.web3FormsKey && SITE_CONFIG.web3FormsKey !== "XXXXXXXX") {
                const formData = new FormData(clientForm);
                formData.append("access_key", SITE_CONFIG.web3FormsKey);
                formData.append("subject", `طلب خدمة جديد من: ${customerName}`);

                try {
                    fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData
                    });
                } catch (error) {
                    console.error("[Web3Forms Error]", error);
                }
            }

            // توجيه العميل تلقائياً إلى محادثة واتساب العميل بالرسالة المنسقة
            setTimeout(() => {
                window.location.href = whatsappRedirectUrl;
            }, 150); 
        });
    }
}

// 6. تشغيل التهيئة بمجرد تحميل هيكل المستند (DOM) لضمان السرعة والأداء الفائق
document.addEventListener("DOMContentLoaded", () => {
    hydrateThemeComponents();
    setupInteractionsAndTracking();
});
