'use strict';
const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const Notepad = function Notepad(notes = []) {
  this.notes = notes;
  this.getNotes = function() {
    return this.notes;
  };
  this.findNoteById = function(id) {
    for (let note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }
  };
  this.saveNote = function(note) {
    this.notes.push(note);
  };
  this.deleteNote = function(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];
      if (note.id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
  };
  this.updateNoteContent = function(id, updatedContent) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.title = updatedContent.title;
  };
  this.updateNotePriority = function(id, priority) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.priority = priority;
  };
  this.filterNotes = function(query) {
    const filterNotes = [];

    for (const note of this.notes) {
      const noteContent = `${note.title} ${note.body}`;
      const hasOuery = noteContent.toLowerCase().includes(query.toLowerCase());

      if (hasOuery) {
        filterNotes.push(note);
      }
    }
    return filterNotes;
  };
  this.filterByPriority = function(priority) {
    const notesPriority = [];
    for (const note of this.notes) {
      if (note.priority === priority) {
        notesPriority.push(note);
      }
    }
    return notesPriority;
  };
};

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};

Notepad.getPriorityName = function getPriorityName(priorityId) {
  for (const key in this.PRIORITIES) {
    if (Number(key) === priorityId) {
      return this.PRIORITIES[key].name;
    }
  }
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
];

const notepad = new Notepad(initialNotes);

console.log(Notepad.getPriorityName(PRIORITY_TYPES.LOW)); // "Low"
console.log(Notepad.getPriorityName(PRIORITY_TYPES.NORMAL)); // "Normal"
console.log(Notepad.getPriorityName(PRIORITY_TYPES.HIGH)); // "High"
console.log('Все текущие заметки: ', notepad.getNotes());

notepad.saveNote({
  id: 3,
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});
console.log('Все текущие заметки: ', notepad.getNotes());

notepad.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
console.log(
  'Заметки после обновления приоритета для id 4: ',
  notepad.getNotes(),
);

notepad.updateNotePriority(3, PRIORITY_TYPES.LOW);
console.log(
  'Заметки после обновления приоритета для id 3: ',
  notepad.getNotes(),
);

console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotes('html'),
);
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotes('javascript'),
);

notepad.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
console.log(
  'Заметки после обновления контента заметки с id 3: ',
  notepad.getNotes(),
);
notepad.deleteNote(2);
console.log('Заметки после удаления с id 2: ', notepad.getNotes());

console.log(
  'Отфильтровали по приоритету: ',
  notepad.filterByPriority(PRIORITY_TYPES.LOW),
);
