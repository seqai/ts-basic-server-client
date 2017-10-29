type methodType = "GET" | "POST" | "PUT" | "DELETE" | "UPDATE";

export default class HttpHelper {
    public static request(method: methodType, url: string, body: any = undefined, headers: { [key: string]: string } = undefined): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            if (headers) {
                Object.keys(headers).forEach(k => xhr.setRequestHeader(k, headers[k]));
            }
            xhr.open(method, url);
            xhr.send(body !== undefined ? JSON.stringify(body) : undefined);
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) {
                    return;
                }
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr);
                }
            };
        });
    }
}