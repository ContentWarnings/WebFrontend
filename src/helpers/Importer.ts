// References
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

import Backend from "../helpers/Backend";

/**
 * Static class for the data importer/exporter
 */
class Importer {
    private static bigint_any_base_to_base10(input: string, old_radix_smol: number) {
        let output = BigInt(0);
        let old_radix = BigInt(old_radix_smol);

        for (let i = 0; i < input.length; i++) {
            let current_num = BigInt(parseInt(input[i], 36));
            let exp = input.length - i - 1;

            // Warning: This casts kinda weirdly. So I have to be specific here.
            let add_to_total = current_num * BigInt(old_radix ** BigInt(exp));

            output += add_to_total;
        }

        return output;
    }


    private static base36_to_base4(input: string) {
        let base10 = this.bigint_any_base_to_base10(input, 36);
        let base3 = base10.toString(4);
        return base3;
    }


    private static base4_to_base36(input: string) {
        let base10 = this.bigint_any_base_to_base10(input, 4);
        let base36 = base10.toString(36);
        return base36;
    }


    /**
     * Import string -> localStorage
     * @param import_str A base36 string to import as an object.
     */
    public static import(import_str: string) {
        import_str = import_str.replaceAll("-", "");

        // Get current CW list
        let req: Promise<any> = Backend.getRequest("/names");

        req.then(resp => {
            let final: any = {};
            const cws: Array<string> = resp.jsonResponse.cws;

            // Data given -> JSON object
            let import_base4: string = this.base36_to_base4(import_str);

            for (let i = 0; i < cws.length; i++) {
                let current_value = import_base4[i];
                let current_cw: string = cws[i];

                // If something goes wrong, we default to 'show'.
                let action = "show";
                if (current_value === "1")
                    action = "show";
                else if (current_value === "2")
                    action = "flag";
                else if (current_value === "3")
                    action = "hide";

                final[current_cw] = action;
            }

            // Set JSON to LocalStorage
            localStorage.setItem("cw", JSON.stringify(final));
        });
    }


    /**
     * Initialize CW localStorage.
     */
    public static init() {
        // Get current CW list
        let req: Promise<any> = Backend.getRequest("/names");

        req.then(resp => {
            let final: any = {};
            const cws: Array<string> = resp.jsonResponse.cws;

            for (let i = 0; i < cws.length; i++) {
                let current_cw: string = cws[i];
                final[current_cw] = "show";
            }

            console.log(final);

            // Set JSON to LocalStorage
            localStorage.setItem("cw", JSON.stringify(final));
        });
    }


    /**
     * localStorage -> import string
     */
    
    private static export_raw() {
        // localStorage only stores UTF-16 strings.
        let local_str: any = localStorage.getItem("cw");
        if (!local_str)
            return;

        let local_data = JSON.parse(local_str);
        let cw_list = Object.keys(local_data);
        let cw_mappings = Object.values(local_data);

        let output = "";

        for (let i = 0; i < cw_list.length; i++) {
            let resp = "1";
            
            if (cw_mappings[i] === "flag")
                resp = "2"
            else if (cw_mappings[i] === "hide")
                resp = "3"
            
            output += resp;
        }

        // Now, we have a base3 string for export, but we need it as base36.
        let base36 = this.base4_to_base36(output);

        return base36;
    }

    public static export() {
        let output = "";
        let raw: string = "";
        let export_raw = this.export_raw();

        if (export_raw)
            raw = export_raw;

        let period: number = 4;

        for (let i = 0; i < raw.length; i++) {
            output += raw[i];

            if (i % period === period - 1)
                output += "-";
        }

        return output;
    }
}

export default Importer;
