// ===========================================================================
// Brainrot Store — rendering + promo code logic
// Reads catalog data from assets/data/brainrots.js (the BRAINROTS array).
// ===========================================================================

function formatPrice(price) {
  if (typeof price === "number") {
    return { amount: price.toLocaleString(), unit: "R$" };
  }
  return { amount: price, unit: "R$" };
}

function rarityClass(rarity) {
  return rarity.toLowerCase() === "og" ? "rarity-og" : "rarity-secret";
}

// ---------------------------------------------------------------------------
// Homepage grid
// ---------------------------------------------------------------------------

function renderGrid() {
  const grid = document.getElementById("card-grid");
  if (!grid) return;

  grid.innerHTML = BRAINROTS.map((b) => {
    const price = formatPrice(b.price);
    return `
      <article class="brainrot-card">
        <a href="details.html?id=${b.id}" class="card-media">
          <span class="rarity-tag ${rarityClass(b.rarity)}">${b.rarity}</span>
          <img src="${b.image}" alt="${b.name}" loading="lazy">
        </a>
        <div class="card-body">
          <a href="details.html?id=${b.id}" style="text-decoration:none;">
            <h3 class="card-name">${b.name}</h3>
          </a>
          <div class="card-price">${price.amount} <span class="unit">${price.unit}</span></div>
          <div class="card-actions">
            <a href="${ROBLOX_PROFILE_URL}" target="_blank" rel="noopener" class="btn btn-buy">Buy</a>
            <a href="error-444.html" class="btn btn-more">More…</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ---------------------------------------------------------------------------
// Details page
// ---------------------------------------------------------------------------

function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  return Number.isNaN(id) ? null : id;
}

function renderDetails() {
  const root = document.getElementById("details-root");
  if (!root) return;

  const id = getIdFromUrl();
  const brainrot = BRAINROTS.find((b) => b.id === id);

  if (!brainrot) {
    root.innerHTML = `
      <div>
        <h2 class="details-name">Brainrot not found</h2>
        <p class="details-desc">We couldn't find that item. Head back to the store and pick one from the list.</p>
        <a href="index.html" class="btn btn-buy">Back to Store</a>
      </div>
    `;
    return;
  }

  const price = formatPrice(brainrot.price);

  root.innerHTML = `
    <div class="details-media">
      <span class="rarity-tag ${rarityClass(brainrot.rarity)}" style="top:14px; left:14px;">${brainrot.rarity}</span>
      <img src="${brainrot.image}" alt="${brainrot.name}">
    </div>
    <div>
      <h1 class="details-name">${brainrot.name}</h1>
      <p class="details-desc">${brainrot.description}</p>

      <div class="details-price-row">
        <span class="details-price-amount" id="price-amount">${price.amount}</span>
        <span class="details-price-unit">${price.unit}</span>
      </div>

      <ul class="info-list">
        <li><span>Rarity</span><span>${brainrot.rarity}</span></li>
        <li><span>Item ID</span><span>#${brainrot.id}</span></li>
        <li><span>Delivery</span><span>Via Roblox purchase</span></li>
      </ul>

      <div class="promo-box">
        <h3>Have a promo code?</h3>
        <form class="promo-form" id="promo-form">
          <input type="text" class="promo-input" id="promo-input" placeholder="Enter code" autocomplete="off">
          <button type="submit" class="promo-submit">Apply</button>
        </form>
        <div class="promo-message" id="promo-message"></div>
      </div>

      <a href="${ROBLOX_PROFILE_URL}" target="_blank" rel="noopener" class="btn btn-buy btn-block" id="buy-btn">
        Buy on Roblox
      </a>
    </div>
  `;

  setupPromoForm();
}

// ---------------------------------------------------------------------------
// Promo code — informational only.
// This does NOT change pricing or unlock a "free item" flow, and never asks
// for a Roblox password, cookie, or auth code. It just confirms the code was
// received so a real promotion can be wired up later if you decide to run one.
// ---------------------------------------------------------------------------

const VALID_CODES = ["FREENOW"];

function setupPromoForm() {
  const form = document.getElementById("promo-form");
  const input = document.getElementById("promo-input");
  const message = document.getElementById("promo-message");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = input.value.trim().toUpperCase();

    message.classList.remove("show", "ok", "err");

    if (VALID_CODES.includes(code)) {
      message.textContent = "🎉 Code applied! Thanks for checking out the store.";
      message.classList.add("show", "ok");
    } else {
      message.textContent = "That code isn't valid or has expired.";
      message.classList.add("show", "err");
    }
  });
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  renderDetails();
});
