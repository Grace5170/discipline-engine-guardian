
(() => {
  "use strict";

  const style = document.createElement("style");
  style.textContent = `
    .guardian-cinema {
      padding: 22px;
      margin: 18px 0;
      border: 1px solid #c9a66b;
      border-radius: 18px;
      background: linear-gradient(
        160deg, #17283c, #101925
      );
      color: #f6e9cf;
      text-align: center;
      box-shadow: 0 12px 35px #0005;
    }

    .guardian-cinema .chapter-label {
      color: #e4bd77;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .guardian-cinema h2 {
      font-family: Georgia, serif;
      font-size: 29px;
      margin: 15px 0;
      color: #f6e9cf;
    }

    .guardian-cinema p {
      line-height: 1.7;
      color: #dfd5c4;
    }

    .guardian-cinema button {
      margin-top: 16px;
      padding: 13px 22px;
      background: #d6ae6a;
      color: #17283c;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  function addCinematicScreen() {
    if (document.querySelector(".guardian-cinema")) {
      return;
    }

    const main = document.querySelector("main");
    if (!main) return;

    const screen = document.createElement("section");
    screen.className = "guardian-cinema";

    screen.innerHTML = `
      <div class="chapter-label">
        The Kingdom Within · Volume I
      </div>

      <h2>Chapter I — The First Light</h2>

      <p>
        Beyond the familiar world, the kingdom of
        Aetheria awaits. Your journey as a Guardian
        is about to unfold.
      </p>

      <button type="button" id="cinema-continue">
        Continue Adventure
      </button>
    `;

    main.prepend(screen);

    screen.querySelector("#cinema-continue")
      .addEventListener("click", () => {
        screen.remove();
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      addCinematicScreen
    );
  } else {
    addCinematicScreen();
  }
  // Cinematic Chapter I illustration
  function addStoryIllustration() {
    const screen = document.querySelector(".guardian-cinema");
    if (!screen || screen.querySelector(".guardian-scene")) return;

    const scene = document.createElement("div");
    scene.className = "guardian-scene";

    scene.innerHTML = `
      <div class="guardian-scene-art">
        <span class="guardian-scene-symbol">✦</span>
      </div>
      <p class="guardian-scene-caption">
        Chapter I · The First Light
      </p>
    `;

    const heading = screen.querySelector("h2");
    if (heading) heading.after(scene);
  }

  const sceneStyles = document.createElement("style");
  sceneStyles.textContent = `
    .guardian-scene {
      margin: 20px 0;
    }

    .guardian-scene-art {
      min-height: 190px;
      border-radius: 14px;
      border: 1px solid #b9965e;
      background:
        radial-gradient(
          circle at 50% 45%,
          #b58b48 0%,
          #3a4050 35%,
          #111b2b 80%
        );
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .guardian-scene-symbol {
      font-size: 76px;
      color: #f6d58e;
      text-shadow: 0 0 28px #e3a94c;
    }

    .guardian-scene-caption {
      font-family: Georgia, serif;
      font-style: italic;
      color: #d9bf91;
      font-size: 13px;
      margin-top: 10px;
    }
  `;
  document.head.appendChild(sceneStyles);

  // Wait until the welcome panel has been created.
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      addStoryIllustration
    );
  } else {
    addStoryIllustration();
  }

})();
