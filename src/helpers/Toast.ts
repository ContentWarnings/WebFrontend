// References
// https://stackoverflow.com/a/71913800

/**
 * Static class for non-React custom toast library.
 */
class Toast {
    public static toast(msg: string) {
        // Create toast stylings.
        let toast = document.createElement("div");
        toast.innerText = msg;
        toast.style.paddingLeft = "20px";
        toast.style.paddingRight = "20px";
        toast.style.paddingTop = "10px";
        toast.style.paddingBottom = "10px";
        toast.style.left = "20px";
        toast.style.bottom = "20px";
        toast.style.zIndex = "4096";
        toast.style.fontSize = "16px";
        toast.className = "text-white transition duration-100 ease-in-out bg-secondary-3 fixed w-fit rounded-lg opacity-100";

        // Create close button.
        let close = document.createElement("button");
        close.className = "text-md text-light-1 transition duration-100 ease-in-out hover:opacity-50";
        close.style.marginLeft = "10px";
        close.style.fontFamily = "monospace";
        close.style.fontSize = "21px";
        close.onclick = (evt) => {
            if (evt && evt.target && evt.target) {
                const eventTarget = evt.target as HTMLElement;
                if (eventTarget && eventTarget.parentElement) {
                    const parentElement = eventTarget.parentElement;
                    parentElement.style.opacity = "0";
                    setTimeout(_ => {parentElement.remove()}, 5000);
                }
            }
        }
        close.innerText = "✖︎︎";

        toast.append(close);

        document.body.prepend(toast);

        setTimeout(_ => {
            toast.style.opacity = "0";
            setTimeout(_ => {toast.remove()}, 5000);
        }, 8000);
    }
}

export default Toast;
