import './sass/main.scss';
import Notyf from 'notyf';
import MicroModal from 'micromodal';
import moment from 'moment';
import {
  NOTIFICATION_MESSAGES,
  NOTE_ACTIONS,
  PRIORITY_TYPES,
} from './js/utils/constants';
import Notepad from './js/notepad-module';
import { getRefs } from './js/view';
import './js/theme';
import 'notyf/dist/notyf.min.css';
import productTamplate from './templates/product.hbs';

const refs = getRefs();
const notyf = new Notyf();
const notepad = new Notepad();

const renderNotes = async () => {
  try {
    const notes = await notepad.getPost();
    const stringifyNotes = notes.map(item => productTamplate(item)).join('');
    refs.nodeList.innerHTML = stringifyNotes;
  } catch (err) {
    console.log(err);
  }
};

renderNotes();

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
  refs.noteEditorForm.removeEventListener('submit', handelSubmitForm);
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
      parentNode.remove();
      notyf.confirm(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
      renderNotes();
    })
    .catch(err => notyf.alert(err));
};

const changePriority = (id, item) => {
  notepad.updateNote(id, item).then(data => {
    AddNodesInNodeList(notepad.notes);
  });
}

const checkPriority = (action, target) => {
  const parentNode = target.closest('.note-list__item');
  const id = Number(parentNode.dataset.id);
  const notePriority = notepad.findNoteById(id).priority;

  if(action === "increase-priority"){
      switch (notePriority) {
        case "Low":
          const item = {
            priority: Notepad.getPriorityName(PRIORITY_TYPES.NORMAL),
          };
          changePriority(id, item);
          break;
        case "Normal":
          const item2 = {
              priority: Notepad.getPriorityName(PRIORITY_TYPES.HIGH),
            };
          changePriority(id, item2);
          break;
      }
  }else{
    switch (notePriority) {
      case "Normal":
        const item2 = {
            priority: Notepad.getPriorityName(PRIORITY_TYPES.LOW),
          };
        changePriority(id, item2);
        break;
        case "High":
            const item = {
              priority: Notepad.getPriorityName(PRIORITY_TYPES.NORMAL),
            };
            changePriority(id, item);
            break;
    }
  }
}

const editItem = (target) => {
  const parentNode = target.closest('.note-list__item');
  const id = parentNode.dataset.id;

  MicroModal.show('note-editor-modal');

  refs.formInput.value = parentNode.querySelector('.note__title').textContent.trim();
  refs.formTextarea.value = parentNode.querySelector('.note__body').textContent.trim();

  const handelSubmitFormUpdate = (e) => {
    e.preventDefault();
  
    const item = {
      title: refs.formInput.value,
      body: refs.formTextarea.value,
    };

    notepad.updateNote(id, item).then(data => {
      AddNodesInNodeList(notepad.notes);  
    });

    MicroModal.close('note-editor-modal');
    refs.noteEditorForm.removeEventListener('submit', handelSubmitFormUpdate);
  }

  refs.noteEditorForm.addEventListener('submit', handelSubmitFormUpdate);
}

const handleDatasetAction = ({ target }) => {
  if (target.nodeName !== 'I') return;
  const action = target.closest('button').dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      removeListItem(target);
      break;
    case NOTE_ACTIONS.EDIT:
      editItem(target)
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
    .then(value => {
      AddNodesInNodeList(value);
    })
    .catch(err => console.log(err));
};

const handelShowForm = ({target}) => {
  refs.formInput.value = "";
  refs.formTextarea.value = "";

  MicroModal.show('note-editor-modal');
  refs.noteEditorForm.addEventListener('submit', handelSubmitForm);
};

refs.nodeList.addEventListener('click', handleDatasetAction);
refs.filterNotes.addEventListener('keyup', handelFilterItems);
refs.openEditor.addEventListener('click', handelShowForm);

//когда в WebPack я импортирую шаблон, то Handlebars-loader делает компиляцию (Handlebars.compile(fn)) и возвращает функцию;
