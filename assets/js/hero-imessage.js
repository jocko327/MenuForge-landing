(function () {
  var phone = document.getElementById('sms-phone');
  var thread = document.getElementById('sms-thread');
  if (!phone || !thread) return;

  var when = new Date();
  when.setMonth(when.getMonth() - 4);
  var month = when.toLocaleString('en-US', { month: 'long' });

  var script = [
    { at: 400, who: 'owner', text: 'I just talked to Jenny from the pizza shop down the road. She told me that her mozzarella cheese just spiked. Do we need to be worried?' },
    { at: 2600, who: 'typing' },
    { at: 3900, who: 'chef', text: 'Maybe... Let me check.' },
    { at: 5000, who: 'typing' },
    { at: 6400, who: 'chef', text: 'Looks like it costs 31% more than it did back in ' + month + '.' },
    { at: 8400, who: 'owner', text: 'Oh wow, how did we miss that? Can you work on re-costing all of our recipes that use mozzarella?' },
    { at: 10400, who: 'typing' },
    { at: 11800, who: 'chef', text: "I'll try. We use that a lot, and this spreadsheet is impossible to navigate." },
    { at: 13800, who: 'owner', text: 'Please do your best.' }
  ];

  function pin() {
    thread.scrollTop = thread.scrollHeight;
  }

  function addBubble(who, text) {
    var p = document.createElement('p');
    p.className = 'sms-bubble ' + (who === 'owner' ? 'is-owner' : 'is-chef');
    p.textContent = text;
    thread.appendChild(p);
    pin();
  }

  function showTyping() {
    var p = document.createElement('p');
    p.className = 'sms-bubble is-chef is-typing';
    p.setAttribute('aria-label', 'Chef John is typing');
    p.innerHTML = '<span></span><span></span><span></span>';
    thread.appendChild(p);
    pin();
  }

  function hideTyping() {
    var dots = thread.querySelector('.is-typing');
    if (dots) dots.remove();
  }

  function showAll() {
    script.forEach(function (step) {
      if (step.who === 'owner' || step.who === 'chef') addBubble(step.who, step.text);
    });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showAll();
    return;
  }

  var started = false;
  function play() {
    if (started) return;
    started = true;
    script.forEach(function (step) {
      window.setTimeout(function () {
        if (step.who === 'typing') {
          showTyping();
          return;
        }
        hideTyping();
        addBubble(step.who, step.text);
      }, step.at);
    });
  }

  if (!('IntersectionObserver' in window)) {
    play();
    return;
  }

  var watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      play();
      watcher.disconnect();
    });
  }, { threshold: 0.4 });
  watcher.observe(phone);
})();
