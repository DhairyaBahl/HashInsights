const contentFormatter = (content: string): string[] => {
  // Remove leading and trailing whitespace
  content = content.trim();

  // Split the content into paragraphs
  const paragraphs = content.split(/\r?\n\r?\n/);

  // Format each paragraph
  const formattedParagraphs = paragraphs.map((paragraph) => {
    // Split the paragraph into sentences
    const sentences = paragraph.split(/\./);

    // Capitalize the first sentence of each paragraph
    sentences[0] = sentences[0].charAt(0).toUpperCase() + sentences[0].slice(1);

    // Join the sentences back into a paragraph
    return sentences.join(". ");
  });

  return formattedParagraphs;
}

export default contentFormatter;