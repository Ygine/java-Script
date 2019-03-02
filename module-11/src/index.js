import './sass/main.scss';
import Notyf from 'notyf';
import MicroModal from 'micromodal';
import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './js/utils/constants';
import initialNotes from './assets/notes.json';
import Notepad from './js/notepad-module';
import { getRefs } from './js/view';
import 'notyf/dist/notyf.min.css';
import productTamplate from './templates/product.hbs';

const refs = getRefs();

const notepad = new Notepad(initialNotes);
var notyf = new Notyf();

const createNoteListProducts = products => {
  const marcup = products.map(item => productTamplate(item)).join('');
  return marcup;
};

refs.nodeList.innerHTML = createNoteListProducts(initialNotes);

const addListItem = (listRef, note) => {
  const addNotes = productTamplate(note);
  listRef.insertAdjacentHTML('beforeend', addNotes);
};

const handelSubmitForm = e => {
  e.preventDefault();
  const [input, textarea] = e.target.elements;
  if (input.value === '' || textarea.value === '') {
    return notyf.alert('Необходимо заполнить все поля!');
  }

  const item = notepad.saveNote(input.value, textarea.value);
  addListItem(refs.nodeList, item);

  MicroModal.close('note-editor-modal');

  notyf.confirm('Заметка успешно добавлена!');
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

  createNoteListProducts(filterNote);
};

const handelShowForm = e => {
  MicroModal.show('note-editor-modal');
};

// renderNoteList(refs, initialNotes);

refs.nodeList.addEventListener('click', handleDeleteListItem);
refs.noteEditorForm.addEventListener('submit', handelSubmitForm);
refs.filterNotes.addEventListener('input', handelFilterItems);
refs.openEditor.addEventListener('click', handelShowForm);

//когда в WebPack я импортирую шаблон, то Handlebars-loader делает компиляцию (Handlebars.compile(fn)) и возвращает функцию;
