export type ToastType = "success" | "info" | "error";
export type ToastPayload = { id: number; message: string; type: ToastType };

const EVENT = "app-toast";

/** Tampilkan notifikasi toast dari komponen klien mana pun. */
export function toast(message: string, type: ToastType = "success") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<Omit<ToastPayload, "id">>(EVENT, {
      detail: { message, type },
    })
  );
}

export function onToast(handler: (p: Omit<ToastPayload, "id">) => void) {
  const listener = (e: Event) => handler((e as CustomEvent).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}

/** Utilitas unduh file di sisi klien (tanpa backend). */
export function downloadFile(
  filename: string,
  content: string,
  mime = "text/plain;charset=utf-8"
) {
  if (typeof window === "undefined") return;
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
