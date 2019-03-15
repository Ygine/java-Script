import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './utils/constants';
import moment from 'moment';
import storage from './storage';
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
    return this._notes.find(note => note.id === id);
  }

  saveNote(title, text) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
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
      }, 1500);
    });
  }

  deleteNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes = this._notes.filter(item => item.id !== id);
        localStorage.setItem('notes', JSON.stringify(this._notes));
        resolve(this._notes);
        reject('something error');
      }, 1000);
    });
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
    storage.save('notes', this._notes);

    return note;
  }

  filterNotes(query) {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = this._notes.filter(
          item =>
            item.body.toLowerCase().includes(query.toLowerCase()) ||
            item.title.toLowerCase().includes(query.toLowerCase()),
        );
        resolve(result);
      }, 500);
    });
  }

  filterByPriority(priority) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = this._notes.filter(item => item.priority === priority);
        resolve(result);
        reject(new Error('can not filtered By Priority'));
      }, 1000);
    });
  }
}

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};
