const jobValidation = ({ title, mediaFile }) => {
  const errors = {};
  if (!title) {
    errors.title = 'Title is required';
  }

  if (!mediaFile) {
    errors.mediaFile = 'Media file is required';
  }
  return errors;
};

export default jobValidation;
