import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './utils/constants';
import * as api from '../services/api';

export default class Notepad {

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

  async getPost() {
    const notes = await api.getPost();
    this._notes = notes;
    return this._notes;
  }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  async saveNote(notes) {
    const note = await api.savePost(notes);
    this._notes.push(note);
    return note;
  }

  async deleteNote(id) {
    try {
      await api.deletePost(id);
      this._notes = this._notes.filter(item => item.id !== id);
      return id;
    } catch (err) {
      throw err;
    }
  }

  async updateNote(id, updatePost) {
    try {
      const nupdateNote = await api.updatePost(id, updatePost);
      this._notes = this._notes.map(item =>
        item.id === nupdateNote.id ? nupdateNote : item,
      );
      return nupdateNote;
    } catch (err) {
      throw err;
    }
  }

  async updateNotePriority(id, priority) {
    try{
      const changePriorityNote = await api.updatePost(id, priority);
      return changePriorityNote;
    }catch(err){
      throw err;
    }
  }

  async filterNotes(query) {
    try {
      const notes = await api.getPost();
      this._notes = notes.filter(
        item =>
          item.body.toLowerCase().includes(query.toLowerCase()) ||
          item.title.toLowerCase().includes(query.toLowerCase()),
      );
      return this._notes;
    } catch (err) {
      throw err;
    }
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
  0: 'Low',
  1: 'Normal',
  2: 'High',
};

