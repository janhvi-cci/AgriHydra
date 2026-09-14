(function () {
  const HISTORY_KEY = 'agrihydra_chat_history';
  const OPEN_KEY = 'agrihydra_chat_open';
  const engine = window.AgriHydraChatEngine;

  const quickSuggestions = [
    'How can AgriHydra help my farm?',
    'How much subsidy can I get?',
    'Which polyhouse is right for me?',
    'How much does a polyhouse cost?',
    'How much water can I save?',
    'What is the ROI?',
    'Do you provide financing?',
    'What crops are suitable?',
    'How does IoT monitoring work?',
    'How do I contact AgriHydra?'
  ];

  const state = {
    open: false,
    messages: []
  };

  function getDefaultMessages() {
    return [{
      role: 'assistant',
      text: "Hello! I'm the AgriHydra Assistant 🌱\nI can help you understand polyhouses, drip irrigation, subsidies, financing, IoT monitoring, ROI, market linkage and how AgriHydra can help with your farm.\n\nWhat would you like to know?",
      timestamp: Date.now(),
      followUps: quickSuggestions.slice(0, 4)
    }];
  }

  function loadMessages() {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) {
          return parsed;
        }
      }
    } catch (error) {
      // ignore storage issues
    }
    return getDefaultMessages();
  }

  function saveMessages() {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(state.messages));
  }

  function saveOpenState() {
    localStorage.setItem(OPEN_KEY, String(state.open));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatTime(timestamp) {
    const date = new Date(timestamp || Date.now());
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  function buildPanel() {
    document.body.insertAdjacentHTML('beforeend', `
      <div id="agrihydra-chatbot-widget">
        <div id="agrihydra-chatbot-window" class="agrihydra-chatbot-window" aria-live="polite">
          <div class="agrihydra-chatbot-header">
            <div class="agrihydra-chatbot-header-main">
              <div class="agrihydra-chatbot-header-avatar">A</div>
              <div class="agrihydra-chatbot-title">
                <strong>AgriHydra Assistant</strong>
                <small><span class="agrihydra-chatbot-online-dot"></span> Your smart farming guide</small>
              </div>
            </div>
            <div class="agrihydra-chatbot-header-actions">
              <button class="agrihydra-chatbot-header-button agrihydra-chatbot-header-button--icon" type="button" id="agrihydra-chatbot-minimize" aria-label="Minimize chatbot">_</button>
              <button class="agrihydra-chatbot-header-button" type="button" id="agrihydra-chatbot-clear" aria-label="Clear chat">Clear</button>
              <button class="agrihydra-chatbot-header-button agrihydra-chatbot-header-button--icon" type="button" id="agrihydra-chatbot-close" aria-label="Close chatbot">×</button>
            </div>
          </div>
          <div id="agrihydra-chatbot-messages" class="agrihydra-chatbot-messages"></div>
          <div id="agrihydra-chatbot-suggestions" class="agrihydra-chatbot-suggestions"></div>
          <div class="agrihydra-chatbot-input-wrap">
            <form id="agrihydra-chatbot-form" class="agrihydra-chatbot-form">
              <textarea class="agrihydra-chatbot-input" id="agrihydra-chatbot-input" rows="1" aria-label="Type your question to the AgriHydra Assistant" placeholder="Ask about polyhouse, subsidy, financing..."></textarea>
              <button class="agrihydra-chatbot-send" type="submit" aria-label="Send message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 21l20-9L2 3l4 9-4 9z"/></svg>
              </button>
            </form>
          </div>
        </div>
        <button id="agrihydra-chatbot-launcher" class="agrihydra-chatbot-launcher agrihydra-chatbot-launcher--pulse" type="button" aria-label="Open AgriHydra Assistant" aria-controls="agrihydra-chatbot-window" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 18.5V7.6A2.6 2.6 0 0 1 7.6 5h8.8A2.6 2.6 0 0 1 19 7.6v7.8A2.6 2.6 0 0 1 16.4 18H10l-5 3v-2.5Z"/>
            <path d="M8 10h8M8 13h5"/>
          </svg>
        </button>
      </div>
    `);
  }

  function renderSuggestions() {
    const box = document.getElementById('agrihydra-chatbot-suggestions');
    if (!box) return;
    box.innerHTML = '';
  }

  function renderMessages() {
    const messagesEl = document.getElementById('agrihydra-chatbot-messages');
    if (!messagesEl) return;

    messagesEl.innerHTML = state.messages.map((message) => {
      const text = escapeHtml(message.text).replace(/\n/g, '<br>');
      const followUps = message.followUps && message.followUps.length ? `
        <div class="agrihydra-chatbot-followups">
          ${message.followUps.map((suggestion) => `
            <button class="agrihydra-chatbot-suggestion" type="button" data-suggestion="${escapeHtml(suggestion)}">${escapeHtml(suggestion)}</button>
          `).join('')}
        </div>
      ` : '';

      return `
        <div class="agrihydra-chatbot-message ${message.role}">
          <div class="agrihydra-chatbot-bubble">
            <div class="agrihydra-chatbot-text">${text}</div>
            ${followUps}
            <div class="agrihydra-chatbot-meta">
              <span>${formatTime(message.timestamp)}</span>
              ${message.role === 'assistant' ? '<button class="agrihydra-chatbot-bubble-copy" type="button">Copy</button>' : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    messagesEl.querySelectorAll('.agrihydra-chatbot-bubble-copy').forEach((button) => {
      button.addEventListener('click', async () => {
        const bubble = button.closest('.agrihydra-chatbot-bubble');
        const text = bubble.querySelector('.agrihydra-chatbot-text')?.innerText || '';
        try {
          await navigator.clipboard.writeText(text);
          const original = button.textContent;
          button.textContent = 'Copied';
          setTimeout(() => { button.textContent = original; }, 1200);
        } catch (error) {
          button.textContent = 'Copy failed';
          setTimeout(() => { button.textContent = 'Copy'; }, 1200);
        }
      });
    });

    messagesEl.querySelectorAll('[data-suggestion]').forEach((button) => {
      button.addEventListener('click', () => handleUserInput(button.dataset.suggestion));
    });

    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  }

  function showTypingIndicator() {
    const messagesEl = document.getElementById('agrihydra-chatbot-messages');
    if (!messagesEl) return;

    const existing = messagesEl.querySelector('.agrihydra-chatbot-typing-wrapper');
    if (existing) existing.remove();

    const typing = document.createElement('div');
    typing.className = 'agrihydra-chatbot-message assistant agrihydra-chatbot-typing-wrapper';
    typing.innerHTML = `
      <div class="agrihydra-chatbot-typing" aria-live="polite" aria-label="AgriHydra Assistant is typing">
        <span></span><span></span><span></span>
      </div>
    `;
    messagesEl.appendChild(typing);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTypingIndicator() {
    const messagesEl = document.getElementById('agrihydra-chatbot-messages');
    if (!messagesEl) return;
    const existing = messagesEl.querySelector('.agrihydra-chatbot-typing-wrapper');
    if (existing) existing.remove();
  }

  function setOpenState(nextState) {
    state.open = nextState;
    saveOpenState();

    const panel = document.getElementById('agrihydra-chatbot-window');
    const launcher = document.getElementById('agrihydra-chatbot-launcher');
    if (!panel || !launcher) return;

    panel.classList.toggle('is-open', state.open);
    launcher.setAttribute('aria-expanded', String(state.open));
    launcher.style.display = state.open ? 'none' : 'flex';
    renderSuggestions();
  }

  function clearChat() {
    state.messages = getDefaultMessages();
    saveMessages();
    renderMessages();
    renderSuggestions();
    setOpenState(true);
  }

  function handleUserInput(rawText) {
    const text = String(rawText || '').trim();
    if (!text) return;

    state.messages.push({ role: 'user', text, timestamp: Date.now() });
    saveMessages();
    renderMessages();
    showTypingIndicator();

    const reply = engine.generateReply(text, state.messages);

    setTimeout(() => {
      hideTypingIndicator();
      const assistantMessage = {
        role: 'assistant',
        text: reply.text,
        timestamp: Date.now(),
        followUps: reply.suggestions || []
      };
      state.messages.push(assistantMessage);
      saveMessages();
      renderMessages();
      renderSuggestions();
    }, 550 + Math.random() * 350);
  }

  function bindEvents() {
    const form = document.getElementById('agrihydra-chatbot-form');
    const input = document.getElementById('agrihydra-chatbot-input');
    const launcher = document.getElementById('agrihydra-chatbot-launcher');
    const closeButton = document.getElementById('agrihydra-chatbot-close');
    const minimizeButton = document.getElementById('agrihydra-chatbot-minimize');
    const clearButton = document.getElementById('agrihydra-chatbot-clear');

    launcher.addEventListener('click', () => {
      setOpenState(!state.open);
    });

    closeButton.addEventListener('click', () => {
      setOpenState(false);
    });

    minimizeButton.addEventListener('click', () => {
      setOpenState(false);
    });

    clearButton.addEventListener('click', () => {
      clearChat();
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      handleUserInput(input.value);
      input.value = '';
      input.style.height = 'auto';
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleUserInput(input.value);
        input.value = '';
        input.style.height = 'auto';
      }
    });

    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = `${Math.min(input.scrollHeight, 120)}px`;
    });
  }

  function init() {
    const hasStorage = localStorage.getItem(HISTORY_KEY);
    const savedOpen = localStorage.getItem(OPEN_KEY) === 'true';
    state.messages = loadMessages();
    state.open = hasStorage ? savedOpen : false;

    buildPanel();
    bindEvents();
    renderMessages();
    renderSuggestions();
    setOpenState(state.open);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
