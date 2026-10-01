(function () {
    'use strict';

    const CORRECT_DATE_RAW = '01082026';
    const CORRECT_DATE_FORMATTED = '01/08/2026';

    const LOVE_REASONS = [
        {
            title: 'Por tu mirada',
            body: 'Amor, cuando me miras así, siento que el mundo entero se detiene. En tus ojos encuentro el refugio más bonito, el lugar donde quiero perderme y encontrarme cada día de mi vida. Tus ojos son mi universo favorito. 👀💫'
        },
        {
            title: 'Por tu risa',
            body: 'Tu risa es la melodía que alegra mis días grises. Es contagiosa, sincera y suena a hogar. Escucharte reír es mi adicción sana, y me prometo arrancarte una sonrisa cada mañana, cada tarde y cada noche de nuestra vida. 😊🎵'
        },
        {
            title: 'Por tu ternura',
            body: 'La forma en que me cuidas, en la que me hablas despacio, en la que me abrazas cuando más lo necesito sin decir nada... Tu ternura es medicina para mi alma y me recuerda que el amor sí es como en las películas, pero mejor, porque es contigo. 🤗🌸'
        },
        {
            title: 'Por cómo me escuchas',
            body: 'No cualquiera escucha de verdad. Pero tú, amor, me escuchas con el corazón. Te interesas por mis días, por mis miedos, por mis sueños pequeños. Te haces presente y eso me hace sentir más amado/a que cualquier declaración del mundo. 🌹💭'
        },
        {
            title: 'Por tu fuerza',
            body: 'Admiro tu valentía, tu capacidad de seguir adelante, tu corazón tan grande y fuerte a la vez. Tu fortaleza me inspira a ser mejor cada día. Contigo a mi lado, sé que puedo enfrentar lo que venga. 💪✨'
        },
        {
            title: 'Por tus defectos',
            body: 'Sí, también amo tus defectos, amor. Tus manías, tus olvidos, esas cositas que te hacen único/a e irrepetible. Amo TODO de ti, las partes lindas y las "no tan perfectas", porque todas juntas forman a la persona que elegí con todo mi corazón. 💖'
        },
        {
            title: 'Por ser mi hogar',
            body: 'Llegar a ti es como llegar a casa después de un viaje largo. Tus brazos, tu voz, tu olor... Todo en ti me da paz. No necesito grandes lujos ni lugares lejanos: contigo en cualquier rincón, ya tengo todo lo que necesito. 🏡💕'
        },
        {
            title: 'Por tu manera de amar',
            body: 'Tu amor no es ruidoso ni exagerado: es constante, detallista, paciente y verdadero. Me amas en los días buenos y también en los difíciles. Esa forma de amar me llena el alma y me hace creer en el "para siempre". 💞🌙'
        },
        {
            title: 'Por hacerme mejor',
            body: 'Contigo descubrí versiones de mí que no conocía. Me haces más paciente, más alegre, más humano. Tu amor me impulsa a ser la mejor versión de mí mismo/a, no por obligación, sino porque verte orgulloso/a de mí es el premio más grande. 🌟🚀'
        },
        {
            title: 'Por tus detalles',
            body: 'Ese mensaje de buenos días, ese gusto que te acuerdas, ese "te extraño" en medio de la tarde... Tus pequeños detalles son grandes muestras de amor y son los que construyen esta historia tan bonita que vivimos juntos. 📩💐'
        },
        {
            title: 'Por la calma que das',
            body: 'Cuando estoy contigo, la ansiedad se va, el estrés desaparece y todo se siente más ligero. Tu presencia es mi calma en medio de la tormenta, mi respiro, mi lugar seguro. Gracias por ser mi paz, mi vida. 🕊️🍃'
        },
        {
            title: 'Por el futuro que imaginamos',
            body: 'Me emociona pensar en todo lo que vendrá: viajes, risas, mañanas juntos, cenas a oscuras, años llenos de amor. Y es que no importa el qué ni el cómo, solo importa el QUIÉN, y quiero que seas TÚ, siempre tú. 🔮💑'
        },
        {
            title: 'Por tus abrazos',
            body: 'Tu abrazo tiene el superpoder de arreglar cualquier mal día. Me envuelves y siento que nada malo puede pasarme. Podría quedarme horas, días, años enteros en tus brazos y aún me faltarían tiempo. 🫂❤️‍🔥'
        },
        {
            title: 'Por ser tú, simplemente tú',
            body: 'No necesito que cambies nada, amor. Eres exactamente como te soñé (y mucho mejor). Tu forma de ser, tu corazón tan noble, tu autenticidad... Eres imperfectamente perfecto/a para mí, y te elijo cada día con toda mi alma. 💘'
        }
    ];

    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    const normalizeDate = (value) => value.replace(/\D/g, '').trim();

    const formatDateInput = (input) => {
        let val = normalizeDate(input.value);
        let formatted = '';
        if (val.length > 0) formatted += val.substring(0, 2);
        if (val.length > 2) formatted += '/' + val.substring(2, 4);
        if (val.length > 4) formatted += '/' + val.substring(4, 8);
        input.value = formatted;
    };

    function heartConfettiBurst(duration = 2500, intensity = 1) {
        if (typeof confetti !== 'function') return;

        const end = Date.now() + duration;

        const heartShape = confetti.shapeFromPath({
            path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
        });

        (function frame() {
            confetti({
                particleCount: Math.round(5 * intensity),
                angle: 60,
                spread: 70,
                origin: { x: 0, y: 0.7 },
                shapes: [heartShape, 'circle'],
                scalar: 1.1,
                colors: ['#ec4899', '#f43f5e', '#fbcfe8', '#be185d', '#fff1f2']
            });
            confetti({
                particleCount: Math.round(5 * intensity),
                angle: 120,
                spread: 70,
                origin: { x: 1, y: 0.7 },
                shapes: [heartShape, 'circle'],
                scalar: 1.1,
                colors: ['#ec4899', '#f43f5e', '#fbcfe8', '#be185d', '#fff1f2']
            });
            if (Date.now() < end) requestAnimationFrame(frame);
        })();

        confetti({
            particleCount: Math.round(180 * intensity),
            spread: 110,
            origin: { y: 0.55 },
            shapes: [heartShape, 'circle', 'square'],
            scalar: 1.2,
            colors: ['#ec4899', '#f43f5e', '#fbcfe8', '#be185d', '#fff1f2', '#fda4af'],
            startVelocity: 45,
            ticks: 200,
            gravity: 0.7
        });
    }

    function createFallingHeart(xPos) {
        const container = $('#heartsContainer');
        if (!container) return;

        const heart = document.createElement('div');
        const size = 14 + Math.random() * 28;
        const duration = 5 + Math.random() * 7;
        const left = typeof xPos === 'number'
            ? xPos
            : Math.random() * 100;
        const colors = ['#ec4899', '#f43f5e', '#be185d', '#fb7185', '#f9a8d4'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        heart.className = 'falling-heart';
        heart.style.left = left + 'vw';
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.animationDuration = duration + 's';

        heart.innerHTML = `
            <svg viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        `;

        container.appendChild(heart);
        setTimeout(() => heart.remove(), duration * 1000 + 500);
    }

    function startHeartRain(intensityMs = 280, duration = 10000) {
        const endAt = Date.now() + duration;
        const tick = () => {
            createFallingHeart();
            if (Date.now() < endAt) {
                setTimeout(tick, intensityMs + Math.random() * 220);
            }
        };
        tick();
    }

    function handleMusicButton() {
        const btn = $('#musicToggle');
        const music = $('#bgMusic');
        const iconPlay = $('#iconMusicPlay');
        const iconPause = $('#iconMusicPause');
        if (!btn || !music) return;

        const updateIcons = () => {
            const isPaused = music.paused;
            iconPlay && (iconPlay.classList.toggle('hidden', !isPaused));
            iconPause && (iconPause.classList.toggle('hidden', isPaused));
        };

        const toggle = () => {
            if (music.paused) {
                music.play().then(updateIcons).catch(() => {});
            } else {
                music.pause();
                updateIcons();
            }
        };

        btn.addEventListener('click', toggle);
        updateIcons();

        return {
            play: () => {
                const p = music.play();
                if (p && typeof p.then === 'function') p.then(updateIcons).catch(() => {});
                else updateIcons();
            },
            toggle
        };
    }

    function setupFlipCards() {
        const cards = $$('[data-flip]');
        cards.forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', 'Girar tarjeta');

            const flip = () => card.classList.toggle('is-flipped');

            card.addEventListener('click', (e) => {
                if (window.matchMedia('(hover: hover)').matches && e.type === 'click') {
                    flip();
                }
                if (!window.matchMedia('(hover: hover)').matches) {
                    flip();
                }
            });

            let touchStart = 0;
            card.addEventListener('touchstart', () => { touchStart = Date.now(); }, { passive: true });
            card.addEventListener('touchend', (e) => {
                if (Date.now() - touchStart < 250) {
                    e.preventDefault();
                    flip();
                }
            }, { passive: false });

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    flip();
                }
            });
        });
    }

    function setupReasonJar() {
        const btn = $('#drawReasonBtn');
        const content = $('#reasonContent');
        const numEl = $('#reasonNum');
        if (!btn || !content) return;

        let drawnCount = 0;
        let lastIndex = -1;

        const pickReason = () => {
            let idx;
            do {
                idx = Math.floor(Math.random() * LOVE_REASONS.length);
            } while (idx === lastIndex && LOVE_REASONS.length > 1);
            lastIndex = idx;
            return LOVE_REASONS[idx];
        };

        const draw = () => {
            content.classList.add('is-changing');
            setTimeout(() => {
                const reason = pickReason();
                drawnCount += 1;
                numEl && (numEl.textContent = String(drawnCount));

                content.innerHTML = `
                    <p class="font-script text-2xl md:text-3xl text-rose-deep mb-3">${reason.title}</p>
                    <p class="text-gray-700 text-sm md:text-base leading-relaxed">${reason.body}</p>
                `;
                content.classList.remove('is-changing');

                if (typeof confetti === 'function') {
                    const miniHeart = confetti.shapeFromPath({
                        path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                    });
                    confetti({
                        particleCount: 22,
                        spread: 50,
                        origin: { y: 0.5 },
                        shapes: [miniHeart, 'circle'],
                        scalar: 0.9,
                        colors: ['#ec4899', '#f43f5e', '#fbcfe8', '#fff1f2'],
                        startVelocity: 20,
                        ticks: 120
                    });
                }
            }, 280);
        };

        btn.addEventListener('click', draw);
    }

    function setupCelebrateButton() {
        const btn = $('#celebrateBtn');
        if (!btn) return;

        btn.addEventListener('click', () => {
            heartConfettiBurst(3500, 1.6);
            startHeartRain(180, 12000);
        });
    }

    function setupLockScreen() {
        const lockScreen = $('#lockScreen');
        const mainContent = $('#mainContent');
        const input = $('#dateInput');
        const btn = $('#unlockBtn');
        const errorHint = $('#errorHint');
        if (!lockScreen || !input || !btn) return;

        let errorTimer = null;
        let musicCtrl = null;

        const showError = () => {
            if (!errorHint) return;
            errorHint.classList.remove('hidden');
            errorHint.classList.remove('animate-shake');
            void errorHint.offsetWidth;
            errorHint.classList.add('animate-shake');
            if (errorTimer) clearTimeout(errorTimer);
            errorTimer = setTimeout(() => {
                errorHint.classList.add('hidden');
            }, 4500);
        };

        const unlock = () => {
            lockScreen.classList.add('opened');
            setTimeout(() => lockScreen.classList.add('is-hidden'), 600);

            mainContent.classList.add('is-visible');
            document.body.style.overflow = 'auto';

            if (musicCtrl) musicCtrl.play();
            heartConfettiBurst(3200, 1.4);
            startHeartRain(260, 14000);

            setTimeout(() => {
                const header = document.querySelector('header');
                header && header.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 900);
        };

        const validate = () => {
            const val = normalizeDate(input.value);
            if (val === CORRECT_DATE_RAW) {
                input.setAttribute('aria-invalid', 'false');
                unlock();
            } else {
                input.setAttribute('aria-invalid', 'true');
                showError();
                input.focus({ preventScroll: true });
            }
        };

        input.addEventListener('input', () => formatDateInput(input));

        btn.addEventListener('click', validate);

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                validate();
            }
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasted = (e.clipboardData || window.clipboardData).getData('text');
            input.value = pasted;
            formatDateInput(input);
        });

        document.body.style.overflow = 'hidden';

        return {
            setMusicController(ctrl) { musicCtrl = ctrl; }
        };
    }

    function setupBackgroundAmbient() {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        let slowRainTimer = null;
        const schedule = () => {
            const next = 6000 + Math.random() * 7000;
            slowRainTimer = setTimeout(() => {
                createFallingHeart();
                createFallingHeart();
                schedule();
            }, next);
        };
        schedule();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden && slowRainTimer) {
                clearTimeout(slowRainTimer);
                slowRainTimer = null;
            } else if (!document.hidden && !slowRainTimer) {
                schedule();
            }
        });
    }

    function init() {
        const musicCtrl = handleMusicButton();
        const lock = setupLockScreen();
        lock && lock.setMusicController(musicCtrl);

        setupFlipCards();
        setupReasonJar();
        setupCelebrateButton();
        setupBackgroundAmbient();

        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
            try { lucide.createIcons(); } catch (_) {}
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
