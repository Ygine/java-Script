export const getRefs = () => ({
  nodeList: document.querySelector('.note-list'),
  noteEditorForm: document.querySelector('#note-editor-modal .note-editor'),
  noteInput: document.querySelectorAll('.note-editor__input'),
  filterNotes: document.querySelector('.search-form__input'),
  openEditor: document.querySelector('.material-icons'),
  dateCreateNote: document.querySelector('span .date'),

  formInput: document.querySelector('#note-editor-modal2 input'),
  formTextarea: document.querySelector('#note-editor-modal2 textarea'),
  noteEditorForm2: document.querySelector('#note-editor-modal2 .note-editor'),
});

