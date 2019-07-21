import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './utils/constants';
import moment from 'moment';
import storage from './storage';
import { log } from 'util';
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
        return this.PRIORITIES[key];
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
    return this._notes.find(note => note.id === id);
  }

  saveNote(title, text) {
    return new Promise((resolve, reject) => {
      const item = {
        id: Notepad.generateUniqueId(),
        title: title,
        body: text,
        priority: Notepad.getPriorityName(PRIORITY_TYPES.LOW),
        date: moment().format('LLLL'),
      };

      this.notes.push(item);
      storage.save('notes', this._notes);

      resolve(item);
      reject(new Error('somting wrong!!!!'));
    });
  }

  deleteNote(id) {
    return new Promise((resolve, reject) => {
      this._notes = this._notes.filter(item => item.id !== id);
      localStorage.setItem('notes', JSON.stringify(this._notes));

      resolve(this._notes);
      reject('something error');
    });
  }

  updateNoteContent(id, updatedContent) {
    return new Promise((resolve, reject) => {
      const nupdateNote = this.findNoteById(id);

      if (!nupdateNote) return;
      nupdateNote.title = updatedContent.title;
      nupdateNote.body = updatedContent.body;

      this._notes = this._notes.map(item =>
        item.id === nupdateNote.id ? nupdateNote : item,
      );
      localStorage.setItem('notes', JSON.stringify(this._notes));

      resolve(this._notes);
      reject('something error');
    });
  }

  updateNotePriority(id, priority) {
    return new Promise((resolve, reject) => {
      const note = this.findNoteById(id);
      if (!note) return;
      note.priority = priority;
      storage.save('notes', this._notes);

      resolve(this._notes);
      reject('something error');
    });
  }

  filterNotes(query) {
    return new Promise(resolve => {
      const result = this._notes.filter(
        item =>
          item.body.toLowerCase().includes(query.toLowerCase()) ||
          item.title.toLowerCase().includes(query.toLowerCase()),
      );
      resolve(result);
    });
  }
}

Notepad.PRIORITIES = {
  0: 'Low',
  1: 'Normal',
  2: 'High',
};
