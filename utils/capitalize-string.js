function capitalizeString(string) {
    return string
        .split(' ')
        .map((name) => {
        if (name) {
            return name[0].toUpperCase() + name.slice(1).toLowerCase();
        }
        return '';
    })
        .join(' ');
}
export default capitalizeString;
//# sourceMappingURL=capitalize-string.js.map