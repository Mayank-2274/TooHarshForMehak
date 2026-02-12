//Integrating Flagsmith
function enabledarkmode() {
    document.body.style.filter = "invert(1)"
  }
  async function checkDark() {
    // init flagsmith
    await flagsmith.init({
      environmentID: environment_id
    });
    const is_dark = flagsmith.getValue("dark_mode", {
      fallback: false
    });
    console.log("[FLAGSMITH] Is dark mode enabled:- ", is_dark)
    if (!is_dark) return;
    if (is_dark) {
      enabledarkmode()
    }
  }
  checkDark()

var pos = document.documentElement;

// Initialize flashlight at button position
window.addEventListener('load', () => {
  const button = document.querySelector('.btn');
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  pos.style.setProperty('--x', centerX + 'px');
  pos.style.setProperty('--y', centerY + 'px');
});

pos.addEventListener('mousemove', e =>{
  pos.style.setProperty('--x',e.clientX + 'px')
  pos.style.setProperty('--y',e.clientY + 'px')
})

// Touch support for mobile - traces flashlight
pos.addEventListener('touchmove', e =>{
  e.preventDefault();
  const touch = e.touches[0];
  pos.style.setProperty('--x', touch.clientX + 'px')
  pos.style.setProperty('--y', touch.clientY + 'px')
}, {passive: false})

pos.addEventListener('touchstart', e =>{
  const touch = e.touches[0];
  pos.style.setProperty('--x', touch.clientX + 'px')
  pos.style.setProperty('--y', touch.clientY + 'px')
})


//Linking to Yes page
function myFunction() {
    window.location.href = "../Page 8/no3.html";
}