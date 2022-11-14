template.defaults.imports.dataFormat = function (date) {
    const dt = new Date(date)
    let y = dt.getFullYear();
    let m = padZero(dt.getMonth() + 1);
    let d = padZero(dt.getDate());
    let hh = padZero(dt.getHours());
    let mm = padZero(dt.getMinutes());
    let ss = padZero(dt.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function padZero(v) {
    return v > 9 ? v : '0' + v;
}