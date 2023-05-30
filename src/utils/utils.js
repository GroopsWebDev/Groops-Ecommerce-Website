export function generateCode() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getRemainingTime(endDate) {
  const end = new Date(endDate);
  const now = new Date();
  const timeLeft = end.getTime() - now.getTime();
  if (timeLeft < 0) {
    return '0 days 0 hours';
  }
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  return `${daysLeft} days ${hoursLeft} hours`;
}


