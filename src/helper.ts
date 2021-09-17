export const dateHelper = (date: string) => {
  const dateSplit = date.split('')
  const dateFormate = `${dateSplit[5]}${dateSplit[6]}-${dateSplit[8]}${dateSplit[9]}-${dateSplit[0]}${dateSplit[1]}${dateSplit[2]}${dateSplit[3]}`
  return dateFormate
}
