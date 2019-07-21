import './sass/main.scss';
import Notyf from 'notyf';
import MicroModal from 'micromodal';
import {
  NOTIFICATION_MESSAGES,
  NOTE_ACTIONS,
  PRIORITY_TYPES,
  EVENT_SUBMIT
} from './js/utils/constants';
import Notepad from './js/notepad-module';
import { getRefs } from './js/view';
import './js/theme';
import storage from './js/storage';
import 'notyf/dist/notyf.min.css';
import productTamplate from './templates/product.hbs';

const refs = getRefs();
const notyf = new Notyf();
const localNotes = storage.load('notes');
const notepad = new Notepad(localNotes ? localNotes : []);

const createNoteListProducts = products => {
  const marcup = products.map(item => productTamplate(item)).join('');
  return marcup;
};

refs.nodeList.innerHTML = localNotes
  ? createNoteListProducts(localNotes) : null;

const addListItem = (listRef, note) => {
  const addNotes = productTamplate(note);
  listRef.insertAdjacentHTML('beforeend', addNotes);
};

const editItem = (target) => {
  const parentNode = target.closest('.note-list__item');
  const id = parentNode.dataset.id;
  const title = parentNode.querySelector('.note__title').textContent.trim();
  const body = parentNode.querySelector('.note__body').textContent.trim();
  
  MicroModal.show('note-editor-modal2');

  refs.formInput.value = title;
  refs.formTextarea.value = body;

  const handelSubmitFormUpdate = (e) => {
    e.preventDefault();
    
    const item = {
      title: refs.formInput.value,
      body: refs.formTextarea.value
    };

    notepad.updateNoteContent(id, item).then(notes => {
      AddNodesInNodeList(notes);
    });

    MicroModal.close('note-editor-modal2');
  }

  refs.noteEditorForm2.addEventListener('submit', handelSubmitFormUpdate);
}

const handelSubmitForm = e => {
  e.preventDefault();
  const [input, textarea] = e.target.elements;
  if (input.value === '' || textarea.value === '') {
    return notyf.alert(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }

  notepad.saveNote(input.value, textarea.value).then(value => {
    addListItem(refs.nodeList, value);
    notyf.confirm(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
  });

  MicroModal.close('note-editor-modal');
  e.currentTarget.reset();
};

const removeListItem = target => {
  const parentNode = target.closest('.note-list__item');
  const id = parentNode.dataset.id;

  notepad
    .deleteNote(id)
    .then(result => {
      parentNode.remove();
      notyf.confirm(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
    })
    .catch(err => console.log(err));
};

const changePriority = (id, item) => {
  notepad.updateNotePriority(id, item).then(notes => {
    AddNodesInNodeList(notes);
  });
}

const checkPriority = (action, target) => {
  const parentNode = target.closest('.note-list__item');
  const id = parentNode.dataset.id;

  const notePriority = notepad.findNoteById(id).priority;

  if (action === "increase-priority") {
    switch (notePriority) {
      case "Low":
        const normName = Notepad.getPriorityName(PRIORITY_TYPES.NORMAL);
        changePriority(id, normName);
        break;
      case "Normal":
        const nameHigh = Notepad.getPriorityName(PRIORITY_TYPES.HIGH);
        changePriority(id, nameHigh);
        break;
    }
  } else {
    switch (notePriority) {
      case "Normal":
        const priority1 = Notepad.getPriorityName(PRIORITY_TYPES.LOW);
        changePriority(id, priority1);
        break;
      case "High":
        const priority2 = Notepad.getPriorityName(PRIORITY_TYPES.NORMAL);
        changePriority(id, priority2);
        break;
    }
  }
}

const handleDatasetAction = ({ target }) => {
  if (target.nodeName !== 'I') return;
  const action = target.closest('button').dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      removeListItem(target);
      break;
    case NOTE_ACTIONS.EDIT:
      editItem(target);
      break;
    case NOTE_ACTIONS.INCREASE_PRIORITY:
    case NOTE_ACTIONS.DECREASE_PRIORITY:
      checkPriority(action, target);
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

const AddNodesInNodeList = function (value) {
  refs.nodeList.innerHTML = '';
  refs.nodeList.innerHTML = createNoteListProducts(value);
};

const handelShowForm = (e) => {
  MicroModal.show('note-editor-modal');
  refs.noteEditorForm.addEventListener('submit', handelSubmitForm);
};

refs.nodeList.addEventListener('click', handleDatasetAction);
refs.filterNotes.addEventListener('keyup', handelFilterItems);
refs.openEditor.addEventListener('click', handelShowForm);

//когда в WebPack я импортирую шаблон, то Handlebars-loader делает компиляцию (Handlebars.compile(fn)) и возвращает функцию;
