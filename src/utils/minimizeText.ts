export function minimizeText(
  text: string,
  maxLength: number,
  showMoreCall?: string,
) {
  if (text.length <= maxLength) {
    return text
  }

  const lastSpaceIndex = text.lastIndexOf(' ', maxLength)

  if (lastSpaceIndex === -1) {
    return text.substr(0, maxLength) + showMoreCall
  } else {
    return text.substr(0, lastSpaceIndex) + showMoreCall
  }
}
