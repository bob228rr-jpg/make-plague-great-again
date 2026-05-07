const copyButton = document.querySelector(".copy-ca");

copyButton?.addEventListener("click", async () => {
  const value = copyButton.dataset.copy || "";
  try {
    await navigator.clipboard.writeText(value);
    copyButton.textContent = "copied";
    window.setTimeout(() => {
      copyButton.textContent = value;
    }, 900);
  } catch {
    copyButton.textContent = "copy failed";
  }
});
