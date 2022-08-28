export const cutText = (content: string, maxLength: number) => {
  if (
    content.length > 1 &&
    maxLength > 0
  ) {
    if (content.length <= maxLength) return content;
    if (content.lastIndexOf(' ') === -1) return content
    return content.slice(0, content.lastIndexOf(' ', maxLength + 1)) + '...';
  }
  return 'Error';
};
