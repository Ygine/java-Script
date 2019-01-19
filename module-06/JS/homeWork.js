'use strict';
'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

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

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};

// chesk works class
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

console.log('Все текущие заметки:', notepad.notes);

notepad.saveNote({
  id: 3,
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between html React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});

console.log('Все текущие заметки +2 заметки: ', notepad.notes);

notepad.updateNotePriority(4, PRIORITY_TYPES.LOW);
console.log('Заметки после обновления приоритета для id 4: ', notepad.notes);

notepad.updateNotePriority(3, PRIORITY_TYPES.LOW);
console.log('Заметки после обновления приоритета для id 3: ', notepad.notes);

console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotes('html'),
);

console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotes('javascript'),
);

console.log(
  'Отфильтровали по приоритету: ',
  notepad.filterByPriority(PRIORITY_TYPES.LOW),
);

notepad.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
console.log(
  'Заметки после обновления контента заметки с id 3: ',
  notepad.notes,
);

notepad.deleteNote(2);
console.log('Заметки после удаления с id 2: ', notepad.notes);
