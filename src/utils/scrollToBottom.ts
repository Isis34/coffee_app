export function scrollToBottom(node: HTMLElement) {
  const observer = new MutationObserver(() => {
    // timeout to wait element rendering
    setTimeout(() => {
      node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
    }, 200);
  });

  observer.observe(node, { childList: true, subtree: true });

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
