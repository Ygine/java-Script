import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './utils/constants';

export default class Notepad {
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
      id: Notepad.generateUniqueId(),
      title: title,
      body: text,
      priority: Notepad.getPriorityName(PRIORITY_TYPES.LOW),
    };

    this.notes.push(item);
    localStorage.setItem('notes', JSON.stringify(this._notes));

    return item;
  }

  deleteNote(id) {
    this._notes = this._notes.filter(item => item.id !== id);
    localStorage.setItem('notes', JSON.stringify(this._notes));
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

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};
