export const getRefs = () => ({
  nodeList: document.querySelector('.note-list'),
  noteEditorForm: document.querySelector('.note-editor'),
  noteInput: document.querySelectorAll('.note-editor__input'),
  filterNotes: document.querySelector('.search-form__input'),
  openEditor: document.querySelector('.material-icons'),
  dateCreateNote: document.querySelector('span .date'),
  formInput: document.querySelector('.micromodal-slide input'),
  formTextarea: document.querySelector('.micromodal-slide textarea'),
});
