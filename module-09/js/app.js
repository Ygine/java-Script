'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

class Notepad {
  static generateUniqueId = () =>
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  static getPriorityName(priorityId) {
    for (const key in this.PRIORITIES) {
      if (Number(key) === priorityId) {
        return this.PRIORITIES[key].name;
      }
    }
  }

  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    for (let note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }
  }

  saveNote(title, text) {
    const item = {
      id: generateUniqueId(),
      title: title,
      body: text,
      priority: PRIORITY_TYPES.LOW,
    };

    this.notes.push(item);
    return item;
  }

  deleteNote(id) {
    this._notes = this._notes.filter(item => item.id !== id);
    // for (let i = 0; i < this.notes.length; i += 1) {
    //   const note = this.notes[i];
    //   if (note.id === id) {
    //     this.splice(i, 1);
    //     return;
    //   }
    // }
  }

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.title = updatedContent.title;
  }

  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.priority = priority;
  }

  filterNotes(query) {
    return this._notes.filter(
      item =>
        item.body.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()),
    );

    // for (const note of this.notes) {
    //   const noteContent = `${note.title} ${note.body}`;
    //   const hasOuery = noteContent.toLowerCase().includes(query.toLowerCase());

    //   if (hasOuery) {
    //     filterNotes.push(note);
    //   }
    // }
    // return filterNotes;
  }

  filterByPriority(priority) {
    const notesPriority = [];
    for (const note of this.notes) {
      if (note.priority === priority) {
        notesPriority.push(note);
      }
    }
    return notesPriority;
  }
}

const initialNotes = [
  {
    id: Notepad.generateUniqueId(),
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: Notepad.generateUniqueId(),
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: Notepad.generateUniqueId(),
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: Notepad.generateUniqueId(),
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};

const notepad = new Notepad(initialNotes);

const refs = {
  nodeList: document.querySelector('.note-list'),
  noteEditorForm: document.querySelector('.note-editor'),
  noteInput: document.querySelectorAll('.note-editor__input'),
  filterNotes: document.querySelector('.search-form__input'),
};

const createListItem = function(note) {
  const nodeItem = document.createElement('li');
  nodeItem.classList.add('note-list__item');
  nodeItem.dataset.id = note.id;

  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  noteDiv.append(createNoteContent(note), createNoteFooter(note));

  nodeItem.append(noteDiv);

  return nodeItem;
};

const createNoteContent = function(notes) {
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = notes.title;

  const noteText = document.createElement('p');
  noteText.classList.add('note__body');
  noteText.textContent = notes.body;

  noteContent.append(noteTitle, noteText);

  return noteContent;
};

const createActionButton = function(noteAction, iconType) {
  const btn = document.createElement('button');
  btn.classList.add('action');
  btn.dataset.action = noteAction;

  const buttonIcon = document.createElement('i');
  buttonIcon.classList.add('material-icons', 'action__icon');
  buttonIcon.textContent = iconType;

  btn.appendChild(buttonIcon);
  return btn;
};

const createListSectionOne = function(note) {
  const nodeSection = document.createElement('section');
  nodeSection.classList.add('note__section');

  const nodeSpan = document.createElement('span');
  nodeSpan.classList.add('note__priority');
  nodeSpan.textContent = `Priority: ${Notepad.getPriorityName(note.priority)} `;

  nodeSection.append(
    createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP),
  );
  nodeSection.append(
    createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN),
  );

  nodeSection.append(nodeSpan);

  return nodeSection;
};

const createListSectionTwo = function(note) {
  const nodeSection = document.createElement('section');
  nodeSection.classList.add('note__section');

  nodeSection.append(createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT));
  nodeSection.append(
    createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE),
  );

  return nodeSection;
};

const createNoteFooter = function(note) {
  const nodefooter = document.createElement('footer');
  nodefooter.classList.add('note__footer');

  nodefooter.append(createListSectionOne(note), createListSectionTwo(note));

  return nodefooter;
};

const renderNoteList = function(listRef, note) {
  const Items = note.map(item => createListItem(item));
  listRef.nodeList.innerHTML = '';
  listRef.nodeList.append(...Items);
};

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
