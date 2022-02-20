class UrlHelper {
    static addQueryString = (url, field, value) => {
        if(!value) return url;

        url += !url.includes("?") ? `?` : `&`;
        url += `${field}=${value}`;
        return url;
    }
}

export default UrlHelper;