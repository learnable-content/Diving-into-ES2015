export function strip(pieces, ...value) {
  let str = '';

  pieces.forEach((piece, index) => {
    let val = value[index] || '';
    str += piece + val;
  });

  return str.replace(/^\s*/gm, '');
}
