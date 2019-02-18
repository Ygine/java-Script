import './sass/main.scss';
import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './js/utils/constants';
import initialNotes from './assets/notes.json';
import Notepad from './js/notepad-module';
import { getRefs, createListItem, renderNoteList } from './js/view';

const refs = getRefs();

const notepad = new Notepad(initialNotes);

const addListItem = (listRef, note) => {
  listRef.append(createListItem(note));
};

const handelSubmitForm = e => {
  e.preventDefault();
  const [input, textarea] = e.target.elements;
  if (input.value === '' || textarea.value === '') {
    return alert('Необходимо заполнить все поля!');
  }

  const item = notepad.saveNote(input.value, textarea.value);
  addListItem(refs.nodeList, item);

  e.currentTarget.reset();
};

const removeListItem = element => {
  const parentNode = element.closest('.note-list__item');
  const id = parentNode.dataset.id;
  notepad.deleteNote(id); //удалили заметку из модели.
  parentNode.remove(); // удаляем саму заметку из DOM.
};

const handleDeleteListItem = ({ target }) => {
  if (target.nodeName !== 'I') return;

  const action = target.closest('button').dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      removeListItem(target);
      break;
    case NOTE_ACTIONS.EDIT:
      break;
    default:
      console.log(false);
  }
};

const handelFilterItems = e => {
  const inputValue = e.target.value;
  const filterNote = notepad.filterNotes(inputValue);

  renderNoteList(refs, filterNote);
};

renderNoteList(refs, initialNotes);

refs.nodeList.addEventListener('click', handleDeleteListItem);
refs.noteEditorForm.addEventListener('submit', handelSubmitForm);
refs.filterNotes.addEventListener('input', handelFilterItems);
