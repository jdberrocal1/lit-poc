function capitalizeString(string: string) {
  return string
    .split(' ')
    .map((name: string) => {
      if (name) {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
      }
      return '';
    })
    .join(' ');
}

export default capitalizeString

