function openCaseStudyFromHash() {
  const id = window.location.hash.slice(1);
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
}
window.addEventListener('hashchange', openCaseStudyFromHash);
document.querySelectorAll('a[href="#daegu-details"], a[href="#bank-details"], a[href="#airbnb-details"], a[href="#olist-details"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (target instanceof HTMLDetailsElement) target.open = true;
  });
});
openCaseStudyFromHash();
