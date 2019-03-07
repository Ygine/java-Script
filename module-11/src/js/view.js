export const getRefs = () => ({
  nodeList: document.querySelector(".note-list"),
  noteEditorForm: document.querySelector(".note-editor"),
  noteInput: document.querySelectorAll(".note-editor__input"),
  filterNotes: document.querySelector(".search-form__input"),
  openEditor: document.querySelector(".material-icons")
});
