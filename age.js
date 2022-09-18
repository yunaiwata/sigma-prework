function calcAge(date) {
  const currentDate = new Date();
  const birthDate = new Date(date);
  let year = currentDate.getFullYear() - birthDate.getFullYear();
  let month = currentDate.getMonth() - birthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    return year - 1;
  }
  return year;
}

const testDate = new Date("1999-12-22");
console.log(calcAge(testDate));
