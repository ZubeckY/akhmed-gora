export default function loadComponent(url, selector) {
    const xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const components = document.querySelectorAll(selector)
            for (let i = 0; i < components.length; i++) {
                let htmlComp = components[i]
                htmlComp.innerHTML = xhr.responseText
            }
        }
    }
    xhr.send();
}