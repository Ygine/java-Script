import './sass/main.scss';
import Notyf from 'notyf';
import MicroModal from 'micromodal';
import moment from 'moment';
import {
  NOTIFICATION_MESSAGES,
  NOTE_ACTIONS,
  PRIORITY_TYPES,
} from './js/utils/constants';
import * as api from './services/api';
import Notepad from './js/notepad-module';
import { getRefs } from './js/view';
import './js/theme';
import 'notyf/dist/notyf.min.css';
import productTamplate from './templates/product.hbs';

const refs = getRefs();
const notyf = new Notyf();
const notepad = new Notepad();

notepad
  .getPost()
  .then(posts => {
    return posts.map(item => productTamplate(item)).join('');
  })
  .then(ollNotes => {
    refs.nodeList.innerHTML = ollNotes;
  })
  .catch(err => {
    console.log(err);
  });

notepad
  .updateNote(1, { title: 'super title' })
  .then(res => console.log('redy', res));

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

  const item = {
    title: input.value,
    body: textarea.value,
    priority: Notepad.getPriorityName(PRIORITY_TYPES.LOW),
    date: moment().format('LLLL'),
  };

  notepad
    .saveNote(item)
    .then(value => {
      addListItem(refs.nodeList, value);
      notyf.confirm(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    })
    .catch(err => notyf.alert(err));

  MicroModal.close('note-editor-modal');
  e.currentTarget.reset();
};

const createNoteListProducts = products => {
  const marcup = products.map(item => productTamplate(item)).join('');
  return marcup;
};

const AddNodesInNodeList = function(value) {
  refs.nodeList.innerHTML = '';
  refs.nodeList.innerHTML = createNoteListProducts(value);
};

const removeListItem = element => {
  const parentNode = element.closest('.note-list__item');
  const id = parentNode.dataset.id;

  notepad
    .deleteNote(id)
    .then(notes => {
      AddNodesInNodeList(notes);
      notyf.confirm(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
    })
    .catch(err => notyf.alert(err));
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
    .then(value => {
      AddNodesInNodeList(value);
    })
    .catch(err => console.log(err));
};

const handelShowForm = e => {
  MicroModal.show('note-editor-modal');
};

refs.nodeList.addEventListener('click', handleDeleteListItem);
refs.noteEditorForm.addEventListener('submit', handelSubmitForm);
refs.filterNotes.addEventListener('keyup', handelFilterItems);
refs.openEditor.addEventListener('click', handelShowForm);

//когда в WebPack я импортирую шаблон, то Handlebars-loader делает компиляцию (Handlebars.compile(fn)) и возвращает функцию;
