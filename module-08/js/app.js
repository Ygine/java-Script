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

const initialNotes = [
  {
    id: 1,
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 2,
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 3,
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 4,
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const refs = {
  nodeList: document.querySelector('.note-list'),
};

const createListItem = function(note) {
  const nodeItem = document.createElement('li');
  nodeItem.classList.add('note-list__item');
  nodeItem.dataset.id = note.id;
  nodeItem.append(createNoteContent(note), createNoteFooter(note));

  return nodeItem;
};

const renderNoteList = function(listRef, note) {
  const Items = note.map(item => createListItem(item));
  listRef.nodeList.append(...Items);
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
  buttonIcon.classList.add('material-icons', 'action');
  buttonIcon.textContent = iconType;

  btn.appendChild(buttonIcon);
  return btn;
};

const createListSectionOne = function(note) {
  const nodeSection = document.createElement('section');
  nodeSection.classList.add('note__section');

  const nodeSpan = document.createElement('span');
  nodeSpan.classList.add('note__priority');
  nodeSpan.textContent = `Priority:${note.priority} `;

  nodeSection.append(createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT));
  nodeSection.append(
    createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE)
  );

  nodeSection.append(nodeSpan);

  return nodeSection;
};

const createListSectionTwo = function(note) {
  const nodeSection = document.createElement('section');
  nodeSection.classList.add('note__section');

  nodeSection.append(
    createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP)
  );
  nodeSection.append(
    createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN)
  );

  return nodeSection;
};

const createNoteFooter = function(note) {
  const nodefooter = document.createElement('footer');
  nodefooter.classList.add('note__footer');

  nodefooter.append(createListSectionOne(note), createListSectionTwo(note));

  return nodefooter;
};

renderNoteList(refs, initialNotes);

class Notepad {
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

  saveNote(note) {
    this.notes.push(note);
  }

  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];
      if (note.id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
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
    const filterNotes = [];

    for (const note of this.notes) {
      const noteContent = `${note.title} ${note.body}`;
      const hasOuery = noteContent.toLowerCase().includes(query.toLowerCase());

      if (hasOuery) {
        filterNotes.push(note);
      }
    }
    return filterNotes;
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

  static getPriorityName(priorityId) {
    for (const key in this.PRIORITIES) {
      if (Number(key) === priorityId) {
        return this.PRIORITIES[key].name;
      }
    }
  }
}

// chesk works class

const notepad = new Notepad(initialNotes);
