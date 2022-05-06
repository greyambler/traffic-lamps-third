export function saveCurrentLamps(currentIndexLight: number, timeend: number) {
  localStorage.setItem(
    "curLampa",
    JSON.stringify({
      idLampa: currentIndexLight,
      timeCur: timeend,
    })
  );
  console.log(
    `${currentIndexLight} step ${
      timeend / 1000
    } \t\t${new Date().toLocaleTimeString()}`
  );
}
