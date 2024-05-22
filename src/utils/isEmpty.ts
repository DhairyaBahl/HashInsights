function isEmpty(value: any): boolean {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  // Check if the value is an empty string
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }

  // Check if the value is an array and it has no elements
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  // Check if the value is an object and it has no keys
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }

  // If none of the above conditions are met, the value is not empty
  return false;
}

export default isEmpty;