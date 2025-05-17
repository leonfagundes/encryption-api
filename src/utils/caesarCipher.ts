const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function caesarEncrypt(text: string, shift: number): string {
  return text.split('').map(char => {
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);

    if (index === -1) return char; 

    const newIndex = (index + shift + 26) % 26;
    const newChar = alphabet[newIndex];

    return char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
  }).join('');
}

export function caesarDecrypt(text: string, shift: number): string {
  return caesarEncrypt(text, -shift);
}
