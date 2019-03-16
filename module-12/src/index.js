import './sass/main.scss';
import Notyf from 'notyf';
import MicroModal from 'micromodal';
import moment from 'moment';
import {
  NOTIFICATION_MESSAGES,
  NOTE_ACTIONS,
  PRIORITY_TYPES,
} from './js/utils/constants';
import initialNotes from './assets/notes.json';
import Notepad from './js/notepad-module';
import { getRefs } from './js/view';
import './js/theme';
import storage from './js/storage';
import 'notyf/dist/notyf.min.css';
import productTamplate from './templates/product.hbs';

const refs = getRefs();
const notyf = new Notyf();
const localNotes = storage.load('notes');
const notepad = new Notepad(localNotes ? localNotes : initialNotes);
const newInitialNotes = [...initialNotes];

// const fillInFormFromLocaleStorage = form => {
//   const [input, textarea] = form.elements;
//   const dataFromLocale = storage.load('form');
//   if (!dataFromLocale) return;
//   input.value = dataFromLocale.title;
//   textarea.value = dataFromLocale.body;
// };

// fillInFormFromLocaleStorage(refs.noteEditorForm);

const addPriorityName = Notes => {
  return Notes.forEach(item => {
    item.priority = Notepad.getPriorityName(item.priority);
    item.date = moment().format('LLLL');
  });
};

addPriorityName(newInitialNotes);

const createNoteListProducts = products => {
  const marcup = products.map(item => productTamplate(item)).join('');
  return marcup;
};

refs.nodeList.innerHTML = localNotes
  ? createNoteListProducts(localNotes)
  : createNoteListProducts(newInitialNotes);

const addListItem = (listRef, note) => {
  const addNotes = productTamplate(note);
  listRef.insertAdjacentHTML('beforeend', addNotes);
};

const handelSubmitForm = e => {
  e.preventDefault();
  const [input, textarea] = e.target.elements;
  if (input.value === '' || textarea.value === '') {
    return notyf.alert(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }

  storage.save('form', { title: input.value, body: textarea.value });

  notepad.saveNote(input.value, textarea.value).then(value => {
    addListItem(refs.nodeList, value);
    notyf.confirm(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
  });

  MicroModal.close('note-editor-modal');
  e.currentTarget.reset();
};

const removeListItem = element => {
  const parentNode = element.closest('.note-list__item');
  const id = parentNode.dataset.id;
  notepad
    .deleteNote(id)
    .then(result => {
      AddNodesInNodeList(result);
      notyf.confirm(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
    })
    .catch(err => console.log(err));
};

// const changePriority = increaseNotePriority => {
//   const element = increaseNotePriority.closest('.note-list__item');
//   const id = element.dataset.id;
//   const priority = ['Low', 'Normal', 'Hight'];

//   notepad.updateNotePriority(id, priority[curentPriority]);

//   refs.nodeList.innerHTML = localNotes
//     ? createNoteListProducts(localNotes)
//     : createNoteListProducts(newInitialNotes);
// };

const handleDeleteListItem = ({ target }) => {
  if (target.nodeName !== 'I') return;
  const action = target.closest('button').dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      removeListItem(target);
      break;
    case NOTE_ACTIONS.EDIT:
      break;
    case NOTE_ACTIONS.INCREASE_PRIORITY:
      break;
    case NOTE_ACTIONS.DECREASE_PRIORITY:
      break;
    default:
      console.log(false);
  }
};

const handelFilterItems = e => {
  const inputValue = e.target.value;
  notepad
    .filterNotes(inputValue)
    .then(value => AddNodesInNodeList(value))
    .then(res => console.log(res));
};

const AddNodesInNodeList = function(value) {
  refs.nodeList.innerHTML = '';
  refs.nodeList.innerHTML = createNoteListProducts(value);
};

const handelShowForm = e => {
  // fillInFormFromLocaleStorage(refs.noteEditorForm);
  MicroModal.show('note-editor-modal');
};

refs.nodeList.addEventListener('click', handleDeleteListItem);
refs.noteEditorForm.addEventListener('submit', handelSubmitForm);
refs.filterNotes.addEventListener('keyup', handelFilterItems);
refs.openEditor.addEventListener('click', handelShowForm);

//когда в WebPack я импортирую шаблон, то Handlebars-loader делает компиляцию (Handlebars.compile(fn)) и возвращает функцию;
