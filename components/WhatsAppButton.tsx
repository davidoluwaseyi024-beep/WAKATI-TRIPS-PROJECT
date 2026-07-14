import { socialLinks } from "@/lib/data";

export function WhatsAppButton() {
  const whatsappHref = socialLinks.find((s) => s.platform === "whatsapp")!.href;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Wakati Trips on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-paper shadow-card transition-transform duration-150 hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4.02 8.37 4.02 15c0 2.22.6 4.29 1.64 6.08L4 29l8.13-1.63A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.7c-1.9 0-3.68-.53-5.2-1.44l-.37-.22-4.83.97.97-4.7-.24-.39A9.6 9.6 0 0 1 6.32 15c0-5.35 4.35-9.7 9.7-9.7 5.34 0 9.68 4.35 9.68 9.7 0 5.34-4.34 9.7-9.68 9.7Zm5.31-7.27c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.65.14-.2.3-.75.94-.92 1.14-.17.2-.34.22-.63.08-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.45-1.72-1.62-2.02-.17-.3-.02-.46.13-.6.13-.13.29-.35.44-.52.15-.17.2-.3.29-.5.1-.19.05-.36-.02-.51-.08-.15-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.3-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.95.15.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34Z" />
      </svg>
    </a>
  );
}
