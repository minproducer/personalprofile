
/**
 * Handles theme transitions by adding and removing a class
 * during theme changes to trigger CSS transitions smoothly
 */
export function handleThemeTransition(callback: () => void) {
  // Add transition class
  document.documentElement.classList.add('theme-transition');
  
  // Execute the theme change
  callback();
  
  // Remove transition class after transitions are complete
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-transition');
  }, 300);
}
