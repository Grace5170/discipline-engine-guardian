
/* Guardian Character Creator v2.0 — Fairytale Edition */
(() => {
  "use strict";

  const hairColors = {
    dark: "#33231f",
    light: "#e6bb71",
    red: "#a95034",
    silver: "#cbd4dd"
  };

  const cloakColors = {
    forest: "#38765e",
    crimson: "#a44761",
    midnight: "#3f5792",
    violet: "#7451a0"
  };

  const hairstyles = [
    ["flowing", "Flowing"],
    ["braided", "Braided"],
    ["short", "Short"],
    ["curly", "Curly"]
  ];

  function options(items, selected) {
    return items.map(([value, label]) =>
      `<option value="${value}" ${selected === value ? "selected" : ""}>${label}</option>`
    ).join("");
  }

  function portrait(h) {
    const hair = hairColors[h.hair] || hairColors.dark;
    const cloak = cloakColors[h.cloak] || cloakColors.forest;
    const male = h.presentation === "male";
    const style = h.hairstyle || "flowing";

    const backHair = style === "short"
      ? ""
      : `<path d="M112 125 Q104 46 180 43 Q259 46 248 125 L259 225 Q229 239 215 202 L144 202 Q122 238 101 220 Z" fill="${hair}"/>`;

    const curls = style === "curly"
      ? `<g fill="${hair}">
          <circle cx="129" cy="82" r="25"/>
          <circle cx="157" cy="59" r="27"/>
          <circle cx="193" cy="57" r="28"/>
          <circle cx="224" cy="80" r="25"/>
          <circle cx="119" cy="115" r="20"/>
          <circle cx="237" cy="115" r="20"/>
        </g>`
      : "";

    const braid = style === "braided"
      ? `<g fill="${hair}" stroke="#ffffff35" stroke-width="2">
          <ellipse cx="239" cy="160" rx="15" ry="23"/>
          <ellipse cx="244" cy="187" rx="13" ry="19"/>
          <ellipse cx="246" cy="211" rx="11" ry="16"/>
        </g>`
      : "";

    return `
      <svg viewBox="0 0 360 420"
        role="img"
        aria-label="Fairytale Guardian portrait"
        style="width:100%;max-width:340px;display:block;margin:auto">
        <defs>
          <radialGradient id="fairytaleSky">
            <stop stop-color="#e9ca88"/>
            <stop offset="1" stop-color="#30475e"/>
          </radialGradient>
          <linearGradient id="fairytaleCloak">
            <stop stop-color="${cloak}"/>
            <stop offset=".55" stop-color="${cloak}"/>
            <stop offset="1" stop-color="#19283c"/>
          </linearGradient>
        </defs>

        <rect width="360" height="420" rx="22"
          fill="url(#fairytaleSky)"/>

        <path d="M0 295 L90 165 L155 250 L240 130 L360 300 V420 H0Z"
          fill="#263f4a" opacity=".65"/>
        <path d="M0 335 Q100 270 190 335 T360 315 V420 H0Z"
          fill="#243f38"/>

        <circle cx="180" cy="143" r="108"
          fill="#f7d88b" opacity=".16"/>

        ${backHair}

        <path d="M48 420 Q51 252 145 241 L215 241
          Q309 252 312 420Z"
          fill="url(#fairytaleCloak)"
          stroke="#e4bf7c" stroke-width="4"/>

        <path d="M143 235 L180 284 L217 235
          L208 210 H152Z"
          fill="#d9a27f"/>

        <ellipse cx="180" cy="148"
          rx="${male ? 62 : 59}"
          ry="78"
          fill="#e8b58e"/>

        <path d="M118 132 Q109 58 175 52
          Q248 47 242 129
          Q221 108 207 88
          Q176 113 119 132Z"
          fill="${hair}"/>

        ${curls}
        ${braid}

        <g stroke="#44312b" stroke-width="4"
          stroke-linecap="round" fill="none">
          <path d="M140 149 Q153 141 166 149"/>
          <path d="M194 149 Q207 141 220 149"/>
        </g>

        <g fill="#273b46">
          <circle cx="153" cy="150" r="4"/>
          <circle cx="207" cy="150" r="4"/>
        </g>

        <path d="M180 156 L175 176 Q181 181 188 176"
          stroke="#bd856b" stroke-width="2"
          fill="none"/>

        <path d="M158 191 Q180 207 202 191"
          stroke="#995b5b" stroke-width="3"
          fill="none" stroke-linecap="round"/>

        <circle cx="135" cy="176" r="12"
          fill="#d77e7e" opacity=".22"/>
        <circle cx="225" cy="176" r="12"
          fill="#d77e7e" opacity=".22"/>

        <path d="M124 257 L180 320 L236 257"
          fill="none" stroke="#e5c88d"
          stroke-width="7"/>

        <circle cx="180" cy="286" r="13"
          fill="#e6c47d" stroke="#fff0bf"
          stroke-width="3"/>

        <path d="M180 278 L187 286 L180 294 L173 286Z"
          fill="#fff5c4"/>

        <g transform="translate(265 330)">
          <circle r="35" fill="#ffcf71" opacity=".16"/>
          <path d="M0 -23 L7 -7 L23 0 L7 7
            L0 23 L-7 7 L-23 0 L-7 -7Z"
            fill="#ffe4a2"/>
        </g>
      </svg>`;
  }

  hero = function () {
    const h = data.hero;
    const archetypes = [
      ["wanderer", "Cloaked Wanderer"],
      ["sentinel", "Ironhold Sentinel"],
      ["scholar", "Lantern Scholar"],
      ["healer", "Wayfarer Healer"]
    ];

    const field = (label, key, values) => `
      <div class="field">
        <label for="fairy-${key}">${label}</label>
        <select id="fairy-${key}" data-field="hero.${key}">
          ${options(values, h[key])}
        </select>
      </div>`;

    return `
      <section class="panel">
        <div class="eyebrow">Fairytale Edition · v2.0</div>
        <h2>Create Your Guardian</h2>
        <p class="muted">
          Your choices shape your Guardian's appearance.
          They never restrict your story.
        </p>

        <div class="creator-grid">
          <div class="avatar-card">
            ${portrait(h)}
            <h3>${esc(h.name || "Your Guardian")}</h3>
            <p class="small">Fairytale portrait preview</p>
          </div>

          <div>
            <div class="field">
              <label for="fairy-name">Guardian name</label>
              <input id="fairy-name" maxlength="45"
                data-field="hero.name"
                value="${esc(h.name || "")}"
                placeholder="Your Guardian's name">
            </div>

            ${field("Guardian", "presentation", [
              ["female", "Female Guardian"],
              ["male", "Male Guardian"]
            ])}

            ${field("Hairstyle", "hairstyle", hairstyles)}

            ${field("Hair color", "hair", [
              ["dark", "Dark brown"],
              ["light", "Golden blonde"],
              ["red", "Auburn"],
              ["silver", "Silver"]
            ])}

            ${field("Cloak color", "cloak", [
              ["forest", "Forest green"],
              ["crimson", "Crimson"],
              ["midnight", "Midnight blue"],
              ["violet", "Royal violet"]
            ])}

            ${field("Guardian archetype",
              "appearance", archetypes)}

            <h3>Lantern origin</h3>
            <div class="choices">
              ${[
                ["family", "Family Heirloom"],
                ["relic", "Forgotten Relic"],
                ["stranger", "Stranger's Gift"]
              ].map(([value, label]) => `
                <button class="choice ${h.origin === value ? "selected" : ""}"
                  onclick="chooseOrigin('${value}')">
                  ${label}
                </button>
              `).join("")}
            </div>

            <div class="actions">
              <button class="btn primary" data-tab="story">
                Begin or Continue Chapter I
              </button>
              <button class="btn" data-tab="journal">
                View Journal
              </button>
            </div>
          </div>
        </div>
      </section>`;
  };


  // Fairytale Guardian portrait collection
  const portraitNames = [
    "The Courageous Guardian",
    "The Wise Guardian",
    "The Steadfast Guardian",
    "The Noble Guardian"
  ];

  const portraitImage = "guardian-portraits.jpg";

  const originalHero = hero;

  hero = function () {
    const selected = Number.isInteger(data.hero.portrait)
      ? data.hero.portrait
      : (data.hero.presentation === "male" ? 2 : 0);

    const html = originalHero();

    const cards = portraitNames.map((name, index) => {
      const x = index % 2;
      const y = Math.floor(index / 2);

      return `
        <button type="button"
          class="portrait-choice ${selected === index ? "selected" : ""}"
          data-portrait="${index}">
          <span class="portrait-crop"
            style="background-image:url('${portraitImage}');
                   background-size:200% 200%;
                   background-position:${x * 100}% ${y * 100}%">
          </span>
          <strong>${name}</strong>
        </button>`;
    }).join("");

    return html.replace(
      '<div class="creator-grid">',
      `<h3>Choose Your Illustrated Guardian</h3>
       <div class="portrait-options">${cards}</div>
       <div class="creator-grid">`
    );
  };

  const oldBind = bind;

  bind = function () {
    oldBind();

    document.querySelectorAll("[data-portrait]").forEach(button => {
      button.onclick = () => {
        data.hero.portrait = Number(button.dataset.portrait);
        data.hero.presentation =
          data.hero.portrait < 2 ? "female" : "male";
        save();
        render();
      };
    });
  };

  const portraitStyles = document.createElement("style");
  portraitStyles.textContent = `
    .portrait-options {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:12px;
      margin:18px 0 25px;
    }
    .portrait-choice {
      background:#20354a;
      border:2px solid #536b7d;
      border-radius:14px;
      padding:9px;
      color:#f5e5c6;
      white-space:normal;
      text-align:center;
    }
    .portrait-choice.selected {
      border-color:#f2cb83;
      box-shadow:0 0 0 2px #f2cb8333;
    }
    .portrait-crop {
      display:block;
      width:100%;
      aspect-ratio:1;
      background-repeat:no-repeat;
      border-radius:9px;
      margin-bottom:8px;
    }
    .portrait-choice strong {
      font-size:.82rem;
      line-height:1.3;
      display:block;
    }
  `;
  document.head.appendChild(portraitStyles);

  // Replace the simplified avatar with the selected fairytale portrait.
  const previousHero = hero;

  hero = function () {
    const html = previousHero();
    const selected = Number.isInteger(data.hero.portrait)
      ? Math.max(0, Math.min(3, data.hero.portrait))
      : (data.hero.presentation === "male" ? 2 : 0);

    const x = (selected % 2) * 100;
    const y = Math.floor(selected / 2) * 100;

    const illustratedPortrait = `
      <div role="img"
        aria-label="Selected Fairytale Guardian portrait"
        style="
          width:100%;
          aspect-ratio:1;
          border-radius:12px;
          background-image:url('guardian-portraits.jpg');
          background-size:200% 200%;
          background-position:${x}% ${y}%;
          background-repeat:no-repeat;
          border:2px solid #eac58a;
        ">
      </div>`;

    return html.replace(
      /\$\{portrait\(h\)\}/g,
      illustratedPortrait
    ).replace(
      /<svg\b[^>]*>[\s\S]*?<\/svg>/,
      illustratedPortrait
    );
  };
  render();
})();
