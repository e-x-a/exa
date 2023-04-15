(function() {

  /**
   * @type {string}
   */
  const eventName = 'app_breakpoint_change';

  /**
   * @type {string}
   */
  let currentBreakpoint = '';

  /**
   * @type {string}
   */
  let lastBreakpoint = '';

  window.addEventListener('resize', handleBreakpointChange, false);
  window.addEventListener('load', handleBreakpointChange, false);
  window.addEventListener('orientationchange', handleBreakpointChange, false);

  function handleBreakpointChange(_event) {
    currentBreakpoint = window.getComputedStyle(document.querySelector('body'), ':after').getPropertyValue('content').replace(/\"/g, '');
    if (currentBreakpoint !== lastBreakpoint) {
      dispatchBreakpointChangeEvent(currentBreakpoint);
      lastBreakpoint = currentBreakpoint;
    }
  }

  function dispatchBreakpointChangeEvent(viewport) {
    var event = new CustomEvent(eventName, {
      'bubbles': true,
      'cancelable': true,
      'detail': viewport
    });
    document.body.dispatchEvent(event);
  }
})();
