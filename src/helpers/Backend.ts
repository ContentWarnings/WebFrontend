// References
// https://www.typescriptlang.org/docs/handbook/2/classes.html
// https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

/**
 * Wraps a HTTP status code and JSON response for a given backend hit
 */
class BackendResponse {
    public statusCode: number;
    public jsonResponse: any;

    constructor(statusCode: number, jsonResponse: any) {
        this.statusCode = statusCode;
        this.jsonResponse = jsonResponse;
    }
}

/**
 * Static class wrapping important backend functionality
 */
class Backend {
    private static MAIN_ENDPOINT: string = "https://api.moviementor.app/";

    private static getAuthHeader(bearerToken: string): any {
        const userLifetime: number = 604800;
        if (bearerToken === "") {
            const getFromStorage = localStorage.getItem("token");
            if (getFromStorage) {
                const issuedDate = JSON.parse(atob(getFromStorage.split(".")[1])).issued;
                // If the token expired, delete it.
                if (issuedDate + userLifetime < Date.now()/1000 && issuedDate < Date.now()/1000) {
                    localStorage.setItem("token", "");
                }
                bearerToken = getFromStorage;
            }
        }
        
        return (bearerToken === "") ? {} : {"Authorization": `Bearer ${bearerToken}`};
    }

    /**
     * Ex:
     * let response = await Backend.getRequest("user", "<bearer_token>");
     * @param path
     * @param bearerToken pass in empty string if unneeded (or you wish to use value in localStorage)
     */
    public static async getRequest(path: string, bearerToken: string = "") {
        const reqHeaders = this.getAuthHeader(bearerToken);
        reqHeaders["Access-Control-Allow-Origin"] = "*";

        const requestResponse = await fetch(this.MAIN_ENDPOINT + path, {
            method: "get",
            headers: reqHeaders,
            mode: "cors"
        });

        const jsonResponse = await requestResponse.json();
        return new BackendResponse(requestResponse.status, jsonResponse);
    }

    /**
     * Ex:
     * const movieInfo = {
     *      "name": "Murder",
     *      "movie_id": 420, 
     *      "time": [[1, 2], [3, 4]],
     *      "desc": "Example"
     * };
     * let response = await Backend.postRequest("movie", movieInfo, "<bearer_token>");
     * @param path
     * @param jsonBody JSON response
     * @param bearerToken pass in empty string if unneeded (or you wish to use value in localStorage)
     */
    public static async postRequest(path: string, jsonBody?: object, bearerToken: string = "") {
        var reqHeaders = this.getAuthHeader(bearerToken);
        reqHeaders["Content-Type"] = "application/json";
        reqHeaders["Access-Control-Allow-Origin"] = "*";

        const reqBody = (jsonBody === undefined) ? null : JSON.stringify(jsonBody);
        
        const requestResponse = await fetch(this.MAIN_ENDPOINT + path, {
            method: "post",
            headers: reqHeaders,
            body: reqBody,
            mode: "cors",
        });

        const jsonResponse = await requestResponse.json();
        return new BackendResponse(requestResponse.status, jsonResponse);
    }
}

export default Backend;
