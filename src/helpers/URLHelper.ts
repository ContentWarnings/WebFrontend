// References
// https://developer.mozilla.org/en-US/docs/Web/API/History_API

/**
 * Static class wrapping URL-based transformations
 */
class URLHelper {
    /**
     * Gets a value from the URL (GET parameters)
     * @param param Search parameter to base response off of
     * @param def The default value.
     */
    public static populateDefaultFromURL(param: string, def: string) {
        let url_param = (new URL(window.location.href)).searchParams.get(param);
        let text_default = def;
        if (url_param)
        text_default = url_param;

        return text_default
    }

    /**
     * Edits a search (GET) paramater in the URL.
     * @param param Search parameter to edit.
     * @param value The new value of the parameter.
     */
    
    public static editURLByParam(param: string, value: string) {
        let url: URL = new URL(window.location.href);
        url.searchParams.set(param, value);

        window.history.pushState({}, document.title, url.search);
    }
}

export default URLHelper;
