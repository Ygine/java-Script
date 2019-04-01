import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './utils/constants';
import * as api from '../services/api';

export default class Notepad {
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

  getPost() {
    return api.getPost().then(notes => {
      this._notes = notes;

      return this._notes;
    });
  }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  saveNote(notes) {
    return api.savePost(notes).then(savedNotes => {
      this._notes.push(savedNotes);
      return savedNotes;
    });
  }

  deleteNote(id) {
    return api.deletePost(id).then(() => {
      this._notes = this._notes.filter(item => item.id !== id);
      console.log(this._notes);
      return this._notes;
    });
  }

  updateNote(id, updatePost) {
    return api
      .updatePost(id, updatePost)
      .then(nupdateNote => {
        this._notes = this._notes.map(item =>
          item.id === nupdateNote.id ? nupdateNote : item,
        );

        return nupdateNote;
      })
      .catch(err => console.log(err));
  }

  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.priority = priority;

    return note;
  }

  filterNotes(query) {
    return api.getPost().then(notes => {
      this._notes = notes.filter(
        item =>
          item.body.toLowerCase().includes(query.toLowerCase()) ||
          item.title.toLowerCase().includes(query.toLowerCase()),
      );

      return this._notes;
    });
  }

  filterByPriority(priority) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = this._notes.filter(item => item.priority === priority);
        resolve(result);
        reject(new Error('can not filtered By Priority'));
      }, 0);
    });
  }
}

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};
