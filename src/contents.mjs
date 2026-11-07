export const contentsLevels = ['Half', 'More than half', 'Less than half'];

export function getContentsLevel(item) {
  return contentsLevels.includes(item?.contentsLevel) ? item.contentsLevel : null;
}

export function withContentsLevel(item, value) {
  if (value !== null && !contentsLevels.includes(value)) {
    throw new Error('Invalid item contents level.');
  }
  return {...item, contentsLevel: value};
}
